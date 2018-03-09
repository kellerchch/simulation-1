import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import Bin from './Bin'

export class Shelf extends Component {

constructor() {
    super()
    this.state = {
      shelves: []
    }
  }

  componentWillMount () {
    axios.get('http://localhost:3005/api/shelves').then((results)=>{
        // console.log(results)
        this.setState ({
            shelves: results.data,
        })
    }).catch(console.log);
  }
render() {
    return (
        <div> 

        {this.state.shelves.map(shelf => {
          return <Link to={`/bins/${shelf.shelf_id}`}><div>Shelf  {shelf.shelf_id}</div></Link>
        })}

        </div>
    )
}
}

export default Shelf;