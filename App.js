import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '/* add jsx here */',
      output: '',
      err: ''
    }
    this.update = this.update.bind(this)
  }
  update(e){
    let code = ReactDOM.findDOMNode(this.refs.jsxcode).value;
    try {
      this.setState({
        output: babel.transform(code, { stage: 0, loose: "all" }).code,
        err: ''
      })
    }
    catch(err){
      this.setState({
        err: err.message
      })
    }
  }
  render(){
   let info = this.state.err === '' ? 'JSX Compiler' : 'Error: ' + this.state.err;
    return (
      <div>
        <header>{info}</header>
        <div className="container">
          <textarea ref="jsxcode" defaultValue={this.state.input}></textarea>
          <button onClick={this.update} data={this.state.input}>Compile JSX</button>
          <pre>{this.state.output}</pre>
        </div>
      </div>
    )
  }
}
