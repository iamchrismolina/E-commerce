import { useCart } from "../context/CartContext";

const Cart = () => {
  const { toggleCart, cart } = useCart();

  return (
    <aside
      className={`cart ${
        toggleCart ? "cart-active" : ""
      } fixed h-full bg-banner-clr z-10 overflow-hidden`}
    >
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            {/* Display other product details */}
          </li>
        ))}
      </ul>
      {/* <button onClick={toggleCartVisibility}>Toggle Cart</button> */}
    </aside>
  );
};

export default Cart;
