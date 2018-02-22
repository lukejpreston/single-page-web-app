import clone from 'clone'
import modules from './modules.json'
import mapUrl from './map-url'

Object.keys(modules).forEach(key => {
  const module = modules[key]
  module.links.forEach(link => {
    link.pathname = mapUrl.absolute(link.pathname)
  })
})

const locationChange = '@@router/LOCATION_CHANGE'
const fetchingMarkdown = '@@spwa/FETCHING'
const fetchedMarkdown = '@@spwa/FETCHED'
const fetchedErrorMarkdown = '@@spwa/FETCHED_ERROR'

const getTitle = pathname => {
  let title = ''
  Object.keys(modules).forEach(key => {
    modules[key].links.forEach(link => {
      if (link.pathname === pathname) title = link.label
    })
  })
  return title
}

const getMenu = pathname => {
  const menu = clone(modules)
  Object.keys(menu).forEach(key => {
    const links = menu[key].links
    links.forEach(link => {
      link.active = 'inactive'
      if (link.pathname === pathname) link.active = 'active'
    })
  })
  return menu
}

const defaultContent = {
  label: 'Introduction',
  tabs: {
    about: 'active',
    aboutLink: mapUrl.absolute('/'),
    exercises: 'inactive',
    exercisesLink: mapUrl.absolute('/?exercises'),
    filesLink: ''
  },
  markdown: '',
  status: 'fetch'
}

const getContent = (pathname, search) => {
  const content = clone(defaultContent)
  content.label = getTitle(pathname)

  if (search.includes('exercises')) {
    content.tabs.about = 'inactive'
    content.tabs.exercises = 'active'
  }

  content.tabs.aboutLink = mapUrl.absolute(pathname)
  content.tabs.exercisesLink = mapUrl.absolute(`${pathname}`) + '?exercises'

  content.tabs.filesLink = mapUrl.file(pathname, '', 'files', '.zip')

  return content
}

const spwa = (state, action) => {
  state.menu = state.menu || clone(modules)
  state.title = state.title || ''
  state.content = state.content || clone(defaultContent)

  if (action.type === locationChange) {
    const pathname = action.payload.pathname
    const search = action.payload.search
    state.title = getTitle(pathname)
    state.menu = getMenu(pathname)
    state.content = getContent(pathname, search)
  }

  if (action.type.includes('@@spwa/FETCH')) state.content.markdown = action.payload.markdown

  if (action.type === fetchingMarkdown) state.content.status = 'fetching'
  if (action.type === fetchedMarkdown) state.content.status = 'fetched'
  if (action.type === fetchedErrorMarkdown) state.content.status = 'fetched-error'

  return state
}

export default {
  spwa: (state = {}, action) => spwa(clone(state), action)
}
