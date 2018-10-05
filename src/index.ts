interface IQueue {
	[Symbol.iterator](): Iterable<any>
	length: number
	inspect(): string
	isEmpty(): boolean
	peek(): any
	enqueue(items: any[]): any
	dequeue(): IQueue
	equals(IQueue): boolean
	lte(IQueue): boolean
	concat(IQueue): IQueue
	empty(): IQueue
}

function Quuu(...xs: any[]): IQueue {
	return {
		[Symbol.iterator]: function*() {
			yield* xs
		},
		length: xs.length,
		inspect: () => xs.join(' <- '),
		isEmpty: () => (xs.length ? true : false),
		peek: () => (xs.length ? xs[0] : null),
		enqueue: (...items) => Quuu(...xs, ...items),
		dequeue: () => {
			const [_, ...tail] = xs
			return Quuu(...tail)
		},
		// Static-land
		equals: q => {
			let i = 0
			for (const value of q[Symbol.iterator]())
				if (xs[i++] !== value) return false

			return true
		},
		lte: q => xs.length <= q.length,
		concat: q => Quuu(...xs, ...q[Symbol.iterator]()),
		empty: () => Quuu()
	}
}

const a = Quuu(1, 2, 3)
const b = Quuu(1, 2, 3)
const c = Quuu(1, 2, 3)

{
	// Setoid
	const reflexivity = a.equals(b) === true
	const symmetry = a.equals(b) === b.equals(a)
	const transitivity = a.equals(b) && b.equals(c) && a.equals(c)
	console.log('Setoid', {
		reflexivity,
		symmetry,
		transitivity
	})
}

{
	// Ord
	const totality = a.lte(b) || b.lte(a)
	const antisymmetry = a.lte(b) && b.lte(a) && a.equals(b)
	const transitivity = a.lte(b) && b.lte(c) && a.lte(c)
	console.log('Ord', { totality, antisymmetry, transitivity })
}

{
	// Semigroup

	const associativity = a
		.concat(b)
		.concat(c)
		.equals(a.concat(b.concat(c)))
	console.log('Semigroup', { associativity })
}

{
	// Monoid
	const rightId = a.concat(a.empty()).equals(a)
	const leftId = a
		.empty()
		.concat(a)
		.equals(a)

	console.log('Monoid', { rightId, leftId })
}
