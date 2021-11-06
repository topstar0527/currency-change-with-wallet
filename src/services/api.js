const axios = require("axios").default;
const EXCHANGE_URL =
  "https://v6.exchangerate-api.com/v6/35f2fbd8af65b995ac7af2d1/pair";
const CancelToken = axios.CancelToken;
let cancelToken;
export const getExchangeRate = (from, to) => {
  cancelToken && cancelToken();
  return axios
    .get(`${EXCHANGE_URL}/${from}/${to}`, {
      cancelToken: new CancelToken((c) => (cancelToken = c)),
    })
    .then((res) => res.data.conversion_rate)
    .catch((rej) => 0);
};
