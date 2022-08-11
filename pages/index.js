import Head from 'next/head'
import NormalLayout from '../components/NormalLayout'

export default function Home ({ viewport }) {
  console.log(viewport);
  return (
    <NormalLayout viewport={viewport}>
      <center>
        <h1>This site is under construction</h1>
        <p>Please check back later!</p>
      </center>
    </NormalLayout>
  )
}
