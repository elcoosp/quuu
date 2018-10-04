function Queue(...xs) {
	return {
		[Symbol.iterator]: function*() {
			yield* xs
		},
		length: xs.length,
		inspect: () => xs.join(' <- '),
		isEmpty: () => (xs.length ? true : false),
		peek: () => (xs.length ? xs[0] : null),
		enqueue: (...ys) => Queue(...xs, ...ys),
		dequeue: () => {
			const [_, ...tail] = xs
			return Queue(...tail)
		},
		// Static-land
		equals: q => [...q[Symbol.iterator]()].every((x, i) => x === xs[i]),
		lte: q => xs.length <= q.length,
		concat: q => Queue(...xs, ...q[Symbol.iterator]()),
		empty: () => Queue()
	}
}

const a = Queue(1, 2, 3)
const b = Queue(1, 2, 3)
const c = Queue(1, 2, 3)

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
