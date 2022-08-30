# README

This is a starting point for a web app built with Rails, Inertia and Imba.

It gives you the stabilitiy, pleasure and ecosystem of working with Rails, the speed, flexibility and possibilities of using Imba (or another frontend framework) and Inertia to simple and brilliantly tie it all together.

### Advantages

- Full use of Imba
- No need for API
- Simpler routing and data sharing
- Standard Rails responses can still be used as it's backed by a full Rails app

### Steps

- Clone this repo
- `cd` into it
- Run `bundle` to install the ruby gems
- Run `npm install` to install the JS packages
- Run `rails db:migrate` to migrate the Rails data from migration files
- Run `rails db:seed` to optionally add `2000` dummy products
- To start the app run `foreman start -f Procfile.dev` in one tab and `npm run imba` in another (this process could probably be streamlined)

### What's included?

- A few global classes like form, query and toggle
- Some global components like alerts, pagination, element (extended)
- An example model (Product), controller, form and index/show pages
- The products page shows usage of debounced querying, pagination and sorting

### Starting from scratch

If you want to start a new Rails 7 app from scratch with this stack you can try the following, heavily inspired from this Svelte setup https://dev.to/buhrmi/setting-up-a-new-rails-7-app-with-vite-inertia-and-svelte-c9e

1) rails new app --skip-javascript --skip-asset-pipeline
2) cd app
3) bundle add inertia_rails vite_rails
4) bundle exec vite install
5) Add npm dependencies (@inertiajs/inertia, @inertiajs/progress, imba, imba-inertia-adapter) - NEXT STEP...
6) Create an "imba" directory (or other name) and add a script to transpile that folder to app folder
7) See the `application.imba` entrypoint and use similar

### Todo

- [x] Add basic authentication (Devise?) with simple login form
- [ ] Add basic authorization (Pundit / Action Policy?)
