import React from "react";

class PhotoThumb extends React.Component {
    handleRemovePhoto = () => {
        this.props.removePhoto(this.props.photo.id);
        this.props.removeFav(this.props.photo.id);
        this.props.updateCurrentPhoto();
    }
    
    handleViewClick = () => {
        this.props.showImageDetails(this.props.photo.id);
    }

    handleFavorites = () => {
        this.props.addPhotoToFavorites(this.props.photo.id);
    }

    handleEdit = () => {
        this.props.changeRenderView("edit");
    }

    handleView = () => {
        this.props.changeRenderView("view");
    }

    handleMap = () => {
        this.props.changeRenderView("map");
    }

    render() {
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${ this.props.photo.path }`;
    
        return (
            <div className="photoBox" onClick= { this.handleViewClick }>
                <figure>
                    <img src={imgURL} className="photoThumb" title={ this.props.photo.title } alt={ this.props.photo.title } />
                </figure>

                <div className="photoBoxDetails">
                    <button className="close" onClick={this.handleRemovePhoto} >X</button>
                    <h3>{ this.props.photo.title }</h3>
                    <p>{ this.props.photo.city  }, { this.props.photo.country  }</p>
                    <button onClick={ this.handleView } >View</button>
                    <button onClick={ this.handleFavorites}> ❤ </button>
                    <button onClick={ this.handleMap}>Map</button>
                    <button onClick={ this.handleEdit}>Edit</button>              
                </div>
            </div>
        );
    }

}

export default PhotoThumb;