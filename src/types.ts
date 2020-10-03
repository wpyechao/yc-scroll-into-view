export type TScrollPosition = 'start' | 'center' | 'end' | 'nearest'

export interface IScrollOptions {
  block?: TScrollPosition
  inline?: TScrollPosition
  mode?: 'always' | 'if-needed'
}

export interface IActions {
  el: Element
  top: number
  left: number
}