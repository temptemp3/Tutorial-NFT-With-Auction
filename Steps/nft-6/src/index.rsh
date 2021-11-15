'reach 0.1';
'use strict';
const Common =
    { seeOutcome: Fun([UInt, Address], Null),
      showBid: Fun([UInt, Address], Null),
      informTimeout: Fun([], Null),
      isAuctionOn: Fun([], Bool)
    };

export const main =
  Reach.App(
    {},
    [
      Participant('Constructor', Common),
      Participant('Creator', {
      ...Common,
      getId: UInt,
      deadline: UInt,
    }),
     ParticipantClass('Bidder', {
       ...Common,
       getBid: Fun([UInt], UInt),
     }),
     View('NFT', {
       owner: Address,
     }),
    ],
    (Constructor, Creator, Bidder, vNFT) => {
      Constructor
        .publish()
      commit()
      Creator.only(() => {
          const id = declassify(interact.getId);
          const deadline = declassify(interact.deadline);
      });
      Creator.publish(id, deadline);

      var [owner, price, lastBidder, keepGoing, auctionOn] = [Creator, 0, Creator, true, false];
      { vNFT.owner.set(owner); };
      invariant(balance() == 0);
      while (keepGoing) {
        if(auctionOn === false) {
          commit();

          each([Constructor, Creator, Bidder], () => {
            const isAuctionOn = this === owner ? declassify(interact.isAuctionOn()) : true;
          });

          Anybody.publish(isAuctionOn).when(owner == this).timeout(false);
          if (!isAuctionOn) {
            each([Constructor, Creator, Bidder], () => {
              interact.seeOutcome(price,owner);
            });
            [owner, price, lastBidder, keepGoing, auctionOn] = [owner, price, lastBidder, false, auctionOn];            
            continue;
          };
        };
        commit();

        Bidder.only(() => {
          const bid = (this !== lastBidder && this !== owner) ? declassify(interact.getBid(price)) : price;
          const winner = (this !== lastBidder && this !== owner) ? this : lastBidder;
        });

        Bidder.publish(bid, winner)
          .when(bid>price && this !== lastBidder)
          .timeout(relativeTime(deadline), () => {
            each([Constructor, Creator, Bidder], () => {
              interact.seeOutcome(price, lastBidder);
            });

            Bidder.pay(price).when(lastBidder == this).timeout(relativeTime(10), () => {
              each([Constructor, Creator, Bidder], () => {
                interact.informTimeout();
              });

              Bidder.publish();
              [owner, price, lastBidder, keepGoing, auctionOn] = [owner, 0, owner, true, false]
              continue;
            });
            transfer(price).to(owner);

            [owner, price, lastBidder, keepGoing, auctionOn] = [lastBidder, 0, lastBidder, true, false]
            continue;
          })
        commit();

        each([Constructor, Creator, Bidder], () => {
          interact.showBid(bid, winner);
        });

        Anybody.publish();

        [owner, price, lastBidder, keepGoing, auctionOn] = [owner, bid, winner, true, true]
        continue;
      };
      
      commit();
      exit();
    }
  );
