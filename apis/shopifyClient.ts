import Client from 'shopify-buy'

export const client = Client.buildClient({
  domain: '[Your Domain]',
  storefrontAccessToken: '[Your Storefront Access Token]',
});

