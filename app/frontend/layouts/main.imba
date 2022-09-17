import autoAnimate from '@formkit/auto-animate'
import { Inertia } from '@inertiajs/inertia'

tag main-layout

	def mount do autoAnimate $alerts
	
	get flash do #context..currentPage..page..props..flash
	get user do #context..currentPage..page..props..user

	def handleLogout do Inertia.delete "/logout"
	
	<self>
		
		unless user
			<login-page>
		else
			<section [px:10 py:4]>
				<div$alerts.alerts [pos:fixed t:6 r:6 w:24rem d:vflex g:2]>
					<app-alert type="success" message=flash.success> if flash.success
					<app-alert type="warning" message=flash.alert> if flash.alert
				
				<nav [mb:4 d:flex g:2]>
					<inertia-link href="/"> "Dashboard"
					<inertia-link href="/products"> "Products"
					<button @click=handleLogout> "Logout" 
				<main>
					<slot>