"use client";
import { ProductDto } from "@repo/types/contracts";
import { HeartIcon, ShoppingCartIcon, StarIcon } from "lucide-react";

import { useProductDetailsContext } from "@/app/shared/contexts/ProductDetailsContext";
import { getPercentDiscount } from "@/app/shared/utils/product/getPercentDiscount";
import { isSaleActive } from "@/app/shared/utils/product/isSaleActive";

type ProductCardProps = {
  product: ProductDto;
  grid?: boolean;
};

export const ProductCard = ({ product, grid }: ProductCardProps) => {
  // const [isWishedState, setIsWishedState] = useState(isWished);
  const { handleOpenProductDetails } = useProductDetailsContext();

  const isProductOnSale = isSaleActive(product.promotionEnd);
  const percentDiscount = getPercentDiscount(product);

  const onCartClick = async (product: ProductDto) =>
    handleOpenProductDetails(product);

  // const onWishClick = () => {};

  // const handleWishlistToggle = () => {
  //   setIsWishedState((prev) => !prev);
  //   toggleWishlistItem(product.id);
  //   setWishlistCount(getWishlistIDs().length);
  // };

  return (
    <div
      className={`group cursor-pointer overflow-hidden rounded-2xl border border-black/20 bg-white shadow-sm transition hover:scale-105 ${
        grid ? "w-full" : "w-60 shrink-0"
      }`}
    >
      {/* Image + Percent + Wish Button */}
      <div className="relative bg-black/10 p-4">
        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full object-contain"
        />

        {/* Percent */}
        {isProductOnSale && (
          <strong className="rounded-4xl absolute left-2 top-2 my-1 inline-block bg-red-500 px-2 py-1 text-sm font-bold text-white">
            - {percentDiscount}% off
          </strong>
        )}

        {/* Wish Button */}
        <button
          // onClick={onWishClick}
          className={`active:scale-140 absolute right-2 top-2 cursor-pointer rounded-full bg-white p-1 shadow-md transition duration-150 hover:scale-110`}
          aria-label="Add to favorites"
        >
          <HeartIcon
            className={`size-4 lg:size-5 ${
              true ? "fill-red-500 text-red-500" : "fill-gray-500 text-gray-500"
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="relative p-2">
        <h1 className="mb-1 line-clamp-2 h-8.75 text-sm font-semibold leading-tight">
          {product.title}
        </h1>

        {/* Rating */}
        <div className="mb-1 flex items-center text-xs text-gray-500">
          <StarIcon className="mr-1 h-3 w-3 fill-yellow-400 stroke-yellow-400" />
          <span className="font-bold text-black">
            {product.ratingRate.toFixed(1) ?? "–"}
          </span>
          <span className="mx-1">·</span>
          <span>
            {product.ratingCount ? `${product.totalSold} vendidos` : "Novo"}
          </span>
        </div>

        {/* Price */}

        <div className="flex items-center gap-1">
          <strong className="font-semibold">
            R$
            {isProductOnSale
              ? Number(product.promotionPrice)?.toFixed(2)
              : Number(product.price).toFixed(2)}
          </strong>
          {isProductOnSale && (
            <span className="text-sm text-red-500 line-through">
              R${Number(product.price).toFixed(2)}
            </span>
          )}
        </div>

        {/* Cart Button */}
        <button
          onClick={() => onCartClick(product)}
          className={`active:scale-140 absolute bottom-2 right-2 hidden cursor-pointer rounded-full bg-white p-1 shadow-md transition duration-150 hover:scale-110 lg:bottom-3 lg:right-3 lg:hidden lg:group-hover:block`}
          aria-label="Add to cart"
        >
          <ShoppingCartIcon
            className={
              "fill-blackfill-gray-500 block size-4 text-black lg:size-5"
            }
          />
        </button>
      </div>
    </div>
  );
};
