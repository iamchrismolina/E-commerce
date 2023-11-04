// import { useState } from "react";
import { useCart } from "../context/CartContext.tsx";
import { useTotalAmount } from "../context/TotalAmountContext.tsx";
import { usePurchaseCount } from "../context/PurchaseCountContext.tsx";
import Warning from "./Warning.tsx";
import { useWarning } from "../context/WarningContext.tsx";

const Cart = () => {
  const { toggleCart, cart, addQuantity, deductQuantity } = useCart();
  const { totalAmount, addOnTotalAmount, deductOnTotalAmount } =
    useTotalAmount();
  const { setPurchaseCount } = usePurchaseCount();
  const { displayWarning } = useWarning();

  return (
    <aside
      className={`cart ${
        toggleCart ? "cart-active" : ""
      } fixed h-full bg-banner-clr overflow-hidden z-10 justify-center`}
    >
      <div className="p-4 font-bold text-4xl flex justify-center items-center gap-4">
        <span className="bg-orange-300 p-2 rounded">Shopping Cart</span>
        <div className="w-14 h-14">
          <img src="./images/shoppingcart.png" className="w-full h-full" />
        </div>
      </div>
      {displayWarning ? <Warning /> : null}
      <div className="px-6 pt-2 w-full h-3/5 overflow-y-scroll box-content">
        <ul className="flex flex-col items-center pr-4 gap-6">
          {cart.length === 0 ? (
            <span className="text-2xl justify-self-center bg-sky-50 p-2 rounded">
              Cart Empty
            </span>
          ) : (
            cart.map((product) => (
              <li key={product.id} className="w-5/6">
                <div className="relative p-2 border-2 border-blue-500 bg-gray-100 rounded">
                  <img
                    src={product.image}
                    className="w-24 h-24 overflow-clip"
                  />
                  <span>{product.title}</span>
                  <hr className="border-black" />
                  <span>Price: ${product.price}</span>
                  <div className="flex justify-between font-bold">
                    <span>Qty: {product.quantity}</span>
                    <div className="flex gap-6 items-center justify-between">
                      <span
                        className="text-2xl cursor-pointer"
                        onClick={() => {
                          const res = addQuantity(product);
                          if (res === true) {
                            setPurchaseCount((prevValue) => prevValue + 1);
                            addOnTotalAmount(product.price);
                          }
                        }}
                      >
                        +
                      </span>
                      <span
                        className="text-2xl cursor-pointer"
                        onClick={() => {
                          const res = deductQuantity(product);
                          if (res === true) {
                            setPurchaseCount((prevValue) => prevValue - 1);
                            deductOnTotalAmount(product.price);
                          }
                        }}
                      >
                        -
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <hr />
        <div className="font-bold text-2xl flex justify-between">
          <span>Total:</span>
          <span>${totalAmount}</span>
        </div>
        <div className="text-4xl font-bold text-center mt-2">
          <button className="rounded bg-sky-300 p-2 ">Checkout</button>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
