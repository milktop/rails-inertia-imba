tag home-page
	
	prop props = {}
	
	def render

		const { name = "World" } = props
		
		<self>
			<main-layout>
				<h1 [fw:bold fs:xl c:teal8]> "Dashboard"
				<p> "Hello {name} :)"