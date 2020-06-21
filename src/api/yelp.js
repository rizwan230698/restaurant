import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Xu0E2pBkDib4R4iStB4xEl9k9Heyrz5rn-RoAIy5gDxQR-9wRvW-hfNTZKgyV37VDLvtZBitIHqbQP4GKRQVMMrgfF-ACr9xSIcUHG7vceAaR-W_yxKU4fedf1icXnYx",
  },
});
// Client ID
// aOo8TXTHUi0-f8EUBTCLAQ
