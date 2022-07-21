import Nav from '../Nav';
import Hero from '../Hero'

export default function NormalLayout ({ children, viewport }) {
    return (
        <>
            <Nav collapsed={viewport.width < 800} />
            <Hero viewport={viewport} />
            {children}
        </>
    )
}