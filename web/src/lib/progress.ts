export type ProblemStatus = 'Not Started' | 'In Progress' | 'Solved'

export type ProblemProgress = {
  status: ProblemStatus
  code: string
  notes: string
  updatedAt: string
}

export type ProgressMap = Record<string, ProblemProgress>

const STORAGE_KEY = 'nemo-800-progress-v1'

export function loadProgress(): ProgressMap {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return {}
  }

  try {
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') {
      return {}
    }

    return parsed as ProgressMap
  } catch {
    return {}
  }
}

export function saveProgress(progress: ProgressMap): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function getStatusRank(status: ProblemStatus): number {
  if (status === 'Solved') return 2
  if (status === 'In Progress') return 1
  return 0
}

