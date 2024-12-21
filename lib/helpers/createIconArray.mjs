import fs from 'fs/promises'
import path from 'path'

const directoryPath = './public/assets/icons'
const outputTsxPath = './lib/utils/iconList.tsx'

function formatLabel(name) {
  // Remove -solid, -brands-solid, -regular, and cc- from the name
  const cleanedName = name.replace(/-solid|-brands-solid|-regular|^cc-/g, '')
  // Capitalize the first letter of each word
  return cleanedName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

async function createIconObject() {
  try {
    const files = await fs.readdir(directoryPath)

    // Filter by svg files
    const sourceFiles = files.filter((file) => path.extname(file).toLowerCase() === '.svg')

    // Generate an object where keys are labels and values are class names
    const iconObject = sourceFiles.reduce((acc, file) => {
      const name = path.parse(file).name
      acc[formatLabel(name)] = name
      return acc
    }, {})

    // Generate the TSX file
    const outputTsxFile = `export const iconNames = {\n${Object.entries(iconObject)
      .map(([label, value]) => `  '${label}': '${value}'`)
      .join(',\n')},\n}\n`

    await fs.writeFile(outputTsxPath, outputTsxFile)
  } catch (err) {
    console.error('Error processing the files:', err)
  }
}

createIconObject()
