import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async () => {
    const stdlib = await loadStdlib();
    const startingBalance = stdlib.parseCurrency(10);

    const fmt = (x) => stdlib.formatCurrency(x, 4);    

    const accCreator = await stdlib.newTestAccount(startingBalance);
    const accAlice = await stdlib.newTestAccount(startingBalance);
    const accBob = await stdlib.newTestAccount(startingBalance);
 
    const ctcCreator = accCreator.deploy(backend);
    const ctcInfo = ctcCreator.getInfo(); 

    const bids = {
        "Alice": {
            maxBid: stdlib.parseCurrency(9),
        },
        "Bob": {
            maxBid: stdlib.parseCurrency(6),
        },
    };

    const id = stdlib.randomUInt();
    const deadline = 10;
    const meter = {
        meter: 0,
        bidder: "",
    }
    
    const Common = (who) => ({
        seeOutcome: (address) => {
            const winner = (stdlib.addressEq(accAlice.networkAccount.address, address)) ? "Alice" : "Bob";
            console.log(`${who} Saw The Winner: `, winner);
        },
        showBid: (bid) => {
            console.log(`${who} saw the bid;`);
            console.log(`Bidder: `, meter.bidder);
            console.log(`Bid: ${fmt(bid)}`);
        },
        informTimeout: () => {
            console.log("Payment was not performed.")
            process.exit(0);
        },
        isAuctionOn: () => {
            meter.meter += 1;
            if(meter.meter == 3){
                console.log(`${who} has finished auction.`)
                return false;
            };
            console.log(`${who} has launched the auction.`)
            return true;
        }
    });

    const makeOwner = (acc, who) => {
        const ctc = acc.attach(backend, ctcInfo);
        return backend.Bidder(ctc, {
            ...Common(who),
            getBid: (price) => {
                if (stdlib.add(price, stdlib.parseCurrency(1)) < bids[who].maxBid) {
                    const bid = stdlib.add(price, stdlib.parseCurrency(1));
                    console.log(who,"'s Bid:", fmt(bid), "ALGO")
                    meter.bidder = who
                    return bid;
                };
                return price;
            }
        })
    };

    await Promise.all([
        backend.Creator(
            ctcCreator,{
            ...Common("Creator"),
            getId: id,
            deadline: deadline,
        }),

        makeOwner(accAlice, "Alice"),
        makeOwner(accBob, "Bob"),
    ]);
})();