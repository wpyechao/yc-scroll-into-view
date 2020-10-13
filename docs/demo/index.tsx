import * as React from 'react';
import scrollIntoView from 'yc-scroll-into-view'

export default () => {

  const handleClick = () => {
    const node = document.getElementById('p3')

    const actions = scrollIntoView(node, {
      mode: 'if-needed'
    })
    console.log(actions)
  }

  return (
    <div>
      <div style={{height: 500, border: '1px solid #000'}}></div>
      <div style={{height: 50, overflow: 'auto'}}>
        <p id="p1">p1</p>
        <p id="p2">p2</p>
        <p id="p3">p3</p>
        <p id="p4">p4</p>
        <p id="p5">p5</p>
      </div>
      <div onClick={handleClick} style={{height: 500, border: '1px solid #000'}}></div>
    </div>
  )
}