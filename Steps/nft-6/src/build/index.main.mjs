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
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v160, v166, v167, v168, v260, v263] = svs;
              return (await ((async () => {
                
                
                return v167;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v160, v167, v285, v286] = svs;
              return (await ((async () => {
                
                
                return v167;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v160, v164, v166, v167, v168] = svs;
              return (await ((async () => {
                
                
                return v167;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
              const [v160, v166, v167, v168, v199, v202] = svs;
              return (await ((async () => {
                
                
                return v167;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7))) {
              const [v160, v167, v224, v225] = svs;
              return (await ((async () => {
                
                
                return v167;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
      4: [ctc0, ctc1, ctc0, ctc1],
      5: [ctc0, ctc2, ctc1, ctc1, ctc0],
      6: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
      7: [ctc0, ctc1, ctc0, ctc1]
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
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v159, v160], secs: v162, time: v161, didSend: v26, from: v158 } = txn1;
  ;
  let v164 = false;
  let v165 = true;
  let v166 = v158;
  let v167 = v158;
  let v168 = stdlib.checkedBigNumberify('./index.rsh:34:72:decimal', stdlib.UInt_max, 0);
  let v169 = v161;
  
  while ((() => {
    
    return v165;})()) {
    if (v164) {
      const v260 = stdlib.add(v169, v160);
      const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
      const v265 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:56:20:application', stdlib.UInt_max, 65));
      const v267 = stdlib.addressEq(v265, v166);
      const v268 = v267 ? false : true;
      const v269 = stdlib.addressEq(v265, v167);
      const v270 = v269 ? false : true;
      const v271 = v267 ? false : v270;
      let v272;
      if (v271) {
        const v273 = stdlib.protect(ctc0, await interact.getBid(v168), {
          at: './index.rsh:57:91:application',
          fs: ['at ./index.rsh:56:20:application call to [unknown function] (defined at: ./index.rsh:56:24:function exp)'],
          msg: 'getBid',
          who: 'Bidder'
          });
        v272 = v273;
        }
      else {
        v272 = v168;
        }
      const v279 = v271 ? v265 : v166;
      
      const v280 = stdlib.gt(v272, v168);
      const v283 = v280 ? v268 : false;
      
      const txn2 = await (ctc.sendrecv({
        args: [v160, v166, v167, v168, v260, v263, v272, v279],
        evt_cnt: 2,
        funcNum: 2,
        lct: v169,
        onlyIf: v283,
        out_tys: [ctc0, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn2) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v285, v286], secs: v288, time: v287, didSend: v96, from: v284 } = txn2;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: ['time', v260],
        tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn2.didTimeout) {
        const v300 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:64:17:application', stdlib.UInt_max, 116));
        stdlib.protect(ctc2, await interact.seeOutcome(v168, v166), {
          at: './index.rsh:65:34:application',
          fs: ['at ./index.rsh:64:17:application call to [unknown function] (defined at: ./index.rsh:64:40:function exp)'],
          msg: 'seeOutcome',
          who: 'Bidder'
          });
        
        const v302 = stdlib.addressEq(v166, v300);
        
        const txn3 = await (ctc.sendrecv({
          args: [v160, v166, v167, v168, v260, v263],
          evt_cnt: 0,
          funcNum: 3,
          lct: v169,
          onlyIf: v302,
          out_tys: [],
          pay: [v168, []],
          sim_p: (async (txn3) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v305, time: v304, didSend: v125, from: v303 } = txn3;
            
            sim_r.txns.push({
              amt: v168,
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v168,
              kind: 'from',
              to: v167,
              tok: undefined
              });
            const cv164 = false;
            const cv165 = true;
            const cv166 = v166;
            const cv167 = v166;
            const cv168 = stdlib.checkedBigNumberify('./index.rsh:79:77:decimal', stdlib.UInt_max, 0);
            const cv169 = v304;
            
            (() => {
              const v164 = cv164;
              const v165 = cv165;
              const v166 = cv166;
              const v167 = cv167;
              const v168 = cv168;
              const v169 = cv169;
              
              if ((() => {
                
                return v165;})()) {
                if (v164) {
                  const v260 = stdlib.add(v169, v160);
                  const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
          timeoutAt: ['time', v263],
          tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:70:39:application',
            fs: ['at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:42:function exp)'],
            msg: 'informTimeout',
            who: 'Bidder'
            });
          
          const txn4 = await (ctc.sendrecv({
            args: [v160, v166, v167, v168, v260, v263],
            evt_cnt: 0,
            funcNum: 4,
            lct: v169,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v318, time: v317, didSend: v145, from: v316 } = txn4;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const cv164 = false;
              const cv165 = true;
              const cv166 = v167;
              const cv167 = v167;
              const cv168 = stdlib.checkedBigNumberify('./index.rsh:74:74:decimal', stdlib.UInt_max, 0);
              const cv169 = v317;
              
              (() => {
                const v164 = cv164;
                const v165 = cv165;
                const v166 = cv166;
                const v167 = cv167;
                const v168 = cv168;
                const v169 = cv169;
                
                if ((() => {
                  
                  return v165;})()) {
                  if (v164) {
                    const v260 = stdlib.add(v169, v160);
                    const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
          const {data: [], secs: v318, time: v317, didSend: v145, from: v316 } = txn4;
          ;
          const cv164 = false;
          const cv165 = true;
          const cv166 = v167;
          const cv167 = v167;
          const cv168 = stdlib.checkedBigNumberify('./index.rsh:74:74:decimal', stdlib.UInt_max, 0);
          const cv169 = v317;
          
          v164 = cv164;
          v165 = cv165;
          v166 = cv166;
          v167 = cv167;
          v168 = cv168;
          v169 = cv169;
          
          continue;
          }
        else {
          const {data: [], secs: v305, time: v304, didSend: v125, from: v303 } = txn3;
          ;
          ;
          const cv164 = false;
          const cv165 = true;
          const cv166 = v166;
          const cv167 = v166;
          const cv168 = stdlib.checkedBigNumberify('./index.rsh:79:77:decimal', stdlib.UInt_max, 0);
          const cv169 = v304;
          
          v164 = cv164;
          v165 = cv165;
          v166 = cv166;
          v167 = cv167;
          v168 = cv168;
          v169 = cv169;
          
          continue;}
        }
      else {
        const {data: [v285, v286], secs: v288, time: v287, didSend: v96, from: v284 } = txn2;
        ;
        stdlib.protect(ctc2, await interact.showBid(v285, v286), {
          at: './index.rsh:85:27:application',
          fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:36:function exp)'],
          msg: 'showBid',
          who: 'Bidder'
          });
        
        const txn3 = await (ctc.sendrecv({
          args: [v160, v167, v285, v286],
          evt_cnt: 0,
          funcNum: 5,
          lct: v287,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn3) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v296, time: v295, didSend: v107, from: v294 } = txn3;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv164 = true;
            const cv165 = true;
            const cv166 = v286;
            const cv167 = v167;
            const cv168 = v285;
            const cv169 = v295;
            
            (() => {
              const v164 = cv164;
              const v165 = cv165;
              const v166 = cv166;
              const v167 = cv167;
              const v168 = cv168;
              const v169 = cv169;
              
              if ((() => {
                
                return v165;})()) {
                if (v164) {
                  const v260 = stdlib.add(v169, v160);
                  const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
        const {data: [], secs: v296, time: v295, didSend: v107, from: v294 } = txn3;
        ;
        const cv164 = true;
        const cv165 = true;
        const cv166 = v286;
        const cv167 = v167;
        const cv168 = v285;
        const cv169 = v295;
        
        v164 = cv164;
        v165 = cv165;
        v166 = cv166;
        v167 = cv167;
        v168 = cv168;
        v169 = cv169;
        
        continue;
        
        }
      
      }
    else {
      const v181 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:41:15:application', stdlib.UInt_max, 43));
      const v183 = stdlib.addressEq(v181, v167);
      let v184;
      if (v183) {
        const v185 = stdlib.protect(ctc3, await interact.isAuctionOn(), {
          at: './index.rsh:42:81:application',
          fs: ['at ./index.rsh:41:15:application call to [unknown function] (defined at: ./index.rsh:41:38:function exp)'],
          msg: 'isAuctionOn',
          who: 'Bidder'
          });
        v184 = v185;
        }
      else {
        v184 = true;
        }
      
      const v186 = stdlib.addressEq(v167, v181);
      
      const txn2 = await (ctc.sendrecv({
        args: [v160, v164, v166, v167, v168, v184],
        evt_cnt: 1,
        funcNum: 6,
        lct: v169,
        onlyIf: v186,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn2) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v189], secs: v191, time: v190, didSend: v56, from: v188 } = txn2;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          if (v189) {
            const v199 = stdlib.add(v190, v160);
            const v202 = stdlib.add(v199, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            
            const cv164 = v164;
            const cv165 = false;
            const cv166 = v166;
            const cv167 = v167;
            const cv168 = v168;
            const cv169 = v190;
            
            (() => {
              const v164 = cv164;
              const v165 = cv165;
              const v166 = cv166;
              const v167 = cv167;
              const v168 = cv168;
              const v169 = cv169;
              
              if ((() => {
                
                return v165;})()) {
                if (v164) {
                  const v260 = stdlib.add(v169, v160);
                  const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
      const {data: [v189], secs: v191, time: v190, didSend: v56, from: v188 } = txn2;
      ;
      if (v189) {
        const v199 = stdlib.add(v190, v160);
        const v202 = stdlib.add(v199, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
        const v204 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:56:20:application', stdlib.UInt_max, 65));
        const v206 = stdlib.addressEq(v204, v166);
        const v207 = v206 ? false : true;
        const v208 = stdlib.addressEq(v204, v167);
        const v209 = v208 ? false : true;
        const v210 = v206 ? false : v209;
        let v211;
        if (v210) {
          const v212 = stdlib.protect(ctc0, await interact.getBid(v168), {
            at: './index.rsh:57:91:application',
            fs: ['at ./index.rsh:56:20:application call to [unknown function] (defined at: ./index.rsh:56:24:function exp)'],
            msg: 'getBid',
            who: 'Bidder'
            });
          v211 = v212;
          }
        else {
          v211 = v168;
          }
        const v218 = v210 ? v204 : v166;
        
        const v219 = stdlib.gt(v211, v168);
        const v222 = v219 ? v207 : false;
        
        const txn3 = await (ctc.sendrecv({
          args: [v160, v166, v167, v168, v199, v202, v211, v218],
          evt_cnt: 2,
          funcNum: 7,
          lct: v190,
          onlyIf: v222,
          out_tys: [ctc0, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn3) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [v224, v225], secs: v227, time: v226, didSend: v96, from: v223 } = txn3;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: ['time', v199],
          tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          const v239 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:64:17:application', stdlib.UInt_max, 116));
          stdlib.protect(ctc2, await interact.seeOutcome(v168, v166), {
            at: './index.rsh:65:34:application',
            fs: ['at ./index.rsh:64:17:application call to [unknown function] (defined at: ./index.rsh:64:40:function exp)'],
            msg: 'seeOutcome',
            who: 'Bidder'
            });
          
          const v241 = stdlib.addressEq(v166, v239);
          
          const txn4 = await (ctc.sendrecv({
            args: [v160, v166, v167, v168, v199, v202],
            evt_cnt: 0,
            funcNum: 8,
            lct: v190,
            onlyIf: v241,
            out_tys: [],
            pay: [v168, []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v244, time: v243, didSend: v125, from: v242 } = txn4;
              
              sim_r.txns.push({
                amt: v168,
                kind: 'to',
                tok: undefined
                });
              sim_r.txns.push({
                amt: v168,
                kind: 'from',
                to: v167,
                tok: undefined
                });
              const cv164 = false;
              const cv165 = true;
              const cv166 = v166;
              const cv167 = v166;
              const cv168 = stdlib.checkedBigNumberify('./index.rsh:79:77:decimal', stdlib.UInt_max, 0);
              const cv169 = v243;
              
              (() => {
                const v164 = cv164;
                const v165 = cv165;
                const v166 = cv166;
                const v167 = cv167;
                const v168 = cv168;
                const v169 = cv169;
                
                if ((() => {
                  
                  return v165;})()) {
                  if (v164) {
                    const v260 = stdlib.add(v169, v160);
                    const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
            timeoutAt: ['time', v202],
            tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn4.didTimeout) {
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:70:39:application',
              fs: ['at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:42:function exp)'],
              msg: 'informTimeout',
              who: 'Bidder'
              });
            
            const txn5 = await (ctc.sendrecv({
              args: [v160, v166, v167, v168, v199, v202],
              evt_cnt: 0,
              funcNum: 9,
              lct: v190,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn5) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v257, time: v256, didSend: v145, from: v255 } = txn5;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const cv164 = false;
                const cv165 = true;
                const cv166 = v167;
                const cv167 = v167;
                const cv168 = stdlib.checkedBigNumberify('./index.rsh:74:74:decimal', stdlib.UInt_max, 0);
                const cv169 = v256;
                
                (() => {
                  const v164 = cv164;
                  const v165 = cv165;
                  const v166 = cv166;
                  const v167 = cv167;
                  const v168 = cv168;
                  const v169 = cv169;
                  
                  if ((() => {
                    
                    return v165;})()) {
                    if (v164) {
                      const v260 = stdlib.add(v169, v160);
                      const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
            const {data: [], secs: v257, time: v256, didSend: v145, from: v255 } = txn5;
            ;
            const cv164 = false;
            const cv165 = true;
            const cv166 = v167;
            const cv167 = v167;
            const cv168 = stdlib.checkedBigNumberify('./index.rsh:74:74:decimal', stdlib.UInt_max, 0);
            const cv169 = v256;
            
            v164 = cv164;
            v165 = cv165;
            v166 = cv166;
            v167 = cv167;
            v168 = cv168;
            v169 = cv169;
            
            continue;
            }
          else {
            const {data: [], secs: v244, time: v243, didSend: v125, from: v242 } = txn4;
            ;
            ;
            const cv164 = false;
            const cv165 = true;
            const cv166 = v166;
            const cv167 = v166;
            const cv168 = stdlib.checkedBigNumberify('./index.rsh:79:77:decimal', stdlib.UInt_max, 0);
            const cv169 = v243;
            
            v164 = cv164;
            v165 = cv165;
            v166 = cv166;
            v167 = cv167;
            v168 = cv168;
            v169 = cv169;
            
            continue;}
          }
        else {
          const {data: [v224, v225], secs: v227, time: v226, didSend: v96, from: v223 } = txn3;
          ;
          stdlib.protect(ctc2, await interact.showBid(v224, v225), {
            at: './index.rsh:85:27:application',
            fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:36:function exp)'],
            msg: 'showBid',
            who: 'Bidder'
            });
          
          const txn4 = await (ctc.sendrecv({
            args: [v160, v167, v224, v225],
            evt_cnt: 0,
            funcNum: 10,
            lct: v226,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v235, time: v234, didSend: v107, from: v233 } = txn4;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const cv164 = true;
              const cv165 = true;
              const cv166 = v225;
              const cv167 = v167;
              const cv168 = v224;
              const cv169 = v234;
              
              (() => {
                const v164 = cv164;
                const v165 = cv165;
                const v166 = cv166;
                const v167 = cv167;
                const v168 = cv168;
                const v169 = cv169;
                
                if ((() => {
                  
                  return v165;})()) {
                  if (v164) {
                    const v260 = stdlib.add(v169, v160);
                    const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
          const {data: [], secs: v235, time: v234, didSend: v107, from: v233 } = txn4;
          ;
          const cv164 = true;
          const cv165 = true;
          const cv166 = v225;
          const cv167 = v167;
          const cv168 = v224;
          const cv169 = v234;
          
          v164 = cv164;
          v165 = cv165;
          v166 = cv166;
          v167 = cv167;
          v168 = cv168;
          v169 = cv169;
          
          continue;
          
          }
        
        }
      else {
        stdlib.protect(ctc2, await interact.seeOutcome(v168, v167), {
          at: './index.rsh:48:34:application',
          fs: ['at ./index.rsh:47:17:application call to [unknown function] (defined at: ./index.rsh:47:40:function exp)'],
          msg: 'seeOutcome',
          who: 'Bidder'
          });
        
        const cv164 = v164;
        const cv165 = false;
        const cv166 = v166;
        const cv167 = v167;
        const cv168 = v168;
        const cv169 = v190;
        
        v164 = cv164;
        v165 = cv165;
        v166 = cv166;
        v167 = cv167;
        v168 = cv168;
        v169 = cv169;
        
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
  
  
  const v154 = stdlib.protect(ctc0, interact.deadline, 'for Creator\'s interact field deadline');
  const v155 = stdlib.protect(ctc0, interact.getId, 'for Creator\'s interact field getId');
  
  const txn1 = await (ctc.sendrecv({
    args: [v155, v154],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:15:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v159, v160], secs: v162, time: v161, didSend: v26, from: v158 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v164 = false;
      const v165 = true;
      const v166 = v158;
      const v167 = v158;
      const v168 = stdlib.checkedBigNumberify('./index.rsh:34:72:decimal', stdlib.UInt_max, 0);
      const v169 = v161;
      
      if ((() => {
        
        return v165;})()) {
        if (v164) {
          const v260 = stdlib.add(v169, v160);
          const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
  const {data: [v159, v160], secs: v162, time: v161, didSend: v26, from: v158 } = txn1;
  ;
  let v164 = false;
  let v165 = true;
  let v166 = v158;
  let v167 = v158;
  let v168 = stdlib.checkedBigNumberify('./index.rsh:34:72:decimal', stdlib.UInt_max, 0);
  let v169 = v161;
  
  while ((() => {
    
    return v165;})()) {
    if (v164) {
      const v260 = stdlib.add(v169, v160);
      const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
      const txn2 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 2,
        out_tys: [ctc0, ctc1],
        timeoutAt: ['time', v260],
        waitIfNotPresent: false
        }));
      if (txn2.didTimeout) {
        stdlib.protect(ctc2, await interact.seeOutcome(v168, v166), {
          at: './index.rsh:65:34:application',
          fs: ['at ./index.rsh:64:17:application call to [unknown function] (defined at: ./index.rsh:64:40:function exp)'],
          msg: 'seeOutcome',
          who: 'Creator'
          });
        
        const txn3 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 3,
          out_tys: [],
          timeoutAt: ['time', v263],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:70:39:application',
            fs: ['at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:42:function exp)'],
            msg: 'informTimeout',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 4,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v318, time: v317, didSend: v145, from: v316 } = txn4;
          ;
          const cv164 = false;
          const cv165 = true;
          const cv166 = v167;
          const cv167 = v167;
          const cv168 = stdlib.checkedBigNumberify('./index.rsh:74:74:decimal', stdlib.UInt_max, 0);
          const cv169 = v317;
          
          v164 = cv164;
          v165 = cv165;
          v166 = cv166;
          v167 = cv167;
          v168 = cv168;
          v169 = cv169;
          
          continue;
          }
        else {
          const {data: [], secs: v305, time: v304, didSend: v125, from: v303 } = txn3;
          ;
          ;
          const cv164 = false;
          const cv165 = true;
          const cv166 = v166;
          const cv167 = v166;
          const cv168 = stdlib.checkedBigNumberify('./index.rsh:79:77:decimal', stdlib.UInt_max, 0);
          const cv169 = v304;
          
          v164 = cv164;
          v165 = cv165;
          v166 = cv166;
          v167 = cv167;
          v168 = cv168;
          v169 = cv169;
          
          continue;}
        }
      else {
        const {data: [v285, v286], secs: v288, time: v287, didSend: v96, from: v284 } = txn2;
        ;
        stdlib.protect(ctc2, await interact.showBid(v285, v286), {
          at: './index.rsh:85:27:application',
          fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:36:function exp)'],
          msg: 'showBid',
          who: 'Creator'
          });
        
        const txn3 = await (ctc.sendrecv({
          args: [v160, v167, v285, v286],
          evt_cnt: 0,
          funcNum: 5,
          lct: v287,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn3) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v296, time: v295, didSend: v107, from: v294 } = txn3;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv164 = true;
            const cv165 = true;
            const cv166 = v286;
            const cv167 = v167;
            const cv168 = v285;
            const cv169 = v295;
            
            (() => {
              const v164 = cv164;
              const v165 = cv165;
              const v166 = cv166;
              const v167 = cv167;
              const v168 = cv168;
              const v169 = cv169;
              
              if ((() => {
                
                return v165;})()) {
                if (v164) {
                  const v260 = stdlib.add(v169, v160);
                  const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
        const {data: [], secs: v296, time: v295, didSend: v107, from: v294 } = txn3;
        ;
        const cv164 = true;
        const cv165 = true;
        const cv166 = v286;
        const cv167 = v167;
        const cv168 = v285;
        const cv169 = v295;
        
        v164 = cv164;
        v165 = cv165;
        v166 = cv166;
        v167 = cv167;
        v168 = cv168;
        v169 = cv169;
        
        continue;
        
        }
      
      }
    else {
      const v178 = stdlib.addressEq(v158, v167);
      let v179;
      if (v178) {
        const v180 = stdlib.protect(ctc3, await interact.isAuctionOn(), {
          at: './index.rsh:42:81:application',
          fs: ['at ./index.rsh:41:15:application call to [unknown function] (defined at: ./index.rsh:41:38:function exp)'],
          msg: 'isAuctionOn',
          who: 'Creator'
          });
        v179 = v180;
        }
      else {
        v179 = true;
        }
      
      const v187 = stdlib.addressEq(v167, v158);
      
      const txn2 = await (ctc.sendrecv({
        args: [v160, v164, v166, v167, v168, v179],
        evt_cnt: 1,
        funcNum: 6,
        lct: v169,
        onlyIf: v187,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn2) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v189], secs: v191, time: v190, didSend: v56, from: v188 } = txn2;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          if (v189) {
            const v199 = stdlib.add(v190, v160);
            const v202 = stdlib.add(v199, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
            sim_r.isHalt = false;
            }
          else {
            
            const cv164 = v164;
            const cv165 = false;
            const cv166 = v166;
            const cv167 = v167;
            const cv168 = v168;
            const cv169 = v190;
            
            (() => {
              const v164 = cv164;
              const v165 = cv165;
              const v166 = cv166;
              const v167 = cv167;
              const v168 = cv168;
              const v169 = cv169;
              
              if ((() => {
                
                return v165;})()) {
                if (v164) {
                  const v260 = stdlib.add(v169, v160);
                  const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
      const {data: [v189], secs: v191, time: v190, didSend: v56, from: v188 } = txn2;
      ;
      if (v189) {
        const v199 = stdlib.add(v190, v160);
        const v202 = stdlib.add(v199, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
        const txn3 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc1],
          timeoutAt: ['time', v199],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          stdlib.protect(ctc2, await interact.seeOutcome(v168, v166), {
            at: './index.rsh:65:34:application',
            fs: ['at ./index.rsh:64:17:application call to [unknown function] (defined at: ./index.rsh:64:40:function exp)'],
            msg: 'seeOutcome',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 8,
            out_tys: [],
            timeoutAt: ['time', v202],
            waitIfNotPresent: false
            }));
          if (txn4.didTimeout) {
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:70:39:application',
              fs: ['at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:42:function exp)'],
              msg: 'informTimeout',
              who: 'Creator'
              });
            
            const txn5 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 9,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v257, time: v256, didSend: v145, from: v255 } = txn5;
            ;
            const cv164 = false;
            const cv165 = true;
            const cv166 = v167;
            const cv167 = v167;
            const cv168 = stdlib.checkedBigNumberify('./index.rsh:74:74:decimal', stdlib.UInt_max, 0);
            const cv169 = v256;
            
            v164 = cv164;
            v165 = cv165;
            v166 = cv166;
            v167 = cv167;
            v168 = cv168;
            v169 = cv169;
            
            continue;
            }
          else {
            const {data: [], secs: v244, time: v243, didSend: v125, from: v242 } = txn4;
            ;
            ;
            const cv164 = false;
            const cv165 = true;
            const cv166 = v166;
            const cv167 = v166;
            const cv168 = stdlib.checkedBigNumberify('./index.rsh:79:77:decimal', stdlib.UInt_max, 0);
            const cv169 = v243;
            
            v164 = cv164;
            v165 = cv165;
            v166 = cv166;
            v167 = cv167;
            v168 = cv168;
            v169 = cv169;
            
            continue;}
          }
        else {
          const {data: [v224, v225], secs: v227, time: v226, didSend: v96, from: v223 } = txn3;
          ;
          stdlib.protect(ctc2, await interact.showBid(v224, v225), {
            at: './index.rsh:85:27:application',
            fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:36:function exp)'],
            msg: 'showBid',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.sendrecv({
            args: [v160, v167, v224, v225],
            evt_cnt: 0,
            funcNum: 10,
            lct: v226,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v235, time: v234, didSend: v107, from: v233 } = txn4;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const cv164 = true;
              const cv165 = true;
              const cv166 = v225;
              const cv167 = v167;
              const cv168 = v224;
              const cv169 = v234;
              
              (() => {
                const v164 = cv164;
                const v165 = cv165;
                const v166 = cv166;
                const v167 = cv167;
                const v168 = cv168;
                const v169 = cv169;
                
                if ((() => {
                  
                  return v165;})()) {
                  if (v164) {
                    const v260 = stdlib.add(v169, v160);
                    const v263 = stdlib.add(v260, stdlib.checkedBigNumberify('./index.rsh:68:77:decimal', stdlib.UInt_max, 10));
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
          const {data: [], secs: v235, time: v234, didSend: v107, from: v233 } = txn4;
          ;
          const cv164 = true;
          const cv165 = true;
          const cv166 = v225;
          const cv167 = v167;
          const cv168 = v224;
          const cv169 = v234;
          
          v164 = cv164;
          v165 = cv165;
          v166 = cv166;
          v167 = cv167;
          v168 = cv168;
          v169 = cv169;
          
          continue;
          
          }
        
        }
      else {
        stdlib.protect(ctc2, await interact.seeOutcome(v168, v167), {
          at: './index.rsh:48:34:application',
          fs: ['at ./index.rsh:47:17:application call to [unknown function] (defined at: ./index.rsh:47:40:function exp)'],
          msg: 'seeOutcome',
          who: 'Creator'
          });
        
        const cv164 = v164;
        const cv165 = false;
        const cv166 = v166;
        const cv167 = v167;
        const cv168 = v168;
        const cv169 = v190;
        
        v164 = cv164;
        v165 = cv165;
        v166 = cv166;
        v167 = cv167;
        v168 = cv168;
        v169 = cv169;
        
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
int 48
==
assert
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:32:15:dot"
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
// "./index.rsh:32:15:dot"
// "[]"
load 253
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
b loopBody1
l0_afterHandler0:
l2_afterHandler1:
// Handler 2
dup
int 2
==
bz l3_afterHandler2
pop
// check step
int 3
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
// "./index.rsh:61:16:dot"
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
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l3_afterHandler2:
// Handler 3
dup
int 3
==
bz l4_afterHandler3
pop
// check step
int 3
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
// "./index.rsh:68:20:dot"
// "[]"
load 252
dup
bz l5_checkTxnK
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
l5_checkTxnK:
pop
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
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
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
b loopBody1
l4_afterHandler3:
// Handler 4
dup
int 4
==
bz l7_afterHandler4
pop
// check step
int 3
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
// "./index.rsh:73:22:dot"
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
b loopBody1
l7_afterHandler4:
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
// "./index.rsh:88:17:dot"
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
b loopBody1
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
// "./index.rsh:45:19:dot"
// "[]"
load 250
bz l10_ifF
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
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l10_ifF:
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
b loopBody1
l9_afterHandler6:
// Handler 7
dup
int 7
==
bz l11_afterHandler7
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
// "./index.rsh:61:16:dot"
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
int 7
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l11_afterHandler7:
// Handler 8
dup
int 8
==
bz l12_afterHandler8
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
// "./index.rsh:68:20:dot"
// "[]"
load 252
dup
bz l13_checkTxnK
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
l13_checkTxnK:
pop
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
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l14_checkTxnK:
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
b loopBody1
l12_afterHandler8:
// Handler 9
dup
int 9
==
bz l15_afterHandler9
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
// "./index.rsh:73:22:dot"
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
b loopBody1
l15_afterHandler9:
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
// "./index.rsh:88:17:dot"
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
b loopBody1
l16_afterHandler10:
int 0
assert
loopBody1:
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
bz l17_ifF
load 255
bz l18_ifF
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
int 3
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l18_ifF:
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
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l17_ifF:
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
l19_checkTxnK:
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v285",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v286",
                "type": "address"
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
    "name": "e2",
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
        "internalType": "struct T13",
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
        "internalType": "struct T13",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v189",
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
                "internalType": "uint256",
                "name": "v224",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v225",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
        "internalType": "struct T13",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v285",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v286",
                "type": "address"
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
    "name": "m2",
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
        "internalType": "struct T13",
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
        "internalType": "struct T13",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v189",
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
                "internalType": "uint256",
                "name": "v224",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v225",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
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
        "internalType": "struct T13",
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
  Bytecode: `0x60806040526040516200204038038062002040833981016040819052620000269162000482565b60008055604080518251815260208084015180518284015201518183015290517ff6f99043ebaefcd14be52433ca7dc9978aa637aef8ca1601e1816a0abc2f99299181900360600190a16200007e3415600862000117565b604080516060808201835260008284018181528352835160c0810185528181526020808201839052818601839052818401839052608080830184905260a080840185905282870193845288830151830151875152835185905283516001930192909252825133970187905282519094019590955280519092015251439201919091526200010b8162000141565b50504360035562000546565b816200013d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805180820190915260008082526020820152816020015160200151156200034b5760208201515115620002af57815151602083015160a00151620001889190620004e2565b8082526200019990600a90620004e2565b816020018181525050620001ee6040518060c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b825151808252602080850180516040908101516001600160a01b03908116848701908152835160609081015183168489019081529451608090810151828a019081528a51828b019081528b89015160a0808d0191825260036000554360015588519a8b019b909b5294518616968901969096529551909316908601529251908401525192820192909252905160c082015260e0015b60405160208183030381529060405260029080519060200190620002a992919062000363565b50505050565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c5151808b528d88018051511515885280518d01516001600160a01b039081168852815187015181168652905184015183526005909955436001558b519788015294511515998601999099529151851690840152519092169481019490945251908301529060c00162000283565b600080805560018190556200013d90600290620003f2565b828054620003719062000509565b90600052602060002090601f016020900481019282620003955760008555620003e0565b82601f10620003b057805160ff1916838001178555620003e0565b82800160010185558215620003e0579182015b82811115620003e0578251825591602001919060010190620003c3565b50620003ee92915062000434565b5090565b508054620004009062000509565b6000825580601f1062000411575050565b601f01602090049060005260206000209081019062000431919062000434565b50565b5b80821115620003ee576000815560010162000435565b604080519081016001600160401b03811182821017156200047c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200049657600080fd5b620004a06200044b565b835181526040601f1983011215620004b757600080fd5b620004c16200044b565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200050457634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200051e57607f821691505b602082108114156200054057634e487b7160e01b600052602260045260246000fd5b50919050565b611aea80620005566000396000f3fe6080604052600436106100bd5760003560e01c8063894452aa11610079578063ab53f2c611610056578063ab53f2c61461019e578063b1adad0e146101c1578063b23f7d59146101d4578063f147248d146101e757005b8063894452aa1461016557806396ce28641461017857806399de9a081461018b57005b80630d19a5fb146100c65780631e93b0f1146100d9578063306ab814146100fd5780635cf275dd146101105780637ee042b21461013d578063832307571461015057005b366100c457005b005b6100c46100d436600461166b565b6101fa565b3480156100e557600080fd5b506003545b6040519081526020015b60405180910390f35b6100c461010b36600461166b565b610386565b34801561011c57600080fd5b506101256104f6565b6040516001600160a01b0390911681526020016100f4565b6100c461014b36600461166b565b61075a565b34801561015c57600080fd5b506001546100ea565b6100c46101733660046116a0565b610a0a565b6100c461018636600461166b565b610bc9565b6100c461019936600461166b565b610ced565b3480156101aa57600080fd5b506101b3610dff565b6040516100f49291906116bc565b6100c46101cf36600461166b565b610e9c565b6100c46101e23660046116a0565b611078565b6100c46101f536600461166b565b611213565b61020a6003600054146013611349565b6102248135158061021d57506001548235145b6014611349565b60008080556002805461023690611719565b80601f016020809104026020016040519081016040528092919081815260200182805461026290611719565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b50505050508060200190518101906102c791906117ff565b90506102db8160a001514310156015611349565b7f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc05796278260405161030a9190611829565b60405180910390a161031e34156012611349565b610326611530565b815181515260208082018051600090819052815160019301929092526040808501805183516001600160a01b039182169301929092525182519116606090910152805160800191909152514360a09091015261038181611372565b505050565b610396600760005414602a611349565b6103b0813515806103a957506001548235145b602b611349565b6000808055600280546103c290611719565b80601f01602080910402602001604051908101604052809291908181526020018280546103ee90611719565b801561043b5780601f106104105761010080835404028352916020019161043b565b820191906000526020600020905b81548152906001019060200180831161041e57829003601f168201915b505050505080602001905181019061045391906118d5565b90507fbc00bef455301cf914c30c8a9af2a81c4e58a53a327cc5726ef84b62ea9c1fc9826040516104849190611829565b60405180910390a161049834156029611349565b6104a0611530565b815181515260208082018051600190819052815183015260608085015182516001600160a01b03918216604091820152938601518351911691015290830151815160800152514360a09091015261038181611372565b6000600360005414156105ad5760006002805461051290611719565b80601f016020809104026020016040519081016040528092919081815260200182805461053e90611719565b801561058b5780601f106105605761010080835404028352916020019161058b565b820191906000526020600020905b81548152906001019060200180831161056e57829003601f168201915b50505050508060200190518101906105a391906117ff565b6040015192915050565b60046000541415610662576000600280546105c790611719565b80601f01602080910402602001604051908101604052809291908181526020018280546105f390611719565b80156106405780601f1061061557610100808354040283529160200191610640565b820191906000526020600020905b81548152906001019060200180831161062357829003601f168201915b505050505080602001905181019061065891906118d5565b6020015192915050565b600560005414156107175760006002805461067c90611719565b80601f01602080910402602001604051908101604052809291908181526020018280546106a890611719565b80156106f55780601f106106ca576101008083540402835291602001916106f5565b820191906000526020600020905b8154815290600101906020018083116106d857829003601f168201915b505050505080602001905181019061070d91906118f1565b6060015192915050565b600660005414156107315760006002805461051290611719565b6007600054141561074b576000600280546105c790611719565b61075760006007611349565b90565b61076a600560005414601a611349565b6107848135158061077d57506001548235145b601b611349565b60008080556002805461079690611719565b80601f01602080910402602001604051908101604052809291908181526020018280546107c290611719565b801561080f5780601f106107e45761010080835404028352916020019161080f565b820191906000526020600020905b8154815290600101906020018083116107f257829003601f168201915b505050505080602001905181019061082791906118f1565b9050610846604051806040016040528060008152602001600081525090565b7f268006bf2528caa50bd87e17497ec52c5157e260ac8375195c1480a26b334cf8836040516108759190611829565b60405180910390a161088934156019611349565b6108996040840160208501611987565b156109995781516108aa90436119a4565b8082526108b990600a906119a4565b81602001818152505061090d6040518060c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b825181526040808401516001600160a01b0390811660208085019190915260608087015190921683850152608080870151928501929092528451918401919091528381015160a0840152600660005543600155905161096e918391016119ca565b6040516020818303038152906040526002908051906020019061099292919061157d565b5050505050565b6109a1611530565b825181515260208084015181830180519115159091528051600092019190915260408085015182516001600160a01b0391821692019190915260608086015183519216910152608080850151825190910152514360a090910152610a0481611372565b50505050565b610a1a600660005414601d611349565b610a3481351580610a2d57506001548235145b601e611349565b600080805560028054610a4690611719565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7290611719565b8015610abf5780601f10610a9457610100808354040283529160200191610abf565b820191906000526020600020905b815481529060010190602001808311610aa257829003601f168201915b5050505050806020019051810190610ad791906117ff565b9050610aea81608001514310601f611349565b7f68bf930aacf6125df908e732390392ebee197d6f1c49ee8be101e78d59e1ab2a82604051610b199190611a4e565b60405180910390a1610b2d3415601c611349565b604080516080810182526000808252602080830182815283850183815260608086019490945286518552868601516001600160a01b03169091529086013590529091610b7d918501908501611a5c565b6001600160a01b03166060820152600760005543600155604051610ba5908290602001611a79565b60405160208183030381529060405260029080519060200190610a0492919061157d565b610bd96006600054146026611349565b610bf381351580610bec57506001548235145b6027611349565b600080805560028054610c0590611719565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3190611719565b8015610c7e5780601f10610c5357610100808354040283529160200191610c7e565b820191906000526020600020905b815481529060010190602001808311610c6157829003601f168201915b5050505050806020019051810190610c9691906117ff565b9050610caa8160a001514310156028611349565b7f20946629c27bb4ab46740868cd074b2845a9d6ffb97be0e379492342bc24d52582604051610cd99190611829565b60405180910390a161031e34156025611349565b610cfd6004600054146017611349565b610d1781351580610d1057506001548235145b6018611349565b600080805560028054610d2990611719565b80601f0160208091040260200160405190810160405280929190818152602001828054610d5590611719565b8015610da25780601f10610d7757610100808354040283529160200191610da2565b820191906000526020600020905b815481529060010190602001808311610d8557829003601f168201915b5050505050806020019051810190610dba91906118d5565b90507f689557114e2e52e056e03b61e6c9aefd10ce977ec8f4368fb29885f113b07d2e82604051610deb9190611829565b60405180910390a161049834156016611349565b600060606000546002808054610e1490611719565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4090611719565b8015610e8d5780601f10610e6257610100808354040283529160200191610e8d565b820191906000526020600020905b815481529060010190602001808311610e7057829003601f168201915b50505050509050915091509091565b610eac6006600054146021611349565b610ec681351580610ebf57506001548235145b6022611349565b600080805560028054610ed890611719565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0490611719565b8015610f515780601f10610f2657610100808354040283529160200191610f51565b820191906000526020600020905b815481529060010190602001808311610f3457829003601f168201915b5050505050806020019051810190610f6991906117ff565b9050610f7d81608001514310156023611349565b610f8e8160a0015143106024611349565b7f958f78ebab349905eb0abbf2926ea4aab4a0f19ea393268c746af21c24b4022282604051610fbd9190611829565b60405180910390a1610fd6816060015134146020611349565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015611017573d6000803e3d6000fd5b50611020611530565b8151815152602080820180516000908190528151600190840152918401805182516001600160a01b03918216604090910152905182519116606090910152805160800191909152514360a09091015261038181611372565b611088600360005414600a611349565b6110a28135158061109b57506001548235145b600b611349565b6000808055600280546110b490611719565b80601f01602080910402602001604051908101604052809291908181526020018280546110e090611719565b801561112d5780601f106111025761010080835404028352916020019161112d565b820191906000526020600020905b81548152906001019060200180831161111057829003601f168201915b505050505080602001905181019061114591906117ff565b905061115881608001514310600c611349565b7fcc01f883ce3f2d10937a6168441de127ca8f55aaca79d198f194b4f23b2e8d21826040516111879190611a4e565b60405180910390a161119b34156009611349565b604080516080810182526000808252602080830182815283850183815260608086019490945286518552868601516001600160a01b031690915290860135905290916111eb918501908501611a5c565b6001600160a01b03166060820152600460005543600155604051610ba5908290602001611a79565b611223600360005414600e611349565b61123d8135158061123657506001548235145b600f611349565b60008080556002805461124f90611719565b80601f016020809104026020016040519081016040528092919081815260200182805461127b90611719565b80156112c85780601f1061129d576101008083540402835291602001916112c8565b820191906000526020600020905b8154815290600101906020018083116112ab57829003601f168201915b50505050508060200190518101906112e091906117ff565b90506112f481608001514310156010611349565b6113058160a0015143106011611349565b7fe92d4e1229145c13e718fdc692a322df4a6700c6bebac0841f0e9f44c56a1529826040516113349190611829565b60405180910390a1610fd681606001513414600d5b8161136e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051808201909152600080825260208201528160200151602001511561151a576020820151511561147f57815151602083015160a001516113b591906119a4565b8082526113c490600a906119a4565b8160200181815250506114186040518060c001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8251518152602080840180516040908101516001600160a01b03908116848601528251606090810151909116828601529151608090810151928501929092528451918401919091528382015160a084015260036000554360015551610ba5918391016119ca565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c5151808b528d88018051511515885280518d01516001600160a01b039081168852815187015181168652905184015183526005909955436001558b519788015294511515998601999099529151851690840152519092169481019490945251908301529060c001610ba5565b6000808055600181905561136e90600290611601565b60408051606081018252600091810191825290819081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291015290565b82805461158990611719565b90600052602060002090601f0160209004810192826115ab57600085556115f1565b82601f106115c457805160ff19168380011785556115f1565b828001600101855582156115f1579182015b828111156115f15782518255916020019190600101906115d6565b506115fd92915061163e565b5090565b50805461160d90611719565b6000825580601f1061161d575050565b601f01602090049060005260206000209081019061163b919061163e565b50565b5b808211156115fd576000815560010161163f565b60006040828403121561166557600080fd5b50919050565b60006040828403121561167d57600080fd5b6116878383611653565b9392505050565b60006060828403121561166557600080fd5b6000606082840312156116b257600080fd5b611687838361168e565b82815260006020604081840152835180604085015260005b818110156116f0578581018301518582016060015282016116d4565b81811115611702576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061172d57607f821691505b6020821081141561166557634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461163b57600080fd5b600060c0828403121561177557600080fd5b60405160c0810181811067ffffffffffffffff821117156117a657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516117c08161174e565b602082015260408301516117d38161174e565b80604083015250606083015160608201526080830151608082015260a083015160a08201525092915050565b600060c0828403121561181157600080fd5b6116878383611763565b801515811461163b57600080fd5b8135815260408101602083013561183f8161181b565b80151560208401525092915050565b60006080828403121561186057600080fd5b6040516080810181811067ffffffffffffffff8211171561189157634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516118ab8161174e565b60208201526040838101519082015260608301516118c88161174e565b6060919091015292915050565b6000608082840312156118e757600080fd5b611687838361184e565b600060a0828403121561190357600080fd5b60405160a0810181811067ffffffffffffffff8211171561193457634e487b7160e01b600052604160045260246000fd5b6040528251815260208301516119498161181b565b6020820152604083015161195c8161174e565b6040820152606083015161196f8161174e565b60608201526080928301519281019290925250919050565b60006020828403121561199957600080fd5b81356116878161181b565b600082198211156119c557634e487b7160e01b600052601160045260246000fd5b500190565b815181526020808301516001600160a01b039081169183019190915260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c081015b92915050565b80358252602081013560208301526040810135611a388161174e565b6001600160a01b03166040929092019190915250565b60608101611a168284611a1c565b600060208284031215611a6e57600080fd5b81356116878161174e565b60808101611a168284805182526020808201516001600160a01b0390811691840191909152604080830151908401526060918201511691015256fea26469706673582212206fa74c06c4afac8443bc4b97c3c33d2d5dffa9407f8f26a5a6652638740b9c3164736f6c63430008090033`,
  BytecodeLen: 8256,
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
  "Creator": Creator
  };
export const _APIs = {
  };
