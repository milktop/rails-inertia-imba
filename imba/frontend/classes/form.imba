import { Inertia } from '@inertiajs/inertia'

global class Form
	defaultValues = {}	
	data = {}
	submitted = false
	processing = false
	progress = null
	errors = {}
	record = null

	constructor container, { path, values = {}, resolvers = [], initializers = [], record } = {}
		container = container
		path = path
		defaultValues = {...values}
		data = {...values}
		resolvers = resolvers
		initializers = initializers
		record = record
		setRecord!
	
	def setRecord record
		record = record
		setValuesFromRecord! if record
	
	def setValuesFromRecord
		return unless record
		for own key, value of data
			data[key] = record[key] || value
		
		for initializer in initializers
			let value = data[initializer.key]
			data[initializer.key] = initializer.action(value)
	
	get type do record ? "update" : "create"
	get isCreate do type === "create"
	get isUpdate do type === "update"

	get method do record ? "put" : "post"
	get submitText do record ? "Update" : "Submit"
	
	def get url, options do commit "get", url, options
	def post url, options do commit "post", url, options
	def put url, options do commit "put", url, options
	def patch url, options do commit "patch", url, options
	def delete url, options do commit "delete", url, options
	
	get hasErrors do !!Object.keys(errors).length

	get values
		let object = {...data}

		for resolver in resolvers
			let value = object[resolver.key]
			object[resolver.key] = resolver.action(value, data)
		
		return object
	
	def reset
		data = {...defaultValues}
	
	def commit method = "post", url, options = {}, params = {}

		errors = {}
		
		const _options = {
			preserveState: true,
			onStart: do
				submitted = true
				processing = true
				options.onStart && options.onStart!
			onProgress: do |event|
				progress = event
				options.onProgress && options.onProgress(event)
				imba.commit!
			onSuccess: do |page|
				errors = {}
				options.onSuccess && options.onSuccess(page)
				imba.commit!
				container.emit 'success'
			onError: do |errors|
				errors = errors
				options.onError && options.onError(errors)
				imba.commit!
				container.emit 'error', errors
			onFinish: do
				processing = false
				progress = null
				options.onFinish && options.onFinish!
				container.emit 'complete'
		}

		const payload = {...values, ...params}
		
		# Perform the request
		if method === "delete"
			Inertia.delete url, { ..._options }, payload
		else
			Inertia[method] url, payload, _options
	
	def submit params = {}
		throw new Error "Path needs to be set for form submission" unless path
		const url = isUpdate ? "{path}/{record.id}" : path
		commit method, url, {}, params