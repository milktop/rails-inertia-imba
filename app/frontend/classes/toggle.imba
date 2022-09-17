global class Toggle
	
	def constructor boolean = false
		active = boolean
	
	get inactive do !active
	get visible do active
	get invisible do inactive
	get enabled do active
	get disabled do inactive
	
	def start do
		active = true
		imba.commit!
	
	def stop do 
		active = false
		imba.commit!
	
	def enable do start!
	def disable do stop!
	def activate do start!
	def deactivate do stop!
	
	def toggle do
		active = !active
		imba.commit!
	