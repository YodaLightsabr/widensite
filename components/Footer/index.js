import styles from './Footer.module.css'

export default function Footer ({ children, style }) {
    return (
        <div style={Object.assign({
            textAlign: 'center'
        }, style)}>
            {children}
        </div>
    );
}