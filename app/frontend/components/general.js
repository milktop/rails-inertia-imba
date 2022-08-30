const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $placeChild$ = Symbol.for('#placeChild'), $afterReconcile$ = Symbol.for('#afterReconcile'), $getSlot$ = Symbol.for('#getSlot'), $afterVisit$ = Symbol.for('#afterVisit'), $appendChild$ = Symbol.for('#appendChild'), $$up$ = Symbol.for('##up');
var $6 = Symbol(), $10 = Symbol(), $12 = Symbol(), $13 = Symbol(), $14 = Symbol(), $18 = Symbol(), $21 = Symbol(), $25 = Symbol(), $28 = Symbol(), $33 = Symbol(), $37 = Symbol(), $40 = Symbol(), $45 = Symbol(), $49 = Symbol(), $56 = Symbol(), $59 = Symbol(), $61 = Symbol(), $65 = Symbol(), $67 = Symbol(), $68 = Symbol(), $69 = Symbol(), $72 = Symbol(), $74 = Symbol(), $75 = Symbol(), $77 = Symbol(), $81 = Symbol(), $82 = Symbol(), $83 = Symbol();
import {use_events as imba_use_events, transitions as imba_transitions, styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, renderContext as imba_renderContext, defineTag as imba_defineTag, createLiveFragment as imba_createLiveFragment, use_slots as imba_use_slots} from 'imba';
(imba_use_events(),imba_use_slots());
imba_transitions.addSelectors([".gvwnvr-aj"],'transition');
/*body*/
import {Inertia} from '@inertiajs/inertia';

class JsonPrintComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.value) !== undefined && (this.value = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $2;
		super[$__init__$](...arguments);
		this.value = ($$ && ($2 = $$.value) !== undefined) ? ($2) : {};
		
	}
	render(){
		var $3, $4, $5, $7 = this._ns_ || '', $8, $9, $11;
		$3=this;
		$3[$beforeReconcile$]();
		($4=$5=1,$3[$6] === 1) || ($4=$5=0,$3[$6]=1);
		$4 || ($8=imba_createElement('pre',$3,`${$7}`,null));
		($9=$3[$10]) || ($3[$10]=$9=imba_createElement('code',$8,`${$7}`,null));
		(imba_renderContext.context=($3[$13] || ($3[$13]={_:$9})),$11=JSON.stringify(this.value,null,2),imba_renderContext.context=null,($11===$3[$14]&&$4) || ($3[$12] = $9[$placeChild$]($3[$14]=$11,384,$3[$12])));
		;
		;
		$3[$afterReconcile$]($5);
		return $3;
	}
}; imba_defineTag('json-print',JsonPrintComponent,{cssns: 'gvwnvr_af'});

class InfoMessageComponent extends imba_Component {
	
	render(){
		var $15, $16, $17, $19 = this._ns_ || '', $20;
		$15=this;
		$15[$beforeReconcile$]();
		($16=$17=1,$15[$18] === 1) || ($16=$17=0,$15[$18]=1);
		$20=$15.__slots.__;
		($15[$21] = $15[$placeChild$]($20,384,$15[$21]));
		;
		$15[$afterReconcile$]($17);
		return $15;
	}
}; imba_defineTag('info-message',InfoMessageComponent,{cssid: 'gvwnvr-aj'});

class SuccessMessageComponent extends imba_Component {
	
	render(){
		var $22, $23, $24, $26 = this._ns_ || '', $27, $29, $30, $31, $32;
		$22=this;
		$22[$beforeReconcile$]();
		($23=$24=1,$22[$25] === 1) || ($23=$24=0,$22[$25]=1);
		($29=$30=1,$27=$22[$28]) || ($29=$30=0,$22[$28]=$27=imba_createComponent('info-message',$22,`gvwnvr-an ${$26}`,null));
		$31 = $27[$getSlot$]('__',$22);
		$32=$22.__slots.__;
		($22[$33] = $31[$placeChild$]($32,384,$22[$33]));
		;
		$29 || !$27.setup || $27.setup($30);
		$27[$afterVisit$]($30);
		$29 || $22[$appendChild$]($27);
		;
		$22[$afterReconcile$]($24);
		return $22;
	}
}; imba_defineTag('success-message',SuccessMessageComponent,{});

class AlertMessageComponent extends imba_Component {
	
	render(){
		var $34, $35, $36, $38 = this._ns_ || '', $39, $41, $42, $43, $44;
		$34=this;
		$34[$beforeReconcile$]();
		($35=$36=1,$34[$37] === 1) || ($35=$36=0,$34[$37]=1);
		($41=$42=1,$39=$34[$40]) || ($41=$42=0,$34[$40]=$39=imba_createComponent('info-message',$34,`gvwnvr-aq ${$38}`,null));
		$43 = $39[$getSlot$]('__',$34);
		$44=$34.__slots.__;
		($34[$45] = $43[$placeChild$]($44,384,$34[$45]));
		;
		$41 || !$39.setup || $39.setup($42);
		$39[$afterVisit$]($42);
		$41 || $34[$appendChild$]($39);
		;
		$34[$afterReconcile$]($36);
		return $34;
	}
}; imba_defineTag('alert-message',AlertMessageComponent,{});

class CloseButtonComponent extends imba_Component {
	
	render(){
		var $46, $47, $48, $50 = this._ns_ || '', $51;
		$46=this;
		$46[$beforeReconcile$]();
		($47=$48=1,$46[$49] === 1) || ($47=$48=0,$46[$49]=1);
		$47 || ($51=imba_createElement('button',$46,`${$50}`,"Fermer"));
		$47 || ($51.type="button");
		$47 || ($51.on$(`click`,{'emit-close': true},this));
		;
		$46[$afterReconcile$]($48);
		return $46;
	}
}; imba_defineTag('close-button',CloseButtonComponent,{});

class PageTitlesComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $52;
		($52 = $$.title) !== undefined && (this.title = $52);
		($52 = $$.subtitle) !== undefined && (this.subtitle = $52);
		($52 = $$.linkTitle) !== undefined && (this.linkTitle = $52);
		
	}
	[$__init__$]($$ = null,deep = true){
		super[$__init__$](...arguments);
		this.title = $$ ? $$.title : undefined;
		this.subtitle = $$ ? $$.subtitle : undefined;
		this.linkTitle = $$ ? $$.linkTitle : undefined;
		
	}
	get link(){
		
		const sections = Inertia.page.url.split("/").filter(function(x) { return x; });
		if (!sections.length) { return null };
		
		if (sections.length === 1) {
			
			return {name: "Dashboard",url: "/"};
		} else {
			
			return {name: this.linkTitle || this.capitalize(sections[0]),url: ("/" + (sections[0]))};
		};
	}
	
	
	render(){
		var $60, $76, $53, $54, $55, $57 = this._ns_ || '', $58, $62, $63, $64, $66, $70, $71, $73, $78, $79, $80;
		$53=this;
		$53[$beforeReconcile$]();
		($54=$55=1,$53[$56] === 1) || ($54=$55=0,$53[$56]=1);
		($58=$53[$59]) || ($53[$59]=$58=imba_createElement('div',$53,`gvwnvr-av ${$57}`,null));
		$60 = null;
		if (this.link) { ($62=$63=1,$60=$53[$61]) || ($62=$63=0,$53[$61]=$60=imba_createComponent('inertia-link',null,`gvwnvr-aw ${$57}`,null));
		$62||($60[$$up$]=$58);
		$64 = $60[$getSlot$]('__',$60);
		($66=this.link.url,$66===$60[$65] || ($60.href=$60[$65]=$66));
		($66=this.link.name,($66===$60[$68]&&$62) || ($60[$67] = $64[$placeChild$]($60[$68]=$66,384,$60[$67])));
		$62 || !$60.setup || $60.setup($63);
		$60[$afterVisit$]($63);
		 };
		($53[$69] = $58[$placeChild$]($60,0,$53[$69]));
		$54 || ($70=imba_createElement('span',$58,`gvwnvr-ax ${$57}`,"/"));
		;
		($71=$53[$72]) || ($53[$72]=$71=imba_createElement('h1',$58,`gvwnvr-ay ${$57}`,null));
		($73=this.title,($73===$53[$75]&&$54) || ($53[$74] = $71[$placeChild$]($53[$75]=$73,384,$53[$74])));
		;
		;
		$76 = null;
		if (this.subtitle) { ($78=$79=1,$76=$53[$77]) || ($78=$79=0,$53[$77]=$76=imba_createElement('p',null,`gvwnvr-az ${$57}`,null));
		$78||($76[$$up$]=$53);
		($80=this.subtitle,($80===$76[$82]&&$78) || ($76[$81] = $76[$placeChild$]($76[$82]=$80,384,$76[$81])));
		 };
		($53[$83] = $53[$placeChild$]($76,0,$53[$83]));
		$53[$afterReconcile$]($55);
		return $53;
	}
}; imba_defineTag('page-titles',PageTitlesComponent,{});

imba_styles.register('gvwnvr',`
:root {--e_d:0ms;--e_f:ease-in-out;--e_w:0ms}

._instant_ { transition-duration:0ms !important; }

._easing_ {--e_d:300ms;}

._ease_, .gvwnvr-aj {
transition:      all var(--e_d) var(--e_f) var(--e_w),
	       transform var(--e_dt,var(--e_d)) var(--e_ft,var(--e_f)) var(--e_wt,var(--e_w)),
	           color var(--e_dc,var(--e_d)) var(--e_fc,var(--e_f)) var(--e_wc,var(--e_w)),
	background-color var(--e_dc,var(--e_d)) var(--e_fc,var(--e_f)) var(--e_wc,var(--e_w)),
	         opacity var(--e_do,var(--e_d)) var(--e_fo,var(--e_f)) var(--e_wo,var(--e_w));
}

pre.gvwnvr_af:not(#_) {font-family: var(--font-mono,Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
padding: 1.5rem;
margin-bottom: 1rem;
background: hsla(240.00,4.76%,95.88%,60%);
border: 1px solid hsla(240.00,4.76%,95.88%,100%);
overflow-y: hidden;
font-size: 14px;
line-height: 22px;
--u_lh: 22px;
border-radius: 3px;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);}

json-print { display:block; }

.gvwnvr-aj {--hue: gray;
--hue0: 0,0%,98%;
--hue1: 240,5%,96%;
--hue2: 240,6%,90%;
--hue3: 240,5%,84%;
--hue4: 240,5%,65%;
--hue5: 240,4%,46%;
--hue6: 240,5%,34%;
--hue7: 240,5%,26%;
--hue8: 240,4%,16%;
--hue9: 240,6%,10%;
background: hsla(var(--hue2),1);
border: 1px solid hsla(var(--hue3),70%);
color: hsla(var(--hue9),1);
padding-left: 0.6rem;
padding-right: 0.6rem;
padding-top: 0.4rem;
padding-bottom: 0.4rem;
font-size: 14px;
line-height: 22px;
--u_lh: 22px;
margin-bottom: 1.5rem;}
._off_.gvwnvr-aj {opacity: 0;}

info-message { display:block; }

.gvwnvr-an:not(#_):not(#_):not(#_) {--hue: teal;
--hue0: 166,76%,97%;
--hue1: 167,85%,89%;
--hue2: 168,84%,78%;
--hue3: 171,77%,64%;
--hue4: 172,66%,50%;
--hue5: 173,80%,40%;
--hue6: 175,84%,32%;
--hue7: 175,77%,26%;
--hue8: 176,69%,22%;
--hue9: 176,61%,19%;}

success-message { display:block; }

.gvwnvr-aq:not(#_):not(#_):not(#_) {--hue: red;
--hue0: 0,86%,97%;
--hue1: 0,93%,94%;
--hue2: 0,96%,89%;
--hue3: 0,94%,82%;
--hue4: 0,91%,71%;
--hue5: 0,84%,60%;
--hue6: 0,72%,51%;
--hue7: 0,74%,42%;
--hue8: 0,70%,35%;
--hue9: 0,63%,31%;}

alert-message { display:block; }

close-button { display:block; }

.gvwnvr-av:not(#_):not(#_):not(#_) {display: flex;
align-items: center;}

.gvwnvr-aw:not(#_):not(#_):not(#_) {font-size: 16px;
line-height: 24px;
--u_lh: 24px;
font-weight: 300;
color: hsla(240.00,3.70%,15.88%,100%);
text-decoration: none;}
.gvwnvr-aw:not(#_):not(#_):not(#_):hover {text-decoration: underline;}

.gvwnvr-ax:not(#_):not(#_):not(#_) {margin-left: 0.25rem;
margin-right: 0.25rem;}

.gvwnvr-ay:not(#_):not(#_):not(#_) {font-size: 18px;
line-height: 28px;
--u_lh: 28px;
color: hsla(0.00,0.00%,0.00%,100%);}

.gvwnvr-az:not(#_):not(#_):not(#_) {color: hsla(240.00,3.70%,15.88%,100%);
font-size: 13px;
line-height: 20px;
--u_lh: 20px;}

page-titles { display:block; }
`);