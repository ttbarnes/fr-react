// strip commas and brackets
export const cleanDiscographyItemName = (itemName) =>
  itemName.replace(/,|\(|\)/g, '');

export const encodeDiscographyItemName = (itemName) =>
  cleanDiscographyItemName(itemName)
    .replace(/ /g, '-');

export const getImagePath = (itemName) =>
  cleanDiscographyItemName(itemName).replace(/\s/g, '-').toLowerCase();

export const mapDiscography = (items) =>
  items.map((i) => {
    const item = i;

    item.imageName = getImagePath(item.name);
    item.formattedName = encodeDiscographyItemName(item.name);

    return item;
  });
