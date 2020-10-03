
/**
 * 判断参数是不是Element
 * @param el 需要判断的元素
 */
export function isElement(el: any): boolean {
  return el !== null && typeof el === 'object' && el.nodeType === 1
}

/**
 * 
 * @param el 
 */
export function isScrollable(el: Element) {
  // 可视区高度 < 可滚动高度 该元素可滚动
  if (el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth) {
    const style = getComputedStyle(el, null)
    return (
      canOverflow(style.overflowY) ||
      canOverflow(style.overflowX)
    )
  }

  return false
}

function canOverflow(
  overflow: string | null,
) {
  if (overflow === 'hidden') {
    return false
  }

  return overflow !== 'visible'
}
