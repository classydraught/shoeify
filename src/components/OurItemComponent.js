import React from 'react';
import PropTypes from 'prop-types';

const OurItem = (props) => {
    return (
        <article className={"product shoe-" + props.i + " spacing"}>
            <img src={"./assets/images/" + props.item.image} alt="" className="product__image" />
            <h3 className="product__title">{props.item.title}</h3>
            <p className="product__description">
                {props.item.desc}
            </p>
            <a href="/" className="btn">Buy now</a>
        </article>
    );
}

OurItem.propTypes = {
    item: PropTypes.object
}


export default OurItem;