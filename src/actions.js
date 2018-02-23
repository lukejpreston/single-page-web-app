import mapUrl from './map-url'

export default (dispatch, {match, location, history}) => {
  return {
    fetchMarkdown: () => {
      const file = mapUrl.file(location.pathname, location.search, 'docs', '.md')
      dispatch({
        type: '@@spwa/FETCHING',
        payload: {markdown: 'Fetching, please wait ...'}
      })

      fetch(file)
        .then(res => res.text())
        .then(markdown => {
          if (markdown.includes('<!DOCTYPE html>')) {
            throw new Error(`Could not find file \`${file}\``)
          } else {
            dispatch({
              type: '@@spwa/FETCHED',
              payload: {markdown}
            })
          }
        })
        .catch((err) => {
          dispatch({
            type: '@@spwa/FETCHED_ERROR',
            payload: {markdown: err.message}
          })
        })
    },
    selectModule: (pathname) => {
      history.push(pathname)
    }
  }
}
