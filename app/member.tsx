import { Noto_Sans_Symbols_2 } from "next/font/google"
import { MouseEventHandler } from "react"

const symbols = Noto_Sans_Symbols_2({ weight: '400', subsets: ['symbols'] })

interface Props {
	score: number
	updateScore: (f: (old: number) => number) => void
}

const handleClick: MouseEventHandler<HTMLSpanElement> = e => {
	const element = e.currentTarget
	navigator.clipboard.writeText(element.innerText)
	element.style.color = 'limegreen'
	setTimeout(() => element.style.color = '', 500)
}

export default function Member({ score, updateScore }: Props) {
	return (
		<div className="card">
			<button className={symbols.className + ' arrow'} onClick={() => updateScore(s => s + 1)} disabled={score === 99}>🡅</button>
			<span className="score" onClick={handleClick} title="Click to copy score">{score}</span>
			<input placeholder="name" tabIndex={1} />
			<button className={symbols.className + ' arrow'} onClick={() => updateScore(s => s - 1)} disabled={score === 1}>🡇</button>
		</div>
	)
}
