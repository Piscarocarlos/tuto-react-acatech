
function Product(props) {

    return <div >
    <img src={props.item.image}/>
    <h3>{props.item.name}</h3>
    <p>{props.item.description}</p>
    <h4>{props.item.price}</h4>
</div>
}

export default Product;