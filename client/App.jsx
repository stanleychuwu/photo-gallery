import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenPic1: false,
      isOpenPic2: false,
      isOpenPic3: false,
      isOpenPic4: false,
      isOpenPic5: false
    }
    this.togglePanel = this.togglePanel.bind(this);
  }
  
  togglePanel (e) {
    let classes = e.target.classList;
    console.log(classes[1])

    //need to match pic1 classname with state pic1
    return true;
  }
  
  render () {
    return (
      <div className='pics'>
        <div className={`pic pic1 ${this.state.isOpenPic1 ? 'openActive' : ''}`} onClick={this.togglePanel}></div>
        <div className={`pic pic2 ${this.state.isOpenPic2 ? 'openActive' : ''}`}></div>
        <div className={`pic pic3 ${this.state.isOpenPic3 ? 'openActive' : ''}`}></div>
        <div className={`pic pic4 ${this.state.isOpenPic4 ? 'openActive' : ''}`}></div>
        <div className={`pic pic5 ${this.state.isOpenPic5 ? 'openActive' : ''}`}></div>
      </div>
    )
  }
}

export default App;