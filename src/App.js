import React from "react"
import Menu from "./components/Menu";
import Product from "./components/Product";

function App() {
    let products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is product number one.',
            price: '$9.99',
            image: 'https://via.placeholder.com/300x200'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is product number two.',
            price: '$34.5',
            image: 'https://via.placeholder.com/300x200'
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is product number three.',
            price: '$43',
            image: 'https://via.placeholder.com/300x200'
        }
    ];

    // props

    return <>
        <Menu/>

        <div className="flex">
            {
                products.map((product, pos) => {
                    return <Product item={product} key={pos} />
                })
            }
        </div>
    </>
}

export default App;