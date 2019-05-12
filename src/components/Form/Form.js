import React, { Component } from 'react';
import axios from 'axios';
import '../Form/Form.css'


class Form extends Component {
    state = {
        newItem: {
            Title: '',
            Path: '',
            Description: '',
            Likes: '',
        }
    }

    //function will set state based on the value of the input fields-- pulls value from input fields 
    handleNewItem = (propertyName) => {
        return (event) => {
            this.setState({
                newItem: {
                    ...this.state.newItem,
                    [propertyName]: event.target.value,
                    Likes: 0,
                }
            })
        }
    }

    // createItem runs on the click of the submit button-- creates a POST request to server adding new item to the database-- upon response will clear input fields and re-render the DOM by calling GET request function
    createItem = (event) => {
        console.log('in CreateItem')
        event.preventDefault();
        console.log('newItem', this.state.newItem)
        axios({
            method: 'POST',
            url: '/gallery',
            data: this.state.newItem
          })
          .then( (response) => {
            console.log(response);
            this.setState({ 
                newItem: {
                    Title: '',
                    URL: '',
                    Description: '',
                    Likes: '',
                } 
            })
            this.props.getGalleryItems();
          })
          .catch( (error) => {
            console.log('ERROR in POST', error);
            alert(`Sorry! Unable to add items to database! Try again later!`);
          })
    }

    // render appends the form to the DOM
  render() {
     
    return (
    <section>
            <form>
                <div className="form-group">
                    <label htmlFor="Title">Title of Image</label>
                    <input type="text" placeholder="Title" name="Title" className="form-control" onChange={this.handleNewItem('Title')} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="Path">Image URL</label>
                    <input type="text" placeholder="Image URL" name="Path" className="form-control" onChange={this.handleNewItem('Path')}/>
                </div>

                <div className="form-group">
                    <label htmlFor="Description">Description of Image</label>
                    <input type="text" placeholder="Description" name="Description" className="form-control" onChange={this.handleNewItem('Description')}/>
                </div>

                <button type="submit" className="btn-lg btn-outline-dark" onClick={this.createItem}> Add Item to Gallery!</button>
            </form>
    </section>
    )
  }
}

export default Form;
