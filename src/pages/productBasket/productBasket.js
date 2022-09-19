import { useContext} from "react";
import { ProductContext } from "../productContext/productContext";

 function ProductBasket() {
  const { basketproducts, setBasketproducts } = useContext(ProductContext);
  
  function deleteProduct(productId) {
    let filteredSupplier = basketproducts.filter((item) => item.productId !== productId);
    setBasketproducts(filteredSupplier);
  }

  console.log(basketproducts)
  return (
    <>
      <h1>Basket</h1>
      <table id="suppliers_list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity per unit </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {basketproducts &&
            basketproducts.map((item, index) => {
              return (
                <tr key={item.productId}>
                  <td>{item.productId}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td onClick={() => deleteProduct(item.productId)}>Delete</td>

                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
export default ProductBasket
