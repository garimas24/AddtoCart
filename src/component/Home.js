import React from "react";

function Home() {
  console.warn();
  return (
    <div>
      <h1>Home Components</h1>
      <div className="class-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="text-wrapper item">
        <span>Bag</span>
        <span>Price - $10</span>
      </div>
      <div className="btn-wrapper item">
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Home;
