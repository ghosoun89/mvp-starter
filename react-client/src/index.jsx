import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [], 
      name :"",
      price : ""
    }
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }

  handleSubmit(event){
     $.ajax({
      url: '/items', 
      type: "Post",
     //contentType: 'application/json',
     data: {name:this.state.name,price:this.state.price},
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }
  handleClick(event){
    $.ajax({
        url: '/items',
        type: 'Get',
        //contentType: 'application/json',
        success: (data) => {
          this.setState({
            items: data
          })
        },
        error: (err) => {
          console.log('err', err);
        }
      })
    }
  






  render () {
    return (
    <div>
      <h1>Shopping List</h1>
      <List items={this.state.items}/>
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
       
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
        </label>
        <label>
          Price:
          <input type="text" value={this.state.price} onChange={this.handlePriceChange.bind(this)} />
        </label>
        <input  id = "inp" type="submit" value="Save" />
        </form>
       <button class= "btn" onClick={this.handleClick.bind(this)}>View</button>

      </div>
    </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));


{/* <form onlick={this.handleClick.bind(this)}> */}