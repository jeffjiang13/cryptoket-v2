export const makeId = (length) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const shortenAddress = (address) => (
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
);

export const getCreators = (array) => {
  const sellers = {};

  array.forEach(({ price, seller }) => {
    if (!sellers[seller]) {
      sellers[seller] = 0;
    }

    sellers[seller] += parseInt(price, 10);
  });

  const topSellers = Object.entries(sellers)
    .map(([seller, price]) => ({ price, seller }))
    .sort((a, b) => b.price - a.price);
  return topSellers;
};
