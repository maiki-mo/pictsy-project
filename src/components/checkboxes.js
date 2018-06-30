import React from 'react';

const Checkbox = ({ imgDisplayState, changeBox }) => {
  return (
  <div id="check-boxes">
    <br />
    <input onChange={(e) => { changeBox(e) } } style={{ display: 'inline-block', width: '40px' }} type="checkbox" id="viral" value='false' name="viral" /><label>Viral</label>
    <input onChange={(e) => { changeBox(e) } } style={{ display: 'inline-block', width: '40px' }} type="checkbox" value='false' name="animated"/><label>Animated</label>
  </div>
  )
}

export default Checkbox