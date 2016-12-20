import BinarySearchTree from './birary-search-tree-es6'

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
}

function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class Node {
    constructor(key) {
        this.key = key
        this.left = undefined
        this.right = undefined
    }
    toString() {
        return `${this.key}`
    }
}

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
}

class AVITree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.compareFn = compareFn
        this.root = null
    }
    getNodeHeight(node) {
        if (node === null) {
            return -1
        }
    }
    rotationLL(node) {

    }
    rotationLR(node) {

    }
    rotationRL(node) {

    }
    getBalanceFactor(node) {

    }
    insert(key) {

    }
    insertNode(node, key) {

    }
    removeNode(node, key) {

    }
}