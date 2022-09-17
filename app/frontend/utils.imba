import { Inertia } from '@inertiajs/inertia'
import queryString from 'query-string'

export def getParam key
	const query = globalThis.window.location.search
	const params = new URLSearchParams query
	return params.get key
	
export def setURLParams params = {}
	Inertia.get(Inertia.page.url, params, { preserveScroll: true })

export def setPageQuery keys = []
	const params = {}
	for key in keys
		params[key] = getParam(key) || ""
	return params

export def getParams
	return queryString.parse globalThis.window.location.search

export def cleanParams params = {}
	const cleaned = JSON.parse JSON.stringify params
	Object.keys(cleaned).forEach do |key|
		delete cleaned[key] if cleaned[key] === ""
	cleaned

export def priceResolvers keys = [], { coerce = false } = {}
	let resolvers = []
	for key in keys
		const resolver = {
			key,
			action: do |value|
				return value * 100 if !isNaN(value)
				return if coerce then 0 else value
		}
		resolvers.push resolver
	return resolvers

export def priceInitiliazers keys = [], { coerce = false } = {}
	let initializers = []
	for key in keys
		const initializer = {
			key,
			action: do |value|
				return value / 100 if !isNaN(value)
				return if coerce then 0 else value
		}
		initializers.push initializer
	return initializers