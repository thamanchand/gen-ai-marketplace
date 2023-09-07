const IMAGE_URL = process.env.STRAPI_PUBLIC_API_URL;

export const getArtImageLoader = (url: string) => {
  console.log("image_url", `${IMAGE_URL}${url}`);
  return `${IMAGE_URL}${url}`;
};
