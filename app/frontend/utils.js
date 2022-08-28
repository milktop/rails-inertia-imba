function iter$__(a){ let v; return a ? ((v=a.toIterable) ? v.call(a) : a) : a; };

/*body*/
import {Inertia} from '@inertiajs/inertia';
import queryString from 'query-string';

export function getParam(key){
	
	const query = globalThis.window.location.search;
	const params = new URLSearchParams(query);
	return params.get(key);
	
};
export function setURLParams(params = {}){
	
	return Inertia.get(Inertia.page.url,params,{preserveScroll: true});
};

export function setPageQuery(keys = []){
	
	const params = {};
	for (let $1 = 0, $2 = iter$__(keys), $3 = $2.length; $1 < $3; $1++) {
		let key = $2[$1];
		params[key] = getParam(key) || "";
	};
	return params;
};

export function getParams(){
	
	return queryString.parse(globalThis.window.location.search);
};

export function cleanParams(params = {}){
	
	const cleaned = JSON.parse(JSON.stringify(params));
	Object.keys(cleaned).forEach(function(key) {
		var $4;
		
		if (cleaned[key] === "") { return ((($4 = cleaned[key]),delete cleaned[key], $4)) };
	});
	return cleaned;
};

export function priceResolvers(keys = [],{coerce: coerce = false} = {}){
	
	let resolvers = [];
	for (let $5 = 0, $6 = iter$__(keys), $7 = $6.length; $5 < $7; $5++) {
		let key = $6[$5];
		const resolver = {
			key: key,
			action: function(value) {
				
				if (!(isNaN(value))) { return value * 100 };
				return coerce ? 
					0
				 : 
					value
				;
			}
		};
		resolvers.push(resolver);
	};
	return resolvers;
};

export function priceInitiliazers(keys = [],{coerce: coerce = false} = {}){
	
	let initializers = [];
	for (let $8 = 0, $9 = iter$__(keys), $10 = $9.length; $8 < $10; $8++) {
		let key = $9[$8];
		const initializer = {
			key: key,
			action: function(value) {
				
				if (!(isNaN(value))) { return value / 100 };
				return coerce ? 
					0
				 : 
					value
				;
			}
		};
		initializers.push(initializer);
	};
	return initializers;
};
