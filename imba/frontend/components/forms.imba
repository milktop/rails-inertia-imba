tag app-form
	@observable prop errors = []
	
	@autorun def printErrors
		console.log { errors }
	
	<self>
		<form>
			<slot>

tag text-input
	prop label
	prop name = ""
	prop required = false
	prop errors = []
	prop hint = ""
	prop debounce = false

	get hasError do !!errors.length
	
	def labelText
		return null unless label
		return label unless required
		return "{label} *"
	
	<self [d:vflex g:2 mb@not-last:2]>
		<label [c:gray7 fs:sm-]> labelText! if labelText!
		<input [w:100%] bind=data [bd:1px solid black]=hasError @input.if(debounce).debounce.emit-submit>
		<span.error> errors.join ", " if hasError
		<span.hint> hint if hint

tag number-input < text-input
	prop step = 0.01
	<self [d:vflex g:2 mb@not-last:2]>
		<label [c:gray7 fs:sm-]> labelText! if labelText!
		<input type="number" step=step [w:100%] bind=data [bd:1px solid black]=hasError @input.if(debounce).debounce.emit-submit>
		<span.error> errors.join ", " if hasError
		<span.hint> hint if hint

tag password-input < text-input
	prop step = 0.01
	<self [d:vflex g:2 mb@not-last:2]>
		<label [c:gray7 fs:sm-]> labelText! if labelText!
		<input type="password" [w:100%] bind=data [bd:1px solid black]=hasError @input.if(debounce).debounce.emit-submit>
		<span.error> errors.join ", " if hasError
		<span.hint> hint if hint

tag checkbox-input < text-input
	
	<self [d:flex g:2 mb@not-last:2]>
		<label [c:gray7 fs:sm-]> labelText!
		<input type="checkbox" bind=data [bd:1px solid red5]=hasError>
		<span.error> errors.join ", " if hasError

tag boolean-select
	<self>
		<select bind=data>
			<option value=""> "Indifférent"
			<option value="true"> "Oui"
			<option value="false"> "Non"