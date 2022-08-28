function decorate$__(decorators,target,key,desc){
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__hooks__$ = Symbol.for('#__hooks__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $placeChild$ = Symbol.for('#placeChild'), $afterReconcile$ = Symbol.for('#afterReconcile'), $$up$ = Symbol.for('##up'), $afterVisit$ = Symbol.for('#afterVisit');
var $6 = Symbol(), $9 = Symbol(), $11 = Symbol(), $17 = Symbol(), $20 = Symbol(), $24 = Symbol(), $25 = Symbol(), $26 = Symbol(), $27 = Symbol(), $29 = Symbol(), $32 = Symbol(), $34 = Symbol(), $35 = Symbol(), $36 = Symbol(), $39 = Symbol(), $43 = Symbol(), $44 = Symbol(), $45 = Symbol(), $46 = Symbol(), $48 = Symbol(), $52 = Symbol(), $53 = Symbol(), $54 = Symbol(), $60 = Symbol(), $63 = Symbol(), $67 = Symbol(), $68 = Symbol(), $69 = Symbol(), $70 = Symbol(), $72 = Symbol(), $75 = Symbol(), $77 = Symbol(), $78 = Symbol(), $79 = Symbol(), $80 = Symbol(), $83 = Symbol(), $87 = Symbol(), $88 = Symbol(), $89 = Symbol(), $90 = Symbol(), $92 = Symbol(), $96 = Symbol(), $97 = Symbol(), $98 = Symbol(), $102 = Symbol(), $105 = Symbol(), $107 = Symbol(), $108 = Symbol(), $109 = Symbol(), $111 = Symbol(), $114 = Symbol(), $116 = Symbol(), $117 = Symbol(), $119 = Symbol(), $123 = Symbol(), $124 = Symbol(), $125 = Symbol(), $126 = Symbol(), $130 = Symbol(), $133 = Symbol(), $136 = Symbol();
import {αobservable as imba_αobservable, αautorun as imba_αautorun, use_hooks as imba_use_hooks, hooks as imba_hooks, use_dom_bind as imba_use_dom_bind, use_events as imba_use_events, styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, createLiveFragment as imba_createLiveFragment, defineTag as imba_defineTag, renderContext as imba_renderContext, getSuperTagType as imba_getSuperTagType} from 'imba';
(imba_use_hooks(),imba_use_dom_bind(),imba_use_events());

/*body*/
class AppFormComponent extends imba_Component {
	static [$__init__$](){
		this.prototype[$__hooks__$] = imba_hooks;
		decorate$__([imba_αobservable.bind([])],this.prototype,'errors',null);
		decorate$__([imba_αautorun.bind([])],this.prototype,'printErrors',null);
		
		return this;
	}
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.errors) !== undefined && (this.errors = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $2;
		super[$__init__$](...arguments);
		this.errors = ($$ && ($2 = $$.errors) !== undefined) ? ($2) : [];
		
	}
	printErrors(){
		
		return console.log({errors: this.errors});
	}
	
	render(){
		var $3, $4, $5, $7 = this._ns_ || '', $8, $10;
		$3=this;
		$3[$beforeReconcile$]();
		($4=$5=1,$3[$6] === 1) || ($4=$5=0,$3[$6]=1);
		($8=$3[$9]) || ($3[$9]=$8=imba_createElement('form',$3,`${$7}`,null));
		$10=$3.__slots.__;
		($3[$11] = $8[$placeChild$]($10,384,$3[$11]));
		;
		;
		$3[$afterReconcile$]($5);
		return $3;
	}
}; AppFormComponent[$__init__$](); imba_defineTag('app-form',AppFormComponent,{});

class TextInputComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $12;
		($12 = $$.label) !== undefined && (this.label = $12);
		($12 = $$.name) !== undefined && (this.name = $12);
		($12 = $$.required) !== undefined && (this.required = $12);
		($12 = $$.errors) !== undefined && (this.errors = $12);
		($12 = $$.hint) !== undefined && (this.hint = $12);
		($12 = $$.debounce) !== undefined && (this.debounce = $12);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $13;
		super[$__init__$](...arguments);
		this.label = $$ ? $$.label : undefined;
		this.name = ($$ && ($13 = $$.name) !== undefined) ? ($13) : "";
		this.required = ($$ && ($13 = $$.required) !== undefined) ? ($13) : false;
		this.errors = ($$ && ($13 = $$.errors) !== undefined) ? ($13) : [];
		this.hint = ($$ && ($13 = $$.hint) !== undefined) ? ($13) : "";
		this.debounce = ($$ && ($13 = $$.debounce) !== undefined) ? ($13) : false;
		
	}
	get hasError(){
		return !(!(this.errors.length));
	}
	
	labelText(){
		
		if (!(this.label)) { return null };
		if (!(this.required)) { return this.label };
		return ("" + this.label + " *");
	}
	
	render(){
		var $18, $38, $47, $14, $15, $16, $19 = this._ns_ || '', $21, $22, $23, $28, $30, $31, $33, $37, $40, $41, $42, $49, $50, $51;
		$14=this;
		$14[$beforeReconcile$]();
		($15=$16=1,$14[$17] === 1) || ($15=$16=0,$14[$17]=1);
		((!$15||$16&2) && $14.flagSelf$('v015pc-ai'));
		$18 = null;
		if (this.labelText()) { ($21=$22=1,$18=$14[$20]) || ($21=$22=0,$14[$20]=$18=imba_createElement('label',null,`v015pc-aj ${$19}`,null));
		$21||($18[$$up$]=$14);
		(imba_renderContext.context=($18[$25] || ($18[$25]={_:$18})),$23=this.labelText(),imba_renderContext.context=null,($23===$18[$26]&&$21) || ($18[$24] = $18[$placeChild$]($18[$26]=$23,384,$18[$24])));
		 };
		($14[$27] = $14[$placeChild$]($18,0,$14[$27]));
		($30=$31=1,$28=$14[$29]) || ($30=$31=0,$14[$29]=$28=imba_createElement('input',$14,`v015pc-ak ${$19}`,null));
		$33=$14[$32] || ($14[$32]=$28.bind$('data',[this,'data']));
		($33=(this.hasError||undefined),$33===$14[$35]||($31|=2,$14[$35]=$33));
		$37 = $14[$36] || ($14[$36]={if: [null],debounce: true,'emit-submit': true});
		$37.if[0]=this.debounce;
		$30 || $28.on$(`input`,$37,this);
		($31&2 && $28.flag$(`v015pc-ak ${$19}`+' '+($14[$35] ? 'v015pc-al' : '')));
		$30 || !$28.setup || $28.setup($31);
		$28[$afterVisit$]($31);
		;
		$38 = null;
		if (this.hasError) { ($40=$41=1,$38=$14[$39]) || ($40=$41=0,$14[$39]=$38=imba_createElement('span',null,`error ${$19}`,null));
		$40||($38[$$up$]=$14);
		(imba_renderContext.context=($38[$44] || ($38[$44]={_:$38})),$42=this.errors.join(", "),imba_renderContext.context=null,($42===$38[$45]&&$40) || ($38[$43] = $38[$placeChild$]($38[$45]=$42,384,$38[$43])));
		 };
		($14[$46] = $14[$placeChild$]($38,0,$14[$46]));
		$47 = null;
		if (this.hint) { ($49=$50=1,$47=$14[$48]) || ($49=$50=0,$14[$48]=$47=imba_createElement('span',null,`hint ${$19}`,null));
		$49||($47[$$up$]=$14);
		($51=this.hint,($51===$47[$53]&&$49) || ($47[$52] = $47[$placeChild$]($47[$53]=$51,384,$47[$52])));
		 };
		($14[$54] = $14[$placeChild$]($47,0,$14[$54]));
		$14[$afterReconcile$]($16);
		return $14;
	}
}; imba_defineTag('text-input',TextInputComponent,{});

class NumberInputComponent extends imba_getSuperTagType('text-input','TextInputComponent',imba_Component) {
	[$__patch__$]($$ = {}){
		var $55;
		super[$__patch__$] && super[$__patch__$]($$);
		($55 = $$.step) !== undefined && (this.step = $55);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $56;
		deep && super[$__init__$] && super[$__init__$](...arguments);
		this.step = ($$ && ($56 = $$.step) !== undefined) ? ($56) : 0.01;
		
	}
	render(){
		var $61, $82, $91, $57, $58, $59, $62 = this._ns_ || '', $64, $65, $66, $71, $73, $74, $76, $81, $84, $85, $86, $93, $94, $95;
		$57=this;
		$57[$beforeReconcile$]();
		($58=$59=1,$57[$60] === 1) || ($58=$59=0,$57[$60]=1);
		((!$58||$59&2) && $57.flagSelf$('v015pc-ao'));
		$61 = null;
		if (this.labelText()) { ($64=$65=1,$61=$57[$63]) || ($64=$65=0,$57[$63]=$61=imba_createElement('label',null,`v015pc-ap ${$62}`,null));
		$64||($61[$$up$]=$57);
		(imba_renderContext.context=($61[$68] || ($61[$68]={_:$61})),$66=this.labelText(),imba_renderContext.context=null,($66===$61[$69]&&$64) || ($61[$67] = $61[$placeChild$]($61[$69]=$66,384,$61[$67])));
		 };
		($57[$70] = $57[$placeChild$]($61,0,$57[$70]));
		($73=$74=1,$71=$57[$72]) || ($73=$74=0,$57[$72]=$71=imba_createElement('input',$57,`v015pc-aq ${$62}`,null));
		$73 || ($71.type="number");
		($76=this.step,$76===$57[$75] || ($71.step=$57[$75]=$76));
		$76=$57[$77] || ($57[$77]=$71.bind$('data',[this,'data']));
		($76=(this.hasError||undefined),$76===$57[$79]||($74|=2,$57[$79]=$76));
		$81 = $57[$80] || ($57[$80]={if: [null],debounce: true,'emit-submit': true});
		$81.if[0]=this.debounce;
		$73 || $71.on$(`input`,$81,this);
		($74&2 && $71.flag$(`v015pc-aq ${$62}`+' '+($57[$79] ? 'v015pc-ar' : '')));
		$73 || !$71.setup || $71.setup($74);
		$71[$afterVisit$]($74);
		;
		$82 = null;
		if (this.hasError) { ($84=$85=1,$82=$57[$83]) || ($84=$85=0,$57[$83]=$82=imba_createElement('span',null,`error ${$62}`,null));
		$84||($82[$$up$]=$57);
		(imba_renderContext.context=($82[$88] || ($82[$88]={_:$82})),$86=this.errors.join(", "),imba_renderContext.context=null,($86===$82[$89]&&$84) || ($82[$87] = $82[$placeChild$]($82[$89]=$86,384,$82[$87])));
		 };
		($57[$90] = $57[$placeChild$]($82,0,$57[$90]));
		$91 = null;
		if (this.hint) { ($93=$94=1,$91=$57[$92]) || ($93=$94=0,$57[$92]=$91=imba_createElement('span',null,`hint ${$62}`,null));
		$93||($91[$$up$]=$57);
		($95=this.hint,($95===$91[$97]&&$93) || ($91[$96] = $91[$placeChild$]($91[$97]=$95,384,$91[$96])));
		 };
		($57[$98] = $57[$placeChild$]($91,0,$57[$98]));
		$57[$afterReconcile$]($59);
		return $57;
	}
}; imba_defineTag('number-input',NumberInputComponent,{});

class CheckboxInputComponent extends imba_getSuperTagType('text-input','TextInputComponent',imba_Component) {
	
	
	render(){
		var $118, $99, $100, $101, $103 = this._ns_ || '', $104, $106, $110, $112, $113, $115, $120, $121, $122;
		$99=this;
		$99[$beforeReconcile$]();
		($100=$101=1,$99[$102] === 1) || ($100=$101=0,$99[$102]=1);
		((!$100||$101&2) && $99.flagSelf$('v015pc-au'));
		($104=$99[$105]) || ($99[$105]=$104=imba_createElement('label',$99,`v015pc-av ${$103}`,null));
		(imba_renderContext.context=($99[$108] || ($99[$108]={_:$104})),$106=this.labelText(),imba_renderContext.context=null,($106===$99[$109]&&$100) || ($99[$107] = $104[$placeChild$]($99[$109]=$106,384,$99[$107])));
		;
		($112=$113=1,$110=$99[$111]) || ($112=$113=0,$99[$111]=$110=imba_createElement('input',$99,`${$103}`,null));
		$112 || ($110.type="checkbox");
		$115=$99[$114] || ($99[$114]=$110.bind$('data',[this,'data']));
		($115=(this.hasError||undefined),$115===$99[$117]||($113|=2,$99[$117]=$115));
		($113&2 && $110.flag$(`${$103}`+' '+($99[$117] ? 'v015pc-aw' : '')));
		$112 || !$110.setup || $110.setup($113);
		$110[$afterVisit$]($113);
		;
		$118 = null;
		if (this.hasError) { ($120=$121=1,$118=$99[$119]) || ($120=$121=0,$99[$119]=$118=imba_createElement('span',null,`error ${$103}`,null));
		$120||($118[$$up$]=$99);
		(imba_renderContext.context=($118[$124] || ($118[$124]={_:$118})),$122=this.errors.join(", "),imba_renderContext.context=null,($122===$118[$125]&&$120) || ($118[$123] = $118[$placeChild$]($118[$125]=$122,384,$118[$123])));
		 };
		($99[$126] = $99[$placeChild$]($118,0,$99[$126]));
		$99[$afterReconcile$]($101);
		return $99;
	}
}; imba_defineTag('checkbox-input',CheckboxInputComponent,{});

class BooleanSelectComponent extends imba_Component {
	
	render(){
		var $127, $128, $129, $131 = this._ns_ || '', $132, $134, $135, $137, $138, $139, $140;
		$127=this;
		$127[$beforeReconcile$]();
		($128=$129=1,$127[$130] === 1) || ($128=$129=0,$127[$130]=1);
		($134=$135=1,$132=$127[$133]) || ($134=$135=0,$127[$133]=$132=imba_createElement('select',$127,`${$131}`,null));
		$137=$127[$136] || ($127[$136]=$132.bind$('data',[this,'data']));
		$134 || ($138=imba_createElement('option',$132,`${$131}`,"Indifférent"));
		$134 || ($138.value="");
		;
		$134 || ($139=imba_createElement('option',$132,`${$131}`,"Oui"));
		$134 || ($139.value="true");
		;
		$134 || ($140=imba_createElement('option',$132,`${$131}`,"Non"));
		$134 || ($140.value="false");
		;
		$134 || !$132.setup || $132.setup($135);
		$132[$afterVisit$]($135);
		;
		$127[$afterReconcile$]($129);
		return $127;
	}
}; imba_defineTag('boolean-select',BooleanSelectComponent,{});

imba_styles.register('v015pc',`
app-form { display:block; }

.v015pc-ai:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}
.v015pc-ai:not(#_):not(#_):not(#_):not(:last-child) {margin-bottom: 0.5rem;}

.v015pc-aj:not(#_):not(#_):not(#_) {color: hsla(240.00,5.26%,26.08%,100%);
font-size: 13px;
line-height: 20px;
--u_lh: 20px;}

.v015pc-ak:not(#_):not(#_):not(#_) {width: 100%;}

.v015pc-al:not(#_):not(#_):not(#_) {border: 1px solid hsla(0.00,0.00%,0.00%,100%);}

text-input { display:block; }

.v015pc-ao:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}
.v015pc-ao:not(#_):not(#_):not(#_):not(:last-child) {margin-bottom: 0.5rem;}

.v015pc-ap:not(#_):not(#_):not(#_) {color: hsla(240.00,5.26%,26.08%,100%);
font-size: 13px;
line-height: 20px;
--u_lh: 20px;}

.v015pc-aq:not(#_):not(#_):not(#_) {width: 100%;}

.v015pc-ar:not(#_):not(#_):not(#_) {border: 1px solid hsla(0.00,0.00%,0.00%,100%);}

number-input { display:block; }

.v015pc-au:not(#_):not(#_):not(#_) {display: flex;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}
.v015pc-au:not(#_):not(#_):not(#_):not(:last-child) {margin-bottom: 0.5rem;}

.v015pc-av:not(#_):not(#_):not(#_) {color: hsla(240.00,5.26%,26.08%,100%);
font-size: 13px;
line-height: 20px;
--u_lh: 20px;}

.v015pc-aw:not(#_):not(#_):not(#_) {border: 1px solid hsla(0.00,84.24%,60.20%,100%);}

checkbox-input { display:block; }

boolean-select { display:block; }
`);