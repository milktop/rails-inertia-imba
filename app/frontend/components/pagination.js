const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $$up$ = Symbol.for('##up'), $placeChild$ = Symbol.for('#placeChild'), $afterVisit$ = Symbol.for('#afterVisit'), $afterReconcile$ = Symbol.for('#afterReconcile'), $getSlot$ = Symbol.for('#getSlot');
var $5 = Symbol(), $8 = Symbol(), $11 = Symbol(), $13 = Symbol(), $20 = Symbol(), $22 = Symbol(), $23 = Symbol(), $24 = Symbol(), $29 = Symbol(), $35 = Symbol(), $39 = Symbol(), $41 = Symbol(), $45 = Symbol(), $47 = Symbol(), $49 = Symbol(), $53 = Symbol(), $55 = Symbol(), $58 = Symbol(), $60 = Symbol(), $61 = Symbol(), $62 = Symbol(), $63 = Symbol(), $69 = Symbol(), $72 = Symbol(), $75 = Symbol(), $79 = Symbol(), $80 = Symbol(), $81 = Symbol(), $85 = Symbol(), $86 = Symbol(), $87 = Symbol(), $88 = Symbol(), $89 = Symbol(), $90 = Symbol(), $91 = Symbol(), $92 = Symbol(), $93 = Symbol();
import {use_dom_bind as imba_use_dom_bind, use_events as imba_use_events, styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, createIndexedList as imba_createIndexedList, defineTag as imba_defineTag, use_slots as imba_use_slots} from 'imba';
(imba_use_dom_bind(),imba_use_events(),imba_use_slots());

/*body*/
import {Inertia} from '@inertiajs/inertia';

class PaginationPagesComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.data) !== undefined && (this.data = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		super[$__init__$](...arguments);
		this.data = $$ ? $$.data : undefined;
		
	}
	render(){
		var self = this, $6, $2, $3, $4, $7 = this._ns_ || '', $9, $10, $12, $14, $15, $16, $17, $18, $19, $21;
		$2=this;
		$2[$beforeReconcile$]();
		($3=$4=1,$2[$5] === 1) || ($3=$4=0,$2[$5]=1);
		$6 = null;
		if (this.data) {
			
			($9=$10=1,$6=$2[$8]) || ($9=$10=0,$2[$8]=$6=imba_createElement('select',null,`${$7}`,null));
			$9||($6[$$up$]=$2);
			$12=$6[$11] || ($6[$11]=$6.bind$('data',[null,'page']));
			$12[0]=this.data;
			$9 || ($6.on$(`change`,{$_: [function(e,$$) {
				return self.setURLParams({page: e.target.value});
			}]},this));
			($14 = $6[$13]) || ($6[$13]=$14=imba_createIndexedList(384,$6));
			$15 = 0;
			$16=$14.$;
			for (let len = this.data.pages, page = 1, rd = len - page; (rd > 0) ? (page <= len) : (page >= len); (rd > 0) ? (page++) : (page--)) {
				
				($18=$19=1,$17=$16[$15]) || ($18=$19=0,$16[$15]=$17=imba_createElement('option',$14,`${$7}`,null));
				$18||($17[$$up$]=$14);
				(page===$17[$20] || ($17.value=$17[$20]=page));
				($21=page,($21===$17[$23]&&$18) || ($17[$22] = $17[$placeChild$]($17[$23]=$21,384,$17[$22])));
				$15++;
				
			};$14[$afterVisit$]($15);;
			$9 || !$6.setup || $6.setup($10);
			$6[$afterVisit$]($10);
		};
		($2[$24] = $2[$placeChild$]($6,0,$2[$24]));
		$2[$afterReconcile$]($4);
		return $2;
	}
}; imba_defineTag('pagination-pages',PaginationPagesComponent,{});

class PaginationLinksComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $25;
		($25 = $$.data) !== undefined && (this.data = $25);
		
	}
	[$__init__$]($$ = null,deep = true){
		super[$__init__$](...arguments);
		this.data = $$ ? $$.data : undefined;
		
	}
	previousPage(){
		return this.setURLParams({page: this.data.prev});
	}
	nextPage(){
		return this.setURLParams({page: this.data.next});
	}
	reset(){
		return Inertia.visit(Inertia.page.url.split("?")[0]);
	}
	
	render(){
		var self = this, $30, $31, $32, $33, $26, $27, $28, $34 = this._ns_ || '', $36, $37, $38, $40, $42, $43, $44, $46, $48, $50, $51, $52, $54, $56, $57, $59;
		$26=this;
		$26[$beforeReconcile$]();
		($27=$28=1,$26[$29] === 1) || ($27=$28=0,$26[$29]=1);
		((!$27||$28&2) && $26.flagSelf$('mtiecq-ai'));
		$30 = $31 = $32 = $33 = null;
		if (this.data) {
			
			($36=$37=1,$30=$26[$35]) || ($36=$37=0,$26[$35]=$30=imba_createComponent('app-button',null,`${$34}`,"Previous"));
			$36||($30[$$up$]=$26);
			$38 = $30[$getSlot$]('__',$30);
			$36 || ($30.unstyled='unstyled');
			($40=!(this.data.prev),$40===$30[$39] || ($30.disabled=$30[$39]=$40));
			$36 || ($30.on$(`click`,{$_: [function(e,$$) {
				return self.previousPage(e);
			}]},this));
			$36 || !$30.setup || $30.setup($37);
			$30[$afterVisit$]($37);
			
			($42=$43=1,$31=$26[$41]) || ($42=$43=0,$26[$41]=$31=imba_createComponent('app-button',null,`${$34}`,"Next"));
			$42||($31[$$up$]=$26);
			$44 = $31[$getSlot$]('__',$31);
			$42 || ($31.unstyled='unstyled');
			($46=!(this.data.next),$46===$31[$45] || ($31.disabled=$31[$45]=$46));
			$48 = $31[$47] || ($31[$47]={$_: [function(e,$$,_2) {
				return self.nextPage(e);
			},null]});
			$48.$_[1]=self;
			$42 || $31.on$(`click`,$48,this);
			$42 || !$31.setup || $31.setup($43);
			$31[$afterVisit$]($43);
			
			($50=$51=1,$32=$26[$49]) || ($50=$51=0,$26[$49]=$32=imba_createComponent('app-button',null,`${$34}`,"Reset"));
			$50||($32[$$up$]=$26);
			$52 = $32[$getSlot$]('__',$32);
			$50 || ($32.unstyled='unstyled');
			$54 = $32[$53] || ($32[$53]={$_: [function(e,$$,_2) {
				return self.reset(e);
			},null]});
			$54.$_[1]=self;
			$50 || $32.on$(`click`,$54,this);
			$50 || !$32.setup || $32.setup($51);
			$32[$afterVisit$]($51);
			
			($56=$57=1,$33=$26[$55]) || ($56=$57=0,$26[$55]=$33=imba_createComponent('pagination-pages',null,`${$34}`,null));
			$56||($33[$$up$]=$26);
			($59=this.data,$59===$33[$58] || ($33.data=$33[$58]=$59));
			$56 || !$33.setup || $33.setup($57);
			$33[$afterVisit$]($57);
			
		};
		($26[$60] = $26[$placeChild$]($30,0,$26[$60]));
		($26[$61] = $26[$placeChild$]($31,0,$26[$61]));
		($26[$62] = $26[$placeChild$]($32,0,$26[$62]));
		($26[$63] = $26[$placeChild$]($33,0,$26[$63]));
		$26[$afterReconcile$]($28);
		return $26;
	}
}; imba_defineTag('pagination-links',PaginationLinksComponent,{});

class PaginationTextComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $64;
		($64 = $$.data) !== undefined && (this.data = $64);
		($64 = $$.article) !== undefined && (this.article = $64);
		($64 = $$.plural) !== undefined && (this.plural = $64);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $65;
		super[$__init__$](...arguments);
		this.data = $$ ? $$.data : undefined;
		this.article = ($$ && ($65 = $$.article) !== undefined) ? ($65) : "item";
		this.plural = $$ ? $$.plural : undefined;
		
	}
	get pluralized(){
		if (this.plural) { return this.plural } else {
			return ("" + this.article + "s");
		};
	}
	
	render(){
		var $70, $66, $67, $68, $71 = this._ns_ || '', $73, $74, $76, $77, $78, $82, $83, $84;
		
		$66=this;
		$66[$beforeReconcile$]();
		($67=$68=1,$66[$69] === 1) || ($67=$68=0,$66[$69]=1);
		$70 = null;
		if (!(this.data.count)) {
			
			($73=$74=1,$70=$66[$72]) || ($73=$74=0,$66[$72]=$70=imba_createElement('p',null,`${$71}`,"No results"));
			$73||($70[$$up$]=$66);
			
		} else if (this.data.count === 1) {
			
			($76=$77=1,$70=$66[$75]) || ($76=$77=0,$66[$75]=$70=imba_createElement('p',null,`${$71}`,null));
			$76||($70[$$up$]=$66);
			$76 || $70[$placeChild$]("Showing 1 ");
			($78=this.article,($78===$70[$80]&&$76) || ($70[$79] = $70[$placeChild$]($70[$80]=$78,256,$70[$79])));
			
		} else {
			
			const {from: from,to: to,count: count} = this.data;
			($82=$83=1,$70=$66[$81]) || ($82=$83=0,$66[$81]=$70=imba_createElement('p',null,`${$71}`,null));
			$82||($70[$$up$]=$66);
			$82 || $70[$placeChild$]("Showing ");
			($84=from,($84===$70[$86]&&$82) || ($70[$85] = $70[$placeChild$]($70[$86]=$84,0,$70[$85])));
			$82 || $70[$placeChild$]("-");
			($84=to,($84===$70[$88]&&$82) || ($70[$87] = $70[$placeChild$]($70[$88]=$84,0,$70[$87])));
			$82 || $70[$placeChild$](" of ");
			($84=count,($84===$70[$90]&&$82) || ($70[$89] = $70[$placeChild$]($70[$90]=$84,0,$70[$89])));
			$82 || $70[$placeChild$](" ");
			($84=this.pluralized,($84===$70[$92]&&$82) || ($70[$91] = $70[$placeChild$]($70[$92]=$84,256,$70[$91])));
			
		};
		($66[$93] = $66[$placeChild$]($70,0,$66[$93]));
		$66[$afterReconcile$]($68);
		return $66;
		
	}
}; imba_defineTag('pagination-text',PaginationTextComponent,{cssns: 'mtiecq_an'});

imba_styles.register('mtiecq',`
pagination-pages { display:block; }

.mtiecq-ai:not(#_):not(#_):not(#_) {display: flex;
gap: 0.25rem;
--u_rg: 0.25rem;
--u_cg: 0.25rem;}

pagination-links { display:block; }

p.mtiecq_an:not(#_) {color: hsla(240.00,3.70%,15.88%,100%);
font-size: 14px;
line-height: 22px;
--u_lh: 22px;}

pagination-text { display:block; }
`);