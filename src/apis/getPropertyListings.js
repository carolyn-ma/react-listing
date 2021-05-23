import { ListingAPIs, LocalStorageKeys } from './_apis';

const secLogin = 'simplyrets';
const basicAuth = btoa(`${secLogin}:${secLogin}`);

export const getPropertyListings = () => {
  fetch(ListingAPIs.listings, {
    headers: new Headers({
      Authorization: `Basic ${basicAuth}`,
    }),
  })
    .then((response) => response.json())
    .then((data) =>
      window.localStorage.setItem(
        LocalStorageKeys.listings,
        JSON.stringify(data),
      ),
    )
    .catch((error) => {
      console.error('Error fetching listings:', error);
    });
};
