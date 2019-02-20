import React from "react";
import PhotoThumb from './PhotoThumb.js';
class PhotoList extends React.Component {
    render() {
        
        if (this.props.photos.length > 1) {
            return (
                <div>
                    <div className="filterstyle">
                        <label>Filter by </label>
                        <select onChange={this.handleFilter}>
                            <option value="default">Default</option>
                            <option value="city">City</option>
                            <option value="country">Country</option>
                        </select>
                    </div>

                    <article className="photos">
                        {this.props.photos.map((p) => <PhotoThumb changeRender={this.props.changeRender} photo={p} key={p.id} removePhotoFromFav={this.props.removePhotoFromFav} removePhotoFromList={this.props.removePhotoFromList} showImageDetails={this.props.showImageDetails} addToFavorites={this.props.addToFavorites} />)}
                    </article>
                </div>

            );
        } else {
            return null;
        }
    }

    handleFilter = (e) => {
        let value = e.target.value;
        this.props.sortByValue(value);
    }

}
export default PhotoList;