// strip commas and brackets
export const cleanAlbumName = (albumName) =>
  albumName.replace(/,|\(|\)/g, '');

export const encodeAlbumName = (albumName) =>
  cleanAlbumName(albumName)
    .replace(/ /g, '-');

export const getImagePath = (albumName) =>
  cleanAlbumName(albumName).replace(/\s/g, '-').toLowerCase();

export const mapAlbums = (albums) =>
  albums.map((a) => {
    const album = a;

    album.imageName = getImagePath(album.name);
    album.formattedName = encodeAlbumName(album.name);

    return album;
  });
