import Quuu, { IQueue } from './index'

const setup = () => {
	const a: IQueue = Quuu(1, 2, 3)
	const b: IQueue = Quuu(1, 2, 3)
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

describe('Methods and props', () => {
	it('iterator protocol', () => {
		const a: IQueue = Quuu(1, 2, 4, 6)

		expect([...a[Symbol.iterator]()]).toEqual([1, 2, 4, 6])
	})

	it('length', () => {
		const a: IQueue = Quuu(1, 2, 4, 6)

		expect(a.length).toBe(4)
	})
	it('isEmpty', () => {
		const a: IQueue = Quuu()
		const b: IQueue = Quuu(1, 3)
		expect(a.isEmpty()).toBe(true)
		expect(b.isEmpty()).toBe(false)
	})
	it('peek', () => {
		const a: IQueue = Quuu(1, 3)
		const b: IQueue = Quuu()
		expect(a.peek()).toBe(1)
		expect(b.peek()).toBe(null)
	})

	it('enqueue', () => {
		const b: IQueue = Quuu(1).enqueue(3)

		expect([...b[Symbol.iterator]()]).toEqual([1, 3])
	})

	it('dequeue', () => {
		const b: IQueue = Quuu(1, 2).dequeue()

		expect([...b[Symbol.iterator]()]).toEqual([2])
	})
})
