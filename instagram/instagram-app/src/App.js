import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Header from './componets/HeaderContainer/Header';
import PostContainer from './componets/PostContainer/PostContainer';
// import PropTypes from 'prop-types';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='post'>
          <PostContainer posts={this.state.posts}/>
        </div>
      </div>
    );
  }
}

export default App;

// PropTypes = [

// ]
