import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';


class App extends React.Component{
  constructor(props){
    super(props);
    console.log('cons')
    this.state = {
      color: "yellow",
      show: true
    }
  }
  alertme = (a) => {
    this.setState({show: false});
  }
  componentDidMount(){
    console.log('compdidmount')
    setTimeout(() => {
      this.setState({color: "red"})
    }, 3000)
  }
  componentDidUpdate(){
    document.getElementById('tag').innerHTML = 
        "The Updated state is " + this.state.color;
  }
  // static getDerivedStateFromProps(props, state){
  //   console.log('getderived')
  // }
  render(){
    console.log('render')
    let bio;
    if (this.state.show){
      bio = <Bio/>;
    }
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {bio}
        <button onClick={() => this.alertme("Hello")}>Click Me</button>
      </header>
    </div>
    )
  }
}
class Bio extends React.Component{
  componentWillUnmount(){
    alert("Bio component is unmounting")
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="tag"> I am a Software Engineer </h1>
        </header>
      </div>
    );
  }
}

export default App;
