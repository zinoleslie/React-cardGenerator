import "./App.css"
// import Greetings from "./components/Greet"
import Productcard from "./components/Productcard"
import products from "./Mockdata/product"
import Mynavbar from "./components/Mynavbar"
const App = () => {

  console.log(products);
  return (
    <>
      <Mynavbar />
        <main className="containerFluid">
        <div className="grid">
          {
            products.map((product) => {
              return (<Productcard 
                Key={product.id}
                price={product.price} 
                imgUrl={product.imgUrl} 
                productname={product.productName}
                color={product.color} />);
          })
          }
        </div>
        
      </main>
    </>
  )
}

export default App