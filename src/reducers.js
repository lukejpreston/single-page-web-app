import clone from 'clone'

const locationChange = '@@router/LOCATION_CHANGE'
const fetchingMarkdown = '@@spwa/FETCHING'
const fetchedMarkdown = '@@spwa/FETCHED'
const fetchedErrorMarkdown = '@@spwa/FETCHED_ERROR'

const pathnamesToTitles = {
  '/': 'Introduction',
  '/node': 'Node'
}

const getTitle = pathname => pathnamesToTitles[pathname] || ''

const defaultMenu = {
  web: {
    label: 'Web Application',
    links: [{
      pathname: '/',
      label: 'Introduction',
      active: 'inactive'
    }, {
      pathname: '/node',
      label: 'Node',
      active: 'inactive'
    }]
  }
}

const getMenu = pathname => {
  const menu = clone(defaultMenu)
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
    aboutLink: '/',
    exercises: 'inactive',
    exercisesLink: '/?exercises',
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

  content.tabs.aboutLink = pathname
  content.tabs.exercisesLink = pathname + '?exercises'

  let files = '/files' + pathname
  if (files === '/files/') files = 'files/introduction'
  files = files + '.zip'
  content.tabs.filesLink = files

  return content
}

const spwa = (state, action) => {
  state.menu = state.menu || clone(defaultMenu)
  state.title = state.title || ''
  state.content = state.content || clone(defaultContent)

  if (action.type === locationChange) {
    const pathname = action.payload.pathname
    const search = action.payload.search
    state.title = getTitle(pathname)
    state.menu = getMenu(pathname)
    state.content = getContent(pathname, search)
  }

  if (action.type === fetchingMarkdown) {
    state.content.status = 'fetching'
    state.content.markdown = action.payload.markdown
  }

  if (action.type === fetchedMarkdown) {
    state.content.status = 'fetched'
    state.content.markdown = action.payload.markdown
  }

  if (action.type === fetchedErrorMarkdown) state.content.status = 'fetched-error'

  return state
}

export default {
  spwa: (state = {}, action) => spwa(clone(state), action)
}
