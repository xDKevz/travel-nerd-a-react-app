import React from "react";

class PhotoThumb extends React.Component {
    render() {
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${ this.props.photo.path }`;
    
        return (
            <div className="photoBox" onClick= { this.handleViewClick }>
                <figure>
                    <img src={imgURL} className="photoThumb" title={ this.props.photo.title } alt={ this.props.photo.title } />
                </figure>

                <div className="photoBoxDetails">
                    <button className="close">X</button>
                    <h3>{ this.props.photo.title }</h3>
                    <p>{ this.props.photo.city  }, { this.props.photo.country  }</p>
                    <button onClick={ this.handleViewClick } >View</button>
                    <button onClick={ this.handleFavoritesClick }> ❤ </button>
                    <button>Map</button>
                    <button>Edit</button>              
                </div>
            </div>
        );
    }

    handleViewClick = () => {
        this.props.showImageDetails(this.props.photo.id);
    }

    handleFavoritesClick = () => {
        this.props.addPhotoToFavorites(this.props.photo.id);
    }
}

export default PhotoThumb;