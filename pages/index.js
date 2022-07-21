import Head from 'next/head'
import NormalLayout from '../components/NormalLayout'

export default function Home ({ viewport }) {
  console.log(viewport);
  return (
    <NormalLayout viewport={viewport}>
    </NormalLayout>
  )
}
