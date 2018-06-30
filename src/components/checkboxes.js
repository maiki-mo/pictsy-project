import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
        viral: 0,
        sfw: 0,
        animated: 0
    };
  }

  viralCheckItem(e) {
    if (this.state.viral === 0) {
    this.setState({
       viral: 1
    })
  } else {
    this.setState({
      viral: 0
    })
  }
  }

  sfwCheckItem(e) {
    if (this.state.sfw === 0) {
    this.setState({
       sfw: 1
    })
  } else {
    this.setState({
      sfw: 0
    })
  }
  }

  aniCheckItem(e) {
    if (this.state.animated === 0) {
    this.setState({
       animated: 1
    })
  } else {
    this.setState({
      animated: 0
    })
  }
    console.log(this.state);
  }

  render() {
    return (
    <div id="check-boxes">
      <br />
      <input onChange={(e) => { this.viralCheckItem(e) } } style={{ display: 'inline-block', width: '40px' }} type="checkbox" id="viral" value='false' name="viral" /><label>Viral</label>
      <input onChange={(e) => { this.sfwCheckItem(e) } }style={{ display: 'inline-block', width: '40px' }} type="checkbox" value='false' name="sfw"/><label>SFW</label>
      <input onChange={(e) => { this.aniCheckItem(e) } }style={{ display: 'inline-block', width: '40px' }} type="checkbox" value='false' name="animated"/><label>Animated</label>
    </div>
    )
  }
}

export default Checkbox