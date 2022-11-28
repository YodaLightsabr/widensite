import NormalLayout from "../components/NormalLayout"
import ContactCopy from "../copy/Contact.mdx"

export default function Contact ({ viewport }) {
    return (
        <NormalLayout viewport={viewport}>
            <center>
                <ContactCopy />
            </center>
        </NormalLayout>
    )
}