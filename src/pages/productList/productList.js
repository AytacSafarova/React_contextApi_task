import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProductContext } from "../productContext/productContext";

export default function ProductList() {
  const { products, setProducts } = useContext(ProductContext);
  const { basketproducts, setBasketproducts } = useContext(ProductContext);

  const baseURL = "https://northwind.vercel.app/api/products";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);
  //   console.log(products);
  function addBAsket(item) {
    let obj = {
      productId: item.id,
      name: item.name,
      quantity: item.quantityPerUnit,
    };
   
    basketproducts.push(obj);
    console.log(basketproducts);
  }

  return (
    <>
      <h1>List</h1>
      <table id="suppliers_list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>

            <th>Supplier Id</th>
            <th>Quantity per unit </th>
            <th>Unit Price </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>

                  <td>{item.supplierId}</td>
                  <td>{item.quantityPerUnit}</td>
                  <td>{item.unitPrice}</td>
                  <td>
                    <button onClick={() => addBAsket(item)}>Add to Card</button>
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to={`/detail/${item.id}`}
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
