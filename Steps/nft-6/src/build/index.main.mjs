// Automatically generated with Reach 0.1.6 (639fa565)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (639fa565)';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      NFT: {
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v192, v198, v199, v200, v310, v313] = svs;
              return (await ((async () => {
                
                
                return v199;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v192, v199, v335, v336] = svs;
              return (await ((async () => {
                
                
                return v199;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v192, v196, v198, v199, v200] = svs;
              return (await ((async () => {
                
                
                return v199;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v192, v198, v199, v200, v243, v246] = svs;
              return (await ((async () => {
                
                
                return v199;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8))) {
              const [v192, v199, v268, v269] = svs;
              return (await ((async () => {
                
                
                return v199;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      1: [],
      4: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
      5: [ctc0, ctc1, ctc0, ctc1],
      6: [ctc0, ctc2, ctc1, ctc1, ctc0],
      7: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
      8: [ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Bidder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v186, time: v185, didSend: v21, from: v184 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v191, v192], secs: v194, time: v193, didSend: v31, from: v190 } = txn2;
  ;
  let v196 = false;
  let v197 = true;
  let v198 = v190;
  let v199 = v190;
  let v200 = stdlib.checkedBigNumberify('./index.rsh:38:72:decimal', stdlib.UInt_max, 0);
  let v201 = v193;
  
  while ((() => {
    
    return v197;})()) {
    if (v196) {
      const v310 = stdlib.add(v201, v192);
      const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
      const v315 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:60:20:application', stdlib.UInt_max, 80));
      const v317 = stdlib.addressEq(v315, v198);
      const v318 = v317 ? false : true;
      const v319 = stdlib.addressEq(v315, v199);
      const v320 = v319 ? false : true;
      const v321 = v317 ? false : v320;
      let v322;
      if (v321) {
        const v323 = stdlib.protect(ctc0, await interact.getBid(v200), {
          at: './index.rsh:61:91:application',
          fs: ['at ./index.rsh:60:20:application call to [unknown function] (defined at: ./index.rsh:60:24:function exp)'],
          msg: 'getBid',
          who: 'Bidder'
          });
        v322 = v323;
        }
      else {
        v322 = v200;
        }
      const v329 = v321 ? v315 : v198;
      
      const v330 = stdlib.gt(v322, v200);
      const v333 = v330 ? v318 : false;
      
      const txn3 = await (ctc.sendrecv({
        args: [v192, v198, v199, v200, v310, v313, v322, v329],
        evt_cnt: 2,
        funcNum: 3,
        lct: v201,
        onlyIf: v333,
        out_tys: [ctc0, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v335, v336], secs: v338, time: v337, didSend: v111, from: v334 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: ['time', v310],
        tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const v354 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:68:17:application', stdlib.UInt_max, 137));
        stdlib.protect(ctc2, await interact.seeOutcome(v200, v198), {
          at: './index.rsh:69:34:application',
          fs: ['at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:53:function exp)'],
          msg: 'seeOutcome',
          who: 'Bidder'
          });
        
        const v356 = stdlib.addressEq(v198, v354);
        
        const txn4 = await (ctc.sendrecv({
          args: [v192, v198, v199, v200, v310, v313],
          evt_cnt: 0,
          funcNum: 4,
          lct: v201,
          onlyIf: v356,
          out_tys: [],
          pay: [v200, []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v359, time: v358, didSend: v146, from: v357 } = txn4;
            
            sim_r.txns.push({
              amt: v200,
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v200,
              kind: 'from',
              to: v199,
              tok: undefined
              });
            const cv196 = false;
            const cv197 = true;
            const cv198 = v198;
            const cv199 = v198;
            const cv200 = stdlib.checkedBigNumberify('./index.rsh:83:77:decimal', stdlib.UInt_max, 0);
            const cv201 = v358;
            
            (() => {
              const v196 = cv196;
              const v197 = cv197;
              const v198 = cv198;
              const v199 = cv199;
              const v200 = cv200;
              const v201 = cv201;
              
              if ((() => {
                
                return v197;})()) {
                if (v196) {
                  const v310 = stdlib.add(v201, v192);
                  const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: ['time', v313],
          tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:74:39:application',
            fs: ['at ./index.rsh:73:19:application call to [unknown function] (defined at: ./index.rsh:73:55:function exp)'],
            msg: 'informTimeout',
            who: 'Bidder'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v192, v198, v199, v200, v310, v313],
            evt_cnt: 0,
            funcNum: 5,
            lct: v201,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v374, time: v373, didSend: v169, from: v372 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const cv196 = false;
              const cv197 = true;
              const cv198 = v199;
              const cv199 = v199;
              const cv200 = stdlib.checkedBigNumberify('./index.rsh:78:74:decimal', stdlib.UInt_max, 0);
              const cv201 = v373;
              
              (() => {
                const v196 = cv196;
                const v197 = cv197;
                const v198 = cv198;
                const v199 = cv199;
                const v200 = cv200;
                const v201 = cv201;
                
                if ((() => {
                  
                  return v197;})()) {
                  if (v196) {
                    const v310 = stdlib.add(v201, v192);
                    const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.isHalt = false;
                    }}
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined,
            tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v374, time: v373, didSend: v169, from: v372 } = txn5;
          ;
          const cv196 = false;
          const cv197 = true;
          const cv198 = v199;
          const cv199 = v199;
          const cv200 = stdlib.checkedBigNumberify('./index.rsh:78:74:decimal', stdlib.UInt_max, 0);
          const cv201 = v373;
          
          v196 = cv196;
          v197 = cv197;
          v198 = cv198;
          v199 = cv199;
          v200 = cv200;
          v201 = cv201;
          
          continue;
          }
        else {
          const {data: [], secs: v359, time: v358, didSend: v146, from: v357 } = txn4;
          ;
          ;
          const cv196 = false;
          const cv197 = true;
          const cv198 = v198;
          const cv199 = v198;
          const cv200 = stdlib.checkedBigNumberify('./index.rsh:83:77:decimal', stdlib.UInt_max, 0);
          const cv201 = v358;
          
          v196 = cv196;
          v197 = cv197;
          v198 = cv198;
          v199 = cv199;
          v200 = cv200;
          v201 = cv201;
          
          continue;}
        }
      else {
        const {data: [v335, v336], secs: v338, time: v337, didSend: v111, from: v334 } = txn3;
        ;
        stdlib.protect(ctc2, await interact.showBid(v335, v336), {
          at: './index.rsh:89:27:application',
          fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:49:function exp)'],
          msg: 'showBid',
          who: 'Bidder'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v192, v199, v335, v336],
          evt_cnt: 0,
          funcNum: 6,
          lct: v337,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v348, time: v347, didSend: v125, from: v346 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv196 = true;
            const cv197 = true;
            const cv198 = v336;
            const cv199 = v199;
            const cv200 = v335;
            const cv201 = v347;
            
            (() => {
              const v196 = cv196;
              const v197 = cv197;
              const v198 = cv198;
              const v199 = cv199;
              const v200 = cv200;
              const v201 = cv201;
              
              if ((() => {
                
                return v197;})()) {
                if (v196) {
                  const v310 = stdlib.add(v201, v192);
                  const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v348, time: v347, didSend: v125, from: v346 } = txn4;
        ;
        const cv196 = true;
        const cv197 = true;
        const cv198 = v336;
        const cv199 = v199;
        const cv200 = v335;
        const cv201 = v347;
        
        v196 = cv196;
        v197 = cv197;
        v198 = cv198;
        v199 = cv199;
        v200 = cv200;
        v201 = cv201;
        
        continue;
        
        }
      
      }
    else {
      const v222 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:45:15:application', stdlib.UInt_max, 54));
      const v224 = stdlib.addressEq(v222, v199);
      let v225;
      if (v224) {
        const v226 = stdlib.protect(ctc3, await interact.isAuctionOn(), {
          at: './index.rsh:46:81:application',
          fs: ['at ./index.rsh:45:15:application call to [unknown function] (defined at: ./index.rsh:45:51:function exp)'],
          msg: 'isAuctionOn',
          who: 'Bidder'
          });
        v225 = v226;
        }
      else {
        v225 = true;
        }
      
      const v227 = stdlib.addressEq(v199, v222);
      
      const txn3 = await (ctc.sendrecv({
        args: [v192, v196, v198, v199, v200, v225],
        evt_cnt: 1,
        funcNum: 7,
        lct: v201,
        onlyIf: v227,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v231], secs: v233, time: v232, didSend: v68, from: v230 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          if (v231) {
            const v243 = stdlib.add(v232, v192);
            const v246 = stdlib.add(v243, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            
            const cv196 = v196;
            const cv197 = false;
            const cv198 = v198;
            const cv199 = v199;
            const cv200 = v200;
            const cv201 = v232;
            
            (() => {
              const v196 = cv196;
              const v197 = cv197;
              const v198 = cv198;
              const v199 = cv199;
              const v200 = cv200;
              const v201 = cv201;
              
              if ((() => {
                
                return v197;})()) {
                if (v196) {
                  const v310 = stdlib.add(v201, v192);
                  const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();}
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc3, ctc1, ctc1, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [v231], secs: v233, time: v232, didSend: v68, from: v230 } = txn3;
      ;
      if (v231) {
        const v243 = stdlib.add(v232, v192);
        const v246 = stdlib.add(v243, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
        const v248 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:60:20:application', stdlib.UInt_max, 80));
        const v250 = stdlib.addressEq(v248, v198);
        const v251 = v250 ? false : true;
        const v252 = stdlib.addressEq(v248, v199);
        const v253 = v252 ? false : true;
        const v254 = v250 ? false : v253;
        let v255;
        if (v254) {
          const v256 = stdlib.protect(ctc0, await interact.getBid(v200), {
            at: './index.rsh:61:91:application',
            fs: ['at ./index.rsh:60:20:application call to [unknown function] (defined at: ./index.rsh:60:24:function exp)'],
            msg: 'getBid',
            who: 'Bidder'
            });
          v255 = v256;
          }
        else {
          v255 = v200;
          }
        const v262 = v254 ? v248 : v198;
        
        const v263 = stdlib.gt(v255, v200);
        const v266 = v263 ? v251 : false;
        
        const txn4 = await (ctc.sendrecv({
          args: [v192, v198, v199, v200, v243, v246, v255, v262],
          evt_cnt: 2,
          funcNum: 8,
          lct: v232,
          onlyIf: v266,
          out_tys: [ctc0, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [v268, v269], secs: v271, time: v270, didSend: v111, from: v267 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: ['time', v243],
          tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const v287 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:68:17:application', stdlib.UInt_max, 137));
          stdlib.protect(ctc2, await interact.seeOutcome(v200, v198), {
            at: './index.rsh:69:34:application',
            fs: ['at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:53:function exp)'],
            msg: 'seeOutcome',
            who: 'Bidder'
            });
          
          const v289 = stdlib.addressEq(v198, v287);
          
          const txn5 = await (ctc.sendrecv({
            args: [v192, v198, v199, v200, v243, v246],
            evt_cnt: 0,
            funcNum: 9,
            lct: v232,
            onlyIf: v289,
            out_tys: [],
            pay: [v200, []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v292, time: v291, didSend: v146, from: v290 } = txn5;
              
              sim_r.txns.push({
                amt: v200,
                kind: 'to',
                tok: undefined
                });
              sim_r.txns.push({
                amt: v200,
                kind: 'from',
                to: v199,
                tok: undefined
                });
              const cv196 = false;
              const cv197 = true;
              const cv198 = v198;
              const cv199 = v198;
              const cv200 = stdlib.checkedBigNumberify('./index.rsh:83:77:decimal', stdlib.UInt_max, 0);
              const cv201 = v291;
              
              (() => {
                const v196 = cv196;
                const v197 = cv197;
                const v198 = cv198;
                const v199 = cv199;
                const v200 = cv200;
                const v201 = cv201;
                
                if ((() => {
                  
                  return v197;})()) {
                  if (v196) {
                    const v310 = stdlib.add(v201, v192);
                    const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.isHalt = false;
                    }}
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: ['time', v246],
            tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:74:39:application',
              fs: ['at ./index.rsh:73:19:application call to [unknown function] (defined at: ./index.rsh:73:55:function exp)'],
              msg: 'informTimeout',
              who: 'Bidder'
              });
            
            const txn6 = await (ctc.sendrecv({
              args: [v192, v198, v199, v200, v243, v246],
              evt_cnt: 0,
              funcNum: 10,
              lct: v232,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v307, time: v306, didSend: v169, from: v305 } = txn6;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const cv196 = false;
                const cv197 = true;
                const cv198 = v199;
                const cv199 = v199;
                const cv200 = stdlib.checkedBigNumberify('./index.rsh:78:74:decimal', stdlib.UInt_max, 0);
                const cv201 = v306;
                
                (() => {
                  const v196 = cv196;
                  const v197 = cv197;
                  const v198 = cv198;
                  const v199 = cv199;
                  const v200 = cv200;
                  const v201 = cv201;
                  
                  if ((() => {
                    
                    return v197;})()) {
                    if (v196) {
                      const v310 = stdlib.add(v201, v192);
                      const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.isHalt = false;
                      }}
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined,
              tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v307, time: v306, didSend: v169, from: v305 } = txn6;
            ;
            const cv196 = false;
            const cv197 = true;
            const cv198 = v199;
            const cv199 = v199;
            const cv200 = stdlib.checkedBigNumberify('./index.rsh:78:74:decimal', stdlib.UInt_max, 0);
            const cv201 = v306;
            
            v196 = cv196;
            v197 = cv197;
            v198 = cv198;
            v199 = cv199;
            v200 = cv200;
            v201 = cv201;
            
            continue;
            }
          else {
            const {data: [], secs: v292, time: v291, didSend: v146, from: v290 } = txn5;
            ;
            ;
            const cv196 = false;
            const cv197 = true;
            const cv198 = v198;
            const cv199 = v198;
            const cv200 = stdlib.checkedBigNumberify('./index.rsh:83:77:decimal', stdlib.UInt_max, 0);
            const cv201 = v291;
            
            v196 = cv196;
            v197 = cv197;
            v198 = cv198;
            v199 = cv199;
            v200 = cv200;
            v201 = cv201;
            
            continue;}
          }
        else {
          const {data: [v268, v269], secs: v271, time: v270, didSend: v111, from: v267 } = txn4;
          ;
          stdlib.protect(ctc2, await interact.showBid(v268, v269), {
            at: './index.rsh:89:27:application',
            fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:49:function exp)'],
            msg: 'showBid',
            who: 'Bidder'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v192, v199, v268, v269],
            evt_cnt: 0,
            funcNum: 11,
            lct: v270,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v281, time: v280, didSend: v125, from: v279 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const cv196 = true;
              const cv197 = true;
              const cv198 = v269;
              const cv199 = v199;
              const cv200 = v268;
              const cv201 = v280;
              
              (() => {
                const v196 = cv196;
                const v197 = cv197;
                const v198 = cv198;
                const v199 = cv199;
                const v200 = cv200;
                const v201 = cv201;
                
                if ((() => {
                  
                  return v197;})()) {
                  if (v196) {
                    const v310 = stdlib.add(v201, v192);
                    const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.isHalt = false;
                    }}
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined,
            tys: [ctc0, ctc1, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v281, time: v280, didSend: v125, from: v279 } = txn5;
          ;
          const cv196 = true;
          const cv197 = true;
          const cv198 = v269;
          const cv199 = v199;
          const cv200 = v268;
          const cv201 = v280;
          
          v196 = cv196;
          v197 = cv197;
          v198 = cv198;
          v199 = cv199;
          v200 = cv200;
          v201 = cv201;
          
          continue;
          
          }
        
        }
      else {
        stdlib.protect(ctc2, await interact.seeOutcome(v200, v199), {
          at: './index.rsh:52:34:application',
          fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:53:function exp)'],
          msg: 'seeOutcome',
          who: 'Bidder'
          });
        
        const cv196 = v196;
        const cv197 = false;
        const cv198 = v198;
        const cv199 = v199;
        const cv200 = v200;
        const cv201 = v232;
        
        v196 = cv196;
        v197 = cv197;
        v198 = cv198;
        v199 = cv199;
        v200 = cv200;
        v201 = cv201;
        
        continue;}
      
      }}
  return;
  
  
  
  
  };
export async function Constructor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Constructor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Constructor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:10:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v186, time: v185, didSend: v21, from: v184 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v186, time: v185, didSend: v21, from: v184 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v191, v192], secs: v194, time: v193, didSend: v31, from: v190 } = txn2;
  ;
  let v196 = false;
  let v197 = true;
  let v198 = v190;
  let v199 = v190;
  let v200 = stdlib.checkedBigNumberify('./index.rsh:38:72:decimal', stdlib.UInt_max, 0);
  let v201 = v193;
  
  while ((() => {
    
    return v197;})()) {
    if (v196) {
      const v310 = stdlib.add(v201, v192);
      const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 3,
        out_tys: [ctc0, ctc1],
        timeoutAt: ['time', v310],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        stdlib.protect(ctc2, await interact.seeOutcome(v200, v198), {
          at: './index.rsh:69:34:application',
          fs: ['at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:53:function exp)'],
          msg: 'seeOutcome',
          who: 'Constructor'
          });
        
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 4,
          out_tys: [],
          timeoutAt: ['time', v313],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:74:39:application',
            fs: ['at ./index.rsh:73:19:application call to [unknown function] (defined at: ./index.rsh:73:55:function exp)'],
            msg: 'informTimeout',
            who: 'Constructor'
            });
          
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 5,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v374, time: v373, didSend: v169, from: v372 } = txn5;
          ;
          const cv196 = false;
          const cv197 = true;
          const cv198 = v199;
          const cv199 = v199;
          const cv200 = stdlib.checkedBigNumberify('./index.rsh:78:74:decimal', stdlib.UInt_max, 0);
          const cv201 = v373;
          
          v196 = cv196;
          v197 = cv197;
          v198 = cv198;
          v199 = cv199;
          v200 = cv200;
          v201 = cv201;
          
          continue;
          }
        else {
          const {data: [], secs: v359, time: v358, didSend: v146, from: v357 } = txn4;
          ;
          ;
          const cv196 = false;
          const cv197 = true;
          const cv198 = v198;
          const cv199 = v198;
          const cv200 = stdlib.checkedBigNumberify('./index.rsh:83:77:decimal', stdlib.UInt_max, 0);
          const cv201 = v358;
          
          v196 = cv196;
          v197 = cv197;
          v198 = cv198;
          v199 = cv199;
          v200 = cv200;
          v201 = cv201;
          
          continue;}
        }
      else {
        const {data: [v335, v336], secs: v338, time: v337, didSend: v111, from: v334 } = txn3;
        ;
        stdlib.protect(ctc2, await interact.showBid(v335, v336), {
          at: './index.rsh:89:27:application',
          fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:49:function exp)'],
          msg: 'showBid',
          who: 'Constructor'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v192, v199, v335, v336],
          evt_cnt: 0,
          funcNum: 6,
          lct: v337,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v348, time: v347, didSend: v125, from: v346 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv196 = true;
            const cv197 = true;
            const cv198 = v336;
            const cv199 = v199;
            const cv200 = v335;
            const cv201 = v347;
            
            (() => {
              const v196 = cv196;
              const v197 = cv197;
              const v198 = cv198;
              const v199 = cv199;
              const v200 = cv200;
              const v201 = cv201;
              
              if ((() => {
                
                return v197;})()) {
                if (v196) {
                  const v310 = stdlib.add(v201, v192);
                  const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v348, time: v347, didSend: v125, from: v346 } = txn4;
        ;
        const cv196 = true;
        const cv197 = true;
        const cv198 = v336;
        const cv199 = v199;
        const cv200 = v335;
        const cv201 = v347;
        
        v196 = cv196;
        v197 = cv197;
        v198 = cv198;
        v199 = cv199;
        v200 = cv200;
        v201 = cv201;
        
        continue;
        
        }
      
      }
    else {
      const v214 = stdlib.addressEq(v184, v199);
      let v215;
      if (v214) {
        const v216 = stdlib.protect(ctc3, await interact.isAuctionOn(), {
          at: './index.rsh:46:81:application',
          fs: ['at ./index.rsh:45:15:application call to [unknown function] (defined at: ./index.rsh:45:51:function exp)'],
          msg: 'isAuctionOn',
          who: 'Constructor'
          });
        v215 = v216;
        }
      else {
        v215 = true;
        }
      
      const v228 = stdlib.addressEq(v199, v184);
      
      const txn3 = await (ctc.sendrecv({
        args: [v192, v196, v198, v199, v200, v215],
        evt_cnt: 1,
        funcNum: 7,
        lct: v201,
        onlyIf: v228,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v231], secs: v233, time: v232, didSend: v68, from: v230 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          if (v231) {
            const v243 = stdlib.add(v232, v192);
            const v246 = stdlib.add(v243, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            
            const cv196 = v196;
            const cv197 = false;
            const cv198 = v198;
            const cv199 = v199;
            const cv200 = v200;
            const cv201 = v232;
            
            (() => {
              const v196 = cv196;
              const v197 = cv197;
              const v198 = cv198;
              const v199 = cv199;
              const v200 = cv200;
              const v201 = cv201;
              
              if ((() => {
                
                return v197;})()) {
                if (v196) {
                  const v310 = stdlib.add(v201, v192);
                  const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();}
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc3, ctc1, ctc1, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [v231], secs: v233, time: v232, didSend: v68, from: v230 } = txn3;
      ;
      if (v231) {
        const v243 = stdlib.add(v232, v192);
        const v246 = stdlib.add(v243, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 8,
          out_tys: [ctc0, ctc1],
          timeoutAt: ['time', v243],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          stdlib.protect(ctc2, await interact.seeOutcome(v200, v198), {
            at: './index.rsh:69:34:application',
            fs: ['at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:53:function exp)'],
            msg: 'seeOutcome',
            who: 'Constructor'
            });
          
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: ['time', v246],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:74:39:application',
              fs: ['at ./index.rsh:73:19:application call to [unknown function] (defined at: ./index.rsh:73:55:function exp)'],
              msg: 'informTimeout',
              who: 'Constructor'
              });
            
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 10,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v307, time: v306, didSend: v169, from: v305 } = txn6;
            ;
            const cv196 = false;
            const cv197 = true;
            const cv198 = v199;
            const cv199 = v199;
            const cv200 = stdlib.checkedBigNumberify('./index.rsh:78:74:decimal', stdlib.UInt_max, 0);
            const cv201 = v306;
            
            v196 = cv196;
            v197 = cv197;
            v198 = cv198;
            v199 = cv199;
            v200 = cv200;
            v201 = cv201;
            
            continue;
            }
          else {
            const {data: [], secs: v292, time: v291, didSend: v146, from: v290 } = txn5;
            ;
            ;
            const cv196 = false;
            const cv197 = true;
            const cv198 = v198;
            const cv199 = v198;
            const cv200 = stdlib.checkedBigNumberify('./index.rsh:83:77:decimal', stdlib.UInt_max, 0);
            const cv201 = v291;
            
            v196 = cv196;
            v197 = cv197;
            v198 = cv198;
            v199 = cv199;
            v200 = cv200;
            v201 = cv201;
            
            continue;}
          }
        else {
          const {data: [v268, v269], secs: v271, time: v270, didSend: v111, from: v267 } = txn4;
          ;
          stdlib.protect(ctc2, await interact.showBid(v268, v269), {
            at: './index.rsh:89:27:application',
            fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:49:function exp)'],
            msg: 'showBid',
            who: 'Constructor'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v192, v199, v268, v269],
            evt_cnt: 0,
            funcNum: 11,
            lct: v270,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v281, time: v280, didSend: v125, from: v279 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const cv196 = true;
              const cv197 = true;
              const cv198 = v269;
              const cv199 = v199;
              const cv200 = v268;
              const cv201 = v280;
              
              (() => {
                const v196 = cv196;
                const v197 = cv197;
                const v198 = cv198;
                const v199 = cv199;
                const v200 = cv200;
                const v201 = cv201;
                
                if ((() => {
                  
                  return v197;})()) {
                  if (v196) {
                    const v310 = stdlib.add(v201, v192);
                    const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.isHalt = false;
                    }}
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined,
            tys: [ctc0, ctc1, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v281, time: v280, didSend: v125, from: v279 } = txn5;
          ;
          const cv196 = true;
          const cv197 = true;
          const cv198 = v269;
          const cv199 = v199;
          const cv200 = v268;
          const cv201 = v280;
          
          v196 = cv196;
          v197 = cv197;
          v198 = cv198;
          v199 = cv199;
          v200 = cv200;
          v201 = cv201;
          
          continue;
          
          }
        
        }
      else {
        stdlib.protect(ctc2, await interact.seeOutcome(v200, v199), {
          at: './index.rsh:52:34:application',
          fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:53:function exp)'],
          msg: 'seeOutcome',
          who: 'Constructor'
          });
        
        const cv196 = v196;
        const cv197 = false;
        const cv198 = v198;
        const cv199 = v199;
        const cv200 = v200;
        const cv201 = v232;
        
        v196 = cv196;
        v197 = cv197;
        v198 = cv198;
        v199 = cv199;
        v200 = cv200;
        v201 = cv201;
        
        continue;}
      
      }}
  return;
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Bool;
  
  
  const v182 = stdlib.protect(ctc0, interact.deadline, 'for Creator\'s interact field deadline');
  const v183 = stdlib.protect(ctc0, interact.getId, 'for Creator\'s interact field getId');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v186, time: v185, didSend: v21, from: v184 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v183, v182],
    evt_cnt: 2,
    funcNum: 1,
    lct: v185,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v191, v192], secs: v194, time: v193, didSend: v31, from: v190 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v196 = false;
      const v197 = true;
      const v198 = v190;
      const v199 = v190;
      const v200 = stdlib.checkedBigNumberify('./index.rsh:38:72:decimal', stdlib.UInt_max, 0);
      const v201 = v193;
      
      if ((() => {
        
        return v197;})()) {
        if (v196) {
          const v310 = stdlib.add(v201, v192);
          const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v191, v192], secs: v194, time: v193, didSend: v31, from: v190 } = txn2;
  ;
  let v196 = false;
  let v197 = true;
  let v198 = v190;
  let v199 = v190;
  let v200 = stdlib.checkedBigNumberify('./index.rsh:38:72:decimal', stdlib.UInt_max, 0);
  let v201 = v193;
  
  while ((() => {
    
    return v197;})()) {
    if (v196) {
      const v310 = stdlib.add(v201, v192);
      const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 3,
        out_tys: [ctc0, ctc1],
        timeoutAt: ['time', v310],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        stdlib.protect(ctc2, await interact.seeOutcome(v200, v198), {
          at: './index.rsh:69:34:application',
          fs: ['at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:53:function exp)'],
          msg: 'seeOutcome',
          who: 'Creator'
          });
        
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 4,
          out_tys: [],
          timeoutAt: ['time', v313],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:74:39:application',
            fs: ['at ./index.rsh:73:19:application call to [unknown function] (defined at: ./index.rsh:73:55:function exp)'],
            msg: 'informTimeout',
            who: 'Creator'
            });
          
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 5,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v374, time: v373, didSend: v169, from: v372 } = txn5;
          ;
          const cv196 = false;
          const cv197 = true;
          const cv198 = v199;
          const cv199 = v199;
          const cv200 = stdlib.checkedBigNumberify('./index.rsh:78:74:decimal', stdlib.UInt_max, 0);
          const cv201 = v373;
          
          v196 = cv196;
          v197 = cv197;
          v198 = cv198;
          v199 = cv199;
          v200 = cv200;
          v201 = cv201;
          
          continue;
          }
        else {
          const {data: [], secs: v359, time: v358, didSend: v146, from: v357 } = txn4;
          ;
          ;
          const cv196 = false;
          const cv197 = true;
          const cv198 = v198;
          const cv199 = v198;
          const cv200 = stdlib.checkedBigNumberify('./index.rsh:83:77:decimal', stdlib.UInt_max, 0);
          const cv201 = v358;
          
          v196 = cv196;
          v197 = cv197;
          v198 = cv198;
          v199 = cv199;
          v200 = cv200;
          v201 = cv201;
          
          continue;}
        }
      else {
        const {data: [v335, v336], secs: v338, time: v337, didSend: v111, from: v334 } = txn3;
        ;
        stdlib.protect(ctc2, await interact.showBid(v335, v336), {
          at: './index.rsh:89:27:application',
          fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:49:function exp)'],
          msg: 'showBid',
          who: 'Creator'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v192, v199, v335, v336],
          evt_cnt: 0,
          funcNum: 6,
          lct: v337,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v348, time: v347, didSend: v125, from: v346 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv196 = true;
            const cv197 = true;
            const cv198 = v336;
            const cv199 = v199;
            const cv200 = v335;
            const cv201 = v347;
            
            (() => {
              const v196 = cv196;
              const v197 = cv197;
              const v198 = cv198;
              const v199 = cv199;
              const v200 = cv200;
              const v201 = cv201;
              
              if ((() => {
                
                return v197;})()) {
                if (v196) {
                  const v310 = stdlib.add(v201, v192);
                  const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined,
          tys: [ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v348, time: v347, didSend: v125, from: v346 } = txn4;
        ;
        const cv196 = true;
        const cv197 = true;
        const cv198 = v336;
        const cv199 = v199;
        const cv200 = v335;
        const cv201 = v347;
        
        v196 = cv196;
        v197 = cv197;
        v198 = cv198;
        v199 = cv199;
        v200 = cv200;
        v201 = cv201;
        
        continue;
        
        }
      
      }
    else {
      const v219 = stdlib.addressEq(v190, v199);
      let v220;
      if (v219) {
        const v221 = stdlib.protect(ctc3, await interact.isAuctionOn(), {
          at: './index.rsh:46:81:application',
          fs: ['at ./index.rsh:45:15:application call to [unknown function] (defined at: ./index.rsh:45:51:function exp)'],
          msg: 'isAuctionOn',
          who: 'Creator'
          });
        v220 = v221;
        }
      else {
        v220 = true;
        }
      
      const v229 = stdlib.addressEq(v199, v190);
      
      const txn3 = await (ctc.sendrecv({
        args: [v192, v196, v198, v199, v200, v220],
        evt_cnt: 1,
        funcNum: 7,
        lct: v201,
        onlyIf: v229,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v231], secs: v233, time: v232, didSend: v68, from: v230 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          if (v231) {
            const v243 = stdlib.add(v232, v192);
            const v246 = stdlib.add(v243, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            
            const cv196 = v196;
            const cv197 = false;
            const cv198 = v198;
            const cv199 = v199;
            const cv200 = v200;
            const cv201 = v232;
            
            (() => {
              const v196 = cv196;
              const v197 = cv197;
              const v198 = cv198;
              const v199 = cv199;
              const v200 = cv200;
              const v201 = cv201;
              
              if ((() => {
                
                return v197;})()) {
                if (v196) {
                  const v310 = stdlib.add(v201, v192);
                  const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();}
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc3, ctc1, ctc1, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [v231], secs: v233, time: v232, didSend: v68, from: v230 } = txn3;
      ;
      if (v231) {
        const v243 = stdlib.add(v232, v192);
        const v246 = stdlib.add(v243, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 8,
          out_tys: [ctc0, ctc1],
          timeoutAt: ['time', v243],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          stdlib.protect(ctc2, await interact.seeOutcome(v200, v198), {
            at: './index.rsh:69:34:application',
            fs: ['at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:53:function exp)'],
            msg: 'seeOutcome',
            who: 'Creator'
            });
          
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: ['time', v246],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:74:39:application',
              fs: ['at ./index.rsh:73:19:application call to [unknown function] (defined at: ./index.rsh:73:55:function exp)'],
              msg: 'informTimeout',
              who: 'Creator'
              });
            
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 10,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v307, time: v306, didSend: v169, from: v305 } = txn6;
            ;
            const cv196 = false;
            const cv197 = true;
            const cv198 = v199;
            const cv199 = v199;
            const cv200 = stdlib.checkedBigNumberify('./index.rsh:78:74:decimal', stdlib.UInt_max, 0);
            const cv201 = v306;
            
            v196 = cv196;
            v197 = cv197;
            v198 = cv198;
            v199 = cv199;
            v200 = cv200;
            v201 = cv201;
            
            continue;
            }
          else {
            const {data: [], secs: v292, time: v291, didSend: v146, from: v290 } = txn5;
            ;
            ;
            const cv196 = false;
            const cv197 = true;
            const cv198 = v198;
            const cv199 = v198;
            const cv200 = stdlib.checkedBigNumberify('./index.rsh:83:77:decimal', stdlib.UInt_max, 0);
            const cv201 = v291;
            
            v196 = cv196;
            v197 = cv197;
            v198 = cv198;
            v199 = cv199;
            v200 = cv200;
            v201 = cv201;
            
            continue;}
          }
        else {
          const {data: [v268, v269], secs: v271, time: v270, didSend: v111, from: v267 } = txn4;
          ;
          stdlib.protect(ctc2, await interact.showBid(v268, v269), {
            at: './index.rsh:89:27:application',
            fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:49:function exp)'],
            msg: 'showBid',
            who: 'Creator'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v192, v199, v268, v269],
            evt_cnt: 0,
            funcNum: 11,
            lct: v270,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v281, time: v280, didSend: v125, from: v279 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const cv196 = true;
              const cv197 = true;
              const cv198 = v269;
              const cv199 = v199;
              const cv200 = v268;
              const cv201 = v280;
              
              (() => {
                const v196 = cv196;
                const v197 = cv197;
                const v198 = cv198;
                const v199 = cv199;
                const v200 = cv200;
                const v201 = cv201;
                
                if ((() => {
                  
                  return v197;})()) {
                  if (v196) {
                    const v310 = stdlib.add(v201, v192);
                    const v313 = stdlib.add(v310, stdlib.checkedBigNumberify('./index.rsh:72:77:decimal', stdlib.UInt_max, 10));
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.isHalt = false;
                    }}
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined,
            tys: [ctc0, ctc1, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v281, time: v280, didSend: v125, from: v279 } = txn5;
          ;
          const cv196 = true;
          const cv197 = true;
          const cv198 = v269;
          const cv199 = v199;
          const cv200 = v268;
          const cv201 = v280;
          
          v196 = cv196;
          v197 = cv197;
          v198 = cv198;
          v199 = cv199;
          v200 = cv200;
          v201 = cv201;
          
          continue;
          
          }
        
        }
      else {
        stdlib.protect(ctc2, await interact.seeOutcome(v200, v199), {
          at: './index.rsh:52:34:application',
          fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:53:function exp)'],
          msg: 'seeOutcome',
          who: 'Creator'
          });
        
        const cv196 = v196;
        const cv197 = false;
        const cv198 = v198;
        const cv199 = v199;
        const cv200 = v200;
        const cv201 = v232;
        
        v196 = cv196;
        v197 = cv197;
        v198 = cv198;
        v199 = cv199;
        v200 = cv200;
        v201 = cv201;
        
        continue;}
      
      }}
  return;
  
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
dup
int 8
extract_uint64
store 2
extract 16 32
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 255
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:30:10:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:30:10:dot"
// "[]"
byte base64()
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l2_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
int 0
extract_uint64
store 255
dup
int 8
extract_uint64
store 254
pop
// "CheckPay"
// "./index.rsh:36:15:dot"
// "[]"
load 254
itob
int 0
itob // bool
substring 7 8
int 1
itob // bool
substring 7 8
concat
txn Sender
concat
txn Sender
concat
int 8
bzero
concat
global Round
itob
concat
b loopBody2
l2_afterHandler1:
l3_afterHandler2:
// Handler 3
dup
int 3
==
bz l4_afterHandler3
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
int 0
extract_uint64
store 255
dup
extract 8 32
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 40
==
assert
dup
int 0
extract_uint64
store 249
dup
extract 8 32
store 248
pop
global Round
load 251
<
assert
// "CheckPay"
// "./index.rsh:65:16:dot"
// "[]"
load 255
itob
load 253
concat
load 249
itob
concat
load 248
concat
int 1
bzero
dig 1
extract 0 80
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l4_afterHandler3:
// Handler 4
dup
int 4
==
bz l5_afterHandler4
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
int 0
extract_uint64
store 255
dup
extract 8 32
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
dup
load 251
>=
assert
load 250
<
assert
// "CheckPay"
// "./index.rsh:72:20:dot"
// "[]"
load 252
dup
bz l6_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
pop
load 252
dup
bz l7_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l7_checkTxnK:
pop
load 255
itob
int 0
itob // bool
substring 7 8
int 1
itob // bool
substring 7 8
concat
load 254
concat
load 254
concat
int 8
bzero
concat
global Round
itob
concat
b loopBody2
l5_afterHandler4:
// Handler 5
dup
int 5
==
bz l8_afterHandler5
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
int 0
extract_uint64
store 255
dup
extract 8 32
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 250
>=
assert
// "CheckPay"
// "./index.rsh:77:22:dot"
// "[]"
load 255
itob
int 0
itob // bool
substring 7 8
int 1
itob // bool
substring 7 8
concat
load 253
concat
load 253
concat
int 8
bzero
concat
global Round
itob
concat
b loopBody2
l8_afterHandler5:
// Handler 6
dup
int 6
==
bz l9_afterHandler6
pop
// check step
int 5
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
int 0
extract_uint64
store 255
dup
extract 8 32
store 254
dup
int 40
extract_uint64
store 253
dup
extract 48 32
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:92:17:dot"
// "[]"
load 255
itob
int 1
itob // bool
substring 7 8
int 1
itob // bool
substring 7 8
concat
load 252
concat
load 254
concat
load 253
itob
concat
global Round
itob
concat
b loopBody2
l9_afterHandler6:
// Handler 7
dup
int 7
==
bz l10_afterHandler7
pop
// check step
int 6
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
int 0
extract_uint64
store 255
dup
extract 8 1
btoi
store 254
dup
extract 9 32
store 253
dup
extract 41 32
store 252
dup
int 73
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 1
==
assert
dup
btoi
store 250
pop
// "CheckPay"
// "./index.rsh:49:19:dot"
// "[]"
load 250
bz l11_ifF
global Round
load 255
+
dup
store 249
int 10
+
store 248
load 255
itob
load 253
concat
load 252
concat
load 251
itob
concat
load 249
itob
concat
load 248
itob
concat
int 1
bzero
dig 1
extract 0 96
app_global_put
pop
int 7
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l11_ifF:
load 255
itob
load 254
itob // bool
substring 7 8
int 0
itob // bool
substring 7 8
concat
load 253
concat
load 252
concat
load 251
itob
concat
global Round
itob
concat
b loopBody2
l10_afterHandler7:
// Handler 8
dup
int 8
==
bz l12_afterHandler8
pop
// check step
int 7
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
int 0
extract_uint64
store 255
dup
extract 8 32
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 40
==
assert
dup
int 0
extract_uint64
store 249
dup
extract 8 32
store 248
pop
global Round
load 251
<
assert
// "CheckPay"
// "./index.rsh:65:16:dot"
// "[]"
load 255
itob
load 253
concat
load 249
itob
concat
load 248
concat
int 1
bzero
dig 1
extract 0 80
app_global_put
pop
int 8
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l12_afterHandler8:
// Handler 9
dup
int 9
==
bz l13_afterHandler9
pop
// check step
int 7
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
int 0
extract_uint64
store 255
dup
extract 8 32
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
dup
load 251
>=
assert
load 250
<
assert
// "CheckPay"
// "./index.rsh:72:20:dot"
// "[]"
load 252
dup
bz l14_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l14_checkTxnK:
pop
load 252
dup
bz l15_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l15_checkTxnK:
pop
load 255
itob
int 0
itob // bool
substring 7 8
int 1
itob // bool
substring 7 8
concat
load 254
concat
load 254
concat
int 8
bzero
concat
global Round
itob
concat
b loopBody2
l13_afterHandler9:
// Handler 10
dup
int 10
==
bz l16_afterHandler10
pop
// check step
int 7
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
int 0
extract_uint64
store 255
dup
extract 8 32
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 250
>=
assert
// "CheckPay"
// "./index.rsh:77:22:dot"
// "[]"
load 255
itob
int 0
itob // bool
substring 7 8
int 1
itob // bool
substring 7 8
concat
load 253
concat
load 253
concat
int 8
bzero
concat
global Round
itob
concat
b loopBody2
l16_afterHandler10:
// Handler 11
dup
int 11
==
bz l17_afterHandler11
pop
// check step
int 8
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
int 0
extract_uint64
store 255
dup
extract 8 32
store 254
dup
int 40
extract_uint64
store 253
dup
extract 48 32
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:92:17:dot"
// "[]"
load 255
itob
int 1
itob // bool
substring 7 8
int 1
itob // bool
substring 7 8
concat
load 252
concat
load 254
concat
load 253
itob
concat
global Round
itob
concat
b loopBody2
l17_afterHandler11:
int 0
assert
loopBody2:
dup
extract 0 1
btoi
store 255
dup
extract 1 1
btoi
store 254
dup
extract 2 32
store 253
dup
extract 34 32
store 252
dup
int 66
extract_uint64
store 251
dup
int 74
extract_uint64
store 250
pop
dup
btoi
store 249
pop
load 254
bz l18_ifF
load 255
bz l19_ifF
load 250
load 249
+
dup
store 248
int 10
+
store 247
load 249
itob
load 253
concat
load 252
concat
load 251
itob
concat
load 248
itob
concat
load 247
itob
concat
int 1
bzero
dig 1
extract 0 96
app_global_put
pop
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l19_ifF:
load 249
itob
load 255
itob // bool
substring 7 8
concat
load 253
concat
load 252
concat
load 251
itob
concat
int 1
bzero
dig 1
extract 0 81
app_global_put
pop
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l18_ifF:
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l20_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v336",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v231",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v268",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v269",
                "type": "address"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "NFT_owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v336",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v231",
                "type": "bool"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v268",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v269",
                "type": "address"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001faa38038062001faa83398101604081905262000026916200018c565b6000805560408051825181526020808401511515908201527fcd3784b2810428b9f2b2dd7f396bb870a5f4b96dbfb942b22303c2c03fab95e2910160405180910390a16200007734156008620000bc565b60016000818155439091556040805160208082018490528251808303820181529183019092528051620000af926002920190620000e6565b5050436003555062000234565b81620000e25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620000f490620001f7565b90600052602060002090601f01602090048101928262000118576000855562000163565b82601f106200013357805160ff191683800117855562000163565b8280016001018555821562000163579182015b828111156200016357825182559160200191906001019062000146565b506200017192915062000175565b5090565b5b8082111562000171576000815560010162000176565b6000604082840312156200019f57600080fd5b604080519081016001600160401b0381118282101715620001d057634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620001eb57600080fd5b60208201529392505050565b600181811c908216806200020c57607f821691505b602082108114156200022e57634e487b7160e01b600052602260045260246000fd5b50919050565b611d6680620002446000396000f3fe6080604052600436106100d55760003560e01c8063804c93e81161007957806399de9a081161005657806399de9a08146101c9578063ab53f2c6146101dc578063c208df36146101ff578063f0fa17d91461021257005b8063804c93e81461018e57806383230757146101a157806396ce2864146101b657005b80634ce4f265116100b25780634ce4f265146101285780635497b06f1461013b5780635807518b1461014e5780635cf275dd1461016157005b80630d19a5fb146100de5780631e93b0f1146100f1578063306ab8141461011557005b366100dc57005b005b6100dc6100ec3660046118ca565b610225565b3480156100fd57600080fd5b506003545b6040519081526020015b60405180910390f35b6100dc6101233660046118ca565b610406565b6100dc6101363660046118ca565b61058d565b6100dc6101493660046118ff565b6106fd565b6100dc61015c3660046118ca565b610872565b34801561016d57600080fd5b50610176610b22565b6040516001600160a01b03909116815260200161010c565b6100dc61019c3660046118ca565b610e41565b3480156101ad57600080fd5b50600154610102565b6100dc6101c43660046118ca565b610f53565b6100dc6101d73660046118ca565b61108d565b3480156101e857600080fd5b506101f16111b1565b60405161010c92919061191b565b6100dc61020d3660046118ff565b61124e565b6100dc6102203660046118ff565b61140d565b61023560046000541460116115a8565b61024f8135158061024857506001548235145b60126115a8565b60008080556002805461026190611978565b80601f016020809104026020016040519081016040528092919081815260200182805461028d90611978565b80156102da5780601f106102af576101008083540402835291602001916102da565b820191906000526020600020905b8154815290600101906020018083116102bd57829003601f168201915b50505050508060200190518101906102f29190611a5e565b9050610306816080015143101560136115a8565b6103178160a00151431060146115a8565b7f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc0579627826040516103469190611a88565b60405180910390a161035f8160600151341460106115a8565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f193505050501580156103a0573d6000803e3d6000fd5b506103a961178f565b8151815152602080820180516000908190528151600190840152918401805182516001600160a01b03918216604090910152905182519116606090910152805160800191909152514360a090910152610401816115d1565b505050565b61041660076000541460296115a8565b6104308135158061042957506001548235145b602a6115a8565b60008080556002805461044290611978565b80601f016020809104026020016040519081016040528092919081815260200182805461046e90611978565b80156104bb5780601f10610490576101008083540402835291602001916104bb565b820191906000526020600020905b81548152906001019060200180831161049e57829003601f168201915b50505050508060200190518101906104d39190611a5e565b90506104e78160a00151431015602b6115a8565b7fbc00bef455301cf914c30c8a9af2a81c4e58a53a327cc5726ef84b62ea9c1fc9826040516105169190611a88565b60405180910390a161052a341560286115a8565b61053261178f565b815181515260208082018051600090819052815160019301929092526040808501805183516001600160a01b039182169301929092525182519116606090910152805160800191909152514360a090910152610401816115d1565b61059d600560005414601a6115a8565b6105b7813515806105b057506001548235145b601b6115a8565b6000808055600280546105c990611978565b80601f01602080910402602001604051908101604052809291908181526020018280546105f590611978565b80156106425780601f1061061757610100808354040283529160200191610642565b820191906000526020600020905b81548152906001019060200180831161062557829003601f168201915b505050505080602001905181019061065a9190611b34565b90507f2de542e04768f7d432d52df08943d2fab028221c30dba664ab546be3aae5e4a08260405161068b9190611a88565b60405180910390a161069f341560196115a8565b6106a761178f565b815181515260208082018051600190819052815183015260608085015182516001600160a01b03918216604091820152938601518351911691015290830151815160800152514360a090910152610401816115d1565b61070d600160005414600a6115a8565b6107278135158061072057506001548235145b600b6115a8565b60008080556002805461073990611978565b80601f016020809104026020016040519081016040528092919081815260200182805461076590611978565b80156107b25780601f10610787576101008083540402835291602001916107b2565b820191906000526020600020905b81548152906001019060200180831161079557829003601f168201915b50505050508060200190518101906107ca9190611b50565b604080518435815260208086013590820152848201358183015290519192507f18d9d011c21071a56acd9db124fcbf0270b148b24e2db4e72df06ed1bd5c6190919081900360600190a1610820341560096115a8565b61082861178f565b805160408085013590915260208281018051600090819052815160019301929092528051339301839052805160600192909252815160800152514360a090910152610401816115d1565b610882600660005414601d6115a8565b61089c8135158061089557506001548235145b601e6115a8565b6000808055600280546108ae90611978565b80601f01602080910402602001604051908101604052809291908181526020018280546108da90611978565b80156109275780601f106108fc57610100808354040283529160200191610927565b820191906000526020600020905b81548152906001019060200180831161090a57829003601f168201915b505050505080602001905181019061093f9190611b6d565b905061095e604051806040016040528060008152602001600081525090565b7f79eac81e32b6ce24aea4fe7d5b3a668af48b7628a83c1959d37d9ebf01a3632a8360405161098d9190611a88565b60405180910390a16109a13415601c6115a8565b6109b16040840160208501611c03565b15610ab15781516109c29043611c20565b8082526109d190600a90611c20565b816020018181525050610a256040518060c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b825181526040808401516001600160a01b0390811660208085019190915260608087015190921683850152608080870151928501929092528451918401919091528381015160a08401526007600055436001559051610a8691839101611c46565b60405160208183030381529060405260029080519060200190610aaa9291906117dc565b5050505050565b610ab961178f565b825181515260208084015181830180519115159091528051600092019190915260408085015182516001600160a01b0391821692019190915260608086015183519216910152608080850151825190910152514360a090910152610b1c816115d1565b50505050565b600060016000541415610bdf57600060028054610b3e90611978565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6a90611978565b8015610bb75780601f10610b8c57610100808354040283529160200191610bb7565b820191906000526020600020905b815481529060010190602001808311610b9a57829003601f168201915b5050505050806020019051810190610bcf9190611b50565b9050610bdd600060076115a8565b505b60046000541415610c9457600060028054610bf990611978565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2590611978565b8015610c725780601f10610c4757610100808354040283529160200191610c72565b820191906000526020600020905b815481529060010190602001808311610c5557829003601f168201915b5050505050806020019051810190610c8a9190611a5e565b6040015192915050565b60056000541415610d4957600060028054610cae90611978565b80601f0160208091040260200160405190810160405280929190818152602001828054610cda90611978565b8015610d275780601f10610cfc57610100808354040283529160200191610d27565b820191906000526020600020905b815481529060010190602001808311610d0a57829003601f168201915b5050505050806020019051810190610d3f9190611b34565b6020015192915050565b60066000541415610dfe57600060028054610d6390611978565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8f90611978565b8015610ddc5780601f10610db157610100808354040283529160200191610ddc565b820191906000526020600020905b815481529060010190602001808311610dbf57829003601f168201915b5050505050806020019051810190610df49190611b6d565b6060015192915050565b60076000541415610e1857600060028054610bf990611978565b60086000541415610e3257600060028054610cae90611978565b610e3e600060076115a8565b90565b610e51600860005414602d6115a8565b610e6b81351580610e6457506001548235145b602e6115a8565b600080805560028054610e7d90611978565b80601f0160208091040260200160405190810160405280929190818152602001828054610ea990611978565b8015610ef65780601f10610ecb57610100808354040283529160200191610ef6565b820191906000526020600020905b815481529060010190602001808311610ed957829003601f168201915b5050505050806020019051810190610f0e9190611b34565b90507f8f2ed83e15c8d10f849617c526898f769c46e2fedb826317a6a1d1b65f6de34582604051610f3f9190611a88565b60405180910390a161069f3415602c6115a8565b610f6360076000541460246115a8565b610f7d81351580610f7657506001548235145b60256115a8565b600080805560028054610f8f90611978565b80601f0160208091040260200160405190810160405280929190818152602001828054610fbb90611978565b80156110085780601f10610fdd57610100808354040283529160200191611008565b820191906000526020600020905b815481529060010190602001808311610feb57829003601f168201915b50505050508060200190518101906110209190611a5e565b9050611034816080015143101560266115a8565b6110458160a00151431060276115a8565b7f20946629c27bb4ab46740868cd074b2845a9d6ffb97be0e379492342bc24d525826040516110749190611a88565b60405180910390a161035f8160600151341460236115a8565b61109d60046000541460166115a8565b6110b7813515806110b057506001548235145b60176115a8565b6000808055600280546110c990611978565b80601f01602080910402602001604051908101604052809291908181526020018280546110f590611978565b80156111425780601f1061111757610100808354040283529160200191611142565b820191906000526020600020905b81548152906001019060200180831161112557829003601f168201915b505050505080602001905181019061115a9190611a5e565b905061116e8160a0015143101560186115a8565b7f689557114e2e52e056e03b61e6c9aefd10ce977ec8f4368fb29885f113b07d2e8260405161119d9190611a88565b60405180910390a161052a341560156115a8565b6000606060005460028080546111c690611978565b80601f01602080910402602001604051908101604052809291908181526020018280546111f290611978565b801561123f5780601f106112145761010080835404028352916020019161123f565b820191906000526020600020905b81548152906001019060200180831161122257829003601f168201915b50505050509050915091509091565b61125e600460005414600d6115a8565b6112788135158061127157506001548235145b600e6115a8565b60008080556002805461128a90611978565b80601f01602080910402602001604051908101604052809291908181526020018280546112b690611978565b80156113035780601f106112d857610100808354040283529160200191611303565b820191906000526020600020905b8154815290600101906020018083116112e657829003601f168201915b505050505080602001905181019061131b9190611a5e565b905061132e81608001514310600f6115a8565b7f8861ce822764b20fafcbc6155701d6556fe551225e331ff56b8ffa942c030a608260405161135d9190611cca565b60405180910390a16113713415600c6115a8565b604080516080810182526000808252602080830182815283850183815260608086019490945286518552868601516001600160a01b031690915290860135905290916113c1918501908501611cd8565b6001600160a01b031660608201526005600055436001556040516113e9908290602001611cf5565b60405160208183030381529060405260029080519060200190610b1c9291906117dc565b61141d60076000541460206115a8565b6114378135158061143057506001548235145b60216115a8565b60008080556002805461144990611978565b80601f016020809104026020016040519081016040528092919081815260200182805461147590611978565b80156114c25780601f10611497576101008083540402835291602001916114c2565b820191906000526020600020905b8154815290600101906020018083116114a557829003601f168201915b50505050508060200190518101906114da9190611a5e565b90506114ed8160800151431060226115a8565b7fd44ea8cf7ccd8e560746a2d8895e91607eb9003545c7f840aefb515ab3204b578260405161151c9190611cca565b60405180910390a16115303415601f6115a8565b604080516080810182526000808252602080830182815283850183815260608086019490945286518552868601516001600160a01b03169091529086013590529091611580918501908501611cd8565b6001600160a01b031660608201526008600055436001556040516113e9908290602001611cf5565b816115cd5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051808201909152600080825260208201528160200151602001511561177957602082015151156116de57815151602083015160a001516116149190611c20565b80825261162390600a90611c20565b8160200181815250506116776040518060c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251518152602080840180516040908101516001600160a01b03908116848601528251606090810151909116828601529151608090810151928501929092528451918401919091528382015160a0840152600460005543600155516113e991839101611c46565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c5151808b528d88018051511515885280518d01516001600160a01b039081168852815187015181168652905184015183526006909955436001558b519788015294511515998601999099529151851690840152519092169481019490945251908301529060c0016113e9565b600080805560018190556115cd90600290611860565b60408051606081018252600091810191825290819081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291015290565b8280546117e890611978565b90600052602060002090601f01602090048101928261180a5760008555611850565b82601f1061182357805160ff1916838001178555611850565b82800160010185558215611850579182015b82811115611850578251825591602001919060010190611835565b5061185c92915061189d565b5090565b50805461186c90611978565b6000825580601f1061187c575050565b601f01602090049060005260206000209081019061189a919061189d565b50565b5b8082111561185c576000815560010161189e565b6000604082840312156118c457600080fd5b50919050565b6000604082840312156118dc57600080fd5b6118e683836118b2565b9392505050565b6000606082840312156118c457600080fd5b60006060828403121561191157600080fd5b6118e683836118ed565b82815260006020604081840152835180604085015260005b8181101561194f57858101830151858201606001528201611933565b81811115611961576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061198c57607f821691505b602082108114156118c457634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461189a57600080fd5b600060c082840312156119d457600080fd5b60405160c0810181811067ffffffffffffffff82111715611a0557634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151611a1f816119ad565b60208201526040830151611a32816119ad565b80604083015250606083015160608201526080830151608082015260a083015160a08201525092915050565b600060c08284031215611a7057600080fd5b6118e683836119c2565b801515811461189a57600080fd5b81358152604081016020830135611a9e81611a7a565b80151560208401525092915050565b600060808284031215611abf57600080fd5b6040516080810181811067ffffffffffffffff82111715611af057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151611b0a816119ad565b6020820152604083810151908201526060830151611b27816119ad565b6060919091015292915050565b600060808284031215611b4657600080fd5b6118e68383611aad565b600060208284031215611b6257600080fd5b81516118e681611a7a565b600060a08284031215611b7f57600080fd5b60405160a0810181811067ffffffffffffffff82111715611bb057634e487b7160e01b600052604160045260246000fd5b604052825181526020830151611bc581611a7a565b60208201526040830151611bd8816119ad565b60408201526060830151611beb816119ad565b60608201526080928301519281019290925250919050565b600060208284031215611c1557600080fd5b81356118e681611a7a565b60008219821115611c4157634e487b7160e01b600052601160045260246000fd5b500190565b815181526020808301516001600160a01b039081169183019190915260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c081015b92915050565b80358252602081013560208301526040810135611cb4816119ad565b6001600160a01b03166040929092019190915250565b60608101611c928284611c98565b600060208284031215611cea57600080fd5b81356118e6816119ad565b60808101611c928284805182526020808201516001600160a01b0390811691840191909152604080830151908401526060918201511691015256fea2646970667358221220af0c07c690f34a8cd7ee17465abdc8fcc4ced6d1f2c29a5474c52521768b533864736f6c63430008090033`,
  BytecodeLen: 8106,
  Which: `oD`,
  version: 5,
  views: {
    NFT: {
      owner: `NFT_owner`
      }
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder": Bidder,
  "Constructor": Constructor,
  "Creator": Creator
  };
export const _APIs = {
  };
