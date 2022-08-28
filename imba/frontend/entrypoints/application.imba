import { Inertia } from '@inertiajs/inertia'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from 'imba-inertia-adapter'
import axios from 'axios'

import '../layouts'
import '../pages'
import '../classes'
import '../components'
import '../styles'

const csrfToken = document.querySelector('meta[name=csrf-token]').content
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken

InertiaProgress.init!

createInertiaApp
	resolve: do(name) name
	setup: do({ el, App, props })
		imba.mount <{App} props=props>