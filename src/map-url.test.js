import mapUrl from './map-url'

describe('absolute', () => {
  test('nothing returns the single-page-web-app', () => {
    expect(mapUrl.absolute()).toBe('/single-page-web-app/')
  })

  test('slash returns the single-page-web-app', () => {
    expect(mapUrl.absolute('/')).toBe('/single-page-web-app/')
  })

  test('concats anything', () => {
    expect(mapUrl.absolute('/anything')).toBe('/single-page-web-app/anything')
  })

  test('concats anything, leaves the single-page-web-app', () => {
    expect(mapUrl.absolute('/single-page-web-app/anything')).toBe('/single-page-web-app/anything')
  })

  test('removes the slash from the end?', () => {
    expect(mapUrl.absolute('/single-page-web-app/anything/')).toBe('/single-page-web-app/anything/')
  })
})

describe('file', () => {
  test('concats the pathname, folder name and extension', () => {
    expect(mapUrl.file('/pathname', '', 'folder-name', '.ext')).toBe('/single-page-web-app/folder-name/pathname.ext')
  })

  test('defaults / to introduction', () => {
    expect(mapUrl.file('/', '', 'folder-name', '.ext')).toBe('/single-page-web-app/folder-name/introduction.ext')
  })

  test('defaults adds exercises from search to introduction', () => {
    expect(mapUrl.file('/', '?exercises', 'folder-name', '.ext')).toBe('/single-page-web-app/folder-name/introduction-exercises.ext')
  })

  test('ignore single-page-web-app', () => {
    expect(mapUrl.file('/single-page-web-app/pathname', '', 'folder-name', '.ext')).toBe('/single-page-web-app/folder-name/pathname.ext')
  })

  test('handles trailing slashes', () => {
    expect(mapUrl.file('/single-page-web-app/pathname/', '', 'folder-name', '.ext')).toBe('/single-page-web-app/folder-name/pathname.ext')
  })
})
