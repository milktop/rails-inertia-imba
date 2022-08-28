function iter$__(a){ let v; return a ? ((v=a.toIterable) ? v.call(a) : a) : a; };;
function extend$__(target,ext){
	// @ts-ignore
	const descriptors = Object.getOwnPropertyDescriptors(ext);
	delete descriptors.constructor;
	// @ts-ignore
	Object.defineProperties(target,descriptors);
	return target;
};
var $8 = Symbol(), $11 = Symbol(), $12 = Symbol(), $13 = Symbol(), $14 = Symbol();
const $$up$ = Symbol.for('##up'), $afterVisit$ = Symbol.for('#afterVisit');
import {Component as imba_Component, getTagType as imba_getTagType, commit as imba_commit, get_document as imba_get_document, createComponent as imba_createComponent, getRenderContext as imba_getRenderContext} from 'imba';

/*body*/
import {Inertia} from '@inertiajs/inertia';

extend$__(imba_getTagType('element','Element').prototype,(class {
	
	
	getParam(key){
		
		const query = globalThis.window.location.search;
		const params = new URLSearchParams(query);
		return params.get(key);
	}
	
	setURLParams(params = {}){
		
		return Inertia.get(Inertia.page.url,params,{preserveScroll: true});
	}
	
	setPageQuery(keys = []){
		
		const params = {};
		for (let $1 = 0, $2 = iter$__(keys), $3 = $2.length; $1 < $3; $1++) {
			let key = $2[$1];
			params[key] = this.getParam(key) || "";
		};
		return params;
	}
	
	formatDate(value){
		
		const date = new Date(value);
		return date.toLocaleDateString();
	}
	
	formatTime(value){
		
		const date = new Date(value);
		return date.toLocaleTimeString([],{hour: '2-digit',minute: '2-digit'});
	}
	
	formatDateTime(value,{separator: separator = "@"} = {}){
		
		return ("" + this.formatDate(value) + " " + separator + " " + this.formatTime(value));
	}
	
	capitalize(string){
		
		return string.charAt([0]).toUpperCase() + string.slice(1);
	}
	
	formatPrice(value = 0){
		
		const formatter = new Intl.NumberFormat("fr",{style: "currency",currency: "EUR"});
		return formatter.format(value / 100);
	}
	
	cleanParams(params = {}){
		
		const cleaned = JSON.parse(JSON.stringify(params));
		Object.keys(cleaned).forEach(function(key) {
			var $4;
			
			if (cleaned[key] === "") { return ((($4 = cleaned[key]),delete cleaned[key], $4)) };
		});
		return cleaned;
	}
	
	async focusFirstInput(container){
		
		const input = container?.querySelector?.('input, select, textarea');
		await imba_commit();
		return input && input.focus();
	}
	
	notify(message = "",{type: type = "info",title: title,autoclose: autoclose = 4500,showClose: showClose = true} = {}){
		var $5 = this._ns_ || '', $6, $7 = imba_getRenderContext(), $9, $10;
		
		const container = imba_get_document().querySelector('.alerts');
		const alert = (($9=$10=1,$6=$7[$8]) || ($9=$10=0,$6=$7[$8]=$6=imba_createComponent('app-alert',null,`${$5}`,null)),
		$9 || ($6[$$up$]=$7._),
		(type===$6[$11] || ($6.type=$6[$11]=type)),
		(title===$6[$12] || ($6.title=$6[$12]=title)),
		(message===$6[$13] || ($6.message=$6[$13]=message)),
		(showClose===$6[$14] || ($6.showClose=$6[$14]=showClose)),
		$9 || $7.sym || !$6.setup || $6.setup($10),
		$7.sym || $6[$afterVisit$]($10),
		$6);
		container.append(alert);
		
		if (autoclose) {
			
			return setTimeout(function() { return alert?.remove?.(); },autoclose);
		};
	}
	
	notifySuccess(message = "",{title: title,autoclose: autoclose,showClose: showClose} = {}){
		
		const params = {type: "success",title: title,autoclose: autoclose,showClose: showClose};
		return this.notify(message,params);
	}
	
	notifyError(message = "",{title: title,autoclose: autoclose,showClose: showClose} = {}){
		
		const params = {type: "warning",title: title,autoclose: autoclose,showClose: showClose};
		return this.notify(message,params);
	}
}).prototype);
