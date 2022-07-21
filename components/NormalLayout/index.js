import Nav from '../Nav';

export default function NormalLayout ({ children, viewport }) {
    return (
        <>
            <Nav collapsed={viewport?.width < 800} />
            {children}
        </>
    )
}