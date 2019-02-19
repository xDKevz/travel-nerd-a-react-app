import React from 'react';

class FavoriteItem extends React.Component {
    render() {
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.favorites.path}`;
        return (
            <div>
                <figure>
                    <img src={imgURL} className="photoThumb" title={this.props.favorites.title} alt={this.props.favorites.title} />
                </figure>
            </div>
        );
    }
}

export default FavoriteItem;