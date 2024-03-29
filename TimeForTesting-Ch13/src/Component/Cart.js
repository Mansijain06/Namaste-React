import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1>Cart</h1>
      <button onClick={() => handleClearCart()} className="bg-green-200">
        Clear Cart
      </button>
      <div className="flex">
        {cartItems?.map((items) => (
          <FoodItem {...items} key={items.id} />
        ))}
      </div>
    </>
  );
};

export default Cart;
