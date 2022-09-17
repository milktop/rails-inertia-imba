import { Inertia } from '@inertiajs/inertia'

extend tag element
	
	def getParam key
		const query = globalThis.window.location.search
		const params = new URLSearchParams query
		return params.get key
	
	def setURLParams params = {}
		Inertia.get(Inertia.page.url, params, { preserveScroll: true })
	
	def setPageQuery keys = []
		const params = {}
		for key in keys
			params[key] = getParam(key) || ""
		return params
	
	def formatDate value
		const date = new Date(value)
		return date.toLocaleDateString!
	
	def formatTime value
		const date = new Date(value)
		return date.toLocaleTimeString [], { hour: '2-digit', minute: '2-digit' }
	
	def formatDateTime value, { separator = "@" } = {}
		return "{formatDate(value)} {separator} {formatTime(value)}"
	
	def capitalize string
		string.charAt([0]).toUpperCase! + string.slice(1)
	
	def formatPrice value = 0
		const formatter = new Intl.NumberFormat "fr", { style: "currency", currency: "EUR" }
		return formatter.format(value / 100)
	
	def cleanParams params = {}
		const cleaned = JSON.parse JSON.stringify params
		Object.keys(cleaned).forEach do |key|
			delete cleaned[key] if cleaned[key] === ""
		cleaned
	
	def focusFirstInput container
		const input = container..querySelector 'input, select, textarea'
		await imba.commit!
		input && input.focus!

	def notify message = "", { type = "info", title, autoclose = 4500, showClose = true } = {}
		const container = document.querySelector('.alerts')
		const alert = <app-alert type=type title=title message=message showClose=showClose>
		container.append alert
		
		if autoclose
			setTimeout(&,autoclose) do alert..remove!
	
	def notifySuccess message = "", { title, autoclose, showClose } = {}
		const params = { type: "success", title, autoclose, showClose }
		notify message, params
	
	def notifyError message = "", { title, autoclose, showClose } = {}
		const params = { type: "warning", title, autoclose, showClose }
		notify message, params