export default {
  absolute (value) {
    return value || '/'
  },
  file (pathname, search, name, extenstion) {
    const folder = `/${name}/`
    let file = this.absolute(pathname).replace(this.absolute('/'), folder)
    if (file === folder) file = `${folder}introduction`
    file = this.absolute(`${file}${extenstion}`)
    file = file.replace(`/${extenstion}`, extenstion)
    if (search.includes('exercises')) file = file.replace(extenstion, `-exercises${extenstion}`)
    return file
  }
}
