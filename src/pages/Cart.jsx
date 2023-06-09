import {
  addProduct,
  removeOneProd,
  removeProduct,
} from "Redux/Slices/CartProduct";
import { CartEmpty } from "components";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { GiReturnArrow } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartDatas } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);

  const handleQuantityChange = (uid, newValue) => {
    setQuantities((prevQuantities) => ({ ...prevQuantities, [uid]: newValue }));
  };

  const getPrice = (item, title) => {
    const quantity = quantities[item.uid] || 1;
    return title === "price" ? item.price * quantity : item.MRP * quantity;
  };

  const uniqueCartSet = new Set(cartDatas.map(JSON.stringify));

  const uniqueCartArray = Array.from(uniqueCartSet).map(JSON.parse);

  useEffect(() => {
    const initialQuantities = {};
    cartDatas.forEach((item) => {
      const uid = item.uid;
      if (initialQuantities[uid]) {
        initialQuantities[uid] += 1;
      } else {
        initialQuantities[uid] = 1;
      }
    });
    setQuantities(initialQuantities);
  }, [cartDatas]);

  //checkbox funcitonality
  const handleCheckboxChange = (uid) => {
    if (checkedItems.includes(uid)) {
      setCheckedItems((prevSelectedItems) =>
        prevSelectedItems.filter((itemUid) => itemUid !== uid)
      );
    } else {
      setCheckedItems((prevSelectedItems) => [...prevSelectedItems, uid]);
    }
  };

  const getCheckedItems = () => {
    return cartDatas.filter((item) => checkedItems.includes(item.uid));
  };

  // total sum of checked items
  const totalSum = getCheckedItems().reduce((sum, item) => sum + item.price, 0);

  const cartLength = cartDatas.length;
  return (
    <div className="mt-24 font-roboto px-5">
      <p className="text-2xl text-primary-700 mb-5">My Cart</p>
      {cartLength !== 0 ? (
        <div className="flex gap-5">
          <div className="basis-[60%]">
            <div className="flex justify-between bg-slate-100 shadow-lg rounded py-3 px-1">
              <label
                className="flex items-center w-fit gap-3"
                htmlFor="allCartProd"
              >
                <input type="checkbox" name="allCartProd" id="allCartProd" />{" "}
                {""}
                SELECT ALL ({cartDatas.length} ITEMS)
              </label>
              <div className="flex items-center gap-2 group hover:text-orange-500 hover:cursor-pointer">
                <AiFillDelete className="text-primary-700 w-5 h-6 group-hover:text-orange-500" />{" "}
                Delete
              </div>
            </div>

            {uniqueCartArray.map((item, id) => (
              <div
                key={`${item.subtitle}.${id}`}
                className="shadow-lg bg-slate-100 mt-5 p-1"
              >
                <p className="text-xs border-[1px] border-b-gray-400 w-full">
                  {item.seller}
                </p>
                <div className="flex justify-between items-center mt-4 pb-4">
                  <input
                    type="checkbox"
                    name="singleItem"
                    id={item.uid}
                    onChange={() => handleCheckboxChange(item.uid)}
                  />
                  <img
                    src={item.primaryImage}
                    alt={item.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="h-full w-[40%] flex flex-col gap-1">
                    <p className="text-xs font-bold">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                    <p className="flex items-center gap-1 text-sm">
                      <GiReturnArrow />{" "}
                      <span className="font-bold">7 Days</span>
                      <span className="text-gray-500">return available</span>
                    </p>
                    <p className="text-purple-700 text-sm">
                      Category: {item.category}
                    </p>
                  </div>

                  <div className="h-full flex flex-col gap-1">
                    <p className="text-orange-500">
                      Rs. {getPrice(item, "price")}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      Rs. {getPrice(item, "MRP")}
                    </p>
                    <p className="text-sm">
                      -{" "}
                      {item.disPercentage ? (
                        item.disPercentage
                      ) : (
                        <>Rs. {item.discount}</>
                      )}{" "}
                      OFF
                    </p>
                    <p className="flex items-center justify-between">
                      <AiFillDelete
                        onClick={() => dispatch(removeProduct(item.uid))}
                        className="text-primary-700 hover:cursor-pointer"
                        size={23}
                      />{" "}
                      <FiHeart className="hover:cursor-pointer" size={23} />{" "}
                    </p>
                  </div>

                  <div className="w-[20%] flex gap-1">
                    <AiOutlineMinus
                      onClick={() => {
                        const newQuantity = (quantities[item.uid] || 1) - 1;
                        if (newQuantity >= 1) {
                          handleQuantityChange(item.uid, newQuantity);
                          dispatch(removeOneProd(item.uid));
                        }
                      }}
                      className="border-[1px] border-gray-500 p-1 hover:cursor-pointer"
                      size={25}
                    />{" "}
                    <input
                      type="text"
                      value={quantities[item.uid] || 1}
                      readOnly
                      className="w-[30%] bg-transparent border-[1px] border-black focus:outline-none pl-2"
                    />{" "}
                    <AiOutlinePlus
                      onClick={() => {
                        const newQuantity = (quantities[item.uid] || 1) + 1;
                        if (newQuantity <= 5) {
                          handleQuantityChange(item.uid, newQuantity);
                          dispatch(addProduct(item));
                        }
                      }}
                      className="border-[1px] border-gray-500 p-1 hover:cursor-pointer"
                      size={25}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="basis-[40%]">
            <div className="bg-slate-100 shadow-lg rounded py-3 px-1">
              <p>Order Summary</p>
              <p className="text-gray-500 text-sm flex justify-between mb-1">
                <span>Price Details ({getCheckedItems().length} ITEMS)</span>
                <span>RS. {totalSum}</span>
              </p>
              <p className="text-gray-500 text-sm flex justify-between mb-1">
                <span>Shipping Fee</span>
                <span>Rs. 50</span>
              </p>
              <p className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Cuppon Discount</span>
                <button className="text-pink-500">Apply cuppon</button>
              </p>
              <p className="flex justify-between text-sm">
                <span className="text-gray-500">Total</span>
                <button className="text-base text-black">
                  Rs. {totalSum && totalSum + 50}
                </button>
              </p>
              <button className="bg-orange-500 w-full mx-auto mt-4 py-3 rounded text-white">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default Cart;
