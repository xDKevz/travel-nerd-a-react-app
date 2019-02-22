import React from 'react';
import PhotoThumb from './PhotoThumb';

class PhotoList extends React.Component {
    render() {
        if (this.props.photos.length > 1 ) {
            return (
                <div className="photos">
                    <div className="list">
                        { this.props.photos.map( (p) => <PhotoThumb photo={p} key={p.id} showImageDetails={ this.props.showImageDetails } addPhotoToFavorites={ this.props.addPhotoToFavorites } /> ) }
                    </div>
                </div>
            );
        } else {
            return null;
        }

    }

}

export default PhotoList;