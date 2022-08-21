import Head from 'next/head'
import NormalLayout from '../components/NormalLayout'
import AboutCopy from '../copy/About.mdx'

export default function About ({ viewport }) {
  console.log(viewport);
  return (
    <NormalLayout viewport={viewport}>
        <div style={viewport.styler.initial({
            display: 'grid',
            gridTemplateColumns: '1fr',
        }).md({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        }).styles}>
            <div style={{
                padding: '1rem'
            }}>
                <center>
                    <AboutCopy />
                </center>
            </div>
            <div style={{
                padding: '1rem'
            }}>
                <img src="/headshot.jpg" style={{ float: 'right', maxWidth: '400px' }} />
            </div>
        </div>
    </NormalLayout>
  )
}
