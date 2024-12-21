import fs from 'fs/promises'
import path from 'path'

const directoryPath = './public/assets/icons'
const outputJsPath = './public/assets/data/icon-list.js'

function formatLabel(name) {
  // Remove -solid, -brands-solid, -regular, and cc- from the name
  const cleanedName = name.replace(/-solid|-brands-solid|-regular|^cc-/g, '')
  // Capitalize the first letter of each word
  return cleanedName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

async function createIconArray() {
  try {
    const files = await fs.readdir(directoryPath)

    // Filter by svg files
    const sourceFiles = files.filter((file) => path.extname(file).toLowerCase() === '.svg')

    const images = sourceFiles.map((file) => {
      const name = path.parse(file).name
      return {
        value: name,
        label: formatLabel(name),
      }
    })

    // Sort images by label
    images.sort((a, b) => a.label.localeCompare(b.label))

    // Generate JS file with unquoted keys, single-quoted values, and trailing comma
    const outputJsFile = `export const iconNames = [\n  ${images
      .map((icon) => `{ label: '${icon.label}', value: '${icon.value}' }`)
      .join(',\n  ')},\n]\n`

    await fs.writeFile(outputJsPath, outputJsFile)
  } catch (err) {
    console.error('Error processing the files:', err)
  }
}

createIconArray()