import {
    Compare,
    defaultCompare,
    DOES_NOT_EXIST
} from '../util'

import {
    quickSort2
} from './sorting/quicksort'

export function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort2(array)
    let low = 0
    let high = sortedArray.length - 1
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const element = sortedArray[mid]
        if (compareFn(element, value) === Compare.LESS_THAN) {
            low = mid + 1
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return DOES_NOT_EXIST
}