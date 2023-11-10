import { useCart } from "../context/CartContext.tsx";
import { useRef } from "react";

type itemDetails = {
  id: number;
  quantity: number;
};

const Checkout = () => {
  const { cart } = useCart();

  const itemDetails = useRef<itemDetails[]>([]);
  itemDetails.current = cart.map((item) => {
    const filteredItemDetails = {
      id: item.id,
      quantity: item.quantity,
    };
    return filteredItemDetails;
  });

  const handleCheckout = () => {
    if (cart.length <= 0) {
      // Display Cart Empty Notification
      alert("Cart is empty");
    }

    fetch("https://ecommerce-server-ruddy.vercel.app/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemDetails: itemDetails.current,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((json) => Promise.reject(json));
        }
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((err) => {
        console.error(err.error);
      });
  };


  return (
    <div className="text-4xl font-bold text-center mt-2">
      <button className="rounded bg-sky-300 p-2 " onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
