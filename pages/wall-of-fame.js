import WallOfFameComponent from "../components/WallOfFame"
import NormalLayout from "../components/NormalLayout"

export default function WallOfFame ({ viewport }) {
    return (
        <NormalLayout viewport={viewport}>
            <WallOfFameComponent />
        </NormalLayout>
    )
}