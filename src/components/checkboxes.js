import React from 'react';

const Checkbox = ({ imgDisplayState, changeBox }) => {
  return (
  <div id="check-boxes">
    <span><input onChange={(e) => { changeBox(e) } } type="checkbox" id="viral" value='false' name="viral" /><label>Viral</label></span>
    <span><input onChange={(e) => { changeBox(e) } } type="checkbox" value='false' name="animated"/><label>Animated</label></span>
  </div>
  )
}

export default Checkbox