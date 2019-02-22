import React from 'react';
import FavoriteItem from './FavoriteItem.js';
class Favorites extends React.Component {
    handleDownload = () => {
        this.props.generateZip();
    }

    render() {
        return (
            <article className="favorites">
                <div>
                    <p>❤ Favorites</p>
                    <button onClick={this.handleDownload}>Download</button>
                </div>
                {this.props.favorites.map( (p) => <FavoriteItem removePhotoFromFav={this.props.removePhotoFromFav} favorites={p} key={p.id} /> )}
            </article>
        );
    }
}

export default Favorites;