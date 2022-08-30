function decorate$__(decorators,target,key,desc){
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__hooks__$ = Symbol.for('#__hooks__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $placeChild$ = Symbol.for('#placeChild'), $afterReconcile$ = Symbol.for('#afterReconcile'), $$up$ = Symbol.for('##up'), $afterVisit$ = Symbol.for('#afterVisit');
var $6 = Symbol(), $9 = Symbol(), $11 = Symbol(), $17 = Symbol(), $20 = Symbol(), $24 = Symbol(), $25 = Symbol(), $26 = Symbol(), $27 = Symbol(), $29 = Symbol(), $32 = Symbol(), $34 = Symbol(), $35 = Symbol(), $36 = Symbol(), $39 = Symbol(), $43 = Symbol(), $44 = Symbol(), $45 = Symbol(), $46 = Symbol(), $48 = Symbol(), $52 = Symbol(), $53 = Symbol(), $54 = Symbol(), $60 = Symbol(), $63 = Symbol(), $67 = Symbol(), $68 = Symbol(), $69 = Symbol(), $70 = Symbol(), $72 = Symbol(), $75 = Symbol(), $77 = Symbol(), $78 = Symbol(), $79 = Symbol(), $80 = Symbol(), $83 = Symbol(), $87 = Symbol(), $88 = Symbol(), $89 = Symbol(), $90 = Symbol(), $92 = Symbol(), $96 = Symbol(), $97 = Symbol(), $98 = Symbol(), $104 = Symbol(), $107 = Symbol(), $111 = Symbol(), $112 = Symbol(), $113 = Symbol(), $114 = Symbol(), $116 = Symbol(), $119 = Symbol(), $121 = Symbol(), $122 = Symbol(), $123 = Symbol(), $126 = Symbol(), $130 = Symbol(), $131 = Symbol(), $132 = Symbol(), $133 = Symbol(), $135 = Symbol(), $139 = Symbol(), $140 = Symbol(), $141 = Symbol(), $145 = Symbol(), $148 = Symbol(), $150 = Symbol(), $151 = Symbol(), $152 = Symbol(), $154 = Symbol(), $157 = Symbol(), $159 = Symbol(), $160 = Symbol(), $162 = Symbol(), $166 = Symbol(), $167 = Symbol(), $168 = Symbol(), $169 = Symbol(), $173 = Symbol(), $176 = Symbol(), $179 = Symbol();
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
		((!$15||$16&2) && $14.flagSelf$('flww0p-ai'));
		$18 = null;
		if (this.labelText()) { ($21=$22=1,$18=$14[$20]) || ($21=$22=0,$14[$20]=$18=imba_createElement('label',null,`flww0p-aj ${$19}`,null));
		$21||($18[$$up$]=$14);
		(imba_renderContext.context=($18[$25] || ($18[$25]={_:$18})),$23=this.labelText(),imba_renderContext.context=null,($23===$18[$26]&&$21) || ($18[$24] = $18[$placeChild$]($18[$26]=$23,384,$18[$24])));
		 };
		($14[$27] = $14[$placeChild$]($18,0,$14[$27]));
		($30=$31=1,$28=$14[$29]) || ($30=$31=0,$14[$29]=$28=imba_createElement('input',$14,`flww0p-ak ${$19}`,null));
		$33=$14[$32] || ($14[$32]=$28.bind$('data',[this,'data']));
		($33=(this.hasError||undefined),$33===$14[$35]||($31|=2,$14[$35]=$33));
		$37 = $14[$36] || ($14[$36]={if: [null],debounce: true,'emit-submit': true});
		$37.if[0]=this.debounce;
		$30 || $28.on$(`input`,$37,this);
		($31&2 && $28.flag$(`flww0p-ak ${$19}`+' '+($14[$35] ? 'flww0p-al' : '')));
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
	check(){
		
		return console.log(this.data,typeof this.data,"is NaN?",Number.isNaN(this.data));
	}
	render(){
		var self = this, $61, $82, $91, $57, $58, $59, $62 = this._ns_ || '', $64, $65, $66, $71, $73, $74, $76, $81, $84, $85, $86, $93, $94, $95;
		$57=this;
		$57[$beforeReconcile$]();
		($58=$59=1,$57[$60] === 1) || ($58=$59=0,$57[$60]=1);
		((!$58||$59&2) && $57.flagSelf$('flww0p-ao'));
		$61 = null;
		if (this.labelText()) { ($64=$65=1,$61=$57[$63]) || ($64=$65=0,$57[$63]=$61=imba_createElement('label',null,`flww0p-ap ${$62}`,null));
		$64||($61[$$up$]=$57);
		(imba_renderContext.context=($61[$68] || ($61[$68]={_:$61})),$66=this.labelText(),imba_renderContext.context=null,($66===$61[$69]&&$64) || ($61[$67] = $61[$placeChild$]($61[$69]=$66,384,$61[$67])));
		 };
		($57[$70] = $57[$placeChild$]($61,0,$57[$70]));
		($73=$74=1,$71=$57[$72]) || ($73=$74=0,$57[$72]=$71=imba_createElement('input',$57,`flww0p-aq ${$62}`,null));
		$73 || ($71.type="number");
		($76=this.step,$76===$57[$75] || ($71.step=$57[$75]=$76));
		$73 || ($71.on$(`blur`,{$_: [function(e,$$) {
			return self.check(e);
		}]},this));
		$76=$57[$77] || ($57[$77]=$71.bind$('data',[this,'data']));
		($76=(this.hasError||undefined),$76===$57[$79]||($74|=2,$57[$79]=$76));
		$81 = $57[$80] || ($57[$80]={if: [null],debounce: true,'emit-submit': true});
		$81.if[0]=this.debounce;
		$73 || $71.on$(`input`,$81,this);
		($74&2 && $71.flag$(`flww0p-aq ${$62}`+' '+($57[$79] ? 'flww0p-ar' : '')));
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

class PasswordInputComponent extends imba_getSuperTagType('text-input','TextInputComponent',imba_Component) {
	[$__patch__$]($$ = {}){
		var $99;
		super[$__patch__$] && super[$__patch__$]($$);
		($99 = $$.step) !== undefined && (this.step = $99);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $100;
		deep && super[$__init__$] && super[$__init__$](...arguments);
		this.step = ($$ && ($100 = $$.step) !== undefined) ? ($100) : 0.01;
		
	}
	render(){
		var $105, $125, $134, $101, $102, $103, $106 = this._ns_ || '', $108, $109, $110, $115, $117, $118, $120, $124, $127, $128, $129, $136, $137, $138;
		$101=this;
		$101[$beforeReconcile$]();
		($102=$103=1,$101[$104] === 1) || ($102=$103=0,$101[$104]=1);
		((!$102||$103&2) && $101.flagSelf$('flww0p-au'));
		$105 = null;
		if (this.labelText()) { ($108=$109=1,$105=$101[$107]) || ($108=$109=0,$101[$107]=$105=imba_createElement('label',null,`flww0p-av ${$106}`,null));
		$108||($105[$$up$]=$101);
		(imba_renderContext.context=($105[$112] || ($105[$112]={_:$105})),$110=this.labelText(),imba_renderContext.context=null,($110===$105[$113]&&$108) || ($105[$111] = $105[$placeChild$]($105[$113]=$110,384,$105[$111])));
		 };
		($101[$114] = $101[$placeChild$]($105,0,$101[$114]));
		($117=$118=1,$115=$101[$116]) || ($117=$118=0,$101[$116]=$115=imba_createElement('input',$101,`flww0p-aw ${$106}`,null));
		$117 || ($115.type="password");
		$120=$101[$119] || ($101[$119]=$115.bind$('data',[this,'data']));
		($120=(this.hasError||undefined),$120===$101[$122]||($118|=2,$101[$122]=$120));
		$124 = $101[$123] || ($101[$123]={if: [null],debounce: true,'emit-submit': true});
		$124.if[0]=this.debounce;
		$117 || $115.on$(`input`,$124,this);
		($118&2 && $115.flag$(`flww0p-aw ${$106}`+' '+($101[$122] ? 'flww0p-ax' : '')));
		$117 || !$115.setup || $115.setup($118);
		$115[$afterVisit$]($118);
		;
		$125 = null;
		if (this.hasError) { ($127=$128=1,$125=$101[$126]) || ($127=$128=0,$101[$126]=$125=imba_createElement('span',null,`error ${$106}`,null));
		$127||($125[$$up$]=$101);
		(imba_renderContext.context=($125[$131] || ($125[$131]={_:$125})),$129=this.errors.join(", "),imba_renderContext.context=null,($129===$125[$132]&&$127) || ($125[$130] = $125[$placeChild$]($125[$132]=$129,384,$125[$130])));
		 };
		($101[$133] = $101[$placeChild$]($125,0,$101[$133]));
		$134 = null;
		if (this.hint) { ($136=$137=1,$134=$101[$135]) || ($136=$137=0,$101[$135]=$134=imba_createElement('span',null,`hint ${$106}`,null));
		$136||($134[$$up$]=$101);
		($138=this.hint,($138===$134[$140]&&$136) || ($134[$139] = $134[$placeChild$]($134[$140]=$138,384,$134[$139])));
		 };
		($101[$141] = $101[$placeChild$]($134,0,$101[$141]));
		$101[$afterReconcile$]($103);
		return $101;
	}
}; imba_defineTag('password-input',PasswordInputComponent,{});

class CheckboxInputComponent extends imba_getSuperTagType('text-input','TextInputComponent',imba_Component) {
	
	
	render(){
		var $161, $142, $143, $144, $146 = this._ns_ || '', $147, $149, $153, $155, $156, $158, $163, $164, $165;
		$142=this;
		$142[$beforeReconcile$]();
		($143=$144=1,$142[$145] === 1) || ($143=$144=0,$142[$145]=1);
		((!$143||$144&2) && $142.flagSelf$('flww0p-ba'));
		($147=$142[$148]) || ($142[$148]=$147=imba_createElement('label',$142,`flww0p-bb ${$146}`,null));
		(imba_renderContext.context=($142[$151] || ($142[$151]={_:$147})),$149=this.labelText(),imba_renderContext.context=null,($149===$142[$152]&&$143) || ($142[$150] = $147[$placeChild$]($142[$152]=$149,384,$142[$150])));
		;
		($155=$156=1,$153=$142[$154]) || ($155=$156=0,$142[$154]=$153=imba_createElement('input',$142,`${$146}`,null));
		$155 || ($153.type="checkbox");
		$158=$142[$157] || ($142[$157]=$153.bind$('data',[this,'data']));
		($158=(this.hasError||undefined),$158===$142[$160]||($156|=2,$142[$160]=$158));
		($156&2 && $153.flag$(`${$146}`+' '+($142[$160] ? 'flww0p-bc' : '')));
		$155 || !$153.setup || $153.setup($156);
		$153[$afterVisit$]($156);
		;
		$161 = null;
		if (this.hasError) { ($163=$164=1,$161=$142[$162]) || ($163=$164=0,$142[$162]=$161=imba_createElement('span',null,`error ${$146}`,null));
		$163||($161[$$up$]=$142);
		(imba_renderContext.context=($161[$167] || ($161[$167]={_:$161})),$165=this.errors.join(", "),imba_renderContext.context=null,($165===$161[$168]&&$163) || ($161[$166] = $161[$placeChild$]($161[$168]=$165,384,$161[$166])));
		 };
		($142[$169] = $142[$placeChild$]($161,0,$142[$169]));
		$142[$afterReconcile$]($144);
		return $142;
	}
}; imba_defineTag('checkbox-input',CheckboxInputComponent,{});

class BooleanSelectComponent extends imba_Component {
	
	render(){
		var $170, $171, $172, $174 = this._ns_ || '', $175, $177, $178, $180, $181, $182, $183;
		$170=this;
		$170[$beforeReconcile$]();
		($171=$172=1,$170[$173] === 1) || ($171=$172=0,$170[$173]=1);
		($177=$178=1,$175=$170[$176]) || ($177=$178=0,$170[$176]=$175=imba_createElement('select',$170,`${$174}`,null));
		$180=$170[$179] || ($170[$179]=$175.bind$('data',[this,'data']));
		$177 || ($181=imba_createElement('option',$175,`${$174}`,"Indifférent"));
		$177 || ($181.value="");
		;
		$177 || ($182=imba_createElement('option',$175,`${$174}`,"Oui"));
		$177 || ($182.value="true");
		;
		$177 || ($183=imba_createElement('option',$175,`${$174}`,"Non"));
		$177 || ($183.value="false");
		;
		$177 || !$175.setup || $175.setup($178);
		$175[$afterVisit$]($178);
		;
		$170[$afterReconcile$]($172);
		return $170;
	}
}; imba_defineTag('boolean-select',BooleanSelectComponent,{});

imba_styles.register('flww0p',`
app-form { display:block; }

.flww0p-ai:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}
.flww0p-ai:not(#_):not(#_):not(#_):not(:last-child) {margin-bottom: 0.5rem;}

.flww0p-aj:not(#_):not(#_):not(#_) {color: hsla(240.00,5.26%,26.08%,100%);
font-size: 13px;
line-height: 20px;
--u_lh: 20px;}

.flww0p-ak:not(#_):not(#_):not(#_) {width: 100%;}

.flww0p-al:not(#_):not(#_):not(#_) {border: 1px solid hsla(0.00,0.00%,0.00%,100%);}

text-input { display:block; }

.flww0p-ao:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}
.flww0p-ao:not(#_):not(#_):not(#_):not(:last-child) {margin-bottom: 0.5rem;}

.flww0p-ap:not(#_):not(#_):not(#_) {color: hsla(240.00,5.26%,26.08%,100%);
font-size: 13px;
line-height: 20px;
--u_lh: 20px;}

.flww0p-aq:not(#_):not(#_):not(#_) {width: 100%;}

.flww0p-ar:not(#_):not(#_):not(#_) {border: 1px solid hsla(0.00,0.00%,0.00%,100%);}

number-input { display:block; }

.flww0p-au:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}
.flww0p-au:not(#_):not(#_):not(#_):not(:last-child) {margin-bottom: 0.5rem;}

.flww0p-av:not(#_):not(#_):not(#_) {color: hsla(240.00,5.26%,26.08%,100%);
font-size: 13px;
line-height: 20px;
--u_lh: 20px;}

.flww0p-aw:not(#_):not(#_):not(#_) {width: 100%;}

.flww0p-ax:not(#_):not(#_):not(#_) {border: 1px solid hsla(0.00,0.00%,0.00%,100%);}

password-input { display:block; }

.flww0p-ba:not(#_):not(#_):not(#_) {display: flex;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}
.flww0p-ba:not(#_):not(#_):not(#_):not(:last-child) {margin-bottom: 0.5rem;}

.flww0p-bb:not(#_):not(#_):not(#_) {color: hsla(240.00,5.26%,26.08%,100%);
font-size: 13px;
line-height: 20px;
--u_lh: 20px;}

.flww0p-bc:not(#_):not(#_):not(#_) {border: 1px solid hsla(0.00,84.24%,60.20%,100%);}

checkbox-input { display:block; }

boolean-select { display:block; }
`);