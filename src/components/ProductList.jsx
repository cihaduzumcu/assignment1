import Product from './Product';

function ProductList() {
    const products = [
        { id: 1, title: "Laptop", price: 1200 },
        { id: 2, title: "Phone", price: 800 },
        { id: 3, title: "Tablet", price: 600 },
        { id: 4, title: "Headphone", price: 500 },
        { id: 5, title: "AirPods", price: 850 },
        { id: 6, title: "Monitor", price: 3200 }
    ];

    return (
        <div>
            {products.map(product => (
                <Product key={product.id} title={product.title} price={product.price} />
            ))}
        </div>
    );
}

export default ProductList;