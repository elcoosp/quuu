import Quuu, { IQueue } from './index'
const a: IQueue = Quuu(1, 2, 3)
const b: IQueue = Quuu(1, 2, 3)
const c: IQueue = Quuu(1, 2, 3)

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
