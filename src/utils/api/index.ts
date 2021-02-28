import { ApiProduct, Product } from '../../types';

export const formatFetchedProduct = (product: ApiProduct): Product => {
  const { id, image_url: imageUrl, name, price } = product;
  const formattedProduct = {
    id,
    imageUrl,
    name,
    price,
  };

  return formattedProduct;
};

export const formatFetchedInventory = (inventory: ApiProduct[]): Product[] => {
  const formattedInventory = inventory.map((product: ApiProduct) => formatFetchedProduct(product));

  return formattedInventory;
};
