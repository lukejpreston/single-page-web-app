const modules = require('./modules.json')
const fs = require('fs-extra')
const path = require('path')

const links = []

Object.keys(modules).forEach(key => {
  modules[key].links.forEach(link => {
    links.push(link.pathname)
  })
})

const sitemap = links.map(link => `https://lukejpreston.github.io/single-page-web-app${link}`).join('\n')
const sitemapFilename = path.resolve(process.cwd(), 'public/sitemap.txt')
fs.writeFileSync(sitemapFilename, sitemap)
