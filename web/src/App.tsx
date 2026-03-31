import { useEffect, useMemo, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import {
  PROBLEMS,
  SECTION_COUNTS,
  TOTAL_PROBLEMS,
  type Difficulty,
  type ProblemSection,
} from './data/problems.generated'
import {
  getStatusRank,
  loadProgress,
  saveProgress,
  type ProblemProgress,
  type ProblemStatus,
  type ProgressMap,
} from './lib/progress'
import './App.css'

type SectionFilter = 'All' | ProblemSection
type DifficultyFilter = 'All' | Difficulty
type StatusFilter = 'All' | ProblemStatus

const DEFAULT_PROGRESS: ProblemProgress = {
  status: 'Not Started',
  code: '',
  notes: '',
  updatedAt: '',
}

function getProblemProgress(progress: ProgressMap, id: string): ProblemProgress {
  return progress[id] ?? DEFAULT_PROGRESS
}

function App() {
  const [progress, setProgress] = useState<ProgressMap>(() => loadProgress())
  const [selectedId, setSelectedId] = useState<string>(PROBLEMS[0]?.id ?? '')
  const [search, setSearch] = useState('')
  const [sectionFilter, setSectionFilter] = useState<SectionFilter>('All')
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('All')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All')

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const filteredProblems = useMemo(() => {
    return PROBLEMS.filter((problem) => {
      const entry = getProblemProgress(progress, problem.id)
      const text = `${problem.id} ${problem.topic} ${problem.prompt}`.toLowerCase()

      const matchesSearch =
        search.trim().length === 0 || text.includes(search.trim().toLowerCase())
      const matchesSection =
        sectionFilter === 'All' || problem.section === sectionFilter
      const matchesDifficulty =
        difficultyFilter === 'All' || problem.difficulty === difficultyFilter
      const matchesStatus = statusFilter === 'All' || entry.status === statusFilter

      return (
        matchesSearch && matchesSection && matchesDifficulty && matchesStatus
      )
    }).sort((a, b) => {
      const aRank = getStatusRank(getProblemProgress(progress, a.id).status)
      const bRank = getStatusRank(getProblemProgress(progress, b.id).status)
      if (aRank !== bRank) {
        return bRank - aRank
      }
      return a.id.localeCompare(b.id, undefined, { numeric: true })
    })
  }, [difficultyFilter, progress, search, sectionFilter, statusFilter])

  const selectedProblem = useMemo(() => {
    return PROBLEMS.find((problem) => problem.id === selectedId) ?? PROBLEMS[0]
  }, [selectedId])

  const selectedProgress = selectedProblem
    ? getProblemProgress(progress, selectedProblem.id)
    : DEFAULT_PROGRESS

  const solvedCount = useMemo(() => {
    return Object.values(progress).filter((entry) => entry.status === 'Solved').length
  }, [progress])

  const inProgressCount = useMemo(() => {
    return Object.values(progress).filter((entry) => entry.status === 'In Progress')
      .length
  }, [progress])

  const completionPercent = Math.round((solvedCount / TOTAL_PROBLEMS) * 100)

  function updateSelectedProgress(next: Partial<ProblemProgress>) {
    if (!selectedProblem) {
      return
    }

    setProgress((current) => ({
      ...current,
      [selectedProblem.id]: {
        ...getProblemProgress(current, selectedProblem.id),
        ...next,
        updatedAt: new Date().toISOString(),
      },
    }))
  }

  function resetSelectedProgress() {
    if (!selectedProblem) {
      return
    }

    setProgress((current) => {
      const clone = { ...current }
      delete clone[selectedProblem.id]
      return clone
    })
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <h1>nemo-800</h1>
          <p>Practice from easiest to hardest in one web workspace.</p>
        </div>
        <div className="topbar-stats">
          <span>Total: {TOTAL_PROBLEMS}</span>
          <span>In Progress: {inProgressCount}</span>
          <span>Solved: {solvedCount}</span>
          <span>Complete: {completionPercent}%</span>
        </div>
      </header>

      <section className="section-summary">
        <span>List: {SECTION_COUNTS.List}</span>
        <span>Set: {SECTION_COUNTS.Set}</span>
        <span>Dictionary: {SECTION_COUNTS.Dictionary}</span>
        <span>Text File: {SECTION_COUNTS['Text File']}</span>
      </section>

      <section className="filters">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by id, topic, or prompt"
          aria-label="Search problems"
        />

        <select
          value={sectionFilter}
          onChange={(event) => setSectionFilter(event.target.value as SectionFilter)}
          aria-label="Filter by section"
        >
          <option value="All">All Sections</option>
          <option value="List">List</option>
          <option value="Set">Set</option>
          <option value="Dictionary">Dictionary</option>
          <option value="Text File">Text File</option>
        </select>

        <select
          value={difficultyFilter}
          onChange={(event) =>
            setDifficultyFilter(event.target.value as DifficultyFilter)
          }
          aria-label="Filter by difficulty"
        >
          <option value="All">All Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
          aria-label="Filter by status"
        >
          <option value="All">All Status</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Solved">Solved</option>
        </select>
      </section>

      <main className="workspace">
        <aside className="problem-list">
          <div className="panel-title">Problems ({filteredProblems.length})</div>
          <ul>
            {filteredProblems.map((problem) => {
              const entry = getProblemProgress(progress, problem.id)
              return (
                <li key={problem.id}>
                  <button
                    className={selectedId === problem.id ? 'active' : ''}
                    onClick={() => setSelectedId(problem.id)}
                  >
                    <strong>{problem.id}</strong>
                    <span>{problem.prompt}</span>
                    <em>{entry.status}</em>
                  </button>
                </li>
              )
            })}
          </ul>
        </aside>

        <section className="editor-panel">
          {selectedProblem ? (
            <>
              <div className="problem-meta">
                <h2>
                  {selectedProblem.id} - {selectedProblem.prompt}
                </h2>
                <p>
                  Section: <strong>{selectedProblem.section}</strong> | Difficulty:{' '}
                  <strong>{selectedProblem.difficulty}</strong> | Topic:{' '}
                  <strong>{selectedProblem.topic}</strong>
                </p>
              </div>

              <div className="status-row">
                <label>Status:</label>
                <div className="status-buttons">
                  {(['Not Started', 'In Progress', 'Solved'] as ProblemStatus[]).map(
                    (statusOption) => (
                      <button
                        key={statusOption}
                        className={
                          selectedProgress.status === statusOption ? 'selected' : ''
                        }
                        onClick={() => updateSelectedProgress({ status: statusOption })}
                      >
                        {statusOption}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <label className="editor-label" htmlFor="solution-code">
                Solution Draft
              </label>
              <div id="solution-code" className="code-editor" aria-label="Solution Draft">
                <CodeMirror
                  value={selectedProgress.code}
                  height="320px"
                  extensions={[python()]}
                  basicSetup={{
                    lineNumbers: true,
                    foldGutter: true,
                    highlightActiveLine: true,
                    autocompletion: true,
                    bracketMatching: true,
                  }}
                  onChange={(value) => updateSelectedProgress({ code: value })}
                />
              </div>

              <label className="editor-label" htmlFor="solution-notes">
                Notes / Steps
              </label>
              <textarea
                id="solution-notes"
                className="notes"
                value={selectedProgress.notes}
                onChange={(event) => updateSelectedProgress({ notes: event.target.value })}
                placeholder="Track ideas, edge cases, and complexity notes..."
              />

              <div className="actions">
                <button onClick={resetSelectedProgress}>Clear This Problem</button>
                <span>
                  Last updated:{' '}
                  {selectedProgress.updatedAt
                    ? new Date(selectedProgress.updatedAt).toLocaleString()
                    : 'Not yet saved'}
                </span>
              </div>
            </>
          ) : (
            <p>No problem selected.</p>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
