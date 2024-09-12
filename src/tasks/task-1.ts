import { Equal, Expect } from '../common/utils/ts-helpers.ts'

type GetLastItemType<T> = [
    T
]


// task 1
const getLastItem = <T>(array: T[]):T => {
  return array[array.length - 1]
}

const item1 = getLastItem(['react', 'typescript'])
const item2 = getLastItem([1, 2])

type test1 = [Expect<Equal<typeof item1, string>>]
type test2 = [Expect<Equal<typeof item2, number>>]
