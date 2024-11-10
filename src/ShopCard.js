const ShopCard = ({ good }) => {
  return (
    <div className="card" key={Date.now()%1000}>
      <span className="card-title">{good.name}</span>
      <span className="card-color">{good.color}</span>
      <img src={good.img} alt={good.name} className="card-image" />
      <span className="card-price">${good.price}</span>
      <button className="btn card-add">Add to cart</button>
    </div>
  );
};

export default ShopCard;