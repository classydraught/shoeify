import React from 'react';
import OurItem from './OurItemComponent';
import PropTypes from 'prop-types';
const OurProducts = (props) => {
    return (
        <section className="our-products">
            <div className="container spacing">
                <h2 className="section-title">
                    Our products
                </h2>
                {props.our_products.map((item, i) => <OurItem key={i} item={item} i={i + 1} />)}
            </div>
        </section>
    );

}
OurProducts.propTypes = {
    our_products: PropTypes.array
}
export default OurProducts;