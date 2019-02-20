import React from 'react';


class ViewSinglePhoto extends React.Component {
    render() {
        const id = this.props.currentPhoto;
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
        if (this.props.photos.length > 0) {
            const photo = this.props.photos.find( p => p.id === id);
                return (
                    <article className="details">
                        <div className="detailsPhotoBox">
                            <img src={imgURL+photo.path} alt={photo.title}/>
                            <h2>{photo.title}</h2>
                            <p>{photo.description}</p>
                            <p>{photo.city}, {photo.country}</p>
                            <button onClick={this.handleChangeRender}>Edit</button>
                            
                            <button>Map</button>
                        </div>
                    </article>

                );
        } else {
            return null;
        }
    }

    handleChangeRender = () => {
        this.props.changeRender("edit");
    }
}

export default ViewSinglePhoto;