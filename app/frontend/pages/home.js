const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $getSlot$ = Symbol.for('#getSlot'), $placeChild$ = Symbol.for('#placeChild'), $afterVisit$ = Symbol.for('#afterVisit'), $appendChild$ = Symbol.for('#appendChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $6 = Symbol(), $9 = Symbol(), $15 = Symbol(), $17 = Symbol(), $18 = Symbol();
import {styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, use_slots as imba_use_slots, createElement as imba_createElement, defineTag as imba_defineTag} from 'imba';
(imba_use_slots());

/*body*/
class HomePageComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.props) !== undefined && (this.props = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $2;
		super[$__init__$](...arguments);
		this.props = ($$ && ($2 = $$.props) !== undefined) ? ($2) : {};
		
	}
	render(){
		var $3, $4, $5, $7 = this._ns_ || '', $8, $10, $11, $12, $13, $14, $16;
		
		
		const {name: name = "World"} = this.props;
		
		$3=this;
		$3[$beforeReconcile$]();
		($4=$5=1,$3[$6] === 1) || ($4=$5=0,$3[$6]=1);
		($10=$11=1,$8=$3[$9]) || ($10=$11=0,$3[$9]=$8=imba_createComponent('main-layout',$3,`${$7}`,null));
		$12 = $8[$getSlot$]('__',$3);
		$10 || ($13=imba_createElement('h1',$12,`frxg69-ah ${$7}`,"Dashboard"));
		;
		($14=$3[$15]) || ($3[$15]=$14=imba_createElement('p',$12,`${$7}`,null));
		$10 || $14[$placeChild$]("Hello ");
		($16=name,($16===$3[$18]&&$10) || ($3[$17] = $14[$placeChild$]($3[$18]=$16,0,$3[$17])));
		$10 || $14[$placeChild$](" :)");
		;
		$10 || !$8.setup || $8.setup($11);
		$8[$afterVisit$]($11);
		$10 || $3[$appendChild$]($8);
		;
		$3[$afterReconcile$]($5);
		return $3;
		
	}
}; imba_defineTag('home-page',HomePageComponent,{});

imba_styles.register('frxg69',`
.frxg69-ah:not(#_):not(#_):not(#_) {font-weight: bold;
font-size: 20px;
line-height: 30px;
--u_lh: 30px;
color: hsla(176.10,69.37%,21.76%,100%);}

home-page { display:block; }
`);