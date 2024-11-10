import React from 'react';
import products from './products';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

class Store extends React.Component {
    constructor(props) {
        super(props);

        this.products = products;
        this.view = 'view_list';
    }

    onSwitch() {
        this.view = this.view === 'view_list' ? 'view_module' : 'view_list';
        this.setState({ view: this.view });
    }

    render() {
        const viewCatalog = this.view === 'view_list' ? <ListView goods={this.products} /> : <CardsView goods={this.products} />;

        return (
            <div className="store">
                <IconSwitch icon={this.view} onSwitch={this.onSwitch.bind(this)} />
                {viewCatalog}
            </div>
        );
    }
}

export default Store;