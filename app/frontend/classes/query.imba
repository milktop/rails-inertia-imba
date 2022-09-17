import { Inertia } from '@inertiajs/inertia'
import { setPageQuery, getParam, setURLParams, cleanParams } from '../utils.imba'

global class Query
	loading = false
	params = {}

	constructor url, { filters = [], defaultSort = "name_asc" } = {}
		url = url
		filters = filters
		defaultSort = defaultSort
		defaultDirection = defaultDirection
	
	def update
		params = setPageQuery filters
	
	# Also check for current sort asc/desc etc
	def sort key
		await imba.commit!
		const current = getParam("sort") || defaultSort
		const currentSort = current.split("_")[0]
		const currentDirection = current.split("_")[1]
		const isRepeat = key === currentSort
		const flipped = currentDirection === "asc" ? "desc" : "asc"
		const direction = isRepeat ? flipped : "asc"
		console.log { current, currentSort, currentDirection, direction }
		setURLParams { sort: "{key}_{direction}" }
	
	def fetch
		Inertia.get url, cleanParams(params), {
			onStart: do loading = true
			onFinish: do 
				loading = false
				imba.commit!
		}