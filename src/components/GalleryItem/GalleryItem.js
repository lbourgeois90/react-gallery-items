import React, { Component } from 'react';
import axios from 'axios';
import '../GalleryItem/GalleryItem.css'

class GalleryItem extends Component {
    state = {
        toggle: false,
    }
    
    //function will send PUT request to server/database to update like count-- function runs on the click of the like button for specified item-- upon resposne will re-render DOM by calling getGalleryItems GET request
    updateLikes = (event) =>{
            console.log('in UpdateLikes');
            let itemId = event.target.value;
            console.log(itemId);
        axios({
            method: 'PUT',
            url: `/gallery/${itemId}`,
            data: itemId, 
        })
        .then(response =>{
            console.log(response);
            this.props.getGalleryItems();
        })
        .catch(error=>{
            console.log('ERROR in PUT', error);
            alert('Sorry! There was an error updating the gallery! Try again');   
        })
    }

    //function will send DELETE request to server/database and will delete selected gallery item based on ID value gotten from delete button-- upon response will call getGalleryItems for GET request to re-render the DOM
    deleteItem = (event) =>{
            console.log('in deleteItem');
            let itemId = event.target.value;
            console.log(itemId);
        axios({
            method: 'DELETE',
            url: `/gallery/${itemId}`,
            data: itemId, 
        })
        .then(response =>{
            console.log(response);
            this.props.getGalleryItems();
        })
        .catch(error=>{
            console.log('ERROR in DELETE', error);
            alert('Sorry! There was an error deleting the item from the gallery! Try again');   
        })
    }


    //function will conditionally render description or image based on click of the image
    toggleDescription = () => {
        console.log('in toggleDescription');
        if( this.state.toggle === false){
            return <div>
                <img className="card-img-top"onClick={() => {this.clickImage()}} src={this.props.item.path}/>
            </div>
        }
        else if( this.state.toggle !== false){
            return <div className="description" onClick={() => {this.clickImage()}}>
            <p>{this.props.item.description}</p>
        </div>
        }
    }

    //function peopleLoveItRender will conditionally render <p> based on number of loves-- changes singular/plural
    peopleLoveItRender = () => {
        if (this.props.item.likes === 1){
         return ( <p className="card-text">{this.props.item.likes} person loves it!</p>
         )
        }
        else {
          return ( <p className="card-text">{this.props.item.likes} people love it!</p>
          )
        }
      }

    
    // clickImage function will toggle this.state.toggle from true/false-- important change of state for toggleDescription
    clickImage = () => {
        this.setState({
            toggle: !this.state.toggle,
        })
    }

  render() {

    return (
        <section className="cardSection">
            <div className="card mb-4 mr-5" key={this.props.item.id}>
                 {this.toggleDescription()}
                
                <div className="card-body">
                    <h2 className="card-title">{this.props.item.title}</h2>
                    {this.peopleLoveItRender()}
                    <button className="btn btn-outline-dark" onClick={this.updateLikes} value={this.props.item.id}>Love It!</button>
                    <p className="buttonP"><button className="btn-sm btn-outline-dark" onClick={this.deleteItem} value={this.props.item.id}>Delete</button></p>
                </div>
            </div>
        </section>

    )
  }
}

export default GalleryItem;
