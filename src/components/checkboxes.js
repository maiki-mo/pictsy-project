import React from 'react';

const Checkbox = ({ checkBoxes }) => {

  return (
  <div id="check-boxes">
    <br />
    <input onChange={(e) => { viralCheckItem(e) } } style={{ display: 'inline-block', width: '40px' }} type="checkbox" id="viral" value='false' name="viral" /><label>Viral</label>
    <input onChange={(e) => { this.sfwCheckItem(e) } } style={{ display: 'inline-block', width: '40px' }} type="checkbox" value='false' name="sfw"/><label>SFW</label>
    <input onChange={(e) => { this.aniCheckItem(e) } } style={{ display: 'inline-block', width: '40px' }} type="checkbox" value='false' name="animated"/><label>Animated</label>
  </div>
  )
}

export default Checkbox