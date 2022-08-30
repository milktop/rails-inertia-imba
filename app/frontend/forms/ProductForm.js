function watcher$__(k,w){
	return { enumerable:true,
		set(v){var o=this[k]; (v===o)||(this[k]=v,this[w]({value:v,oldValue:o}));},
		get(){ return this[k] }
	};
};
const $record$ = Symbol.for('#record'), $recordDidSet$ = Symbol.for('#recordDidSet'), $2 = watcher$__($record$,$recordDidSet$), $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $afterVisit$ = Symbol.for('#afterVisit'), $appendChild$ = Symbol.for('#appendChild'), $placeChild$ = Symbol.for('#placeChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $7 = Symbol(), $11 = Symbol(), $14 = Symbol(), $16 = Symbol(), $18 = Symbol(), $21 = Symbol(), $23 = Symbol(), $25 = Symbol(), $28 = Symbol(), $30 = Symbol(), $32 = Symbol(), $35 = Symbol(), $37 = Symbol(), $39 = Symbol(), $42 = Symbol(), $44 = Symbol(), $45 = Symbol();
import {use_events as imba_use_events, use_dom_bind as imba_use_dom_bind, styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, defineTag as imba_defineTag} from 'imba';
(imba_use_events(),imba_use_dom_bind());

/*body*/
import {priceResolvers,priceInitiliazers} from '../utils';

export default class ProductForm extends imba_Component {
	[$__patch__$]($$ = {}){
		var $1;
		Object.defineProperty(this,'record',$2);
		($1 = $$.record) !== undefined && (this.record = $1);
		($1 = $$.redirect) !== undefined && (this.redirect = $1);
		($1 = $$.form) !== undefined && (this.form = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $3;
		super[$__init__$](...arguments);
		Object.defineProperty(this,'record',$2);
		this.record = $$ ? $$.record : undefined;
		this.redirect = $$ ? $$.redirect : undefined;
		this.form = ($$ && ($3 = $$.form) !== undefined) ? ($3) : (new Form(this,{
			path: "/products",
			values: this.record || {name: "",price: "",antibiotic: false,narcotic: false},
			resolvers: priceResolvers(["price"]),
			initializers: priceInitiliazers(["price"])
		}));
		
	}
	[$recordDidSet$](e){
		return this.form.setRecord(this.record);
	}
	handleSubmit(){
		
		return this.form.submit({redirect: this.redirect});
	}
	
	render(){
		var self = this, $4, $5, $6, $8 = this._ns_ || '', $9, $10, $12, $13, $15, $17, $19, $20, $22, $24, $26, $27, $29, $31, $33, $34, $36, $38, $40, $41, $43;
		$4=this;
		$4[$beforeReconcile$]();
		($5=$6=1,$4[$7] === 1) || ($5=$6=0,$4[$7]=1);
		$5 || ($9=imba_createElement('form',$4,`z12mgsqa-ah ${$8}`,null));
		$5 || ($9.on$(`submit`,{prevent: true,$_: [function(e,$$) {
			return self.handleSubmit(e);
		}]},this));
		($12=$13=1,$10=$4[$11]) || ($12=$13=0,$4[$11]=$10=imba_createComponent('text-input',$9,`${$8}`,null));
		$12 || ($10.required='required');
		$12 || ($10.label="Name");
		$12 || ($10.name="name");
		$15=$4[$14] || ($4[$14]=$10.bind$('data',[null,'name']));
		$15[0]=this.form.data;
		($15=this.form.errors.name,$15===$4[$16] || ($10.errors=$4[$16]=$15));
		$12 || !$10.setup || $10.setup($13);
		$10[$afterVisit$]($13);
		$12 || $9[$appendChild$]($10);
		;
		($19=$20=1,$17=$4[$18]) || ($19=$20=0,$4[$18]=$17=imba_createComponent('text-input',$9,`${$8}`,null));
		$19 || ($17.label="Price");
		$19 || ($17.name="price");
		$22=$4[$21] || ($4[$21]=$17.bind$('data',[null,'price']));
		$22[0]=this.form.data;
		($22=this.form.errors.price,$22===$4[$23] || ($17.errors=$4[$23]=$22));
		$19 || !$17.setup || $17.setup($20);
		$17[$afterVisit$]($20);
		$19 || $9[$appendChild$]($17);
		;
		($26=$27=1,$24=$4[$25]) || ($26=$27=0,$4[$25]=$24=imba_createComponent('checkbox-input',$9,`${$8}`,null));
		$26 || ($24.label="Narcotic");
		$26 || ($24.name="narcotic");
		$29=$4[$28] || ($4[$28]=$24.bind$('data',[null,'narcotic']));
		$29[0]=this.form.data;
		($29=this.form.errors.narcotic,$29===$4[$30] || ($24.errors=$4[$30]=$29));
		$26 || !$24.setup || $24.setup($27);
		$24[$afterVisit$]($27);
		$26 || $9[$appendChild$]($24);
		;
		($33=$34=1,$31=$4[$32]) || ($33=$34=0,$4[$32]=$31=imba_createComponent('checkbox-input',$9,`${$8}`,null));
		$33 || ($31.label="Antibiotic");
		$33 || ($31.name="antibiotic");
		$36=$4[$35] || ($4[$35]=$31.bind$('data',[null,'antibiotic']));
		$36[0]=this.form.data;
		($36=this.form.errors.antibiotic,$36===$4[$37] || ($31.errors=$4[$37]=$36));
		$33 || !$31.setup || $31.setup($34);
		$31[$afterVisit$]($34);
		$33 || $9[$appendChild$]($31);
		;
		($40=$41=1,$38=$4[$39]) || ($40=$41=0,$4[$39]=$38=imba_createElement('button',$9,`z12mgsqa-am ${$8}`,null));
		($43=this.form.processing,$43===$4[$42] || ($38.disabled=$4[$42]=$43));
		($43=this.form.submitText,($43===$4[$45]&&$40) || ($4[$44] = $38[$placeChild$]($4[$45]=$43,384,$4[$44])));
		;
		;
		$4[$afterReconcile$]($6);
		return $4;
	}
}; imba_defineTag('product-form-z12mgsqa-am',ProductForm,{});

imba_styles.register('z12mgsqa',`
.z12mgsqa-ah:not(#_):not(#_):not(#_) {display: flex;
flex-direction: column;
align-items: baseline;
gap: 0.5rem;
--u_rg: 0.5rem;
--u_cg: 0.5rem;
margin-bottom: 1rem;}

.z12mgsqa-am:not(#_):not(#_):not(#_) {display: inline-flex;
width: auto;
padding: 0.5rem;
background: hsla(240.00,5.88%,90.00%,100%);
cursor: pointer;}

product-form-z12mgsqa-am { display:block; }
`);