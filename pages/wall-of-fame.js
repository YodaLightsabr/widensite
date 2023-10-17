import WallOfFameComponent from "../components/WallOfFame"
import NormalLayout from "../components/NormalLayout"
import Head from "next/head"

export default function WallOfFame ({ viewport }) {
    return (
        <NormalLayout viewport={viewport}>
            <Head>
                <title>Jesper Widén's Wall of Fame</title>
            </Head>
            <WallOfFameComponent />
        </NormalLayout>
    )
}