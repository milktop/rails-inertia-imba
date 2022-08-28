const $context$ = Symbol.for('#context'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $$up$ = Symbol.for('##up'), $afterVisit$ = Symbol.for('#afterVisit'), $placeChild$ = Symbol.for('#placeChild'), $appendChild$ = Symbol.for('#appendChild'), $getSlot$ = Symbol.for('#getSlot'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol(), $6 = Symbol(), $9 = Symbol(), $12 = Symbol(), $14 = Symbol(), $16 = Symbol(), $19 = Symbol(), $21 = Symbol(), $24 = Symbol(), $29 = Symbol(), $34 = Symbol(), $36 = Symbol();
import {styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, use_slots as imba_use_slots, createLiveFragment as imba_createLiveFragment, defineTag as imba_defineTag} from 'imba';
(imba_use_slots());

/*body*/
import autoAnimate from '@formkit/auto-animate';

class MainLayoutComponent extends imba_Component {
	get $alerts(){
		let el=imba_createElement('div',null,`jzgwvr-ag alerts ${this._ns_ || ''} ref--alerts`,null);
		return (Object.defineProperty(this,'$alerts',{value:el}),el);
	}
	
	
	mount(){
		
		return autoAnimate(this.$alerts);
	}
	
	get flash(){
		return this[$context$]?.currentPage?.page?.props?.flash;
	}
	
	render(){
		var $7, $15, $1, $2, $3, $5, $8 = this._ns_ || '', $10, $11, $13, $17, $18, $20, $22, $23, $25, $26, $27, $28, $30, $31, $32, $33, $35;
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		((!$2||$3&2) && $1.flagSelf$('jzgwvr-af'));
		($5=$1[$6]) || ($1[$6]=($5=this.$alerts,$5[$$up$]=$1,$5));
		$7 = null;
		if (this.flash.success) { ($10=$11=1,$7=$1[$9]) || ($10=$11=0,$1[$9]=$7=imba_createComponent('app-alert',null,`${$8}`,null));
		$10||($7[$$up$]=$5);
		$10 || ($7.type="success");
		($13=this.flash.success,$13===$7[$12] || ($7.message=$7[$12]=$13));
		$10 || !$7.setup || $7.setup($11);
		$7[$afterVisit$]($11);
		 };
		($1[$14] = $5[$placeChild$]($7,0,$1[$14]));
		$15 = null;
		if (this.flash.alert) { ($17=$18=1,$15=$1[$16]) || ($17=$18=0,$1[$16]=$15=imba_createComponent('app-alert',null,`${$8}`,null));
		$17||($15[$$up$]=$5);
		$17 || ($15.type="warning");
		($20=this.flash.alert,$20===$15[$19] || ($15.message=$15[$19]=$20));
		$17 || !$15.setup || $15.setup($18);
		$15[$afterVisit$]($18);
		 };
		($1[$21] = $5[$placeChild$]($15,0,$1[$21]));
		$2 || $1[$appendChild$]($5);
		;
		$2 || ($22=imba_createElement('nav',$1,`jzgwvr-aj ${$8}`,null));
		($25=$26=1,$23=$1[$24]) || ($25=$26=0,$1[$24]=$23=imba_createComponent('inertia-link',$22,`${$8}`,"Dashboard"));
		$27 = $23[$getSlot$]('__',$1);
		$25 || ($23.href="/");
		$25 || !$23.setup || $23.setup($26);
		$23[$afterVisit$]($26);
		$25 || $22[$appendChild$]($23);
		;
		($30=$31=1,$28=$1[$29]) || ($30=$31=0,$1[$29]=$28=imba_createComponent('inertia-link',$22,`${$8}`,"Products"));
		$32 = $28[$getSlot$]('__',$1);
		$30 || ($28.href="/products");
		$30 || !$28.setup || $28.setup($31);
		$28[$afterVisit$]($31);
		$30 || $22[$appendChild$]($28);
		;
		;
		($33=$1[$34]) || ($1[$34]=$33=imba_createElement('main',$1,`${$8}`,null));
		$35=$1.__slots.__;
		($1[$36] = $33[$placeChild$]($35,384,$1[$36]));
		;
		;
		$1[$afterReconcile$]($3);
		return $1;
	}
}; imba_defineTag('main-layout',MainLayoutComponent,{});

imba_styles.register('jzgwvr',`
.jzgwvr-af:not(#_):not(#_):not(#_) {padding-left: 2.5rem;
padding-right: 2.5rem;
padding-top: 1rem;
padding-bottom: 1rem;}

.jzgwvr-ag:not(#_):not(#_):not(#_) {position: fixed;
top: 1.5rem;
right: 1.5rem;
width: 24rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}

.jzgwvr-aj:not(#_):not(#_):not(#_) {margin-bottom: 1rem;
display: flex;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}

main-layout { display:block; }
`);