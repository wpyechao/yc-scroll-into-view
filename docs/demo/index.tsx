import * as React from 'react';
import scrollIntoView, { libFunc } from 'yc-scroll-into-view';

export default () => {
  const handleClick = () => {
    const node = document.getElementById('scroll');

    const actions = libFunc(node, {
      scrollMode: 'always',
    });
    console.log(actions);
    actions.forEach(i => {
      i.el.scroll({
        behavior: 'smooth',
        left: i.left,
        top: i.top,
      });
    });
  };

  return (
    <div onClick={handleClick}>
      <div style={{ height: 400 }}>111</div>
      <div style={{ height: 400 }}>222</div>
      <div style={{ height: 400 }}>333</div>
      <div id="scroll" style={{ height: 400 }}>
        444 is the scroll element
      </div>
      <div style={{ height: 400 }}>555</div>
      <div style={{ height: 400 }}>666</div>
    </div>
  );
};
