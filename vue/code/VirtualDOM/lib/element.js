/**
 * 参考 https://github.com/livoras/simple-virtual-dom
 * Element virdual-dom对象定义
 * @param {String} tagName - dom 元素名称
 * @param {Object} props - dom 属性
 * @param {Arrray<Element|String>} - 子节点
 */

var _ = require('./util')

function Element(tagName, props, children) {
    if (!(this instanceof Element)) {
        if (!_.isArray(children) && children != null) {
            children = _.slice(arguments, props, children)
        }
        return new Element(tagName, props, children)
    }

    if (_.isArray(props)) {
        children = props
        props = {}
    }

    this.tagName = tagName
    this.props = props || {}
    this.children = children || []
    // dom 元素的key值，用作唯一标识符
    this.key = props ? props.key : void 666

    var count = 0

    _.each(this.children, function (child, i) {
        if (child instanceof Element) {
            count += child.count
        } else {
            children[i] = '' + child
        }
        count++
    })
    // 子元素个数
    this.count = count
}

/**
 *  render 将virdual-dom对象渲染为实际DOM元素
 */
Element.prototype.render = function () {
    var el = document.createElement(this.tagName)
    var props = this.props
    //  设置节点的DOM属性
    for (var propName in props) {
        var propValue = props[propName]
        _.setAttr(el, propName, propValue)
    }

    _.each(this.children, function (child) {
        var childEl = (child instanceof Element) ? child.render() : document.createTextNode(child)
        el.appendChild(childEl)
    })
    return el
}

module.exports = Element