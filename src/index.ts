interface IQueue {
	[Symbol.iterator](): Iterable<any>
	length: number
	inspect(): string
	isEmpty(): boolean
	peek(): any
	enqueue(newItems: any[]): any
	dequeue(): IQueue
	equals(IQueue): boolean
	lte(IQueue): boolean
	concat(IQueue): IQueue
	empty(): IQueue
}

function Quuu(...items: any[]): IQueue {
	return {
		[Symbol.iterator]: function*() {
			yield* items
		},
		length: items.length,
		inspect: () => items.join(' <- '),
		isEmpty: () => (items.length ? true : false),
		peek: () => (items.length ? items[0] : null),
		enqueue: (...newItems) => Quuu(...items, ...items),
		dequeue: () => {
			const [_, ...tail] = items
			return Quuu(...tail)
		},
		// Static-land
		equals: queue => {
			let i = 0
			for (const value of queue[Symbol.iterator]())
				if (items[i++] !== value) return false

			return true
		},
		lte: queue => items.length <= queue.length,
		concat: queue => Quuu(...items, ...queue[Symbol.iterator]()),
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
