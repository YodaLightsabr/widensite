import Head from 'next/head'
import NormalLayout from '../components/NormalLayout'

export default function Error404 ({ viewport }) {
  console.log(viewport);
  return (
    <NormalLayout viewport={viewport}>
      <center>
        <h1 style={{
            fontSize: '60px'
        }}>404: Not Found</h1>
        <p><a href="/home">Return Home</a></p>
      </center>
    </NormalLayout>
  )
}
