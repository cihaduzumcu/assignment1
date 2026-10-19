import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
    const [showProducts, setShowProducts] = useState(true);

    function handleToggle() {
        setShowProducts(!showProducts);
    }

    return (
        <div>
            <h1>React Product Dashboard</h1>

            <button onClick={handleToggle}>
                {showProducts ? "Hide Products" : "Show Products"}
            </button>

            {showProducts && <ProductList />}
        </div>
    );
}

export default App;