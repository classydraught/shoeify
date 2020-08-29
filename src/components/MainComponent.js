import React from 'react';
import Header from './HeaderComponent';
import FeaturedProducts from './FeaturedComponent';
import OurProducts from './OurProductsComponent';
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            our_products: [
                {
                    title: "A really nice shoe",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quamperspiciatis facilis beatae laudantium quidem enim sit sequi!",
                    image: "shoe-1.png"
                },
                {
                    title: "A really nice shoe",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quamperspiciatis facilis beatae laudantium quidem enim sit sequi!",
                    image: "shoe-2.png"
                },
                {
                    title: "A really nice shoe",
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quamperspiciatis facilis beatae laudantium quidem enim sit sequi!",
                    image: "shoe-3.png"
                }
            ],
            featured_products: [
                { price: "120$", image: "shoe-4.png", name: "Jordans" },
                { price: "100$", image: "shoe-5.png", name: "Kobe bryant" },
                { price: "113$", image: "shoe-6.png", name: "Air Jordans" }
            ]
        }
    }
    render() {
        return (
            <>
                <Header />
                <main>
                    <FeaturedProducts featured_products={this.state.featured_products} />
                    <OurProducts our_products={this.state.our_products} />
                </main>
            </>
        );
    }

}

