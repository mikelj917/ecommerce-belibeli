import type { RemoveItemFromWishlistParams } from "@/modules/wishlist/types/ServiceParams";
import { db } from "@/shared/lib/db";
import { ForbiddenError, NotFoundError } from "@/shared/utils/HttpErrors";

export const deleteWishlistItem = async ({
  userId,
  wishlistItemId,
}: RemoveItemFromWishlistParams) => {
  const item = await db.wishlistItem.findUnique({
    where: { id: wishlistItemId },
    include: { wishlist: { select: { userId: true } } },
  });

  if (!item) {
    throw new NotFoundError("Item da lista de desejos não encontrado.");
  }

  if (item.wishlist.userId !== userId) {
    throw new ForbiddenError(
      "Item da lista de desejos não pertence ao usuário."
    );
  }

  await db.wishlistItem.delete({ where: { id: wishlistItemId } });
};
