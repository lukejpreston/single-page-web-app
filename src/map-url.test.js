import mapUrl from './map-url'

describe('absolute', () => {
  test('nothing returns the single-page-web-app', () => {
    expect(mapUrl.absolute()).toBe('/')
  })

  test('slash returns the single-page-web-app', () => {
    expect(mapUrl.absolute('/')).toBe('/')
  })

  test('concats anything', () => {
    expect(mapUrl.absolute('/anything')).toBe('/anything')
  })

  test('concats anything, leaves the single-page-web-app', () => {
    expect(mapUrl.absolute('/anything')).toBe('/anything')
  })

  test('removes the slash from the end?', () => {
    expect(mapUrl.absolute('/anything/')).toBe('/anything/')
  })
})

describe('file', () => {
  test('concats the pathname, folder name and extension', () => {
    expect(mapUrl.file('/pathname', '', 'folder-name', '.ext')).toBe('/folder-name/pathname.ext')
  })

  test('defaults / to introduction', () => {
    expect(mapUrl.file('/', '', 'folder-name', '.ext')).toBe('/folder-name/introduction.ext')
  })

  test('defaults adds exercises from search to introduction', () => {
    expect(mapUrl.file('/', '?exercises', 'folder-name', '.ext')).toBe('/folder-name/introduction-exercises.ext')
  })

  test('ignore single-page-web-app', () => {
    expect(mapUrl.file('/pathname', '', 'folder-name', '.ext')).toBe('/folder-name/pathname.ext')
  })

  test('handles trailing slashes', () => {
    expect(mapUrl.file('/pathname/', '', 'folder-name', '.ext')).toBe('/folder-name/pathname.ext')
  })

  test('handles trailing slashes with exercises', () => {
    expect(mapUrl.file('/pathname/', '?exercises', 'folder-name', '.ext')).toBe('/folder-name/pathname-exercises.ext')
  })
})
