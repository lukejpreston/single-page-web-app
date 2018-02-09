export default (dispatch, {match, location, history}) => {
  return {
    fetchMarkdown: () => {
      let file = `/docs${location.pathname}`
      if (file === '/docs/') file = '/docs/introduction'
      if (location.search.includes('exercises')) file += '-exercises'
      file += '.md'

      dispatch({
        type: '@@spwa/FETCHING',
        payload: {markdown: 'Fetching, please wait ...'}
      })

      fetch(file)
        .then(res => res.text())
        .then(markdown => {
          if (markdown.includes('<!DOCTYPE html>')) throw new Error('could not get ' + file)
          dispatch({
            type: '@@spwa/FETCHED',
            payload: {markdown}
          })
        })
        .catch((err) => {
          dispatch({
            type: '@@spwa/FETCHED_ERROR',
            payload: {err}
          })
        })
    }
  }
}
