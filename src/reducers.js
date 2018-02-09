import clone from 'clone'

const locationChange = '@@router/LOCATION_CHANGE'

const pathnamesToTitles = {
  '/': 'Introduction'
}

const spwa = (state, action) => {
  if (action.type === locationChange) {
    return {
      title: pathnamesToTitles[action.payload.pathname] || ''
    }
  }
  return {
    title: ''
  }
}

export default {
  spwa: (state = {}, action) => spwa(clone(state), action)
}
