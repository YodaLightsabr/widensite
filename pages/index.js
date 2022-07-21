import Head from 'next/head'
import NormalLayout from '../components/NormalLayout'
import Contact from '../components/contact'

export default function Home ({ viewport }) {
  console.log(viewport);
  return (
    <NormalLayout viewport={viewport}>
    </NormalLayout>
  )
}
