import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

class GalleryList extends Component {
    
  //list of gallery items-- map.() to break array into individual item objects for galleryitem component to render
  render() {
      console.log(this.props.list);
    return (
    <section className="cardSection">
        <div className="card-deck">
            {this.props.list.map( item => 
            <GalleryItem key={item.id} item = {item} getGalleryItems= {this.props.getGalleryItems}/>
            )
            }
         </div>
    </section>
    )
  }
}

export default GalleryList;
