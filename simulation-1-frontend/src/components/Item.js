import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';



class Item extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

    // console.log(this.props) console log 'this' inside the app to see the object to then understand the objects 'props' and then with dot notation 

  componentWillMount () {
      console.log('getting to item')
    axios.get(`http://localhost:3005/api/bin/${this.props.match.params.id}`).then((results)=>{
        console.log(results)
        this.setState ({
            items: results.data,
        })
    }).catch(console.log);
  }


  render() {
    // console.log('this.state.bins', this.state.bins);
    return (
      <div className="App">

        

        {this.state.items.map(item => { 
            console.log(item)
          return <div>Name {`${item.item_name}`}<br />
          Price {`${item.item_price}`}
          </div>
          
        })}

   
            
        
      </div>
    );
  }
}

export default Item;