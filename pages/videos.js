import Head from 'next/head'
import NormalLayout from '../components/NormalLayout'
import VideosCopy from '../copy/Videos.mdx'

export default function About ({ viewport }) {
  console.log(viewport);
  return (
    <NormalLayout viewport={viewport}>
        <div style={viewport.styler.initial({
            display: 'grid',
            gridTemplateColumns: '1fr',
            boxSizing: 'border-box'
        }).md({
            display: 'grid',
            gridTemplateColumns: '1fr min(100%, 600px)',
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
                        <VideosCopy />
                    </center>
                </div>
            </div>
            <div style={{
                margin: '1rem',
                boxSizing: 'border-box',
            }}>
                <center style={{ boxSizing: 'border-box', width: '100%' }}>
                    <iframe src="https://drive.google.com/file/d/1ACLSbdDY5IGjyMPEyL_V_u4tarXNiSl-/preview" style={{ boxSizing: 'border-box', float: 'right', width: '100%', textAlign: 'center', border: '2px solid #1e2117', margin: '0px auto', aspectRatio: '16 / 9' }}></iframe>
                </center>
                <center style={{ boxSizing: 'border-box', width: '100%' }}>
                    <iframe src="https://drive.google.com/file/d/1q0wrcg1vxF_BmscmreNIh5Ho-3_RPC51/preview" style={{ marginTop: '1rem', boxSizing: 'border-box', float: 'right', width: '100%', textAlign: 'center', border: '2px solid #1e2117', margin: '0px auto', aspectRatio: '16 / 9' }}></iframe>
                </center>
            </div>
        </div>
    </NormalLayout>
  )
}
