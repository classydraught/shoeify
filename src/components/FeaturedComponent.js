import React from 'react';
import FeaturedItem from './FeaturedItemComponent';
import PropTypes from 'prop-types';
const FeaturedProducts = (props) => {
    return (
        <section className="featured">
            <div className="container spacing">
                <h2 className="section-title">
                    Featured products
                        </h2>
                <div className="split">
                    {
                        props.featured_products.map((item, i) => <FeaturedItem key={i} item={item} />)
                    }
                </div>
            </div>
        </section>
    );

}
FeaturedProducts.propTypes = {
    featured_products: PropTypes.array
}

export default FeaturedProducts;