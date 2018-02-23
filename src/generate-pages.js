const modules = require('./modules.json')
const fs = require('fs-extra')
const path = require('path')
const mustache = require('mustache')

const build = path.resolve(process.cwd(), 'build')
const index = path.join(build, 'index.html')

const template = fs.readFileSync(index).toString().replace('<title>Single Page Web App</title>', '<title>{{title}}</title>')
mustache.parse(template)

Object.keys(modules).forEach(key => {
  const module = modules[key]
  module.links.forEach(link => {
    const title = link.pathname === '/' ? '' : ` - ${link.label}`

    const output = mustache.render(template, {
      title: `Single Page Web App${title}`,
      description: link.description || 'A step by step guide to create a modern web/mobile/desktop application'
    })

    const dir = path.join(build, link.pathname)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)
    fs.writeFileSync(path.join(dir, 'index.html'), output)
    if (link.pathname === '/') fs.writeFileSync(path.join(build, '404.html'))
  })
})
