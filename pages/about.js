import Head from 'next/head'
import NormalLayout from '../components/NormalLayout'
import AboutCopy from '../copy/About.mdx'

export default function About ({ viewport, a, b }) {
  return (
    <NormalLayout viewport={viewport}>
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
                        <AboutCopy />
                    </center>
                </div>
            </div>
            <div style={{
                margin: '1rem',
                boxSizing: 'border-box',
            }}>
                <center style={{ boxSizing: 'border-box', width: '100%' }}>
                    <img src="/assets/headshot.jpg" style={{ boxSizing: 'border-box', float: 'right', width: '100%', maxWidth: '400px', textAlign: 'center', border: '2px solid #1e2117', margin: '0px auto' }} />
                </center>
            </div>
        </div>
        <center>
            <div style={{ maxWidth: '800px', width: '100%' }}>
                <img src="/assets/hiking.jpg" style={{ boxSizing: 'border-box', border: '2px solid #1e2117', width: '100%' }} />
                <p style={{ marginTop: '-6px', fontSize: '20px' }}>"The <em style={{
                    display: 'inline-block',
                    transform: 'translateX(-2px)'
                }}>Trail</em> Goes Ever On..."</p>
            </div>
        </center>
    </NormalLayout>
  )
}