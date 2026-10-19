import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
    const [showProducts, setShowProducts] = useState(true);
    const [name, setName] = useState("");

    function handleToggle() {
        setShowProducts(!showProducts);
    }

    return (
        <div>
            <h1>React Product Dashboard</h1>

            <button onClick={handleToggle}>
                {showProducts ? "Hide Products" : "Show Products"}
            </button>

            <div>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <p>Hello, {name}</p>

            {showProducts && <ProductList />}
        </div>
    );
}

export default App;