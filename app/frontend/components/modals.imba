tag app-modal

	css self pos:fixed w:100vw h:100vh t:0 l:0 bg:gray5/70 d:flex jc:center ai:center z-index:200 overflow-y:scroll
	css main p:10 bg:white rdb:lg width:30rem max-width:90vw bg:white rd:lg shadow:md h:auto m:3.75rem auto pos:relative t:0
	
	<self @click.self.emit-close @hotkey("esc").capture>
		<main>
			<slot>