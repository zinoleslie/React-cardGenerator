
const Productcard = (props) => {
    const styles = {
        card:{
            border:"1px solid black",
            borderRadius:"4px",
            margin:"10px",
            padding:"10px",
            width:"300px",
        },

        image:{
            width:"100%",
            height:"auto"
        },
        name:{
            color:"red",
            fontSize:"22px"
        }
    }
  return (
    <div style={styles.card}>
        <img src={props.imgUrl || "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/344838/1.jpg?5894"}alt="product name" style={styles.image} />

        <div>
            <h3 style={styles.name}>{props.productname}</h3>
            <h4>${props.price}</h4>
        </div>

    </div>
  )
}

export default Productcard