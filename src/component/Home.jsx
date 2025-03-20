import { useEffect, useState } from "react";

function Home(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      console.log("Fetched Data:", result);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("data", data);

  return (
    <div>
      <h1>Home Component</h1>
      {data.map((value) => (
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img
              src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png"
              alt=""
            />
          </div>
          <div className="text-wrapper item">
            <span>{value.title}</span>
            <span>{value.price}</span>
          </div>
          <div className="btn-wrapper item">
            <button
              onClick={() => {
                props.addToCartHandler({ pice: 1000, name: "i phone 11" });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Home;
