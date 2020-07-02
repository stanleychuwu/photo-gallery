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
    let picUpperCase = classes[1][0].toUpperCase() + classes[1].slice(1);
    let isPicOpen = 'isOpen' + picUpperCase;

    if (this.state[isPicOpen] === false) {
      this.setState({[isPicOpen]: true});
    }
    if (this.state[isPicOpen] == true) {
      this.setState({[isPicOpen] : false});
    }
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