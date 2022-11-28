import { BreakpointChain, findBreakpoint } from '../../pages/_app.js';
import { useState, useEffect } from 'react';

export default function Item ({ image, children }) {

    const [viewport, setViewport] = useState({
        styler: new BreakpointChain(0),
        breakpoint: findBreakpoint(0),
        width: 0,
        height: 0
    });

    useEffect(() => {
        const handleResize = () => {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight,
                breakpoint: findBreakpoint(window.innerWidth),
                styler: new BreakpointChain(window.innerWidth)
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <div style={viewport.styler.initial({
                display: 'grid',
                gridTemplateColumns: '1fr',
                boxSizing: 'border-box'
            }).md({
                display: 'grid',
                gridTemplateColumns: '1fr min(100%, 400px)',
                boxSizing: 'border-box'
            }).styles}>
                <div style={viewport.styler.initial({
                    padding: '1rem 1rem 0px 1rem'
                }).md({
                    padding: '1rem 0px 1rem 1rem'
                }).styles}>
                    <div style={{
                        width: '100%',
                        background: 'white',
                        padding: '0.5rem',
                        border: '2px solid #1e2117'
                    }}>
                        <center>
                            {children}
                        </center>
                    </div>
                </div>
                <div style={{
                    margin: '1rem',
                    boxSizing: 'border-box',
                }}>
                    <center style={{ boxSizing: 'border-box', width: '100%' }}>
                        <img src={`/assets/hall-of-fame/${image}`} style={{ boxSizing: 'border-box', float: 'right', width: '100%', maxWidth: '400px', textAlign: 'center', border: '2px solid #1e2117', margin: '0px auto' }} />
                    </center>
                </div>
            </div>
        </>
    );
}