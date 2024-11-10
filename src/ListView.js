import ShopCard from './ShopCard';

const ListView = ({ goods }) => {
    return (
        <div className="goods-list-view" >
            {goods.map(good => <ShopCard good={good} />)}
        </div>
    );
} 

export default ListView;