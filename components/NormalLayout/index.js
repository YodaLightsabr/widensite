import Nav from '../Nav';
import Footer from '../Footer';

export default function NormalLayout ({ children, viewport }) {
    return (
        <>
            <Nav collapsed={viewport?.width < 800} />
            {children}
            <Footer>
                <p>Represented by John Rudolph of Dystel, Goderich & Bourret LLC</p>
            </Footer>
        </>
    )
}