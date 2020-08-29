import React from 'react';
import PropTypes from 'prop-types';
const FeaturedItem = (props) => {
    return (
        <>
            <a href="/" className="featured__item">
                <img src={"./assets/images/" + props.item.image} alt="" />
                <p className="featured__details">
                    <span className="price">{props.item.price}</span>
                    {props.item.name}
                </p>
            </a>
        </>
    )

}

FeaturedItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        price: PropTypes.string,
        name: PropTypes.string
    })
}

export default FeaturedItem;