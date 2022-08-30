import ProductForm from '../forms/ProductForm'

tag products-page

	filters =  ["q", "min_price", "max_price", "narcotic", "antibiotic"]
	
	query = new Query "/products", { filters, defaultSort: "name_asc" }
	
	prop props = {} @set query.update!
	
	showForm = false
	
	def onSuccess do showForm = false

	def render

		const { products = [], pagination, errors = [] } = props
		
		<self>
			<main-layout>
				
				<page-titles title="Products">

				if showForm
					<app-modal title="Add a new product" @close=(showForm = false)>
						<ProductForm errors=errors @success=onSuccess>
				
				<section [d:flex g:2 ai:center mt:1]>
					<pagination-text data=pagination>
					<pagination-links data=pagination>
					<button @click=(showForm = true)> "Add new"
					<span> "Loading..." if query.loading
				
				<form @change=query.fetch @submit.capture.prevent=query.fetch [my:2 d:flex g:2]>
					<text-input debounce bind=query.params.q>
					<text-input debounce bind=query.params.min_price>
					<text-input debounce bind=query.params.max_price>
					
					<boolean-select bind=query.params.antibiotic>
					<boolean-select bind=query.params.narcotic>
				
				unless products.length
					<p> "No products"
				else
					<table>
						<thead>
							<th [cursor:pointer] @click=query.sort("name")> "Name"
							<th [cursor:pointer] @click=query.sort("price")> "Price"
							<th> "Antibiotic"
							<th> "Narcotic"
						<tbody>
							for product in products
								<tr key=product.id>
									<td> <inertia-link href="/products/{product.id}"> product.name
									<td> formatPrice product.price
									<td> product.antibiotic
									<td> product.narcotic
					