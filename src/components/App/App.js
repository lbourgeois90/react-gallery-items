import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import Form from '../Form/Form'

class App extends Component {
    state = {
      galleryItemList: [],
      displayToggle: 'showGallery',
      buttonToggle: true,
    }
 
  //function to flip the state of the buttonToggle-- set from true/false etc.
  flipButton = (event) => {
    this.getButtonName(event);
    this.togglePageDisplay();
    this.setState({
      buttonToggle: ! this.state.buttonToggle
    })
  }

  //function getGalleryItems will GET request to server/database to receive galleryItems from database to render--
  getGalleryItems = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then( (response) => {
      console.log('Response Data', response.data);
      this.setState({
        galleryItemList: response.data
      })
    })
    .catch( (error) => {
      console.log('ERROR in GET', error);
      alert(`Sorry! Unable to get items from database! Try again later!`);
    })
  }

  //function to get name from button to setState of displayToggle to the button's name
  getButtonName = (event) => {
    console.log('Button name is', event.target.name);
    this.setState({
      displayToggle: event.target.name
    })
  }
  
  //togglePageDisplay will toggle the page from showGallery to form and vice-versa based on the value of this.state.displayToggle-- conditionally renders
  togglePageDisplay = () => {
    console.log('inTogglePageDisplay')
    console.log(this.state.displayToggle)
    if (this.state.displayToggle === 'showGallery'){
      return (
        <GalleryList list = {this.state.galleryItemList} getGalleryItems = {this.getGalleryItems}/>
      )
    }
    else {
      return (
        <Form getGalleryItems = {this.getGalleryItems} displayToggle={this.state}/>
      )
    }
  }


  //RENDER on initalization
  componentDidMount(){
      console.log('in componentDidMount');
      this.getGalleryItems();
    }



  render() {
    return (
        <section>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Creatures of Harry Potter</h1>
          </header>
          <br/>
          <div className="buttonDiv">
            {this.state.buttonToggle ? 
            <div><button name="addGalleryItem" className="btn-lg btn-outline-dark" onClick={this.flipButton}>Add Your Own Gallery Item!</button><p>Click on an image to read it's description!</p></div> :
            <button name="showGallery" className="btn-lg btn-outline-dark" onClick={this.flipButton}>Show Gallery!</button>}
        </div>
        <div>
          {this.togglePageDisplay()}
        </div>
        </div>
      </section>
    );
  }
}

export default App;
