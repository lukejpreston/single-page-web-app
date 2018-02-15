const path = require('path')
const fs = require('fs')
const archiver = require('archiver')

const zip = (folder) => {
  console.log('zipping:', folder)
  const zipName = path.resolve(process.cwd(), `public/files/${folder}.zip`)
  const output = fs.createWriteStream(zipName)

  const archive = archiver('zip', {
    zlib: { level: 9 }
  })

  output.on('close', () => {
    console.log(archive.pointer() + ' total bytes')
    console.log('archiver has been finalized and the output file descriptor has closed.')
  })

  output.on('end', () => {
    console.log('Data has been drained')
  })

  archive.on('warning', (err) => {
    console.log(err)
    process.exit(1)
  })

  archive.on('error', function (err) {
    throw err
  })

  archive.pipe(output)

  const dir = path.resolve(process.cwd(), `src/files/${folder}`)
  archive.directory(dir, false)

  archive.finalize()
}

fs.readdirSync(path.resolve(process.cwd(), 'src/files')).forEach(zip)
