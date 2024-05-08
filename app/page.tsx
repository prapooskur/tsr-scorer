'use client'

import { useState } from 'react'
import Member from './member'

const makeArray = (length: number) => new Array(length).fill(Math.floor(100 / length))

export default function Home() {
	const [scores, setScores] = useState<number[]>(makeArray(5))

  const total = scores.reduce((a, b) => a + b, 0)

  const updateScore = (i: number) => (f: (old: number) => number) => setScores(s => s.with(i, f(s[i])))

	return (
		<main className="main">
      <div>TSR Scorer</div>
      <div className="button-row">
        <button onClick={() => setScores(s => makeArray(s.length + 1))} disabled={scores.length > 5}>
          Add Member
        </button>
        <button onClick={() => setScores(s => makeArray(s.length - 1))} disabled={scores.length < 5}>
          Remove Member
        </button>
      </div>
			<div className="grid">
				{scores.map((score, i) => <Member score={score} updateScore={updateScore(i)} key={i} />)}
			</div>
      <div style={{ color: total === 100 ? 'limegreen' : 'crimson' }}>Total: {total}</div>
		</main>
	)
}

export const dynamic = 'force-static'