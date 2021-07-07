'reach 0.1';
'use strict';

const Common =
    { seeOutcome: Fun([Address], Null),
      showBid: Fun([UInt], Null),
      informTimeout: Fun([], Null),
      isAuctionOn: Fun([], Bool)
    };

export const main =
  Reach.App(
    {},
    [Participant('Creator', {
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
    (Creator, Bidder, vNFT) => {
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

          each([Creator, Bidder], () => {
            const isAuctionOn = this === owner ? declassify(interact.isAuctionOn()) : true;
          });

          Anybody.publish(isAuctionOn).when(owner == this).timeout(false);
          if (!isAuctionOn) {
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
          .timeout(deadline, () => {
            each([Creator, Bidder], () => {
              interact.seeOutcome(lastBidder);
            });
            Bidder.pay(price).when(lastBidder == this).timeout(10, () => {
              each([Creator, Bidder], () => {
                interact.informTimeout();
              })

              Bidder.publish();
              [owner, price, lastBidder, keepGoing, auctionOn] = [owner, 0, owner, true, false]
              continue;
            });
            transfer(price).to(owner);

            [owner, price, lastBidder, keepGoing, auctionOn] = [lastBidder, 0, lastBidder, true, false]
            continue;
          })
        commit();

        each([Creator, Bidder], () => {
          interact.showBid(bid);
        });
        Anybody.publish();

        [owner, price, lastBidder, keepGoing, auctionOn] = [owner, bid, winner, true, true]
        continue;
      }
      commit();
      exit();
    }
  );