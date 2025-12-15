import fs from 'fs'
import path from 'path'

const baseDir = path.resolve('public/signs')

const categories = [
  'warning',
  'prohibitory',
  'mandatory',
  'priority',
  'information',
  'road-markings',
  'additional',
  'signals'
]

const corrections = new Map([
  ['Water Coruse Alongside Road', 'Water Course Alongside Road'],
  ['Side Widns', 'Side Winds'],
  ['No Agricle Vehicles', 'No Agricultural Vehicles'],
  ['No Enrty', 'No Entry'],
  ['No Enrty Motorcycles', 'No Entry Motorcycles'],
  ['No Parkingzone', 'No Parking Zone'],
  ['No Overtakingg', 'No Overtaking'],
  ['Extrances Exits Left Side', 'Entrances Exits Left Side']
])

const toTitleCase = (rawName) => {
  const cleaned = rawName
    .replace(/\d+$/, '')
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  const titled = cleaned
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

  return corrections.get(titled) ?? titled
}

const result = {}

for (const category of categories) {
  const directory = path.join(baseDir, category)
  if (!fs.existsSync(directory)) {
    continue
  }

  const files = fs.readdirSync(directory).filter((file) => /\.(png|jpe?g|webp)$/i.test(file))

  result[category] = files.map((file) => ({
    label: toTitleCase(path.parse(file).name),
    src: `/signs/${category}/${file}`
  }))
}

const outputPath = path.resolve('src/data/signAssets.json')
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2))
console.log(`Generated ${outputPath}`)

