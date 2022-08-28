const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $placeChild$ = Symbol.for('#placeChild'), $afterReconcile$ = Symbol.for('#afterReconcile'), $$up$ = Symbol.for('##up'), $getSlot$ = Symbol.for('#getSlot'), $afterVisit$ = Symbol.for('#afterVisit');
var $6 = Symbol(), $10 = Symbol(), $12 = Symbol(), $13 = Symbol(), $14 = Symbol(), $18 = Symbol(), $25 = Symbol(), $28 = Symbol(), $30 = Symbol(), $34 = Symbol(), $36 = Symbol(), $37 = Symbol(), $38 = Symbol(), $41 = Symbol(), $43 = Symbol(), $44 = Symbol(), $46 = Symbol(), $50 = Symbol(), $51 = Symbol(), $52 = Symbol();
import {use_events as imba_use_events, styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, renderContext as imba_renderContext, defineTag as imba_defineTag, use_slots as imba_use_slots} from 'imba';
(imba_use_events(),imba_use_slots());

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

class CloseButtonComponent extends imba_Component {
	
	render(){
		var $15, $16, $17, $19 = this._ns_ || '', $20;
		$15=this;
		$15[$beforeReconcile$]();
		($16=$17=1,$15[$18] === 1) || ($16=$17=0,$15[$18]=1);
		$16 || ($20=imba_createElement('button',$15,`${$19}`,"Fermer"));
		$16 || ($20.type="button");
		$16 || ($20.on$(`click`,{'emit-close': true},this));
		;
		$15[$afterReconcile$]($17);
		return $15;
	}
}; imba_defineTag('close-button',CloseButtonComponent,{});

class PageTitlesComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $21;
		($21 = $$.title) !== undefined && (this.title = $21);
		($21 = $$.subtitle) !== undefined && (this.subtitle = $21);
		($21 = $$.linkTitle) !== undefined && (this.linkTitle = $21);
		
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
		var $29, $45, $22, $23, $24, $26 = this._ns_ || '', $27, $31, $32, $33, $35, $39, $40, $42, $47, $48, $49;
		$22=this;
		$22[$beforeReconcile$]();
		($23=$24=1,$22[$25] === 1) || ($23=$24=0,$22[$25]=1);
		($27=$22[$28]) || ($22[$28]=$27=imba_createElement('div',$22,`gvwnvr-am ${$26}`,null));
		$29 = null;
		if (this.link) { ($31=$32=1,$29=$22[$30]) || ($31=$32=0,$22[$30]=$29=imba_createComponent('inertia-link',null,`gvwnvr-an ${$26}`,null));
		$31||($29[$$up$]=$27);
		$33 = $29[$getSlot$]('__',$29);
		($35=this.link.url,$35===$29[$34] || ($29.href=$29[$34]=$35));
		($35=this.link.name,($35===$29[$37]&&$31) || ($29[$36] = $33[$placeChild$]($29[$37]=$35,384,$29[$36])));
		$31 || !$29.setup || $29.setup($32);
		$29[$afterVisit$]($32);
		 };
		($22[$38] = $27[$placeChild$]($29,0,$22[$38]));
		$23 || ($39=imba_createElement('span',$27,`gvwnvr-ao ${$26}`,"/"));
		;
		($40=$22[$41]) || ($22[$41]=$40=imba_createElement('h1',$27,`gvwnvr-ap ${$26}`,null));
		($42=this.title,($42===$22[$44]&&$23) || ($22[$43] = $40[$placeChild$]($22[$44]=$42,384,$22[$43])));
		;
		;
		$45 = null;
		if (this.subtitle) { ($47=$48=1,$45=$22[$46]) || ($47=$48=0,$22[$46]=$45=imba_createElement('p',null,`gvwnvr-aq ${$26}`,null));
		$47||($45[$$up$]=$22);
		($49=this.subtitle,($49===$45[$51]&&$47) || ($45[$50] = $45[$placeChild$]($45[$51]=$49,384,$45[$50])));
		 };
		($22[$52] = $22[$placeChild$]($45,0,$22[$52]));
		$22[$afterReconcile$]($24);
		return $22;
	}
}; imba_defineTag('page-titles',PageTitlesComponent,{});

imba_styles.register('gvwnvr',`
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

close-button { display:block; }

.gvwnvr-am:not(#_):not(#_):not(#_) {display: flex;
align-items: center;}

.gvwnvr-an:not(#_):not(#_):not(#_) {font-size: 16px;
line-height: 24px;
--u_lh: 24px;
font-weight: 300;
color: hsla(240.00,3.70%,15.88%,100%);
text-decoration: none;}
.gvwnvr-an:not(#_):not(#_):not(#_):hover {text-decoration: underline;}

.gvwnvr-ao:not(#_):not(#_):not(#_) {margin-left: 0.25rem;
margin-right: 0.25rem;}

.gvwnvr-ap:not(#_):not(#_):not(#_) {font-size: 18px;
line-height: 28px;
--u_lh: 28px;
color: hsla(0.00,0.00%,0.00%,100%);}

.gvwnvr-aq:not(#_):not(#_):not(#_) {color: hsla(240.00,3.70%,15.88%,100%);
font-size: 13px;
line-height: 20px;
--u_lh: 20px;}

page-titles { display:block; }
`);