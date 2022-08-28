const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__initor__$ = Symbol.for('#__initor__'), $__inited__$ = Symbol.for('#__inited__'), $__hooks__$ = Symbol.for('#__hooks__');
import {commit as imba_commit} from 'imba';

/*body*/
import {Inertia} from '@inertiajs/inertia';
import {setPageQuery,getParam,setURLParams,cleanParams} from '../utils';

class Query {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.loading) !== undefined && (this.loading = $1);
		($1 = $$.params) !== undefined && (this.params = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $2;
		this.loading = ($$ && ($2 = $$.loading) !== undefined) ? ($2) : false;
		this.params = ($$ && ($2 = $$.params) !== undefined) ? ($2) : {};
		
	}
	constructor(url,{filters: filters = [],defaultSort: defaultSort = "name_asc"} = {}){
		this[$__init__$]();
		this.url = url;
		this.filters = filters;
		this.defaultSort = defaultSort;
		this.defaultDirection = this.defaultDirection;
	}
	
	update(){
		
		return this.params = setPageQuery(this.filters);
	}
	
	// Also check for current sort asc/desc etc
	async sort(key){
		
		await imba_commit();
		const current = getParam("sort") || this.defaultSort;
		const currentSort = current.split("_")[0];
		const currentDirection = current.split("_")[1];
		const isRepeat = key === currentSort;
		const flipped = (currentDirection === "asc") ? "desc" : "asc";
		const direction = isRepeat ? flipped : "asc";
		console.log({current: current,currentSort: currentSort,currentDirection: currentDirection,direction: direction});
		return setURLParams({sort: ("" + key + "_" + direction)});
	}
	
	fetch(){
		var self = this;
		
		return Inertia.get(this.url,cleanParams(this.params),{
			onStart: function() { return self.loading = true; },
			onFinish: function() {
				
				self.loading = false;
				return imba_commit();
			}
		});
	}
}; globalThis.Query = Query;
