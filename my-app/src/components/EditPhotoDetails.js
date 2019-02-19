import React from "react";
import './EditPhotoDetails.css';

class EditPhotoDetails extends React.Component {
    handleChange = e => {
        //find current photo in our photos array
        const id = this.props.currentPhoto;
        const photo = this.props.photos.find( p => p.id === id);
        
        //update the photo using these 3 steps . . .
        //1. make a clone of the current photo object
        const clonedPhoto = { ...photo };
        //2. update value fo field that just changed
        clonedPhoto[e.currentTarget.name] = e.currentTarget.value;
        //3. tell parent (or above) to update state for this photo
        this.props.updatePhoto(this.props.currentPhoto, clonedPhoto);
    }
    
    render() {
        const id = this.props.currentPhoto;
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
        if (this.props.photos.length > 0) {
            const photo = this.props.photos.find( p => p.id === id);
            return (
                <article className="details">
                    <div className="detailsPhotoBox">
                        <form className="photoForm">
                            <legend>Edit Photo Details</legend>
                            <img src={imgURL+photo.path} alt={photo.title}/>

                            <label>Title</label>
                            <input type='text' name='title' onChange={this.handleChange} value={photo.title} />

                            <label>City</label>
                            <input type='text' name='city' onChange={this.handleChange} value={photo.city} />

                            <label>Country</label>
                            <input type='text' name='country' onChange={this.handleChange} value={photo.country} />
                        </form>
                    </div>
                </article>
            );
        } else {
            return null;
        }    
    }
}

export default EditPhotoDetails;