tag not-found-page

	prop props = {}
	
	def render

		<self>
			<main-layout>
				<h1> props.message || "404 Page Not Found"