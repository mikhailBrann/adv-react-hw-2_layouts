import ShopCard from './ShopCard';

const CardsView = ({ goods }) => {
    return (
        <div className="goods-cards-view" >
            {goods.map(good => <ShopCard good={good} />)}
        </div>
    );
} 

export default CardsView;