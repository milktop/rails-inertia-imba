const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $beforeReconcile$ = Symbol.for('#beforeReconcile'), $$up$ = Symbol.for('##up'), $getSlot$ = Symbol.for('#getSlot'), $afterVisit$ = Symbol.for('#afterVisit'), $placeChild$ = Symbol.for('#placeChild'), $appendChild$ = Symbol.for('#appendChild'), $afterReconcile$ = Symbol.for('#afterReconcile');
var $6 = Symbol(), $9 = Symbol(), $12 = Symbol(), $16 = Symbol(), $19 = Symbol(), $22 = Symbol(), $25 = Symbol(), $28 = Symbol(), $31 = Symbol(), $34 = Symbol(), $36 = Symbol(), $37 = Symbol(), $39 = Symbol();
import {use_dom_transitions as imba_use_dom_transitions, use_events as imba_use_events, use_dom_bind as imba_use_dom_bind, styles as imba_styles, Component as imba_Component, createComponent as imba_createComponent, createElement as imba_createElement, use_slots as imba_use_slots, defineTag as imba_defineTag} from 'imba';
(imba_use_dom_transitions(),imba_use_events(),imba_use_dom_bind(),imba_use_slots());

/*body*/
class LoginPageComponent extends imba_Component {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.props) !== undefined && (this.props = $1);
		($1 = $$.form) !== undefined && (this.form = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $2;
		super[$__init__$](...arguments);
		this.props = ($$ && ($2 = $$.props) !== undefined) ? ($2) : {};
		this.form = ($$ && ($2 = $$.form) !== undefined) ? ($2) : (new Form(this,{path: "/login",values: {email: "",password: ""}}));
		
	}
	handleSubmit(){
		return this.form.submit();
	}
	
	render(){
		var self = this, $11, $38, $3, $4, $5, $7 = this._ns_ || '', $8, $10, $13, $14, $15, $17, $18, $20, $21, $23, $24, $26, $27, $29, $30, $32, $33, $35;
		
		
		const {processing: processing,errors: errors,values: values} = this.form;
		
		$3=this;
		$3[$beforeReconcile$]();
		($4=$5=1,$3[$6] === 1) || ($4=$5=0,$3[$6]=1);
		($8=$3[$9]) || ($3[$9]=$8=imba_createElement('main',$3,`${$7}`,null));
		$4 || ($10=imba_createElement('h2',$8,`${$7}`,"Connect to your account"));
		;
		$11 = null;
		if (this.form.hasErrors) {
			
			($13=$14=1,$11=$3[$12]) || ($13=$14=0,$3[$12]=$11=imba_createComponent('alert-message',null,`${$7}`,"There was an error logging in"));
			$13||($11[$$up$]=$8);
			$15 = $11[$getSlot$]('__',$11);
			$13 || ($11.ease='ease');
			$13 || !$11.setup || $11.setup($14);
			$11[$afterVisit$]($14);
			
		};
		($3[$16] = $8[$placeChild$]($11,0,$3[$16]));
		$4 || ($17=imba_createElement('form',$8,`${$7}`,null));
		$4 || ($17.on$(`submit`,{prevent: true,$_: [function(e,$$) {
			return self.handleSubmit(e);
		}]},this));
		($20=$21=1,$18=$3[$19]) || ($20=$21=0,$3[$19]=$18=imba_createComponent('text-input',$17,`${$7}`,null));
		$20 || ($18.name="email");
		$20 || ($18.label="Email");
		$23=$3[$22] || ($3[$22]=$18.bind$('data',[null,'email']));
		$23[0]=this.form.data;
		$20 || !$18.setup || $18.setup($21);
		$18[$afterVisit$]($21);
		$20 || $17[$appendChild$]($18);
		;
		($26=$27=1,$24=$3[$25]) || ($26=$27=0,$3[$25]=$24=imba_createComponent('password-input',$17,`${$7}`,null));
		$26 || ($24.name="password");
		$26 || ($24.label="Password");
		$29=$3[$28] || ($3[$28]=$24.bind$('data',[null,'password']));
		$29[0]=this.form.data;
		$26 || !$24.setup || $24.setup($27);
		$24[$afterVisit$]($27);
		$26 || $17[$appendChild$]($24);
		;
		($32=$33=1,$30=$3[$31]) || ($32=$33=0,$3[$31]=$30=imba_createElement('button',$17,`${$7}`,null));
		($35=this.form.processing,$35===$3[$34] || ($30.disabled=$3[$34]=$35));
		($35=(this.form.processing||undefined),$35===$3[$37]||($33|=2,$3[$37]=$35));
		($33&2 && $30.flag$(`${$7}`+' '+($3[$37] ? 'ddxkan-an' : '')));
		$38 = null;
		this.form.processing ? (($38="Logging in")) : (($38="Login"));
		($3[$39] = $30[$placeChild$]($38,0,$3[$39]));
		;
		;
		;
		$3[$afterReconcile$]($5);
		return $3;
	}
}; imba_defineTag('login-page',LoginPageComponent,{cssns: 'ddxkan_af',cssid: 'ddxkan-af'});

imba_styles.register('ddxkan',`
.ddxkan-af {background: hsla(172.46,66.01%,50.39%,100%);
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;}

main.ddxkan_af:not(#_) {padding: 2.5rem;
background: hsla(0.00,0.00%,100.00%,100%);
border-radius: 4px;
width: 30rem;}

h2.ddxkan_af:not(#_) {color: hsla(173.41,80.39%,40.00%,100%);
font-weight: 600;
text-align: center;
margin-bottom: 2rem;
font-size: 18px;
line-height: 28px;
--u_lh: 28px;}

button.ddxkan_af:not(#_) {margin-top: 0.75rem;
padding-left: 0.65rem;
padding-right: 0.65rem;
padding-top: 0.3rem;
padding-bottom: 0.3rem;
background: hsla(173.41,80.39%,40.00%,100%);
color: hsla(0.00,0.00%,100.00%,100%);
border-radius: 2px;
cursor: pointer;
font-size: 13px;
line-height: 20px;
--u_lh: 20px;}

.ddxkan-an:not(#_):not(#_):not(#_) {opacity: 0.6;}

login-page { display:block; }
`);