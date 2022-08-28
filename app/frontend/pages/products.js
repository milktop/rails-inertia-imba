function iter$__(a){ let v; return a ? ((v=a.toIterable) ? v.call(a) : a) : a; };;
function watcher$__(k,w){
	return { enumerable:true,
		set(v){var o=this[k]; (v===o)||(this[k]=v,this[w]({value:v,oldValue:o}));},
		get(){ return this[k] }
	};
};
const $props$ = Symbol.for('#props'), $propsDidSet$ = Symbol.for('#propsDidSet'), $2 = watcher$__($props$,$propsDidSet$), $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $getSlot$ = Symbol.for('#getSlot'), $afterVisit$ = Symbol.for('#afterVisit'), $appendChild$ = Symbol.for('#appendChild'), $$up$ = Symbol.for('##up'), $placeChild$ = Symbol.for('#placeChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $7 = Symbol(), $10 = Symbol(), $15 = Symbol(), $19 = Symbol(), $24 = Symbol(), $27 = Symbol(), $28 = Symbol(), $30 = Symbol(), $32 = Symbol(), $34 = Symbol(), $37 = Symbol(), $39 = Symbol(), $42 = Symbol(), $44 = Symbol(), $47 = Symbol(), $50 = Symbol(), $53 = Symbol(), $55 = Symbol(), $58 = Symbol(), $60 = Symbol(), $62 = Symbol(), $65 = Symbol(), $68 = Symbol(), $71 = Symbol(), $74 = Symbol(), $77 = Symbol(), $80 = Symbol(), $83 = Symbol(), $86 = Symbol(), $89 = Symbol(), $92 = Symbol(), $95 = Symbol(), $100 = Symbol(), $103 = Symbol(), $106 = Symbol(), $109 = Symbol(), $114 = Symbol(), $115 = Symbol(), $127 = Symbol(), $131 = Symbol(), $133 = Symbol(), $134 = Symbol(), $136 = Symbol(), $138 = Symbol(), $139 = Symbol(), $140 = Symbol(), $142 = Symbol(), $144 = Symbol(), $145 = Symbol(), $147 = Symbol(), $149 = Symbol(), $150 = Symbol(), $152 = Symbol();
import {use_events as imba_use_events, use_dom_bind as imba_use_dom_bind, styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, use_slots as imba_use_slots, createElement as imba_createElement, createKeyedList as imba_createKeyedList, renderContext as imba_renderContext, defineTag as imba_defineTag} from 'imba';
(imba_use_events(),imba_use_dom_bind(),imba_use_slots());

/*body*/
import '../forms/ProductForm';

class ProductsPageComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.filters) !== undefined && (this.filters = $1);
		($1 = $$.query) !== undefined && (this.query = $1);
		Object.defineProperty(this,'props',$2);
		($1 = $$.props) !== undefined && (this.props = $1);
		($1 = $$.showForm) !== undefined && (this.showForm = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $3;
		super[$__init__$](...arguments);
		this.filters = ($$ && ($3 = $$.filters) !== undefined) ? ($3) : ["q","min_price","max_price","narcotic","antibiotic"];
		this.query = ($$ && ($3 = $$.query) !== undefined) ? ($3) : (new Query("/products",{filters: this.filters,defaultSort: "name_asc"}));
		Object.defineProperty(this,'props',$2);
		this.props = ($$ && ($3 = $$.props) !== undefined) ? ($3) : {};
		this.showForm = ($$ && ($3 = $$.showForm) !== undefined) ? ($3) : false;
		
	}
	[$propsDidSet$](e){
		return this.query.update();
	}
	onSuccess(){
		return this.showForm = false;
	}
	
	render(){
		var self = this, $18, $49, $91, $4, $5, $6, $8 = this._ns_ || '', $9, $11, $12, $13, $14, $16, $17, $20, $21, $22, $23, $25, $26, $29, $31, $33, $35, $36, $38, $40, $41, $43, $45, $46, $48, $51, $52, $54, $56, $57, $59, $61, $63, $64, $66, $67, $69, $70, $72, $73, $75, $76, $78, $79, $81, $82, $84, $85, $87, $88, $90, $93, $94, $96, $97, $98, $99, $101, $102, $104, $105, $107, $108, $110, $111, $112, $113, $116, $117, $118, $121, $123, $122, $124, $125, $126, $128, $129, $130, $132, $135, $137, $141, $143, $146, $148;
		
		
		const {products: products = [],pagination: pagination,errors: errors = []} = this.props;
		
		$4=this;
		$4[$beforeReconcile$]();
		($5=$6=1,$4[$7] === 1) || ($5=$6=0,$4[$7]=1);
		($11=$12=1,$9=$4[$10]) || ($11=$12=0,$4[$10]=$9=imba_createComponent('main-layout',$4,`${$8}`,null));
		$13 = $9[$getSlot$]('__',$4);
		($16=$17=1,$14=$4[$15]) || ($16=$17=0,$4[$15]=$14=imba_createComponent('page-titles',$13,`${$8}`,null));
		$16 || ($14.title="Products");
		$16 || !$14.setup || $14.setup($17);
		$14[$afterVisit$]($17);
		$16 || $13[$appendChild$]($14);
		;
		$18 = null;
		if (this.showForm) {
			
			($20=$21=1,$18=$4[$19]) || ($20=$21=0,$4[$19]=$18=imba_createComponent('app-modal',null,`${$8}`,null));
			$20||($18[$$up$]=$13);
			$22 = $18[$getSlot$]('__',$18);
			$20 || ($18.title="Add a new product");
			$20 || ($18.on$(`close`,{$_: [function(e,$$) {
				return self.showForm = false;
			}]},this));
			($25=$26=1,$23=$18[$24]) || ($25=$26=0,$18[$24]=$23=imba_createComponent(ProductForm,$22,`${$8}`,null));
			(errors===$18[$27] || ($23.errors=$18[$27]=errors));
			$29 = $18[$28] || ($18[$28]={$_: [function(e,$$,_2) {
				return self.onSuccess(e);
			},null]});
			$29.$_[1]=self;
			$25 || $23.on$(`success`,$29,this);
			$25 || !$23.setup || $23.setup($26);
			$23[$afterVisit$]($26);
			$25 || $22[$appendChild$]($23);
			;
			$20 || !$18.setup || $18.setup($21);
			$18[$afterVisit$]($21);
		};
		($4[$30] = $13[$placeChild$]($18,0,$4[$30]));
		($31=$4[$32]) || ($4[$32]=$31=imba_createElement('section',$13,`qv6g1e-al ${$8}`,null));
		($35=$36=1,$33=$4[$34]) || ($35=$36=0,$4[$34]=$33=imba_createComponent('pagination-text',$31,`${$8}`,null));
		(pagination===$4[$37] || ($33.data=$4[$37]=pagination));
		$35 || !$33.setup || $33.setup($36);
		$33[$afterVisit$]($36);
		$35 || $31[$appendChild$]($33);
		;
		($40=$41=1,$38=$4[$39]) || ($40=$41=0,$4[$39]=$38=imba_createComponent('pagination-links',$31,`${$8}`,null));
		(pagination===$4[$42] || ($38.data=$4[$42]=pagination));
		$40 || !$38.setup || $38.setup($41);
		$38[$afterVisit$]($41);
		$40 || $31[$appendChild$]($38);
		;
		($45=$46=1,$43=$4[$44]) || ($45=$46=0,$4[$44]=$43=imba_createElement('button',$31,`${$8}`,"Add new"));
		$48 = $4[$47] || ($4[$47]={$_: [function(e,$$,_2) {
			return self.showForm = true;
		},null]});
		$48.$_[1]=self;
		$45 || $43.on$(`click`,$48,this);
		;
		$49 = null;
		if (this.query.loading) { ($51=$52=1,$49=$4[$50]) || ($51=$52=0,$4[$50]=$49=imba_createElement('span',null,`${$8}`,"Loading..."));
		$51||($49[$$up$]=$31);
		 };
		($4[$53] = $31[$placeChild$]($49,0,$4[$53]));
		;
		($56=$57=1,$54=$4[$55]) || ($56=$57=0,$4[$55]=$54=imba_createElement('form',$13,`qv6g1e-aq ${$8}`,null));
		$59 = $4[$58] || ($4[$58]={$_: [function(e,$$,_2) {
			return self.query.fetch(e);
		},null]});
		$59.$_[1]=self;
		$56 || $54.on$(`change`,$59,this);
		$59 = $4[$60] || ($4[$60]={capture: true,prevent: true,$_: [function(e,$$,_2) {
			return self.query.fetch(e);
		},null]});
		$59.$_[1]=self;
		$56 || $54.on$(`submit`,$59,this);
		($63=$64=1,$61=$4[$62]) || ($63=$64=0,$4[$62]=$61=imba_createComponent('text-input',$54,`${$8}`,null));
		$63 || ($61.debounce='debounce');
		$66=$4[$65] || ($4[$65]=$61.bind$('data',[null,'q']));
		$66[0]=this.query.params;
		$63 || !$61.setup || $61.setup($64);
		$61[$afterVisit$]($64);
		$63 || $54[$appendChild$]($61);
		;
		($69=$70=1,$67=$4[$68]) || ($69=$70=0,$4[$68]=$67=imba_createComponent('text-input',$54,`${$8}`,null));
		$69 || ($67.debounce='debounce');
		$72=$4[$71] || ($4[$71]=$67.bind$('data',[null,'min_price']));
		$72[0]=this.query.params;
		$69 || !$67.setup || $67.setup($70);
		$67[$afterVisit$]($70);
		$69 || $54[$appendChild$]($67);
		;
		($75=$76=1,$73=$4[$74]) || ($75=$76=0,$4[$74]=$73=imba_createComponent('text-input',$54,`${$8}`,null));
		$75 || ($73.debounce='debounce');
		$78=$4[$77] || ($4[$77]=$73.bind$('data',[null,'max_price']));
		$78[0]=this.query.params;
		$75 || !$73.setup || $73.setup($76);
		$73[$afterVisit$]($76);
		$75 || $54[$appendChild$]($73);
		;
		($81=$82=1,$79=$4[$80]) || ($81=$82=0,$4[$80]=$79=imba_createComponent('boolean-select',$54,`${$8}`,null));
		$84=$4[$83] || ($4[$83]=$79.bind$('data',[null,'antibiotic']));
		$84[0]=this.query.params;
		$81 || !$79.setup || $79.setup($82);
		$79[$afterVisit$]($82);
		$81 || $54[$appendChild$]($79);
		;
		($87=$88=1,$85=$4[$86]) || ($87=$88=0,$4[$86]=$85=imba_createComponent('boolean-select',$54,`${$8}`,null));
		$90=$4[$89] || ($4[$89]=$85.bind$('data',[null,'narcotic']));
		$90[0]=this.query.params;
		$87 || !$85.setup || $85.setup($88);
		$85[$afterVisit$]($88);
		$87 || $54[$appendChild$]($85);
		;
		;
		$91 = null;
		if (!products.length) {
			
			($93=$94=1,$91=$4[$92]) || ($93=$94=0,$4[$92]=$91=imba_createElement('p',null,`${$8}`,"No products"));
			$93||($91[$$up$]=$13);
			
		} else {
			
			($96=$97=1,$91=$4[$95]) || ($96=$97=0,$4[$95]=$91=imba_createElement('table',null,`${$8}`,null));
			$96||($91[$$up$]=$13);
			$96 || ($98=imba_createElement('thead',$91,`${$8}`,null));
			($101=$102=1,$99=$91[$100]) || ($101=$102=0,$91[$100]=$99=imba_createElement('th',$98,`qv6g1e-az ${$8}`,"Name"));
			$104 = $91[$103] || ($91[$103]={$_: [function(e,$$,_2) {
				return self.query.sort("name");
			},null]});
			$104.$_[1]=self;
			$101 || $99.on$(`click`,$104,this);
			;
			($107=$108=1,$105=$91[$106]) || ($107=$108=0,$91[$106]=$105=imba_createElement('th',$98,`qv6g1e-ba ${$8}`,"Price"));
			$110 = $91[$109] || ($91[$109]={$_: [function(e,$$,_2) {
				return self.query.sort("price");
			},null]});
			$110.$_[1]=self;
			$107 || $105.on$(`click`,$110,this);
			;
			$96 || ($111=imba_createElement('th',$98,`${$8}`,"Antibiotic"));
			;
			$96 || ($112=imba_createElement('th',$98,`${$8}`,"Narcotic"));
			;
			;
			($113=$91[$114]) || ($91[$114]=$113=imba_createElement('tbody',$91,`${$8}`,null));
			($116 = $91[$115]) || ($91[$115]=$116=imba_createKeyedList(384,$113));
			$117 = 0;
			$118=$116.$;
			for (let $119 = 0, $120 = iter$__(products), $151 = $120.length; $119 < $151; $119++) {
				let product = $120[$119];
				($123=$124=1,$121=$118.get($122=product.id)) || ($123=$124=0,$118.set($122,$121=imba_createElement('tr',null,`${$8}`,null)));
				$123||($121[$$up$]=$116);
				$123 || ($125=imba_createElement('td',$121,`${$8}`,null));
				($128=$129=1,$126=$121[$127]) || ($128=$129=0,$121[$127]=$126=imba_createComponent('inertia-link',$125,`${$8}`,null));
				$130 = $126[$getSlot$]('__',$121);
				($132=("/products/" + (product.id)),$132===$121[$131] || ($126.href=$121[$131]=$132));
				($132=product.name,($132===$121[$134]&&$128) || ($121[$133] = $130[$placeChild$]($121[$134]=$132,384,$121[$133])));
				$128 || !$126.setup || $126.setup($129);
				$126[$afterVisit$]($129);
				$128 || $125[$appendChild$]($126);
				;
				;
				($135=$121[$136]) || ($121[$136]=$135=imba_createElement('td',$121,`${$8}`,null));
				(imba_renderContext.context=($121[$139] || ($121[$139]={_:$135})),$137=this.formatPrice(product.price),imba_renderContext.context=null,($137===$121[$140]&&$123) || ($121[$138] = $135[$placeChild$]($121[$140]=$137,384,$121[$138])));
				;
				($141=$121[$142]) || ($121[$142]=$141=imba_createElement('td',$121,`${$8}`,null));
				($143=product.antibiotic,($143===$121[$145]&&$123) || ($121[$144] = $141[$placeChild$]($121[$145]=$143,384,$121[$144])));
				;
				($146=$121[$147]) || ($121[$147]=$146=imba_createElement('td',$121,`${$8}`,null));
				($148=product.narcotic,($148===$121[$150]&&$123) || ($121[$149] = $146[$placeChild$]($121[$150]=$148,384,$121[$149])));
				;
				$116.push($121,$117++,$122);
			};$116[$afterVisit$]($117);;
			;
		};
		($4[$152] = $13[$placeChild$]($91,0,$4[$152]));
		$11 || !$9.setup || $9.setup($12);
		$9[$afterVisit$]($12);
		$11 || $4[$appendChild$]($9);
		;
		$4[$afterReconcile$]($6);
		return $4;
	}
}; imba_defineTag('products-page',ProductsPageComponent,{});

imba_styles.register('qv6g1e',`
.qv6g1e-al:not(#_):not(#_):not(#_) {display: flex;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;
align-items: center;
margin-top: 0.25rem;}

.qv6g1e-aq:not(#_):not(#_):not(#_) {margin-top: 0.5rem;
margin-bottom: 0.5rem;
display: flex;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;}

.qv6g1e-az:not(#_):not(#_):not(#_) {cursor: pointer;}

.qv6g1e-ba:not(#_):not(#_):not(#_) {cursor: pointer;}

products-page { display:block; }
`);