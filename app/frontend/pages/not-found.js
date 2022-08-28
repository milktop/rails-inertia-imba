const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $getSlot$ = Symbol.for('#getSlot'), $placeChild$ = Symbol.for('#placeChild'), $afterVisit$ = Symbol.for('#afterVisit'), $appendChild$ = Symbol.for('#appendChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $6 = Symbol(), $9 = Symbol(), $14 = Symbol(), $16 = Symbol(), $17 = Symbol();
import {styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, use_slots as imba_use_slots, createElement as imba_createElement, defineTag as imba_defineTag} from 'imba';
(imba_use_slots());

/*body*/
class NotFoundPageComponent extends imba_Component {
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
		var $3, $4, $5, $7 = this._ns_ || '', $8, $10, $11, $12, $13, $15;
		
		
		$3=this;
		$3[$beforeReconcile$]();
		($4=$5=1,$3[$6] === 1) || ($4=$5=0,$3[$6]=1);
		($10=$11=1,$8=$3[$9]) || ($10=$11=0,$3[$9]=$8=imba_createComponent('main-layout',$3,`${$7}`,null));
		$12 = $8[$getSlot$]('__',$3);
		($13=$3[$14]) || ($3[$14]=$13=imba_createElement('h1',$12,`${$7}`,null));
		($15=this.props.message || "404 Page Not Found",($15===$3[$17]&&$10) || ($3[$16] = $13[$placeChild$]($3[$17]=$15,384,$3[$16])));
		;
		$10 || !$8.setup || $8.setup($11);
		$8[$afterVisit$]($11);
		$10 || $3[$appendChild$]($8);
		;
		$3[$afterReconcile$]($5);
		return $3;
		
	}
}; imba_defineTag('not-found-page',NotFoundPageComponent,{});

imba_styles.register('btk9ce',`
not-found-page { display:block; }
`);