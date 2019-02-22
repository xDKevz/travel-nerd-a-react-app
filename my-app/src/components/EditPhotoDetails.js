import React from 'react';
import './EditPhotoDetails.css';

class EditPhotoDetails extends React.Component {
    render() {
        const id = this.props.currentPhoto;
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;

        // just in case, handle missing photos in the props
        if ( this.props.photos.length > 0 ) {
            // find the object with this id
            const photo = this.props.photos.find( p => p.id === id );

            return(
                <article className="details">
                    <div className="detailsPhotoBox">
                        <form className="photoForm">
                            {/* <legend>Edit Photo Details</legend> */}
                            <img src={imgURL+photo.path} alt={ photo.title } />
    
                            <label>Title</label>
                            <input type="text" name="title" value={ photo.title } onChange={ this.handleChange } />

                            <label>Description</label>
                            <input type="text" name="title" value={ photo.description } onChange={ this.handleChange } />

                            <div className="location">
                                <span>
                                    <label>City</label>
                                    <input type="text" name="city" value={ photo.city } onChange={ this.handleChange } />
            
                                    <label>Country</label>
                                    <input type="text" name="country" value={ photo.country } onChange={ this.handleChange } />
                                </span>    
                                <span>
                                    <label>latitude</label>
                                    <input type="text" name="latitude" value={ photo.latitude } onChange={ this.handleChange } />
            
                                    <label>longitude</label>
                                    <input type="text" name="longitude" value={ photo.longitude } onChange={ this.handleChange } />
                                </span>                           
                            </div>
                            
                        </form>
                    </div>
                </article>
            );
        } else {
            return null;
        }
    }

    handleChange = (e) => {
        // find the current photo in our photo array
        const id = this.props.currentPhoto;
        const photo = this.props.photos.find( p => p.id === id );

        // update the photo using these 3 steps ...

        // 1. make a clone of the current photo object
        const clonedPhoto = { ...photo };

        // 2. update value of field that just changed
        clonedPhoto[e.currentTarget.name] = e.currentTarget.value;

        // 3. tell parent (or above) to update the state for this photo
        this.props.updatePhoto(this.props.currentPhoto, clonedPhoto);
    }
}

export default EditPhotoDetails;