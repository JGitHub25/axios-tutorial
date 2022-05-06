import { useEffect } from "react";
import axios from "axios";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await axios(productsUrl);
      const res2 = await axios.get(randomUserUrl);
      console.log(res1);
      console.log(res2);
    } catch (error) {
      console.log(error.response);
    }
  };

  const fetchData2 = async (url) => {
    try {
      const { data } = await axios(url);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
    // fetchData2(productsUrl);
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
