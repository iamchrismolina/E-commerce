import { useCart } from "../context/CartContext";

const Cart = () => {
  const { toggleCart } = useCart();

  return (
    <aside
      className={`cart ${
        toggleCart ? "cart-active" : ""
      } fixed h-full bg-banner-clr z-10 overflow-hidden`}
    >
      <div></div>
    </aside>
  );
};

export default Cart;
