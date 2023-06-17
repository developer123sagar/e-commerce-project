import { useSelector } from "react-redux";

const Cart = () => {
  const { cartDatas } = useSelector((state) => state.cart);
  console.log(cartDatas);
  return (
    <div className="mt-24">
      <p className="text-2xl text-primary-700">My Cart</p>
    </div>
  );
};

export default Cart;
