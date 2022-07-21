export default function Hero ({ viewport }) {
    return (
        <div className="hero" style={{
            width: '100%',
            height: '300px',
            background: `url("https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/04/panorama-photography-1001-1.jpg?fit=1500%2C375&ssl=1")`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-wrapper">
                <div className="hero-content">
                    <h1>Jesper Widen</h1>
                    <h2>Teacher and Author</h2>
                </div>
            </div>
        </div>
    );
}