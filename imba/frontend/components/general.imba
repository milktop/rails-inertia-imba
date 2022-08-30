import { Inertia } from '@inertiajs/inertia'

tag json-print
	prop value = {}

	css pre ff:mono p:6 mb:4 bg:gray1/60 bd:gray1 rd:md overflow-y:hidden fs:sm rd:sm shadow:sm
	
	<self>
		<pre> <code> JSON.stringify value, null, 2

tag info-message
	css hue:gray self bg:hue2 bd:hue3/70 c:hue9 px:0.6rem py:0.4rem fs:sm mb:6 o@off:0
	<self> <slot>

tag success-message
	<self> <info-message [hue:teal]> <slot>

tag alert-message
	<self> <info-message [hue:red]> <slot>

tag close-button
	<self> <button type="button" @click.emit-close> "Fermer"

tag page-titles
	prop title
	prop subtitle
	prop linkTitle
	
	get link
		const sections = Inertia.page.url.split("/").filter do |x| x
		return null unless sections.length
		
		if sections.length === 1
			return { name: "Dashboard", url: "/" } 
		else
			return { name: linkTitle || capitalize(sections[0]), url: "/{sections[0]}"}

	
	<self>
		<div [d:flex ai:center]>
			<inertia-link href=link.url [fs:md fw:300 c:gray8 td:none td@hover:underline]> link.name if link
			<span [mx:1]> "/"
			<h1 [fs:lg c:black]> title
		<p [c:gray8 fs:sm-]> subtitle if subtitle