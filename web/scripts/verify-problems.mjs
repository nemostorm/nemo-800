import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const generatedPath = path.resolve(
  __dirname,
  '..',
  'src',
  'data',
  'problems.generated.ts',
)

if (!fs.existsSync(generatedPath)) {
  console.error('Generated problems file is missing. Run npm run generate:problems first.')
  process.exit(1)
}

const content = fs.readFileSync(generatedPath, 'utf8')
const idMatches = [...content.matchAll(/"id":\s*"([A-Z]+\d{3})"/g)].map(
  (match) => match[1],
)

if (idMatches.length === 0) {
  console.error('No problem IDs were found in generated data.')
  process.exit(1)
}

const expectedCounts = {
  L: 250,
  S: 250,
  D: 250,
  TF: 50,
}

const actualCounts = {
  L: idMatches.filter((id) => id.startsWith('L')).length,
  S: idMatches.filter((id) => id.startsWith('S')).length,
  D: idMatches.filter((id) => id.startsWith('D')).length,
  TF: idMatches.filter((id) => id.startsWith('TF')).length,
}

let hasError = false
for (const [prefix, expected] of Object.entries(expectedCounts)) {
  if (actualCounts[prefix] !== expected) {
    console.error(
      `${prefix} count mismatch. Expected ${expected}, got ${actualCounts[prefix]}.`,
    )
    hasError = true
  }
}

const duplicateIds = idMatches.filter((id, idx) => idMatches.indexOf(id) !== idx)
if (duplicateIds.length > 0) {
  console.error(`Duplicate IDs found: ${[...new Set(duplicateIds)].join(', ')}`)
  hasError = true
}

if (hasError) {
  process.exit(1)
}

console.log('Problem verification passed.')
console.log(`Total problems: ${idMatches.length}`)
console.log(`L: ${actualCounts.L}, S: ${actualCounts.S}, D: ${actualCounts.D}, TF: ${actualCounts.TF}`)

