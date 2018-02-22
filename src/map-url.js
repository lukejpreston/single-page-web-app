const isDev = process.env.NODE_ENV === 'development'

export default {
  absolute (value) {
    if (isDev) return value
    if (!value.startsWith('/single-page-web-app')) return `/single-page-web-app${value}`
    return value
  },
  file (pathname, search, name, extenstion) {
    const folder = `/${name}/`
    let files = this.absolute(pathname).replace(this.absolute('/'), folder)
    if (files === folder) files = `${folder}introduction`
    if (search.includes('exercises')) files += '-exercises'
    return this.absolute(`${files}${extenstion}`)
  }
}
