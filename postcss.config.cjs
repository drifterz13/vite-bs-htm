const purgecss = require('@fullhuman/postcss-purgecss')

const devPlugins = []
const prodPlugins = [
  purgecss({
    content: ['index.html', 'src/**/*.ts'],
  }),
]

module.exports = {
  plugins: process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins,
}
