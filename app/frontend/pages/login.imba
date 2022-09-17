tag login-page

	prop props = {}
	
	form = new Form self, { path: "/login", values: { email: "", password: "" } }
	
	def handleSubmit do form.submit!
	
	css self bg:teal4 w:100vw h:100vh d:flex jc:center ai:center
	css main p:10 bg:white rd:md w:30rem
	css h2 c:teal5 fw:600 ta:center mb:8 fs:lg
	css button mt:3 px:0.65rem py:0.3rem bg:teal5 c:white rd:xs cursor:pointer fs:sm-
	
	def render

		const { processing, errors, values } = form
	
		<self>
			<main>
				<h2> "Connect to your account"

				if form.hasErrors
					<alert-message ease> "There was an error logging in"
				
				<form @submit.prevent=handleSubmit>
					<text-input name="email" label="Email" bind=form.data.email>
					<password-input name="password" label="Password" bind=form.data.password>
					<button disabled=form.processing [o:0.6]=form.processing> form.processing ? "Logging in" : "Login"
