import { priceResolvers, priceInitiliazers } from '../utils'

export default tag ProductForm

	prop record @set form.setRecord(record)
	prop redirect
	
	form = new Form self, {
		path: "/products"
		values: record || { name: "", price: "", antibiotic: false, narcotic: false }
		resolvers: priceResolvers ["price"]
		initializers: priceInitiliazers ["price"]
	}

	def handleSubmit
		form.submit { redirect }
	
	<self>

		<form @submit.prevent=handleSubmit [d:vflex ai:baseline g:2 mb:4]>
			<text-input required label="Name" name="name" bind=form.data.name errors=form.errors.name>
			<text-input label="Price" name="price" bind=form.data.price errors=form.errors.price>

			<checkbox-input label="Narcotic" name="narcotic" bind=form.data.narcotic errors=form.errors.narcotic>
			<checkbox-input label="Antibiotic" name="antibiotic" bind=form.data.antibiotic errors=form.errors.antibiotic>
	
			<button disabled=form.processing [d:inline-flex w:auto p:2 bg:gray2 cursor:pointer]> form.submitText