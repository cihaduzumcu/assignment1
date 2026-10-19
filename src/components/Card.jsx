function Card({ children }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '12px', margin: '8px 0' }}>
            {children}
        </div>
    );
}

export default Card;