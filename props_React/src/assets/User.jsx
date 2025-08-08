function User(props) {
  return (
    <div>
      <h2>User Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>       {/*this is the user Props */}
      <ProductDetails ProName={props.ProName} ProId={props.ProId} ProDes={props.ProDes}/>
      <Example/>
      <Example2/>

      {/*this is the Product Detail tag to connect with user funtion */}
    </div>
  );
}
function ProductDetails(props){       // it contain data of product
  return(
    <div>
    <h1>Product Info</h1>
    <h2>product Name:{props.ProName} </h2>
    <h2>Product ID:{props.ProId} </h2>
    <h3>Product Description:{props.ProDes}

    </h3>
    </div>
  )
 
}

export function Example(){
    return(
    <h1>this is james</h1>
  )
  } 
  export function Example2(){
    return(
    <h1>this is mike</h1>
  )
  } 
export default User;
