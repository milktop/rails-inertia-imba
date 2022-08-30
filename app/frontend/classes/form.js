function iter$__(a){ let v; return a ? ((v=a.toIterable) ? v.call(a) : a) : a; };
const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__initor__$ = Symbol.for('#__initor__'), $__inited__$ = Symbol.for('#__inited__'), $__hooks__$ = Symbol.for('#__hooks__');
import {commit as imba_commit} from 'imba';

/*body*/
import {Inertia} from '@inertiajs/inertia';

class Form {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.defaultValues) !== undefined && (this.defaultValues = $1);
		($1 = $$.data) !== undefined && (this.data = $1);
		($1 = $$.submitted) !== undefined && (this.submitted = $1);
		($1 = $$.processing) !== undefined && (this.processing = $1);
		($1 = $$.progress) !== undefined && (this.progress = $1);
		($1 = $$.errors) !== undefined && (this.errors = $1);
		($1 = $$.record) !== undefined && (this.record = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $2;
		this.defaultValues = ($$ && ($2 = $$.defaultValues) !== undefined) ? ($2) : {};
		this.data = ($$ && ($2 = $$.data) !== undefined) ? ($2) : {};
		this.submitted = ($$ && ($2 = $$.submitted) !== undefined) ? ($2) : false;
		this.processing = ($$ && ($2 = $$.processing) !== undefined) ? ($2) : false;
		this.progress = ($$ && ($2 = $$.progress) !== undefined) ? ($2) : null;
		this.errors = ($$ && ($2 = $$.errors) !== undefined) ? ($2) : {};
		this.record = ($$ && ($2 = $$.record) !== undefined) ? ($2) : null;
		
	}
	constructor(container,{path: path,values: values = {},resolvers: resolvers = [],initializers: initializers = [],record: record} = {}){
		this[$__init__$]();
		this.container = container;
		this.path = path;
		this.defaultValues = {...values};
		this.data = {...values};
		this.resolvers = resolvers;
		this.initializers = initializers;
		this.record = record;
		this.setRecord();
	}
	
	setRecord(record){
		
		this.record = record;
		if (record) { return this.setValuesFromRecord() };
	}
	
	setValuesFromRecord(){
		var $7;
		
		if (!(this.record)) { return };
		for (let $5 = this.data, $3 = 0, $4 = Object.keys($5), $6 = $4.length, key, value; $3 < $6; $3++){
			key = $4[$3];value = $5[key];
			this.data[key] = this.record[key] || value;
		};
		
		$7 = [];
		for (let $8 = 0, $9 = iter$__(this.initializers), $10 = $9.length; $8 < $10; $8++) {
			let initializer = $9[$8];
			let value = this.data[initializer.key];
			$7.push((this.data[initializer.key] = initializer.action(value)));
		};
		return $7;
	}
	
	get type(){
		return this.record ? "update" : "create";
	}
	get isCreate(){
		return this.type === "create";
	}
	get isUpdate(){
		return this.type === "update";
	}
	
	get method(){
		return this.record ? "put" : "post";
	}
	get submitText(){
		return this.record ? "Update" : "Submit";
	}
	
	get(url,options){
		return this.commit("get",url,options);
	}
	post(url,options){
		return this.commit("post",url,options);
	}
	put(url,options){
		return this.commit("put",url,options);
	}
	patch(url,options){
		return this.commit("patch",url,options);
	}
	delete(url,options){
		return this.commit("delete",url,options);
	}
	
	get hasErrors(){
		return !(!(Object.keys(this.errors).length));
	}
	
	get values(){
		
		let object = {...this.data};
		
		for (let $11 = 0, $12 = iter$__(this.resolvers), $13 = $12.length; $11 < $13; $11++) {
			let resolver = $12[$11];
			let value = object[resolver.key];
			object[resolver.key] = resolver.action(value,this.data);
		};
		
		return object;
	}
	
	reset(){
		
		return this.data = {...this.defaultValues};
	}
	
	commit(method = "post",url,options = {},params = {}){
		var self = this;
		
		
		this.errors = {};
		
		const _options = {
			preserveState: true,
			onStart: function() {
				
				self.submitted = true;
				self.processing = true;
				return options.onStart && options.onStart();
			},
			onProgress: function(event) {
				
				self.progress = event;
				options.onProgress && options.onProgress(event);
				return imba_commit();
			},
			onSuccess: function(page) {
				
				self.errors = {};
				options.onSuccess && options.onSuccess(page);
				imba_commit();
				return self.container.emit('success');
			},
			onError: function(errors) {
				
				self.errors = errors;
				options.onError && options.onError(errors);
				imba_commit();
				return self.container.emit('error',errors);
			},
			onFinish: function() {
				
				self.processing = false;
				self.progress = null;
				options.onFinish && options.onFinish();
				return self.container.emit('complete');
			}
		};
		
		const payload = {...this.values,...params};
		
		// Perform the request
		if (method === "delete") {
			
			return Inertia.delete(url,{..._options},payload);
		} else {
			
			return Inertia[method](url,payload,_options);
		};
	}
	
	submit(params = {}){
		
		if (!(this.path)) { throw new Error("Path needs to be set for form submission") };
		const url = this.isUpdate ? (("" + this.path + "/" + (this.record.id))) : this.path;
		return this.commit(this.method,url,{},params);
	}
}; globalThis.Form = Form;
