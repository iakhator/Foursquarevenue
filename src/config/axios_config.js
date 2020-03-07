import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config()

const instance = axios.create({
  baseURL: 'https://api.foursquare.com/v2/venues',
});

instance.interceptors.request.use(config => {
  config.params = {
    // add your default ones
    client_id: 'SG11DRM1R5N4EGDASGJ1K2GSO4APKSASBUX1KXT2ZMZEGTOW',
    client_secret: "24YFMBPNHLCXPLEDSBNSA4J4OF1LR2HAJMQYQCAE0NYOSZMI",
    v: 20120610,
    // spread the request's params
    ...config.params
  };
  return config;
});

export default instance
