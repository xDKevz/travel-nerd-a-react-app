import React from "react";
class PhotoThumb extends React.Component {
    
    handleViewClick = (e) => {
        this.props.showImageDetails(this.props.photo.id);
    }
    
    handleFavClick = () => {
        this.props.addToFavorites(this.props.photo.id);
    }

    handleRemoveClick = () => {
        console.log("removed");
        this.props.removePhotoFromList(this.props.photo.id);
        this.props.removePhotoFromFav(this.props.photo.id);
    }

    handleMap = () => {
        this.props.changeRender("map");
    }

    handleEditClick = () => {
        this.props.changeRender("edit");
    }

    handleViewButton = () => {
        this.props.changeRender("view");
    }

    

    render() {
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.photo.path}`;
        return (
                <div>
                    <div className="photoBox" onClick={this.handleViewClick}>
                            <figure>
                                <img src={imgURL} className="photoThumb" title={this.props.photo.title} alt={this.props.photo.title} />
                            </figure>
                            <div className="details">
                                <button className="removed" onClick={this.handleRemoveClick}>x</button>
                                <h3>{this.props.photo.title}</h3>
                                <p>{this.props.photo.city}, {this.props.photo.country}</p>
                            </div>
                            <button onClick={this.handleViewButton} >View</button>
                            <button onClick={this.handleFavClick}>❤</button>
                            <button onClick={this.handleMap}>Map</button>
                            <button onClick={this.handleEditClick}>Edit</button>
                    </div>
                </div>
        );
    }
}

export default PhotoThumb;