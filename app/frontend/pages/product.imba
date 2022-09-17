import ProductForm from '../forms/ProductForm.imba'

tag product-page

	prop props = {}
	
	def render

		const { product } = props
		
		<self>
			<main-layout>
				<page-titles title=product.name subtitle="Last updated {formatDateTime product.updated_at}">
				<ProductForm record=product redirect="/products">