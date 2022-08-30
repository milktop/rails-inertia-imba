const $beforeReconcile$ = Symbol.for('#beforeReconcile'), $placeChild$ = Symbol.for('#placeChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol(), $7 = Symbol(), $9 = Symbol();
import {use_events as imba_use_events, styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, createLiveFragment as imba_createLiveFragment, defineTag as imba_defineTag} from 'imba';
(imba_use_events());

/*body*/
class AppModalComponent extends imba_Component {
	
	
	render(){
		var $1, $2, $3, $5 = this._ns_ || '', $6, $8;
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		$2 || ($1.on$(`click`,{self: true,'emit-close': true},this));
		$2 || ($1.on$(`hotkey`,{options: ["esc"],capture: true},this));
		($6=$1[$7]) || ($1[$7]=$6=imba_createElement('main',$1,`${$5}`,null));
		$8=$1.__slots.__;
		($1[$9] = $6[$placeChild$]($8,384,$1[$9]));
		;
		;
		$1[$afterReconcile$]($3);
		return $1;
	}
}; imba_defineTag('app-modal',AppModalComponent,{cssns: 'lo5cn0_af',cssid: 'lo5cn0-af'});

imba_styles.register('lo5cn0',`
.lo5cn0-af {position: fixed;
width: 100vw;
height: 100vh;
top: 0rem;
left: 0rem;
background: hsla(240.00,3.83%,46.08%,70%);
display: flex;
justify-content: center;
align-items: center;
z-index: 200;
overflow-y: scroll;}

main.lo5cn0_af:not(#_) {padding: 2.5rem;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
width: 30rem;
max-width: 90vw;
background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 6px;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
height: auto;
margin: 3.75rem auto;
position: relative;
top: 0rem;}

app-modal { display:block; }
`);