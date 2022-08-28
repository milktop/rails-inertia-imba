import autoAnimate from '@formkit/auto-animate'

tag main-layout

	def mount
		autoAnimate $alerts
	
	get flash do #context..currentPage..page..props..flash
	
	<self [px:10 py:4]>
		
		<div$alerts.alerts [pos:fixed t:6 r:6 w:24rem d:vflex g:2]>
			<app-alert type="success" message=flash.success> if flash.success
			<app-alert type="warning" message=flash.alert> if flash.alert
		
		<nav [mb:4 d:flex g:2]>
			<inertia-link href="/"> "Dashboard"
			<inertia-link href="/products"> "Products"
		<main>
			<slot>