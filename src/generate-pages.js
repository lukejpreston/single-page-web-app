const modules = require('./modules.json')
const fs = require('fs-extra')
const path = require('path')

const build = path.resolve(process.cwd(), 'build')

const links = []

Object.keys(modules).forEach(key => {
  modules[key].links.forEach(link => {
    links.push(link.pathname)
  })
})
