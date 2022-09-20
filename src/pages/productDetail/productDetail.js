import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import "./productDetail.css";

export default function ProductDetail() {
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  let { id } = useParams();
  const baseURL = "https://northwind.vercel.app/api/products/";

  useEffect(() => {
    axios.get(baseURL + id).then((response) => {
      setDetail(response.data);
    });
  }, []);
  console.log(detail);
  return (
    <div>
      <button className="go_back_button" onClick={() => navigate(-1)}>
        Go back
      </button>

      <h1>Supplier Details</h1>
      <table id="product_list">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category id</th>
            <th>Unit Price</th>
            <th>Units in stock</th>
            <th>Units on order</th>
          </tr>
        </thead>
        <tbody>
          <tr key={detail.id}>
            <td>{detail.id}</td>
            <td>{detail.name}</td>
            <td>{detail.categoryId}</td>
            <td>{detail.unitPrice}</td>
            <td>{detail.unitsInStock}</td>
            <td>{detail.unitsOnOrder}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
