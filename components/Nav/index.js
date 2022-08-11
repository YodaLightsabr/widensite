import styles from './Nav.module.css'

export default function Nav () {
    return (
        <div style={{
            letterSpacing: '0px',
            wordSpacing: '0px',
            fontSize: '0px'
        }}>
            <img src="/pano2.jpg" style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'left' }} />
            <nav className={styles.nav} style={{ backgroundColor: '#1e2117', color: 'white' }}>
                <span className={styles.norse}>
                    <a href="#">Home</a>
                </span>
                <span className={styles.norse}>
                    <a href="#">About</a>
                </span>
                <span className={styles.norse}>
                    <a href="#">About</a>
                </span>
            </nav>
            <a href="#">
                        <h1 style={{
                            transform: 'translateY(-50%)',
                            position: 'absolute',
                            top: '20px',
                            right: '30%',
                            fontSize: '60px',
                            color: 'white'
                        }}>
                            <strong className={styles.name} style={{ 
                                fontWeight: '700',
                                WebkitTextStrokeWidth: '1px',
                                WebkitTextStrokeColor: '#182e46'
                            }}>Jesper Widén</strong>
                        </h1>
                    </a>
        </div>
    )
}