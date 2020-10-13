import { IScrollOptions, IActions } from './types'
import { isElement, isScrollable } from './utils'

const scrollIntoView = (target: Element, options: IScrollOptions) => {
  const { 
    block = 'center', 
    inline = 'center', 
    mode = 'always' 
  } = options

  const scrollingElement = document.scrollingElement || document.documentElement

  if(!isElement(target)) {
    throw new Error("target is not an Element"); 
  }

  const scrollElements: Element[] = []
  let cursor = target
  while(isElement(cursor)) {
    cursor = cursor.parentNode as Element

    // 到顶部时跳出
    if(cursor === scrollingElement) {
      scrollElements.push(cursor)
      break
    }

    if(cursor === document.body)
      continue

    // 可滚动的元素，也推入
    if(isScrollable(cursor)) {
      scrollElements.push(cursor)
    }
  }

  const vpWidth = window.innerWidth
  const vpHeight = window.innerHeight

  const viewportX = window.scrollX || window.pageXOffset
  const viewportY = window.scrollY || window.pageYOffset

  // 获取target 的dom rect
  const { 
    height: targetHeight, 
    width: targetWidth, 
    top: targetTop, 
    bottom: targetBottom, 
    right: targetRight, 
    left: targetLeft 
  } = target.getBoundingClientRect()

  let targetBlock = (() => {
    if(block === 'start' || block === 'nearest') {
      return targetTop
    }
    if(block === 'end') {
      return targetBottom
    }
    // block === 'center'
    return targetTop + targetHeight / 2
  })()

  let targetInline = (() => {
    if(inline === 'center') {
      return targetLeft + targetWidth / 2
    }
    if(inline === 'end') {
      return targetRight
    }
    // target === 'start' || target === 'nearest'
    return targetLeft
  })()

  const actions: IActions[] = []
  for(let index = 0; index < scrollElements.length; index ++) {
    const ele = scrollElements[index]

    const {
      height,
      width,
      top,
      right,
      bottom,
      left,
    } = ele.getBoundingClientRect()

    // mode 是 if-needed 并且已经在可视区，则不用动
    if(
      mode === 'if-needed' &&
      targetTop >=0 &&
      targetLeft >=0 &&
      targetBottom <= vpHeight &&
      targetRight  <= vpWidth &&
      targetTop >= top &&
      targetLeft >= left &&
      targetBottom <= bottom &&
      targetRight <= right
    ) {
      return actions
    }

  }

}

export default scrollIntoView