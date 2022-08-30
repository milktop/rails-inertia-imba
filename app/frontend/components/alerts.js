const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $$up$ = Symbol.for('##up'), $placeChild$ = Symbol.for('#placeChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $6 = Symbol(), $9 = Symbol(), $12 = Symbol(), $15 = Symbol(), $18 = Symbol(), $19 = Symbol(), $21 = Symbol(), $23 = Symbol(), $25 = Symbol(), $29 = Symbol(), $30 = Symbol(), $31 = Symbol(), $33 = Symbol(), $35 = Symbol(), $36 = Symbol(), $38 = Symbol(), $42 = Symbol();
import {use_events as imba_use_events, styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, use_styles as imba_use_styles, defineTag as imba_defineTag} from 'imba';
(imba_use_events(),imba_use_styles());

/*body*/
class AppAlertComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.type) !== undefined && (this.type = $1);
		($1 = $$.title) !== undefined && (this.title = $1);
		($1 = $$.message) !== undefined && (this.message = $1);
		($1 = $$.showClose) !== undefined && (this.showClose = $1);
		($1 = $$.autoclose) !== undefined && (this.autoclose = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $2;
		super[$__init__$](...arguments);
		this.type = ($$ && ($2 = $$.type) !== undefined) ? ($2) : "info";
		this.title = ($$ && ($2 = $$.title) !== undefined) ? ($2) : "";
		this.message = ($$ && ($2 = $$.message) !== undefined) ? ($2) : "";
		this.showClose = ($$ && ($2 = $$.showClose) !== undefined) ? ($2) : true;
		this.autoclose = ($$ && ($2 = $$.autoclose) !== undefined) ? ($2) : 4500;
		
	}
	get color(){
		
		if (this.type === "success") { return "teal6" };
		if (this.type === "warning") { return "red6" };
		return "gray6";
	}
	
	get icon(){
		
		if (this.type === "success") { return "check-circle" };
		if (this.type === "warning") { return "exclamation-triangle" };
		return "info-circle";
	}
	
	mount(){
		var self = this;
		
		if (this.autoclose) {
			
			return this.timeout = setTimeout(function() { return self.remove(); },this.autoclose);
		};
	}
	
	unmount(){
		
		return this.timeout && clearTimeout(this.timeout);
	}
	
	render(){
		var $24, $37, $3, $4, $5, $7 = this._ns_ || '', $8, $10, $11, $13, $14, $16, $17, $20, $22, $26, $27, $28, $32, $34, $39, $40, $41;
		$3=this;
		$3[$beforeReconcile$]();
		($4=$5=1,$3[$6] === 1) || ($4=$5=0,$3[$6]=1);
		($10=$11=1,$8=$3[$9]) || ($10=$11=0,$3[$9]=$8=imba_createElement('div',$3,`z2a73n3-ag alert ${$7}`,null));
		($13=this.color,$13===$3[$12] || ($8.css$var('--z2a73n3_ah',$3[$12]=$13,null,'bdt')));
		($16=$17=1,$14=$3[$15]) || ($16=$17=0,$3[$15]=$14=imba_createElement('i',$8,`z2a73n3-ai fal ${$7}`,null));
		($20=`fa-${this.icon}`,$20===$3[$19]||($17|=2,$3[$19]=$20));
		($20=this.color,$20===$3[$21] || ($14.css$var('--z2a73n3_aj',$3[$21]=$20,null,'c')));
		($17&2 && $14.flag$(`z2a73n3-ai fal ${$7}`+' '+($3[$19]||'')));
		;
		($22=$3[$23]) || ($3[$23]=$22=imba_createElement('div',$8,`z2a73n3-ak ${$7}`,null));
		$24 = null;
		if (this.title) { ($26=$27=1,$24=$3[$25]) || ($26=$27=0,$3[$25]=$24=imba_createElement('div',null,`z2a73n3-al ${$7}`,null));
		$26||($24[$$up$]=$22);
		($28=this.title,($28===$24[$30]&&$26) || ($24[$29] = $24[$placeChild$]($24[$30]=$28,384,$24[$29])));
		 };
		($3[$31] = $22[$placeChild$]($24,0,$3[$31]));
		($32=$3[$33]) || ($3[$33]=$32=imba_createElement('div',$22,`z2a73n3-am ${$7}`,null));
		($34=this.message,($34===$3[$36]&&$10) || ($3[$35] = $32[$placeChild$]($3[$36]=$34,384,$3[$35])));
		;
		;
		$37 = null;
		if (this.showClose) {
			
			($39=$40=1,$37=$3[$38]) || ($39=$40=0,$3[$38]=$37=imba_createElement('button',null,`z2a73n3-an ${$7}`,null));
			$39||($37[$$up$]=$8);
			$39 || ($37.on$(`click`,{$_: [function(e,$$) {
				return this.closest('.alert').remove(e);
			}]},this));
			$39 || ($41=imba_createElement('i',$37,`z2a73n3-ao fal fa-times ${$7}`,null));
			;
			
		};
		($3[$42] = $8[$placeChild$]($37,0,$3[$42]));
		;
		$3[$afterReconcile$]($5);
		return $3;
	}
}; imba_defineTag('app-alert',AppAlertComponent,{});

imba_styles.register('z2a73n3',`
.z2a73n3-ai, .z2a73n3-ao {
--t_x:0;--t_y:0;--t_z:0;--t_rotate:0;
--t_scale:1;--t_scale-x:1;--t_scale-y:1;
--t_skew-x:0;--t_skew-y:0;
transform: translate3d(var(--t_x),var(--t_y),var(--t_z))
           rotate(var(--t_rotate))
           skewX(var(--t_skew-x)) skewY(var(--t_skew-y)) 
           scaleX(var(--t_scale-x)) scaleY(var(--t_scale-y)) scale(var(--t_scale));
}

.z2a73n3-ag:not(#_):not(#_):not(#_) {padding: 1.2rem;
background: hsla(0.00,0.00%,100.00%,100%);
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
border-radius: 4px;
border: 1px solid hsla(240.00,4.76%,95.88%,100%);
border-top: 3px solid var(--z2a73n3_ah);
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
--u_rg: 1rem;
--u_cg: 1rem;
font-size: 0.85rem;}

.z2a73n3-ai:not(#_):not(#_):not(#_) {font-size: 0.9rem;
color: var(--z2a73n3_aj);
--t_y: 1px !important;}

.z2a73n3-ak:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
gap: 0.25rem;
--u_rg: 0.25rem;
--u_cg: 0.25rem;
flex: 1;}

.z2a73n3-al:not(#_):not(#_):not(#_) {font-weight: 600;}

.z2a73n3-am:not(#_):not(#_):not(#_) {color: hsla(240.00,5.20%,33.92%,100%);}

.z2a73n3-an:not(#_):not(#_):not(#_) {padding: 0rem;
background: hsla(0.00,0.00%,100.00%,0%);
cursor: pointer;}

.z2a73n3-ao:not(#_):not(#_):not(#_) {color: hsla(240.00,3.83%,46.08%,100%);
--t_y: 1px !important;}

app-alert { display:block; }
`);