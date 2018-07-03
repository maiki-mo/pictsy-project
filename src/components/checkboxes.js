import React from 'react';

const Checkbox = ({ imgDisplayState, changeBox }) => {
  // checkboxes/checkbuttons inherit method props from index

  return (
  <div id="check-boxes">
    <span><input onClick={(e) => { changeBox(e) } } type="button" id="viral" value='Viral' name="viral" /></span>
    <span><input onClick={(e) => { changeBox(e) } } type="button" value='Animated' name="animated"/></span>
  </div>
  )
}

export default Checkbox