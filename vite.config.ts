import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import { imba } from 'vite-plugin-imba'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    imba()
  ],
})
