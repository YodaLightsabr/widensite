import Link from 'next/link';
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
                <Link href="/home">
                    <span className={styles.norse + ((route == '/' || route == '/home') && ' active' || '')}>
                        Home
                    </span>
                </Link>
                <Link href="/about">
                    <span className={styles.norse + (route == '/about' && ' active' || '')}>
                        About
                    </span>
                </Link>
                <Link href="/contact">
                    <span className={styles.norse + (route == '/contact' && ' active' || '')}>
                        Contact
                    </span>
                </Link>
                <Link href="/videos">
                    <span className={styles.norse + (route == '/videos' && ' active' || '')}>
                        Videos
                    </span>
                </Link>
                <Link href="/wall-of-fame">
                    <span className={styles.norse + (route == '/wall-of-fame' && ' active' || '')}>
                        Wall of Fame
                    </span>
                </Link>
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