File Organization:
- index.html - the single HTML file with the empty root div.
- main.jsx - entry point that renders App into the page.
- App.jsx - root component; holds the showProducts and name state, the toggle button, the controlled input, and the greeting.
- ProductList.jsx - defines the static product array and renders one Product per item with .map().
- Product.jsx - displays a product's title and price inside a Card.
- Card.jsx - reusable wrapper that renders its children with simple styling.
- index.css - minimal global styles.

Challenges Faced:
- Setting up the project with Vite on Windows, including a PowerShell execution policy error.
- Understanding how a controlled input keeps its value in sync with state.
- Using conditional rendering with && instead of an if statement inside JSX.
- Passing data down through props and keeping Product free of state.