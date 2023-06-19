import { addProduct } from "Redux/Slices/CartProduct";
import { RequestAPI } from "RequestAPI";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Details = () => {
  const { id, category } = useParams();
  const [selectedDatas, setselectedDatas] = useState([]);
  const [singleProd, setSingleProd] = useState();
  const { cartDatas } = useSelector((state) => state.cart);
  // console.log(cartDatas.length)

  useEffect(() => {
    const getAPI = () => {
      let temp;
      if (category === "planters") temp = RequestAPI.apiPlanters;
      if (category === "vases") temp = RequestAPI.apiVases;
      if (category === "table-covers") temp = RequestAPI.apiChairs;
      if (category === "wallart") temp = RequestAPI.apiWallarts;
      return temp;
    };

    const fetchData = async () => {
      try {
        const API = getAPI();
        const response = await axios.get(API);
        setselectedDatas(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    const filterProduct = () => {
      const data = selectedDatas.find((item) => item.uid === id);
      setSingleProd(data);
    };
    filterProduct();
  }, [id, selectedDatas]);

  // each product images
  const prodImg = singleProd && [
    singleProd.primaryImage,
    ...singleProd.additionalImages,
  ];

  const rates =
    singleProd &&
    singleProd.rating?.rating &&
    Object.values(singleProd.rating).slice(2);

  //dispatching addtocart
  const dispatch = useDispatch();

  //login status check from auth slice ,redux
  const { isLoggedIn } = useSelector((state) => state.auth);

  // toast success message
  const toastSuccMsg = (prodName) => {
    toast.success(`${prodName.title} added in your cart`, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // toast failed msg
  const toastFailMsg = () => {
    toast.error("You can not add more than 5 items", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

   //not logged in message
   const toastNotLogMsg = ()=>{
    toast.info('Please Login to Add items',{
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  // navigating to login if not logged in 
  const navigate = useNavigate()

  const handleAddCart = (product) => {
    const { uid } = product;
    const categoryItems = cartDatas.filter(
      (item) => item.uid === uid
    );
    if (isLoggedIn) {
      if (categoryItems.length < 5) {
        toastSuccMsg(product);
        dispatch(addProduct(product));
      } else {
        toastFailMsg();
      }
    }else{
      toastNotLogMsg()
        setTimeout(() => {
          navigate("/login");
        }, 2000);
    }
  };

  return (
    <>
      <div className="absolute top-24 p-2 flex gap-4 w-full font-roboto">
        <ToastContainer />
        {/* image part */}
        <div className="basis-1/2 flex gap-2 flex-wrap">
          {singleProd &&
            prodImg.map((img, id) => (
              <img
                key={id}
                src={img}
                alt="product"
                className="h-[450px] w-[320px] object-cover shadow-xl rounded border-gray-200 border-[1px]"
              />
            ))}
        </div>
        {/* product details part */}
        <div className="basis-1/2 pl-10">
          {singleProd && (
            <>
              <p className="text-xl font-semibold mb-1">{singleProd.title}</p>
              <p className="text-gray-500 mb-1 text-lg">
                {singleProd.subtitle}
              </p>
              <p className="mb-2">
                <span className="text-lg font-semibold">
                  Rs.{singleProd.price}
                </span>
                &nbsp;&nbsp;
                <span className="line-through text-lg text-gray-500">
                  {" "}
                  Rs.{singleProd.MRP}
                </span>
                <span className="text-orange-500 text-lg">
                  &nbsp;&nbsp; (
                  {singleProd.disPercentage ? (
                    singleProd.disPercentage
                  ) : (
                    <>Rs. {singleProd.discount}</>
                  )}
                  OFF)
                </span>
              </p>
            </>
          )}
          <p className="text-sm text-pink-600 mb-4">Inclusive all taxes</p>
          <div className="flex gap-4 mb-5">
            <button
              onClick={() => handleAddCart(singleProd)}
              className="w-[30%] flex items-center justify-center gap-3 bg-emerald-400 py-3 px-2 rounded text-white shadow-lg"
            >
              ADD TO CART <AiOutlineShoppingCart size={25} />
            </button>
            <button className="w-[30%] flex items-center justify-center gap-3 bg-purple-400 py-3 px-2 rounded text-white shadow-lg">
              WISHLIST <FaHeart size={25} />
            </button>
          </div>
          {singleProd && (
            <>
              <p className="mb-4">
                Seller:{" "}
                <span className="text-lime-600">{singleProd.seller}</span>
              </p>
              <p className="text-gray-500 text-sm pb-5 border-b-[1px] border-gray-500 w-full">
                100% Original Products <br /> Pay on delivery might be available{" "}
                <br /> Easy 7 days returns and exchanges
              </p>

              <p className="pt-5 text-lg font-semibold w-[30%] flex items-center gap-2">
                Product Details <IoNewspaperOutline />
              </p>
              <div className="text-gray-600">
                <p>Set Content: {singleProd?.product_details?.setContent}</p>
                <p>Colour: {singleProd?.product_details?.color}</p>
                {singleProd?.product_details?.material && (
                  <p>Material: {singleProd?.product_details?.material}</p>
                )}
                {singleProd?.product_details?.pattern && (
                  <p>Pattern: {singleProd?.product_details?.pattern}</p>
                )}
              </div>

              <p className="font-semibold text-lg mt-5">Size & Fit</p>
              <p className="text-gray-600">Dimension: {singleProd.size}</p>

              {singleProd.care && (
                <>
                  <p className="font-semibold text-lg mt-5">Care</p>
                  <p className="text-gray-600">Care: {singleProd.care}</p>
                </>
              )}

              {singleProd.features && (
                <>
                  <p className="font-semibold text-lg mt-5">Features</p>
                  <p className="text-gray-600">{singleProd.features}</p>
                </>
              )}

              {singleProd.rating?.rating && (
                <>
                  <div className="w-[80%] mt-5 border-t-[1px] border-gray-500" />
                  <p className="font-semibold w-[30%] flex items-center gap-1 text-lg mt-5">
                    Ratings <AiOutlineStar size={23} />
                  </p>
                  <div className="flex">
                    <div className="mt-5 flex items-center pr-6 border-r-[1px] border-gray-500">
                      <div className="mt-5">
                        <div className="flex items-center gap-2">
                          <p className="text-4xl">
                            {singleProd.rating?.rating}
                          </p>
                          <FaStar size={25} color="green" />
                        </div>
                        <p className="mt-1 text-gray-500">
                          {singleProd.rating?.ratedUser} verified buyers
                        </p>
                      </div>
                    </div>
                    <div>
                      {rates.map((rate, id) => (
                        <div
                          key={`${id}.productDetails`}
                          className="flex flex-col"
                        >
                          <div className="mt-5 ml-5 flex items-center gap-4">
                            <label
                              htmlFor="rating"
                              className="flex items-center gap-1 text-gray-500 text-sm"
                            >
                              {rates.length - id} <AiOutlineStar />
                            </label>
                            <progress
                              className="h-[6px] border-red-500 text-red-600"
                              value={parseInt(rate)}
                              max={parseInt(singleProd.rating?.ratedUser)}
                            />
                            <p>{rate}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
