const $context$ = Symbol.for('#context'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $$up$ = Symbol.for('##up'), $afterVisit$ = Symbol.for('#afterVisit'), $placeChild$ = Symbol.for('#placeChild'), $appendChild$ = Symbol.for('#appendChild'), $getSlot$ = Symbol.for('#getSlot'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $4 = Symbol(), $7 = Symbol(), $10 = Symbol(), $14 = Symbol(), $16 = Symbol(), $19 = Symbol(), $21 = Symbol(), $23 = Symbol(), $26 = Symbol(), $28 = Symbol(), $31 = Symbol(), $36 = Symbol(), $42 = Symbol(), $44 = Symbol(), $45 = Symbol();
import {use_events as imba_use_events, styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, use_slots as imba_use_slots, createLiveFragment as imba_createLiveFragment, defineTag as imba_defineTag} from 'imba';
(imba_use_events(),imba_use_slots());

/*body*/
import autoAnimate from '@formkit/auto-animate';
import {Inertia} from '@inertiajs/inertia';

class MainLayoutComponent extends imba_Component {
	get $alerts(){
		let el=imba_createElement('div',null,`l611vu-ai alerts ${this._ns_ || ''} ref--alerts`,null);
		return (Object.defineProperty(this,'$alerts',{value:el}),el);
	}
	
	
	mount(){
		return autoAnimate(this.$alerts);
	}
	
	get flash(){
		return this[$context$]?.currentPage?.page?.props?.flash;
	}
	get user(){
		return this[$context$]?.currentPage?.page?.props?.user;
	}
	
	handleLogout(){
		return Inertia.delete("/logout");
	}
	
	render(){
		var self = this, $15, $22, $5, $1, $2, $3, $6 = this._ns_ || '', $8, $9, $11, $12, $13, $17, $18, $20, $24, $25, $27, $29, $30, $32, $33, $34, $35, $37, $38, $39, $40, $41, $43;
		$1=this;
		$1[$beforeReconcile$]();
		($2=$3=1,$1[$4] === 1) || ($2=$3=0,$1[$4]=1);
		$5 = null;
		if (!(this.user)) {
			
			($8=$9=1,$5=$1[$7]) || ($8=$9=0,$1[$7]=$5=imba_createComponent('login-page',null,`${$6}`,null));
			$8||($5[$$up$]=$1);
			$8 || !$5.setup || $5.setup($9);
			$5[$afterVisit$]($9);
			
		} else {
			
			($11=$12=1,$5=$1[$10]) || ($11=$12=0,$1[$10]=$5=imba_createElement('section',null,`l611vu-ah ${$6}`,null));
			$11||($5[$$up$]=$1);
			($13=$5[$14]) || ($5[$14]=($13=this.$alerts,$13[$$up$]=$5,$13));
			$15 = null;
			if (this.flash.success) { ($17=$18=1,$15=$5[$16]) || ($17=$18=0,$5[$16]=$15=imba_createComponent('app-alert',null,`${$6}`,null));
			$17||($15[$$up$]=$13);
			$17 || ($15.type="success");
			($20=this.flash.success,$20===$15[$19] || ($15.message=$15[$19]=$20));
			$17 || !$15.setup || $15.setup($18);
			$15[$afterVisit$]($18);
			 };
			($5[$21] = $13[$placeChild$]($15,0,$5[$21]));
			$22 = null;
			if (this.flash.alert) { ($24=$25=1,$22=$5[$23]) || ($24=$25=0,$5[$23]=$22=imba_createComponent('app-alert',null,`${$6}`,null));
			$24||($22[$$up$]=$13);
			$24 || ($22.type="warning");
			($27=this.flash.alert,$27===$22[$26] || ($22.message=$22[$26]=$27));
			$24 || !$22.setup || $22.setup($25);
			$22[$afterVisit$]($25);
			 };
			($5[$28] = $13[$placeChild$]($22,0,$5[$28]));
			$11 || $5[$appendChild$]($13);
			;
			$11 || ($29=imba_createElement('nav',$5,`l611vu-al ${$6}`,null));
			($32=$33=1,$30=$5[$31]) || ($32=$33=0,$5[$31]=$30=imba_createComponent('inertia-link',$29,`${$6}`,"Dashboard"));
			$34 = $30[$getSlot$]('__',$5);
			$32 || ($30.href="/");
			$32 || !$30.setup || $30.setup($33);
			$30[$afterVisit$]($33);
			$32 || $29[$appendChild$]($30);
			;
			($37=$38=1,$35=$5[$36]) || ($37=$38=0,$5[$36]=$35=imba_createComponent('inertia-link',$29,`${$6}`,"Products"));
			$39 = $35[$getSlot$]('__',$5);
			$37 || ($35.href="/products");
			$37 || !$35.setup || $35.setup($38);
			$35[$afterVisit$]($38);
			$37 || $29[$appendChild$]($35);
			;
			$11 || ($40=imba_createElement('button',$29,`${$6}`,"Logout"));
			$11 || ($40.on$(`click`,{$_: [function(e,$$) {
				return self.handleLogout(e);
			}]},this));
			;
			;
			($41=$5[$42]) || ($5[$42]=$41=imba_createElement('main',$5,`${$6}`,null));
			$43=$1.__slots.__;
			($5[$44] = $41[$placeChild$]($43,384,$5[$44]));
			;
			;
			
		};
		($1[$45] = $1[$placeChild$]($5,0,$1[$45]));
		$1[$afterReconcile$]($3);
		return $1;
	}
}; imba_defineTag('main-layout',MainLayoutComponent,{});

imba_styles.register('l611vu',`
.l611vu-ah:not(#_):not(#_):not(#_) {padding-left: 2.5rem;
padding-right: 2.5rem;
padding-top: 1rem;
padding-bottom: 1rem;}

.l611vu-ai:not(#_):not(#_):not(#_) {position: fixed;
top: 1.5rem;
right: 1.5rem;
width: 24rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}

.l611vu-al:not(#_):not(#_):not(#_) {margin-bottom: 1rem;
display: flex;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}

main-layout { display:block; }
`);