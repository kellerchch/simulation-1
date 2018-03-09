import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';

import Shelf from './Shelf'


class Bin extends Component {
  constructor() {
    super()
    this.state = {
      bins: []
    }
  }

    // console.log(this.props) console log 'this' inside the app to see the object to then understand the objects 'props' and then with dot notation 

  componentWillMount () {
    axios.get(`http://localhost:3005/api/bins/${this.props.match.params.id}`).then((results)=>{
        // console.log(results)
        this.setState ({
            bins: results.data,
        })
    }).catch(console.log);
  }

  render() {
    // console.log('this.state.bins', this.state.bins);
    return (
      <div className="App">

        

        {this.state.bins.map(bin => { 
          return <Link to={`/bin/${bin.bin_id}`}><div>Bin {bin.bin_id}
          </div></Link>
          
        })}

   
            
        
      </div>
    );
  }
}

export default Bin;
