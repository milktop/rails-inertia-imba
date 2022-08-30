const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $getSlot$ = Symbol.for('#getSlot'), $afterVisit$ = Symbol.for('#afterVisit'), $appendChild$ = Symbol.for('#appendChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $6 = Symbol(), $9 = Symbol(), $14 = Symbol(), $17 = Symbol(), $19 = Symbol(), $21 = Symbol(), $24 = Symbol();
import {styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, use_slots as imba_use_slots, defineTag as imba_defineTag} from 'imba';
(imba_use_slots());

/*body*/
import ProductForm from '../forms/ProductForm';

class ProductPageComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.props) !== undefined && (this.props = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $2;
		super[$__init__$](...arguments);
		this.props = ($$ && ($2 = $$.props) !== undefined) ? ($2) : {};
		
	}
	render(){
		var $3, $4, $5, $7 = this._ns_ || '', $8, $10, $11, $12, $13, $15, $16, $18, $20, $22, $23;
		
		
		const {product: product} = this.props;
		
		$3=this;
		$3[$beforeReconcile$]();
		($4=$5=1,$3[$6] === 1) || ($4=$5=0,$3[$6]=1);
		($10=$11=1,$8=$3[$9]) || ($10=$11=0,$3[$9]=$8=imba_createComponent('main-layout',$3,`${$7}`,null));
		$12 = $8[$getSlot$]('__',$3);
		($15=$16=1,$13=$3[$14]) || ($15=$16=0,$3[$14]=$13=imba_createComponent('page-titles',$12,`${$7}`,null));
		($18=product.name,$18===$3[$17] || ($13.title=$3[$17]=$18));
		($18=("Last updated " + this.formatDateTime(product.updated_at)),$18===$3[$19] || ($13.subtitle=$3[$19]=$18));
		$15 || !$13.setup || $13.setup($16);
		$13[$afterVisit$]($16);
		$15 || $12[$appendChild$]($13);
		;
		($22=$23=1,$20=$3[$21]) || ($22=$23=0,$3[$21]=$20=imba_createComponent(ProductForm,$12,`${$7}`,null));
		(product===$3[$24] || ($20.record=$3[$24]=product));
		$22 || ($20.redirect="/products");
		$22 || !$20.setup || $20.setup($23);
		$20[$afterVisit$]($23);
		$22 || $12[$appendChild$]($20);
		;
		$10 || !$8.setup || $8.setup($11);
		$8[$afterVisit$]($11);
		$10 || $3[$appendChild$]($8);
		;
		$3[$afterReconcile$]($5);
		return $3;
		
	}
}; imba_defineTag('product-page',ProductPageComponent,{});

imba_styles.register('wtvtug',`
product-page { display:block; }
`);