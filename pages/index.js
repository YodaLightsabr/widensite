import Head from 'next/head'
import NormalLayout from '../components/NormalLayout'
import HomeCopy from '../copy/Home.mdx'
import AcknowledgementCopy from '../copy/Acknowledgement.mdx'
import Footer from '../components/Footer'

export default function Home ({ viewport }) {
  console.log(viewport);
  return (
    <NormalLayout viewport={viewport}>
      <center>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          color: 'black',
          fontSize: '40px',
          padding: '25px 40px',
          fontWeight: 'bold'
        }} className="norse">
          <div style={{
            textAlign: 'left'
          }}>
            Hiker
          </div>
          <div style={{
            textAlign: 'center'
          }}>
            Writer
          </div>
          <div style={{
            textAlign: 'right'
          }}>
            Swarmer
          </div>
        </div>
        <div style={{
          fontSize: '30px',
          marginTop: '30px'
        }}>
          <div>
            "Writing doesn't lead to good living. Living leads to good writing."
          </div>
          <div style={{
            paddingLeft: '100px'
          }}>
            - Avi
          </div>
        </div>
            {/* <div style={{
              padding: '1rem'
            }}>
              <div style={{
                  width: '100%',
                  background: 'white',
                  padding: '0.5rem',
                  border: '2px solid #1e2117'
              }}>
                <center>
                  <HomeCopy />
                </center>
              </div>
            </div> */}
      </center>
      <Footer>
        <AcknowledgementCopy style={{ fontSize: '18px' }} />
      </Footer>
    </NormalLayout>
  )
}
