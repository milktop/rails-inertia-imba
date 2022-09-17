tag app-alert

	prop type = "info"
	prop title = ""
	prop message = ""
	prop showClose = true
	prop autoclose = 4500
	
	get color
		return "teal6" if type === "success"
		return "red6" if type === "warning"
		return "gray6"

	get icon
		return "check-circle" if type === "success"
		return "exclamation-triangle" if type === "warning"
		return "info-circle"
	
	def mount
		if autoclose
			timeout = setTimeout(&,autoclose) do self.remove!
	
	def unmount
		timeout && clearTimeout timeout
	
	<self>
		<div.alert [p:1.2rem bg:white shadow:sm rd:md bd:gray1 bdt:3px solid {color} d:flex jc:space-between ai:center g:4 fs:0.85rem]>
			<i.fal.fa-{icon} [fs:0.9rem c:{color} y:1px]>
			<div [d:vflex g:1 flex:1]>
				<div [fw:600]> title if title
				<div [c:gray6]> message
			if showClose
				<button @click=this.closest('.alert').remove [p:0 bg:transparent cursor:pointer]> 
					<i.fal.fa-times [c:gray5 y:1px]>