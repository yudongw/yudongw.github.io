(this.webpackJsonpgame24=this.webpackJsonpgame24||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),l=a.n(r),s=(a(13),a(1)),i=a(4),c=a(5),u=a(7),m=a(6),b=(a(14),{started:"started",running:"running",lost:"lost",won:"won"});function g(e){var t=e.move.chosenNumbers.length>=1?e.move.chosenNumbers[0].n:"?",a=e.move.chosenNumbers.length>=2?e.move.chosenNumbers[1].n:"?";return o.a.createElement("div",null," Trace:",o.a.createElement("div",null,t," ",e.move.operator," ",a," ",e.move.gameState))}function N(e){return e.gameState===b.running?o.a.createElement("i",{onClick:e.onClick,className:"material-icons",style:{fontSize:48,color:"green",cursor:"pointer"}},"undo"):o.a.createElement("i",{onClick:e.onClick,className:"material-icons",style:{fontSize:48,color:"gray"}},"undo")}function v(e){return e.gameState===b.running?o.a.createElement("i",{onClick:e.onClick,className:"material-icons",style:{fontSize:48,color:"orange",cursor:"pointer",display:e.gameState===b.running?"":"none"}},"skip_previous"):o.a.createElement("i",{onClick:e.onClick,className:"material-icons",style:{fontSize:48,color:"gray"}},"skip_previous")}function h(e){return e.gameState===b.running||e.gameState===b.started?o.a.createElement("i",{onClick:e.onClick,className:"material-icons",style:{fontSize:48,color:"red",cursor:"pointer",display:e.gameState===b.running||e.gameState===b.started?"":"none"}},"skip_next"):o.a.createElement("i",{onClick:e.onClick,className:"material-icons",style:{fontSize:48,color:"gray"}},"skip_next")}function p(e){return e.gameState===b.won||e.gameState===b.lost?o.a.createElement("i",{onClick:e.onClick,className:"material-icons",style:{fontSize:48,color:"green",cursor:"pointer"}},"navigate_next"):o.a.createElement("i",{className:"material-icons",style:{fontSize:48,color:"gray"}},"navigate_next")}function S(e){return o.a.createElement("div",null,o.a.createElement(v,{onClick:e.onUndo,gameState:e.gameState}),"\xa0",o.a.createElement(N,{onClick:e.onUndoMove,gameState:e.gameState}),"\xa0",o.a.createElement(h,{onClick:e.onSkip,gameState:e.gameState}),"\xa0",o.a.createElement(p,{onClick:e.onNext,gameState:e.gameState}))}function f(e){return e.gameState==b.won?o.a.createElement("i",{className:"material-icons",style:{fontSize:48,color:"green"}},"mood"):e.gameState==b.lost?o.a.createElement("i",{className:"material-icons",style:{fontSize:48,color:"yellow"}},"sentiment_very_dissatisfied"):o.a.createElement("div",null)}function d(e){return o.a.createElement("button",{onClick:function(){e.onClickOperator(e.operator)},className:"operatorButton",type:"button"},e.operator," ")}function k(e){var t=e.gameState==b.won?"green":e.gameState==b.lost?"red":"black";return o.a.createElement("button",{onClick:function(){e.onClickNumber(e.number)},className:"numberButton",type:"button",style:{color:t}},e.number.n,"  ")}function C(e){return e.operators.map((function(t){return o.a.createElement(d,{key:t,operator:t,onClickOperator:e.onClickOperator})}))}function E(e){var t=0;return e.numbers.map((function(a){return o.a.createElement(k,{key:t++,number:a,onClickNumber:e.onClickNumber,gameState:e.gameState})}))}Object.freeze(b);var y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).random=function(e,t){return e+Math.floor(Math.random()*(t-e+1))},n.init=function(){n.chosenNumbers=[],n.availableNumbers=[],n.availableNumbers.push({n:n.random(1,10),chosen:!1}),n.availableNumbers.push({n:n.random(1,10),chosen:!1}),n.availableNumbers.push({n:n.random(1,10),chosen:!1}),n.availableNumbers.push({n:n.random(1,10),chosen:!1}),n.originalAvailableNumbers=Object(s.a)(n.availableNumbers),n.availableOpeartors=["+","-","x",":"],n.state={chosenNumbers:[],operator:null,gameState:b.started,availableNumbers:n.availableNumbers}},n.plusFunction=function(e,t){return e+t},n.minusFunction=function(e,t){return e-t},n.multiplyFunction=function(e,t){return e*t},n.divisionFunction=function(e,t){return e/t},n.mapOperatorToFunction={"+":n.plusFunction,"-":n.minusFunction,x:n.multiplyFunction,":":n.divisionFunction},n.executeMove=function(){var e=n.state;if(console.log("executeMove:"),console.table(e),e.operator&&2==e.chosenNumbers.length){console.log("all inputs set");var t=e.chosenNumbers[0],a=e.chosenNumbers[1],o=n.availableNumbers.indexOf(t);n.availableNumbers.splice(o,1);var r=n.availableNumbers.indexOf(a);n.availableNumbers.splice(r,1);var l=n.mapOperatorToFunction[e.operator](t.n,a.n);console.log("result="+l),n.availableNumbers.push({n:l,chosen:!1}),n.chosenNumbers=[],1!==n.availableNumbers.length?n.setState({chosenNumbers:n.chosenNumbers,operator:null,gameState:b.running,availableNumbers:n.availableNumbers}):24===l?(console.log("You won"),n.setState({chosenNumbers:n.chosenNumbers,gameState:b.won,availableNumbers:n.availableNumbers})):(console.log("You lost"),n.setState({chosenNumbers:n.chosenNumbers,gameState:b.lost,availableNumbers:n.availableNumbers}))}else console.log("missing inputs")},n.onClickNumber=function(e){var t=n.state;console.log("Number clicked: "+e),e.chosen?console.log("already chosen: "+e):t.chosenNumbers.length>=2?console.log("max nrs chosen"):(e.chosen=!0,t.chosenNumbers.push(e),n.setState({chosenNumbers:t.chosenNumbers,operator:t.operator,gameState:b.running,availableNumbers:n.availableNumbers},n.executeMove),console.log("number chosen: "+e.n))},n.onUndoMove=function(){n.availableNumbers.forEach((function(e){return e.chosen=!1})),n.chosenNumbers=[],n.setState({chosenNumbers:n.chosenNumbers,operator:null,gameState:n.availableNumbers.length===n.originalAvailableNumbers?b.started:b.running,availableNumbers:n.availableNumbers})},n.onUndo=function(){n.availableNumbers=Object(s.a)(n.originalAvailableNumbers),n.onUndoMove()},n.onClickOperator=function(e){var t=n.state;console.log("operator clicked: "+e),n.setState({chosenNumbers:t.chosenNumbers,operator:e,gameState:b.running,availableNumbers:n.availableNumbers},n.executeMove),console.log("operator="+e)},n.onSkip=function(){n.init(),n.setState({chosenNumbers:[],operator:null,gameState:b.started,availableNumbers:n.availableNumbers})},n.onNext=function(){n.init(),n.setState({chosenNumbers:[],gameState:b.started,availableNumbers:n.availableNumbers})},n.init(),n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("p",null),o.a.createElement(E,{numbers:this.state.availableNumbers,onClickNumber:this.onClickNumber,gameState:this.state.gameState}),"\xa0\xa0\xa0\xa0\xa0\xa0",o.a.createElement(C,{operators:this.availableOpeartors,onClickOperator:this.onClickOperator}),o.a.createElement(S,{onUndo:this.onUndo,onUndoMove:this.onUndoMove,onSkip:this.onSkip,onNext:this.onNext,gameState:this.state.gameState}),o.a.createElement(g,{move:this.state}),o.a.createElement(f,{gameState:this.state.gameState}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.54f79e30.chunk.js.map