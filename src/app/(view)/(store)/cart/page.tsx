import { CartList } from "./components/CartList/CartList";
import { CartHeader } from "./components/Header/CartHeader";

const CartPage = () => {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto">
        <CartHeader />
        <CartList />
      </div>
    </section>
  );
};

export default CartPage;
