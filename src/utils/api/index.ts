import { ApiProduct, Product } from '../../types';

export const formatFetchedInventory = (inventory: ApiProduct[]): Product[] => {
  const formattedInventory = inventory.map((product: ApiProduct) => {
    const { id, image_url: imageUrl, name, price } = product;
    const formattedProduct = {
      id,
      imageUrl,
      name,
      price,
    };

    return formattedProduct;
  });

  return formattedInventory;
};
