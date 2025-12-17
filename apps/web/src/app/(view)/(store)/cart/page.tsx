import { CartPage } from "@/app/(view)/(store)/cart/CartPage";
import { productService } from "@/app/shared/services/API/products";

const CartPageServer = async () => {
  const productResponse = await productService.findAllProducts();

  return <CartPage products={productResponse.products} />;
};

export default CartPageServer;
