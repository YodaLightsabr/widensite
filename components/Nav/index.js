import styles from './Nav.module.css'
import { useEffect, useState } from 'react'

export default function Nav () {
    const [route, setRoute] = useState('/');

    useEffect(() => {
        setRoute(window.location.pathname);
    }, []);

    return (
        <div style={{
            letterSpacing: '0px',
            wordSpacing: '0px',
            fontSize: '0px'
        }}>
            <img src="/assets/pano2.jpg" style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'left' }} />
            <nav className={styles.nav} style={{ backgroundColor: '#1e2117', color: 'white' }}>
                <span className={styles.norse + ((route == '/' || route == '/home') && ' active' || '')}>
                    <a href="/home">Home</a>
                </span>
                <span className={styles.norse + (route == '/about' && ' active' || '')}>
                    <a href="/about">About</a>
                </span>
                <span className={styles.norse + (route == '/contact' && ' active' || '')}>
                    <a href="/contact">Contact</a>
                </span>
                <span className={styles.norse + (route == '/videos' && ' active' || '')}>
                    <a href="/videos">Videos</a>
                </span>
                <span className={styles.norse}>
                    <a href="http://widenhorizons.com" target="_blank">Widén Horizons</a>
                </span>
            </nav>
            <a href="/">
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