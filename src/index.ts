export interface IQueue {
	[Symbol.iterator](): Iterable<any>
	length: number
	inspect(): string
	isEmpty(): boolean
	peek(): any
	enqueue(...newItems: any[]): IQueue
	dequeue(): IQueue
	equals(IQueue): boolean
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
		isEmpty: () => !items.length,
		peek: () => (items.length ? items[0] : null),
		enqueue: (...newItems) => Quuu(...items.concat(newItems)),
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
		concat: queue => Quuu(...items, ...queue[Symbol.iterator]()),
		empty: () => Quuu()
	}
}

export default Quuu
