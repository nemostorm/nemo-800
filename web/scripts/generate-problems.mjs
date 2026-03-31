import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourcePath = path.resolve(__dirname, '..', '..', 'main.py')
const outputPath = path.resolve(
  __dirname,
  '..',
  'src',
  'data',
  'problems.generated.ts',
)

const sectionMap = {
  LIST: 'List',
  SET: 'Set',
  DICTIONARY: 'Dictionary',
  'TEXT FILE': 'Text File',
}

const problemRegex =
  /^#\s*([A-Z]+\d{3})\s*\[(Easy|Medium|Hard)\]\s*\[([^\]]+)\]:\s*(.+)$/

function parseProblems(content) {
  const lines = content.split(/\r?\n/)
  const problems = []
  let currentSection = ''

  for (const line of lines) {
    const sectionMatch = line.match(/^#\s*(LIST|SET|DICTIONARY|TEXT FILE) PROBLEMS/)
    if (sectionMatch) {
      currentSection = sectionMap[sectionMatch[1]]
      continue
    }

    const problemMatch = line.match(problemRegex)
    if (!problemMatch || !currentSection) {
      continue
    }

    const [, id, difficulty, topic, prompt] = problemMatch
    const prefix = id.replace(/\d+/g, '')
    problems.push({
      id,
      prefix,
      section: currentSection,
      difficulty,
      topic: topic.trim(),
      prompt: prompt.trim(),
    })
  }

  return problems
}

function toTypeScriptModule(problems) {
  const sections = ['List', 'Set', 'Dictionary', 'Text File']
  const sectionCounts = sections.reduce((acc, section) => {
    acc[section] = problems.filter((p) => p.section === section).length
    return acc
  }, {})

  return `export type Difficulty = 'Easy' | 'Medium' | 'Hard'\n\nexport type ProblemSection = 'List' | 'Set' | 'Dictionary' | 'Text File'\n\nexport type Problem = {\n  id: string\n  prefix: string\n  section: ProblemSection\n  difficulty: Difficulty\n  topic: string\n  prompt: string\n}\n\nexport const PROBLEMS: Problem[] = ${JSON.stringify(problems, null, 2)}\n\nexport const SECTION_COUNTS: Record<ProblemSection, number> = ${JSON.stringify(sectionCounts, null, 2)}\n\nexport const TOTAL_PROBLEMS = PROBLEMS.length\n`
}

if (!fs.existsSync(sourcePath)) {
  console.error(`Could not find source problem file at: ${sourcePath}`)
  process.exit(1)
}

const sourceContent = fs.readFileSync(sourcePath, 'utf8')
const problems = parseProblems(sourceContent)

if (problems.length === 0) {
  console.error('No problems were parsed. Check main.py formatting.')
  process.exit(1)
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, toTypeScriptModule(problems), 'utf8')

console.log(`Generated ${problems.length} problems into ${outputPath}`)

