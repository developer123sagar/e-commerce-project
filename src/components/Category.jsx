import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import SkeletonUI from "materialUI/SkeletonUI";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "Redux/Slices/CartProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Category = (props) => {
  // props destructuring
  const { API } = props;

  // usestate
  const [data, setData] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [loading, setLoading] = useState(false);

  // api calling
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [API]);

  // dispathc func calling
  const dispatch = useDispatch();
  const { cartDatas } = useSelector((state) => state.cart);

  //login status check from auth slice ,redux
  const { isLoggedIn } = useSelector(state => state.auth)

  // navigating to login if not logged in 
  const navigate = useNavigate()

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

  const addtoCart = (product) => {
    const { uid } = product;
    const categoryItems = cartDatas.filter(
      (item) => item.uid === uid
    );
    if (categoryItems.length > 4) {
      toast.error(
        "You cannot add more than 5 items to the cart",
        {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } else {
      if(isLoggedIn){
        dispatch(addProduct(product));
        toastMsg(product);
      }else{
        toastNotLogMsg()
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  // toast message
  const toastMsg = (prodName) => {
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
  return (
    <>
      <ToastContainer />
      <div className="w-full grid grid-cols-6 gap-x-3 gap-y-10 font-roboto">
        {loading ? (
          <>
            <SkeletonUI />
            <SkeletonUI />
            <SkeletonUI />
            <SkeletonUI />
            <SkeletonUI />
            <SkeletonUI />
            <SkeletonUI />
            <SkeletonUI />
            <SkeletonUI />
            <SkeletonUI />
            <SkeletonUI />
            <SkeletonUI />
          </>
        ) : (
          data.map((item, id) => {
            return (
              <div
                key={`${id}.singleProduct`}
                className="shadow-lg relative"
                onMouseEnter={() => setHoveredItem(id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link to={`/details/${item.category}/${item.uid}`}>
                  <LazyLoadImage
                    key={`${id}.LadyImage`}
                    src={item.primaryImage}
                    placeholderSrc={item.primaryImage}
                    alt={item.title}
                    className="rounded object-contain"
                    effect="blur"
                  />
                </Link>
                {item.rating && (
                  <p className="absolute bottom-[70px] left-0 text-sm bg-gray-400 flex items-center gap-1 px-2 py-[2px]">
                    <span>{item.rating?.rating}</span>
                    <AiFillStar color="green" /> | {item.rating?.ratedUser}
                  </p>
                )}
                <p className="font-roboto text-sm font-bold mt-1 px-2">
                  {item.title}
                </p>
                <p className="font-roboto text-sm text-gray-500 px-2 w-full truncate">
                  {item.subtitle}
                </p>
                {hoveredItem === id && (
                  <button
                    onClick={() => addtoCart(item)}
                    className="absolute bottom-16 bg-primary-700 left-0 text-white flex items-center justify-center gap-3 py-2 px-3 w-full overflow-hidden"
                  >
                    <AiOutlineShoppingCart /> Add to Cart
                  </button>
                )}
                <p className="px-2 text-sm w-full">
                  Rs. {item.price} &nbsp;
                  <span className="line-through">Rs.{item.MRP}</span>
                  <span className="text-pink-500 text-xs">
                    &nbsp;(
                    {item.disPercentage ? (
                      item.disPercentage
                    ) : (
                      <>Rs.{item.discount}</>
                    )}
                    &nbsp;OFF)
                  </span>
                </p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Category;
