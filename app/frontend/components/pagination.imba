import { Inertia } from '@inertiajs/inertia'

tag pagination-pages
	prop data
	<self>
		if data
			<select bind=data.page @change=setURLParams({ page: e.target.value })>
				for page in [1 .. data.pages]
					<option value=page> page

tag pagination-links
	prop data

	def previousPage do setURLParams { page: data.prev }
	def nextPage do setURLParams { page: data.next }
	def reset do Inertia.visit(Inertia.page.url.split("?")[0])
	
	<self [d:flex g:1]>
		if data
			<app-button unstyled disabled=!data.prev @click=previousPage> "Previous"
			<app-button unstyled disabled=!data.next @click=nextPage> "Next"
			<app-button unstyled @click=reset> "Reset"
			<pagination-pages data=data>

tag pagination-text
	prop data
	prop article = "item"
	prop plural
	
	get pluralized do if plural then plural else "{article}s"

	css p c:gray8 fs:sm
	
	def render
		<self>
			if !data.count
				<p> "No results"
			elif data.count === 1
				<p> "Showing 1 {article}"
			else
				const { from, to, count } = data
				<p> "Showing {from}-{to} of {count} {pluralized}"