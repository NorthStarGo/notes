var _ = require('./util')

var REPLACE = 0
var REORDER = 1
var PROPS = 2
var TEXT = 3

function patch(node, patches) {
    var walker = {
        index: 0
    }
    dfsWalk(node, walker, patches)
}

function dfsWalk(node, walker, patches) {
    var currentPatches = patchs[walker.index]

    var len = node.childNodes ? node.childNodes.length : 0
    for (var i = 0; i < len; i++) {

    }

    if (currentPatches) {
        applyPatches(node, currentPatches)
    }
}

function applyPatches(node, currentPatches) {

}

function setProps(node, props) {
    for (var key in props) {

    }
}

function reorderChildren(node, moves) {
    var staticNodeList = _.toArray(node.childNodes)
    var maps = {}
    _.each(staticNodeList, function (node) {

    })

    _.each(moves, function (move) {
        var index = move.index
    })
}

patch.REPLACE = REPLACE
patch.REORDER = REORDER
patch.PROPS = PROPS
patch.TEXT = TEXT

module.exports = patch