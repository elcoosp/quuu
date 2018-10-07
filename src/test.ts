import Quuu, { IQueue } from './index'

const setup = () => {
	const a: IQueue = Quuu(1, 2, 3)
	const b: IQueue = Quuu(1, 2, 4, 6)
	const c: IQueue = Quuu(1, 2, 3)

	return { a, b, c }
}

describe('should follow static-land spec', () => {
	it('Setoid', () => {
		const { a, b, c } = setup()
		const reflexivity = a.equals(b)
		const symmetry = a.equals(b) === b.equals(a)
		const transitivity = a.equals(b) && b.equals(c) && a.equals(c)

		expect(reflexivity).toBe(true)
		expect(symmetry).toBe(true)
		expect(transitivity).toBe(true)
	})

	it('Semigroup', () => {
		const { a, b, c } = setup()
		const associativity = a
			.concat(b)
			.concat(c)
			.equals(a.concat(b.concat(c)))

		expect(associativity).toBe(true)
	})

	it('Monoid', () => {
		const { a } = setup()
		const rightId = a.concat(a.empty()).equals(a)
		const leftId = a
			.empty()
			.concat(a)
			.equals(a)

		expect(rightId).toBe(true)
		expect(leftId).toBe(true)
	})
})
