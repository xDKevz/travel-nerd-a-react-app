import React from 'react';
import FavoriteItem from './FavoriteItem.js';
class Favorites extends React.Component {
    render() {
        return (
            <article className="favorites">
                <div>
                    <p>❤ Favorites</p>
                </div>
                {this.props.favorites.map( (p) => <FavoriteItem removePhotoFromFav={this.props.removePhotoFromFav} favorites={p} key={p.id} /> )}
            </article>
        );
    }
}

export default Favorites;