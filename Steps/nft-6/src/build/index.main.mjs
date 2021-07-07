// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      "NFT": {
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v32] = svs;
              return (await ((async () => {
                
                
                return v32;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v32] = svs;
              return (await ((async () => {
                
                
                return v32;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v32] = svs;
              return (await ((async () => {
                
                
                return v32;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v32] = svs;
              return (await ((async () => {
                
                
                return v32;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v32] = svs;
              return (await ((async () => {
                
                
                return v32;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          }
        }
      },
    views: {
      1: [ctc0],
      2: [ctc0],
      3: [ctc0],
      4: [ctc0],
      5: [ctc0]
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

export async function Bidder(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Bidder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1, ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1, ctc0]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc6, ctc1, ctc1, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc6, ctc1, ctc1, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc0, ctc1, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc0, ctc1]);
  
  
  const v20 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 2, [ctc0, ctc0], false, false));
  const [v25, v26] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  let v29 = false;
  let v30 = true;
  let v31 = v24;
  let v32 = v24;
  let v33 = stdlib.checkedBigNumberify('./index.rsh:134:72:decimal', stdlib.UInt_max, 0);
  let v148 = v28;
  
  while ((() => {
    
    return v30;})()) {
    if (v29) {
      const v69 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:156:20:application', stdlib.UInt_max, 68));
      const v72 = stdlib.addressEq(v69, v31);
      const v74 = v72 ? false : true;
      const v78 = stdlib.addressEq(v69, v32);
      const v80 = v78 ? false : true;
      const v83 = v72 ? false : v80;
      let v85;
      if (v83) {
        const v84 = stdlib.protect(ctc0, await interact.getBid(v33), {
          at: './index.rsh:157:91:application',
          fs: ['at ./index.rsh:156:20:application call to [unknown function] (defined at: ./index.rsh:156:24:function exp)'],
          msg: 'getBid',
          who: 'Bidder'
          });
        v85 = v84;
        }
      else {
        v85 = v33;
        }
      const v99 = v83 ? v69 : v31;
      
      const v100 = stdlib.gt(v85, v33);
      const v107 = v100 ? v74 : false;
      
      const txn2 = await (ctc.sendrecv(4, 2, stdlib.checkedBigNumberify('./index.rsh:161:16:dot', stdlib.UInt_max, 4), [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc1], [v26, v31, v32, v33, v148, v85, v99], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc1], v107, false, v26, (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:161:16:dot', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:161:16:dot', stdlib.UInt_max, 4), v26, v31, v32, v33]);
        const [v109, v110] = txn2.data;
        const v112 = txn2.time;
        const v108 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:182:17:after expr stmt semicolon', stdlib.UInt_max, 5), v26, v32, v109, v110, v112]);
        sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:182:17:after expr stmt semicolon', stdlib.UInt_max, 5), v26, v32, v109, v110]);
        sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:182:17:after expr stmt semicolon', stdlib.UInt_max, 1), v32]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn2.didTimeout) {
        const v126 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:164:17:application', stdlib.UInt_max, 125));
        stdlib.protect(ctc2, await interact.seeOutcome(v33, v31), {
          at: './index.rsh:165:34:application',
          fs: ['at ./index.rsh:164:17:application call to [unknown function] (defined at: ./index.rsh:164:40:function exp)'],
          msg: 'seeOutcome',
          who: 'Bidder'
          });
        
        const v128 = stdlib.addressEq(v31, v126);
        
        const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:168:20:dot', stdlib.UInt_max, 4), [ctc0, ctc1, ctc1, ctc0, ctc0], [v26, v31, v32, v33, v148], [v33, []], [], v128, false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:168:64:decimal', stdlib.UInt_max, 10), v26), (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:168:20:dot', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:168:20:dot', stdlib.UInt_max, 4), v26, v31, v32, v33]);
          const [] = txn3.data;
          const v132 = txn3.time;
          const v129 = txn3.from;
          
          sim_r.txns.push({
            amt: v33,
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: v33,
            kind: 'from',
            to: v32,
            tok: undefined
            });
          const cv29 = false;
          const cv30 = true;
          const cv31 = v31;
          const cv32 = v31;
          const cv33 = stdlib.checkedBigNumberify('./index.rsh:179:77:decimal', stdlib.UInt_max, 0);
          const cv148 = v132;
          
          (() => {
            const v29 = cv29;
            const v30 = cv30;
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v148 = cv148;
            
            if ((() => {
              
              return v30;})()) {
              if (v29) {
                sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
                sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
                sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
                sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.view = [ctc9, []];
              sim_r.isHalt = true;
              }})();
          return sim_r;
          })));
        if (txn3.didTimeout) {
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:170:39:application',
            fs: ['at ./index.rsh:169:19:application call to [unknown function] (defined at: ./index.rsh:169:42:function exp)'],
            msg: 'informTimeout',
            who: 'Bidder'
            });
          
          const txn4 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:173:22:dot', stdlib.UInt_max, 4), [ctc0, ctc1, ctc1, ctc0, ctc0], [v26, v31, v32, v33, v148], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:173:22:dot', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:173:22:dot', stdlib.UInt_max, 4), v26, v31, v32, v33]);
            const [] = txn4.data;
            const v145 = txn4.time;
            const v143 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv29 = false;
            const cv30 = true;
            const cv31 = v32;
            const cv32 = v32;
            const cv33 = stdlib.checkedBigNumberify('./index.rsh:174:74:decimal', stdlib.UInt_max, 0);
            const cv148 = v145;
            
            (() => {
              const v29 = cv29;
              const v30 = cv30;
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v148 = cv148;
              
              if ((() => {
                
                return v30;})()) {
                if (v29) {
                  sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
                  sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
                  sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc9, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                sim_r.view = [ctc9, []];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          const [] = txn4.data;
          const v145 = txn4.time;
          const v143 = txn4.from;
          ;
          const cv29 = false;
          const cv30 = true;
          const cv31 = v32;
          const cv32 = v32;
          const cv33 = stdlib.checkedBigNumberify('./index.rsh:174:74:decimal', stdlib.UInt_max, 0);
          const cv148 = v145;
          
          v29 = cv29;
          v30 = cv30;
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v148 = cv148;
          
          continue;
          }
        else {
          const [] = txn3.data;
          const v132 = txn3.time;
          const v129 = txn3.from;
          ;
          ;
          const cv29 = false;
          const cv30 = true;
          const cv31 = v31;
          const cv32 = v31;
          const cv33 = stdlib.checkedBigNumberify('./index.rsh:179:77:decimal', stdlib.UInt_max, 0);
          const cv148 = v132;
          
          v29 = cv29;
          v30 = cv30;
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v148 = cv148;
          
          continue;}
        }
      else {
        const [v109, v110] = txn2.data;
        const v112 = txn2.time;
        const v108 = txn2.from;
        ;
        stdlib.protect(ctc2, await interact.showBid(v109, v110), {
          at: './index.rsh:185:27:application',
          fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:36:function exp)'],
          msg: 'showBid',
          who: 'Bidder'
          });
        
        const txn3 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 4), [ctc0, ctc1, ctc0, ctc1, ctc0], [v26, v32, v109, v110, v112], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 5), v26, v32, v109, v110, v112]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 5), v26, v32, v109, v110]);
          const [] = txn3.data;
          const v121 = txn3.time;
          const v119 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv29 = true;
          const cv30 = true;
          const cv31 = v110;
          const cv32 = v32;
          const cv33 = v109;
          const cv148 = v121;
          
          (() => {
            const v29 = cv29;
            const v30 = cv30;
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v148 = cv148;
            
            if ((() => {
              
              return v30;})()) {
              if (v29) {
                sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
                sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
                sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
                sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.view = [ctc9, []];
              sim_r.isHalt = true;
              }})();
          return sim_r;
          })));
        const [] = txn3.data;
        const v121 = txn3.time;
        const v119 = txn3.from;
        ;
        const cv29 = true;
        const cv30 = true;
        const cv31 = v110;
        const cv32 = v32;
        const cv33 = v109;
        const cv148 = v121;
        
        v29 = cv29;
        v30 = cv30;
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v148 = cv148;
        
        continue;
        }
      }
    else {
      const v48 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:141:15:application', stdlib.UInt_max, 47));
      const v50 = stdlib.addressEq(v48, v32);
      let v52;
      if (v50) {
        const v51 = stdlib.protect(ctc6, await interact.isAuctionOn(), {
          at: './index.rsh:142:81:application',
          fs: ['at ./index.rsh:141:15:application call to [unknown function] (defined at: ./index.rsh:141:38:function exp)'],
          msg: 'isAuctionOn',
          who: 'Bidder'
          });
        v52 = v51;
        }
      else {
        v52 = true;
        }
      
      const v53 = stdlib.addressEq(v32, v48);
      
      const txn2 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:145:19:dot', stdlib.UInt_max, 5), [ctc0, ctc6, ctc1, ctc1, ctc0, ctc0, ctc6], [v26, v29, v31, v32, v33, v148, v52], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc6], v53, false, false, (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:145:19:dot', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:145:19:dot', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
        const [v56] = txn2.data;
        const v58 = txn2.time;
        const v55 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        if (v56) {
          sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 7), v26, v31, v32, v33, v58]);
          sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 7), v26, v31, v32, v33]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v32]];
          sim_r.isHalt = false;
          }
        else {
          
          const cv29 = v29;
          const cv30 = false;
          const cv31 = v31;
          const cv32 = v32;
          const cv33 = v33;
          const cv148 = v58;
          
          (() => {
            const v29 = cv29;
            const v30 = cv30;
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v148 = cv148;
            
            if ((() => {
              
              return v30;})()) {
              if (v29) {
                sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
                sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
                sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
                sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.view = [ctc9, []];
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        })));
      const [v56] = txn2.data;
      const v58 = txn2.time;
      const v55 = txn2.from;
      ;
      if (v56) {
        const v69 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:156:20:application', stdlib.UInt_max, 68));
        const v72 = stdlib.addressEq(v69, v31);
        const v74 = v72 ? false : true;
        const v78 = stdlib.addressEq(v69, v32);
        const v80 = v78 ? false : true;
        const v83 = v72 ? false : v80;
        let v85;
        if (v83) {
          const v84 = stdlib.protect(ctc0, await interact.getBid(v33), {
            at: './index.rsh:157:91:application',
            fs: ['at ./index.rsh:156:20:application call to [unknown function] (defined at: ./index.rsh:156:24:function exp)'],
            msg: 'getBid',
            who: 'Bidder'
            });
          v85 = v84;
          }
        else {
          v85 = v33;
          }
        const v99 = v83 ? v69 : v31;
        
        const v100 = stdlib.gt(v85, v33);
        const v107 = v100 ? v74 : false;
        
        const txn3 = await (ctc.sendrecv(9, 2, stdlib.checkedBigNumberify('./index.rsh:161:16:dot', stdlib.UInt_max, 4), [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc1], [v26, v31, v32, v33, v58, v85, v99], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc1], v107, false, v26, (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:161:16:dot', stdlib.UInt_max, 7), v26, v31, v32, v33, v58]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:161:16:dot', stdlib.UInt_max, 7), v26, v31, v32, v33]);
          const [v109, v110] = txn3.data;
          const v112 = txn3.time;
          const v108 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:182:17:after expr stmt semicolon', stdlib.UInt_max, 8), v26, v32, v109, v110, v112]);
          sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:182:17:after expr stmt semicolon', stdlib.UInt_max, 8), v26, v32, v109, v110]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:182:17:after expr stmt semicolon', stdlib.UInt_max, 3), v32]];
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn3.didTimeout) {
          const v126 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:164:17:application', stdlib.UInt_max, 125));
          stdlib.protect(ctc2, await interact.seeOutcome(v33, v31), {
            at: './index.rsh:165:34:application',
            fs: ['at ./index.rsh:164:17:application call to [unknown function] (defined at: ./index.rsh:164:40:function exp)'],
            msg: 'seeOutcome',
            who: 'Bidder'
            });
          
          const v128 = stdlib.addressEq(v31, v126);
          
          const txn4 = await (ctc.sendrecv(10, 0, stdlib.checkedBigNumberify('./index.rsh:168:20:dot', stdlib.UInt_max, 4), [ctc0, ctc1, ctc1, ctc0, ctc0], [v26, v31, v32, v33, v58], [v33, []], [], v128, false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:168:64:decimal', stdlib.UInt_max, 10), v26), (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:168:20:dot', stdlib.UInt_max, 7), v26, v31, v32, v33, v58]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:168:20:dot', stdlib.UInt_max, 7), v26, v31, v32, v33]);
            const [] = txn4.data;
            const v132 = txn4.time;
            const v129 = txn4.from;
            
            sim_r.txns.push({
              amt: v33,
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v33,
              kind: 'from',
              to: v32,
              tok: undefined
              });
            const cv29 = false;
            const cv30 = true;
            const cv31 = v31;
            const cv32 = v31;
            const cv33 = stdlib.checkedBigNumberify('./index.rsh:179:77:decimal', stdlib.UInt_max, 0);
            const cv148 = v132;
            
            (() => {
              const v29 = cv29;
              const v30 = cv30;
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v148 = cv148;
              
              if ((() => {
                
                return v30;})()) {
                if (v29) {
                  sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
                  sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
                  sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc9, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                sim_r.view = [ctc9, []];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          if (txn4.didTimeout) {
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:170:39:application',
              fs: ['at ./index.rsh:169:19:application call to [unknown function] (defined at: ./index.rsh:169:42:function exp)'],
              msg: 'informTimeout',
              who: 'Bidder'
              });
            
            const txn5 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('./index.rsh:173:22:dot', stdlib.UInt_max, 4), [ctc0, ctc1, ctc1, ctc0, ctc0], [v26, v31, v32, v33, v58], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:173:22:dot', stdlib.UInt_max, 7), v26, v31, v32, v33, v58]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:173:22:dot', stdlib.UInt_max, 7), v26, v31, v32, v33]);
              const [] = txn5.data;
              const v145 = txn5.time;
              const v143 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const cv29 = false;
              const cv30 = true;
              const cv31 = v32;
              const cv32 = v32;
              const cv33 = stdlib.checkedBigNumberify('./index.rsh:174:74:decimal', stdlib.UInt_max, 0);
              const cv148 = v145;
              
              (() => {
                const v29 = cv29;
                const v30 = cv30;
                const v31 = cv31;
                const v32 = cv32;
                const v33 = cv33;
                const v148 = cv148;
                
                if ((() => {
                  
                  return v30;})()) {
                  if (v29) {
                    sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
                    sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
                    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
                    sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
                    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
                    sim_r.isHalt = false;
                    }}
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.nextSt = stdlib.digest(ctc9, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                  sim_r.view = [ctc9, []];
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              })));
            const [] = txn5.data;
            const v145 = txn5.time;
            const v143 = txn5.from;
            ;
            const cv29 = false;
            const cv30 = true;
            const cv31 = v32;
            const cv32 = v32;
            const cv33 = stdlib.checkedBigNumberify('./index.rsh:174:74:decimal', stdlib.UInt_max, 0);
            const cv148 = v145;
            
            v29 = cv29;
            v30 = cv30;
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v148 = cv148;
            
            continue;
            }
          else {
            const [] = txn4.data;
            const v132 = txn4.time;
            const v129 = txn4.from;
            ;
            ;
            const cv29 = false;
            const cv30 = true;
            const cv31 = v31;
            const cv32 = v31;
            const cv33 = stdlib.checkedBigNumberify('./index.rsh:179:77:decimal', stdlib.UInt_max, 0);
            const cv148 = v132;
            
            v29 = cv29;
            v30 = cv30;
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v148 = cv148;
            
            continue;}
          }
        else {
          const [v109, v110] = txn3.data;
          const v112 = txn3.time;
          const v108 = txn3.from;
          ;
          stdlib.protect(ctc2, await interact.showBid(v109, v110), {
            at: './index.rsh:185:27:application',
            fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:36:function exp)'],
            msg: 'showBid',
            who: 'Bidder'
            });
          
          const txn4 = await (ctc.sendrecv(12, 0, stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 4), [ctc0, ctc1, ctc0, ctc1, ctc0], [v26, v32, v109, v110, v112], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 8), v26, v32, v109, v110, v112]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 8), v26, v32, v109, v110]);
            const [] = txn4.data;
            const v121 = txn4.time;
            const v119 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv29 = true;
            const cv30 = true;
            const cv31 = v110;
            const cv32 = v32;
            const cv33 = v109;
            const cv148 = v121;
            
            (() => {
              const v29 = cv29;
              const v30 = cv30;
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v148 = cv148;
              
              if ((() => {
                
                return v30;})()) {
                if (v29) {
                  sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
                  sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
                  sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc9, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                sim_r.view = [ctc9, []];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          const [] = txn4.data;
          const v121 = txn4.time;
          const v119 = txn4.from;
          ;
          const cv29 = true;
          const cv30 = true;
          const cv31 = v110;
          const cv32 = v32;
          const cv33 = v109;
          const cv148 = v121;
          
          v29 = cv29;
          v30 = cv30;
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v148 = cv148;
          
          continue;
          }
        }
      else {
        stdlib.protect(ctc2, await interact.seeOutcome(v33, v32), {
          at: './index.rsh:148:34:application',
          fs: ['at ./index.rsh:147:17:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)'],
          msg: 'seeOutcome',
          who: 'Bidder'
          });
        
        const cv29 = v29;
        const cv30 = false;
        const cv31 = v31;
        const cv32 = v32;
        const cv33 = v33;
        const cv148 = v58;
        
        v29 = cv29;
        v30 = cv30;
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v148 = cv148;
        
        continue;}
      }}
  return;
  
  };
export async function Creator(ctc, interact) {
  if (ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1, ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc1, ctc0]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc6, ctc1, ctc1, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc6, ctc1, ctc1, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc0, ctc1, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0, ctc1, ctc0, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0]);
  
  
  const v20 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.deadline, 'for Creator\'s interact field deadline');
  const v19 = stdlib.protect(ctc0, interact.getId, 'for Creator\'s interact field getId');
  
  const txn1 = await (ctc.sendrecv(1, 2, stdlib.checkedBigNumberify('./index.rsh:132:15:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0], [v20, v19, v18], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:132:15:dot', stdlib.UInt_max, 0), v20]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:132:15:dot', stdlib.UInt_max, 0)]);
    const [v25, v26] = txn1.data;
    const v28 = txn1.time;
    const v24 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v29 = false;
    const v30 = true;
    const v31 = v24;
    const v32 = v24;
    const v33 = stdlib.checkedBigNumberify('./index.rsh:134:72:decimal', stdlib.UInt_max, 0);
    const v148 = v28;
    
    if ((() => {
      
      return v30;})()) {
      if (v29) {
        sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
        sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
        sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
        sim_r.isHalt = false;
        }
      else {
        sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
        sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
        sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
        sim_r.isHalt = false;
        }}
    else {
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc9, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
      sim_r.view = [ctc9, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v25, v26] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  let v29 = false;
  let v30 = true;
  let v31 = v24;
  let v32 = v24;
  let v33 = stdlib.checkedBigNumberify('./index.rsh:134:72:decimal', stdlib.UInt_max, 0);
  let v148 = v28;
  
  while ((() => {
    
    return v30;})()) {
    if (v29) {
      const txn2 = await (ctc.recv(4, 2, [ctc0, ctc1], false, v26));
      if (txn2.didTimeout) {
        stdlib.protect(ctc2, await interact.seeOutcome(v33, v31), {
          at: './index.rsh:165:34:application',
          fs: ['at ./index.rsh:164:17:application call to [unknown function] (defined at: ./index.rsh:164:40:function exp)'],
          msg: 'seeOutcome',
          who: 'Creator'
          });
        
        const txn3 = await (ctc.recv(5, 0, [], false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:168:64:decimal', stdlib.UInt_max, 10), v26)));
        if (txn3.didTimeout) {
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:170:39:application',
            fs: ['at ./index.rsh:169:19:application call to [unknown function] (defined at: ./index.rsh:169:42:function exp)'],
            msg: 'informTimeout',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.recv(6, 0, [], false, false));
          const [] = txn4.data;
          const v145 = txn4.time;
          const v143 = txn4.from;
          ;
          const cv29 = false;
          const cv30 = true;
          const cv31 = v32;
          const cv32 = v32;
          const cv33 = stdlib.checkedBigNumberify('./index.rsh:174:74:decimal', stdlib.UInt_max, 0);
          const cv148 = v145;
          
          v29 = cv29;
          v30 = cv30;
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v148 = cv148;
          
          continue;
          }
        else {
          const [] = txn3.data;
          const v132 = txn3.time;
          const v129 = txn3.from;
          ;
          ;
          const cv29 = false;
          const cv30 = true;
          const cv31 = v31;
          const cv32 = v31;
          const cv33 = stdlib.checkedBigNumberify('./index.rsh:179:77:decimal', stdlib.UInt_max, 0);
          const cv148 = v132;
          
          v29 = cv29;
          v30 = cv30;
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v148 = cv148;
          
          continue;}
        }
      else {
        const [v109, v110] = txn2.data;
        const v112 = txn2.time;
        const v108 = txn2.from;
        ;
        stdlib.protect(ctc2, await interact.showBid(v109, v110), {
          at: './index.rsh:185:27:application',
          fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:36:function exp)'],
          msg: 'showBid',
          who: 'Creator'
          });
        
        const txn3 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 4), [ctc0, ctc1, ctc0, ctc1, ctc0], [v26, v32, v109, v110, v112], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 5), v26, v32, v109, v110, v112]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 5), v26, v32, v109, v110]);
          const [] = txn3.data;
          const v121 = txn3.time;
          const v119 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv29 = true;
          const cv30 = true;
          const cv31 = v110;
          const cv32 = v32;
          const cv33 = v109;
          const cv148 = v121;
          
          (() => {
            const v29 = cv29;
            const v30 = cv30;
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v148 = cv148;
            
            if ((() => {
              
              return v30;})()) {
              if (v29) {
                sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
                sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
                sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
                sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.view = [ctc9, []];
              sim_r.isHalt = true;
              }})();
          return sim_r;
          })));
        const [] = txn3.data;
        const v121 = txn3.time;
        const v119 = txn3.from;
        ;
        const cv29 = true;
        const cv30 = true;
        const cv31 = v110;
        const cv32 = v32;
        const cv33 = v109;
        const cv148 = v121;
        
        v29 = cv29;
        v30 = cv30;
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v148 = cv148;
        
        continue;
        }
      }
    else {
      const v44 = stdlib.addressEq(v24, v32);
      let v46;
      if (v44) {
        const v45 = stdlib.protect(ctc6, await interact.isAuctionOn(), {
          at: './index.rsh:142:81:application',
          fs: ['at ./index.rsh:141:15:application call to [unknown function] (defined at: ./index.rsh:141:38:function exp)'],
          msg: 'isAuctionOn',
          who: 'Creator'
          });
        v46 = v45;
        }
      else {
        v46 = true;
        }
      
      const v54 = stdlib.addressEq(v32, v24);
      
      const txn2 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:145:19:dot', stdlib.UInt_max, 5), [ctc0, ctc6, ctc1, ctc1, ctc0, ctc0, ctc6], [v26, v29, v31, v32, v33, v148, v46], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc6], v54, false, false, (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:145:19:dot', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:145:19:dot', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
        const [v56] = txn2.data;
        const v58 = txn2.time;
        const v55 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        if (v56) {
          sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 7), v26, v31, v32, v33, v58]);
          sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 7), v26, v31, v32, v33]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v32]];
          sim_r.isHalt = false;
          }
        else {
          
          const cv29 = v29;
          const cv30 = false;
          const cv31 = v31;
          const cv32 = v32;
          const cv33 = v33;
          const cv148 = v58;
          
          (() => {
            const v29 = cv29;
            const v30 = cv30;
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v148 = cv148;
            
            if ((() => {
              
              return v30;})()) {
              if (v29) {
                sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
                sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
                sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
                sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.view = [ctc9, []];
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        })));
      const [v56] = txn2.data;
      const v58 = txn2.time;
      const v55 = txn2.from;
      ;
      if (v56) {
        const txn3 = await (ctc.recv(9, 2, [ctc0, ctc1], false, v26));
        if (txn3.didTimeout) {
          stdlib.protect(ctc2, await interact.seeOutcome(v33, v31), {
            at: './index.rsh:165:34:application',
            fs: ['at ./index.rsh:164:17:application call to [unknown function] (defined at: ./index.rsh:164:40:function exp)'],
            msg: 'seeOutcome',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.recv(10, 0, [], false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:168:64:decimal', stdlib.UInt_max, 10), v26)));
          if (txn4.didTimeout) {
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:170:39:application',
              fs: ['at ./index.rsh:169:19:application call to [unknown function] (defined at: ./index.rsh:169:42:function exp)'],
              msg: 'informTimeout',
              who: 'Creator'
              });
            
            const txn5 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn5.data;
            const v145 = txn5.time;
            const v143 = txn5.from;
            ;
            const cv29 = false;
            const cv30 = true;
            const cv31 = v32;
            const cv32 = v32;
            const cv33 = stdlib.checkedBigNumberify('./index.rsh:174:74:decimal', stdlib.UInt_max, 0);
            const cv148 = v145;
            
            v29 = cv29;
            v30 = cv30;
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v148 = cv148;
            
            continue;
            }
          else {
            const [] = txn4.data;
            const v132 = txn4.time;
            const v129 = txn4.from;
            ;
            ;
            const cv29 = false;
            const cv30 = true;
            const cv31 = v31;
            const cv32 = v31;
            const cv33 = stdlib.checkedBigNumberify('./index.rsh:179:77:decimal', stdlib.UInt_max, 0);
            const cv148 = v132;
            
            v29 = cv29;
            v30 = cv30;
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v148 = cv148;
            
            continue;}
          }
        else {
          const [v109, v110] = txn3.data;
          const v112 = txn3.time;
          const v108 = txn3.from;
          ;
          stdlib.protect(ctc2, await interact.showBid(v109, v110), {
            at: './index.rsh:185:27:application',
            fs: ['at ./index.rsh:184:13:application call to [unknown function] (defined at: ./index.rsh:184:36:function exp)'],
            msg: 'showBid',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.sendrecv(12, 0, stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 4), [ctc0, ctc1, ctc0, ctc1, ctc0], [v26, v32, v109, v110, v112], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 8), v26, v32, v109, v110, v112]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:188:17:dot', stdlib.UInt_max, 8), v26, v32, v109, v110]);
            const [] = txn4.data;
            const v121 = txn4.time;
            const v119 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv29 = true;
            const cv30 = true;
            const cv31 = v110;
            const cv32 = v32;
            const cv33 = v109;
            const cv148 = v121;
            
            (() => {
              const v29 = cv29;
              const v30 = cv30;
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v148 = cv148;
              
              if ((() => {
                
                return v30;})()) {
                if (v29) {
                  sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33, v148]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 4), v26, v31, v32, v33]);
                  sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:154:17:after expr stmt semicolon', stdlib.UInt_max, 2), v32]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33, v148]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 6), v26, v29, v31, v32, v33]);
                  sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:139:19:after expr stmt semicolon', stdlib.UInt_max, 5), v32]];
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc9, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                sim_r.view = [ctc9, []];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          const [] = txn4.data;
          const v121 = txn4.time;
          const v119 = txn4.from;
          ;
          const cv29 = true;
          const cv30 = true;
          const cv31 = v110;
          const cv32 = v32;
          const cv33 = v109;
          const cv148 = v121;
          
          v29 = cv29;
          v30 = cv30;
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v148 = cv148;
          
          continue;
          }
        }
      else {
        stdlib.protect(ctc2, await interact.seeOutcome(v33, v32), {
          at: './index.rsh:148:34:application',
          fs: ['at ./index.rsh:147:17:application call to [unknown function] (defined at: ./index.rsh:147:40:function exp)'],
          msg: 'seeOutcome',
          who: 'Creator'
          });
        
        const cv29 = v29;
        const cv30 = false;
        const cv31 = v31;
        const cv32 = v32;
        const cv33 = v33;
        const cv148 = v58;
        
        v29 = cv29;
        v30 = cv30;
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v148 = cv148;
        
        continue;}
      }}
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
gtxn 2 Sender
byte "{{m12}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(djA=)
gtxna 0 ApplicationArgs 2
substring 0 40
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(djA=)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 302
    }, null, null, {
    count: 9,
    size: 406
    }, {
    count: 9,
    size: 366
    }, {
    count: 9,
    size: 366
    }, {
    count: 9,
    size: 366
    }, {
    count: 9,
    size: 368
    }, {
    count: 9,
    size: 406
    }, {
    count: 9,
    size: 366
    }, {
    count: 9,
    size: 366
    }, {
    count: 9,
    size: 366
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:132:15:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 5
itob
gtxn 0 Sender
concat
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 254
itob
concat
int 0
itob // bool
substring 7 8
concat
gtxn 0 Sender
concat
gtxn 0 Sender
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 251
dup
substring 8 40
store 250
pop
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
itob
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:161:16:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 1
itob
load 253
concat
load 1
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
itob
concat
load 253
concat
load 251
itob
concat
load 250
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 255
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
itob
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:168:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 252
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 5
itob
load 254
concat
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
itob
concat
int 0
itob // bool
substring 7 8
concat
load 254
concat
load 254
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 5
==
assert
load 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
load 4
btoi
load 255
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
pop
load 4
btoi
load 255
int 10
+
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
dup
gtxn 4 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
itob
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:173:22:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 5
itob
load 253
concat
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
itob
concat
int 0
itob // bool
substring 7 8
concat
load 253
concat
load 253
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 255
int 10
+
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
pop
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 5
int 5
itob
load 255
itob
concat
load 254
concat
load 253
itob
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:188:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 2
itob
load 254
concat
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
itob
concat
load 252
concat
load 254
concat
load 253
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 9
btoi
store 254
dup
substring 9 41
store 253
dup
substring 41 73
store 252
dup
substring 73 81
btoi
store 251
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 250
pop
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
load 255
itob
concat
load 254
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
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:145:19:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 250
bz l0
// check view bs
int 4
itob
load 252
concat
load 1
==
assert
// compute state in HM_Set 7
int 7
itob
load 255
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
byte base64(AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)
load 1
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 5
==
assert
load 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 251
dup
substring 8 40
store 250
pop
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 7
int 7
itob
load 255
itob
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:161:16:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 3
itob
load 253
concat
load 1
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
itob
concat
load 253
concat
load 251
itob
concat
load 250
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 255
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 7
int 7
itob
load 255
itob
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:168:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 252
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 5
itob
load 254
concat
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
itob
concat
int 0
itob // bool
substring 7 8
concat
load 254
concat
load 254
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 5
==
assert
load 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
load 4
btoi
load 255
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
pop
load 4
btoi
load 255
int 10
+
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
dup
gtxn 4 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 7
int 7
itob
load 255
itob
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:173:22:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 5
itob
load 253
concat
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
itob
concat
int 0
itob // bool
substring 7 8
concat
load 253
concat
load 253
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
load 255
int 10
+
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
pop
// Handler 12
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
load 255
itob
concat
load 254
concat
load 253
itob
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:188:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 2
itob
load 254
concat
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
itob
concat
load 252
concat
load 254
concat
load 253
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 1,
  viewSize: 40
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v20",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v110",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v112",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v110",
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
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v110",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v112",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v29",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v56",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v110",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
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
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v20",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v110",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v112",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v110",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v110",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v112",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v29",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v148",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v56",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v31",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v33",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v110",
                "type": "address"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382526000600181905583519182018190529192016040516020818303038152906040526002908051906020019062000072929190620000b4565b50506040805160208082018352600080835293518252825180820185905291518284015282518083038401815260609092019092528051910120905562000197565b828054620000c2906200015a565b90600052602060002090601f016020900481019282620000e6576000855562000131565b82601f106200010157805160ff191683800117855562000131565b8280016001018555821562000131579182015b828111156200013157825182559160200191906001019062000114565b506200013f92915062000143565b5090565b5b808211156200013f576000815560010162000144565b6002810460018216806200016f57607f821691505b602082108114156200019157634e487b7160e01b600052602260045260246000fd5b50919050565b61171880620001a76000396000f3fe6080604052600436106100a05760003560e01c806375df91721161006457806375df91721461012b5780638efa32c51461013e5780639170e45c14610151578063919f775514610164578063c9c6022f14610177578063d7148a7f1461018a576100a7565b806310f48adc146100ac57806312fa0022146100c157806326f68ebd146100d45780634886829d146100e75780635cf275dd146100fa576100a7565b366100a757005b600080fd5b6100bf6100ba3660046113cf565b61019d565b005b6100bf6100cf36600461135d565b610285565b6100bf6100e2366004611342565b610393565b6100bf6100f536600461135d565b610515565b34801561010657600080fd5b5061010f610646565b6040516001600160a01b03909116815260200160405180910390f35b6100bf61013936600461135d565b610767565b6100bf61014c36600461135d565b610806565b6100bf61015f366004611342565b61096c565b6100bf61017236600461135d565b610c03565b6100bf610185366004611342565b610c7b565b6100bf61019836600461135d565b610dde565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146101da57600080fd5b6000805534156101e957600080fd5b604080518235815260208084013590820152828201358183015290517f50407a4b90da10f3360d0261cffec8fb082a93699e2f91827b46a545fd3694e99181900360600190a1610237611169565b805160408084013590915260208281018051600090819052815160019301929092528051339301839052805160600192909252815160800152514360a09091015261028181610ee7565b5050565b6040516102999060089083906020016115a0565b6040516020818303038152906040528051906020012060001c600054146102bf57600080fd5b6000805534156102ce57600080fd5b7f7653e578ba1a2f5de16c83aaa5192641001e8476010d99cd81a5622cc28f9405816040516102fd9190611552565b60405180910390a161030d611169565b805182359052602080820180516001908190529051909101526103366080830160608401611305565b6020808301516001600160a01b0390921660409283015261035b918401908401611305565b6020820180516001600160a01b0390921660609092019190915280516040840135608090910152514360a09091015261028181610ee7565b6040516103a79060049083906020016115ff565b6040516020818303038152906040528051906020012060001c600054146103cd57600080fd5b600080556103e081356080830135611674565b43106103eb57600080fd5b34156103f657600080fd5b7fb8aafb59e9a02abc6bcd264de4ea7d427880b7fce3d66310cb8045e8ca638357816040516104259190611520565b60405180910390a160408051602081019091526000815261044c6060830160408401611305565b6001600160a01b0316808252600180556040805160208082019390935281518082038401815290820190915280516104889260029201906111b6565b5061049161123a565b823581526104a56060840160408501611305565b6001600160a01b0316602082015260a083013560408201526104cd60e0840160c08501611305565b6001600160a01b031660608201524360808201526040516104f59060059083906020016115b4565b60408051601f198184030181529190528051602090910120600055505050565b6040516105299060049083906020016115ff565b6040516020818303038152906040528051906020012060001c6000541461054f57600080fd5b600080558035610564600a6080840135611674565b61056e9190611674565b43101561057a57600080fd5b341561058557600080fd5b7fa1e34863758b23d5409b405c15cada891c85914dfee942848e8bab532e18465c816040516105b49190611544565b60405180910390a16105c4611169565b80518235905260208082018051600090525160019101526105eb6060830160408401611305565b60208201516001600160a01b039091166040918201526106119060608401908401611305565b6020820180516001600160a01b0390921660609092019190915280516000608090910152514360a09091015261028181610ee7565b60006001805414156106fc5760006002805461066190611698565b80601f016020809104026020016040519081016040528092919081815260200182805461068d90611698565b80156106da5780601f106106af576101008083540402835291602001916106da565b820191906000526020600020905b8154815290600101906020018083116106bd57829003601f168201915b50505050508060200190518101906106f29190611378565b5191506107649050565b600260015414156107165760006002805461066190611698565b600360015414156107305760006002805461066190611698565b6004600154141561074a5760006002805461066190611698565b600560015414156100a75760006002805461066190611698565b90565b60405161077b9060079083906020016115ff565b6040516020818303038152906040528051906020012060001c600054146107a157600080fd5b6000805580356107b6600a6080840135611674565b6107c09190611674565b4310156107cc57600080fd5b34156107d757600080fd5b7f3241b01134a3afe56c6cb72e8cfd1385330823ecd3c17ac6a19cc6bb05bedbf2816040516105b49190611544565b60405161081a9060049083906020016115ff565b6040516020818303038152906040528051906020012060001c6000541461084057600080fd5b6000805561085381356080830135611674565b431015801561087b5750803561086e600a6080840135611674565b6108789190611674565b43105b61088457600080fd5b3460608201351461089457600080fd5b6108a46060820160408301611305565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f193505050501580156108df573d6000803e3d6000fd5b507fcf898e273ae93cd666fd8d73bb88b7192b1938f710a5c317f97b43ab44e808578160405161090f9190611544565b60405180910390a161091f611169565b8051823590526020808201805160009052516001908201526109479060408401908401611305565b6020808301516001600160a01b03909216604092830152610611918401908401611305565b604051610980906006908390602001611660565b6040516020818303038152906040528051906020012060001c600054146109a657600080fd5b6000805534156109b557600080fd5b6109c560e0820160c08301611328565b15610b2b577fd0459dfa3e7edfb581243eabbeaeb46af7ebcd7c83bc8e2e5c85e0144dbf3be3816040516109f99190611579565b60405180910390a1604080516020810190915260008152610a206080830160608401611305565b6001600160a01b03168082526004600155604080516020808201939093528151808203840181529082019091528051610a5d9260029201906111b6565b50610aa26040518060a001604052806000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081525090565b82358152610ab66060840160408501611305565b6001600160a01b03166020820152610ad46080840160608501611305565b6001600160a01b03166040808301919091526080808501356060840152439083015251610b08906007908390602001611613565b60408051601f19818403018152919052805160209091012060005550610c009050565b7fd0459dfa3e7edfb581243eabbeaeb46af7ebcd7c83bc8e2e5c85e0144dbf3be381604051610b5a9190611579565b60405180910390a1610b6a611169565b805182359052610b806040830160208401611328565b6020808301805192151590925290516000910152610ba46060830160408401611305565b60208201516001600160a01b03909116604090910152610bca6080830160608401611305565b6020820180516001600160a01b039092166060909201919091528051608080850135910152514360a09091015261028181610ee7565b50565b604051610c179060059083906020016115a0565b6040516020818303038152906040528051906020012060001c60005414610c3d57600080fd5b600080553415610c4c57600080fd5b7f3654f379b85ddc4f63ac4c0d2614f1f7648679a9042379d4f5d41d0e141b5fd7816040516102fd9190611552565b604051610c8f9060079083906020016115ff565b6040516020818303038152906040528051906020012060001c60005414610cb557600080fd5b60008055610cc881356080830135611674565b4310610cd357600080fd5b3415610cde57600080fd5b7f298a852d92b7e759532507330d328ceb93216c6e25ad813bee2ecbac4997b1a981604051610d0d9190611520565b60405180910390a1604080516020810190915260008152610d346060830160408401611305565b6001600160a01b03168082526003600155604080516020808201939093528151808203840181529082019091528051610d719260029201906111b6565b50610d7a61123a565b82358152610d8e6060840160408501611305565b6001600160a01b0316602082015260a08301356040820152610db660e0840160c08501611305565b6001600160a01b031660608201524360808201526040516104f59060089083906020016115b4565b604051610df29060079083906020016115ff565b6040516020818303038152906040528051906020012060001c60005414610e1857600080fd5b60008055610e2b81356080830135611674565b4310158015610e5357508035610e46600a6080840135611674565b610e509190611674565b43105b610e5c57600080fd5b34606082013514610e6c57600080fd5b610e7c6060820160408301611305565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f19350505050158015610eb7573d6000803e3d6000fd5b507fac0d428a003f2ec8f7e4e654c3da8c25446b0b9cf20641c0176a5fa8c8622a828160405161090f9190611544565b80602001516020015115611138576020810151511561101e57604080516020810190915260008152602082810151606001516001600160a01b0316808352600260015560408051928301919091520160405160208183030381529060405260029080519060200190610f5a9291906111b6565b50610f9f6040518060a001604052806000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081525090565b8251518152602080840180516040908101516001600160a01b0390811684860152825160609081015190911682860152825160809081015191860191909152915160a001519184019190915251610ffb91600491849101611613565b60408051601f198184030181529190528051602090910120600055506111339050565b604080516020810190915260008152602082810151606001516001600160a01b03168083526005600155604080519283019190915201604051602081830303815290604052600290805190602001906110789291906111b6565b506040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b019889528d51518b528d88018051511515885280518d01516001600160a01b0390811688528151870151811686528151850151845290518201518a528c516006998101999099528b519c89019c909c52955115159387019390935292518916928501929092529051909616908201529351918401919091525160e08301529061010001610b08565b610c00565b604080518082019091526000808252602082015261028181600080805560018190556111669060029061127b565b33ff5b60408051606081018252600091810191825290819081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291015290565b8280546111c290611698565b90600052602060002090601f0160209004810192826111e4576000855561122a565b82601f106111fd57805160ff191683800117855561122a565b8280016001018555821561122a579182015b8281111561122a57825182559160200191906001019061120f565b506112369291506112b3565b5090565b6040518060a001604052806000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b50805461128790611698565b6000825580601f106112995750610c00565b601f016020900490600052602060002090810190610c0091905b5b8082111561123657600081556001016112b4565b803580151581146112d857600080fd5b919050565b600060e082840312156112ee578081fd5b50919050565b600060c082840312156112ee578081fd5b600060208284031215611316578081fd5b8135611321816116cd565b9392505050565b600060208284031215611339578081fd5b611321826112c8565b600060e08284031215611353578081fd5b61132183836112dd565b600060c0828403121561136e578081fd5b61132183836112f4565b600060208284031215611389578081fd5b6040516020810181811067ffffffffffffffff821117156113b857634e487b7160e01b83526041600452602483fd5b60405282516113c6816116cd565b81529392505050565b6000606082840312156112ee578081fd5b8035825260208101356113f2816116cd565b6001600160a01b0390811660208401526040828101359084015260608201359061141b826116cd565b166060830152608090810135910152565b80358252602081013561143e816116cd565b6001600160a01b03166020929092019190915250565b61145e8282611475565b61146a60a082016112c8565b151560a08301525050565b803582526020810135611487816116cd565b6001600160a01b0390811660208401526040820135906114a6826116cd565b16604083015260608181013590830152608090810135910152565b803582526114d1602082016112c8565b1515602083015260408101356114e6816116cd565b6001600160a01b039081166040840152606082013590611505826116cd565b1660608301526080818101359083015260a090810135910152565b60e0810161152e8284611475565b61153e60a0830160a0850161142c565b92915050565b60c0810161153e8284611454565b60c0810161156082846113e0565b61156c60a084016112c8565b151560a083015292915050565b60e0810161158782846114c1565b61159360c084016112c8565b151560c083015292915050565b82815260c0810161132160208301846113e0565b91825280516020808401919091528101516001600160a01b0390811660408085019190915282015160608085019190915282015116608080840191909152015160a082015260c00190565b82815260c081016113216020830184611475565b82815260c081016113216020830184805182526020808201516001600160a01b03908116918401919091526040808301519091169083015260608082015190830152608090810151910152565b82815260e0810161132160208301846114c1565b6000821982111561169357634e487b7160e01b81526011600452602481fd5b500190565b6002810460018216806116ac57607f821691505b602082108114156112ee57634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114610c0057600080fdfea2646970667358221220507041fa2889dfcc336f410a85530b7f76eaa3890cb713fbd68375c8bf3eaf6264736f6c63430008020033`,
  BytecodeLen: 6335,
  Which: `oD`,
  deployMode: `DM_constructor`,
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

