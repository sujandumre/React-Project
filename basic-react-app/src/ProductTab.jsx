import Product from "./product.jsx";

function ProductTab() {
  let styles={
    display:"flex",
    flexWrap:"Wrap",
    justifyContent:"center",
    alignItems:"center",
  }
 
 return (
    <div style={styles}>
      
   <Product title="Logitech MX Master" idx={0}/> 
   <Product title="Apple-Gen"  idx={1}/> 
   <Product title="Zebronics" idx={2}/> 
   <Product title="petrodnics" idx={3}/> 
  
    </div>
  );
}
export default ProductTab;