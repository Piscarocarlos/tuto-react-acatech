import React, { useEffect, useState } from "react"
import Header from "./components/Header";
import { Button } from "react-bootstrap";

const PHOTOS = [
    'https://images.unsplash.com/photo-1695653422533-31ea2d0e53ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1703385178754-f16e0a332e4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1703631531141-c5bfe28c02e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1701338678701-c053ba5d6ee1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1699084681511-8cc4306de721?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
]

function App() {

    const [showImage, setShowImage] = useState(0);
    const [products, setProducts] = useState([]);
    const next = () => {
        if (showImage < (PHOTOS.length - 1)) {
            setShowImage(showImage + 1)
        } else {
            setShowImage(0)
        }
    }

    const previous = () => {
        if (showImage > 0) {
            setShowImage(showImage - 1)
        }
    }


    // componentDidMount
    // componentDidUpdate
    // componentWillAmount
    useEffect(()=> {
        fetch("https://fakestoreapi.com/products").then((res) => {
            return res.json()
        }).then((data) => {
            setProducts(data)
        })
    }, [])


    return <>
        <Header />
        {
            showImage == 3 && <h2>Je suis un texte</h2>
        }
        <Image photo={PHOTOS[showImage]} pos={showImage} />

        <div className="mt-4">
            <Button className="me-3" onClick={previous}>Previous</Button>
            <Button onClick={next}>Next</Button>
            {showImage}
        </div>

        <hr/>

        <h3>Ecommerce</h3>

        <div className="row">
            {
                products?.length > 0 && products?.map((product, pos) => {
                    return <div className="col-md-3" key={pos}>
                        <div className="card card-body">
                            <h4>{product.title}</h4>
                        </div>
                    </div>
                })
            }
        </div>
    </>
}


function Image(props) {
    return <>
        <img src={props.photo} alt="Photo de profil"
            style={props.pos % 2 == 0 ? { border: '2px solid red' } : {}}
            className="me-4 w-25"
        />
    </>
}

export default App;