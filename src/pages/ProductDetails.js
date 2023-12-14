import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import {
  FaArrowRight,
  FaCartPlus,
  FaGift,
  FaShippingFast,
} from "react-icons/fa";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  //get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  //initial details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  return (
    <Layout title={"Ecommerce - Detail Page"}>
      <h1 className="filter1 text-center mt-5">Products detail page</h1>
      <div className="card-wrapper">
        <div className="card1">
          {/* card left */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img
                  src={`/api/v1/product/product-photo/${product._id}`}
                  alt="image"
                  height={450}
                  width={80}
                />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <Link href="#" data-id={1}>
                  <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    alt="shoe image"
                  />
                </Link>
              </div>
              <div className="img-item">
                <Link href="#" data-id={2}>
                  <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    alt="shoe image"
                  />
                </Link>
              </div>
              <div className="img-item">
                <Link href="#" data-id={3}>
                  <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    alt="shoe image"
                  />
                </Link>
              </div>
              <div className="img-item">
                <Link href="#" data-id={4}>
                  <img
                    src={`/api/v1/product/product-photo/${product._id}`}
                    alt="shoe image"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* card right */}
          <div className="product-content mt-4">
            <h2 className="product-title">{product.name}</h2>
            <Link href="#" className="product-link">
              visit store
            </Link>
            <div className="product-rating">
              <i className="fa-li fa fa-spinner fa-spin" />

              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <span>4.7(21)</span>
            </div>
            <div className="product-price">
              <p className="new-price">
                Price: <span>$ {product.price}</span>
              </p>
            </div>
            <div className="product-detail">
              <h2>about this item: </h2>
              <p>{product.description}</p>

              <ul>
                <li>
                  <FaArrowRight style={{ color: "orange" }} /> Color:{" "}
                  <span>Black</span>
                </li>
                <li>
                  <FaArrowRight style={{ color: "orange" }} /> Available:{" "}
                  <span>in stock</span>
                </li>
                <li>
                  <FaCartPlus style={{ color: "orange" }} /> Category:{" "}
                  <span>{product?.category?.name}</span>
                </li>

                <li>
                  <FaShippingFast style={{ color: "orange" }} /> Shipping Area:{" "}
                  <span>All over the world</span>
                </li>
                <li>
                  <FaGift style={{ color: "orange" }} /> Shipping Fee:{" "}
                  <span>Free</span>
                </li>
              </ul>
            </div>

            <div className="social-links">
              <p style={{ color: "orange", marginTop: "14px" }}>Share At: </p>
              <Link href="#">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link href="#">
                <i className="fab fa-twitter" />
              </Link>
              <Link href="#">
                <i className="fab fa-instagram" />
              </Link>
              <Link href="#">
                <i className="fab fa-whatsapp" />
              </Link>
              <Link href="#">
                <i className="fab fa-pinterest" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
