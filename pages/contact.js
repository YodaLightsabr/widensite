import NormalLayout from "../components/NormalLayout"
import ContactCopy from "../copy/Contact.mdx"

export default function Contact ({ viewport }) {
    return (
        <NormalLayout viewport={viewport}>
            <Head>
                <title>Contact Jesper Widén</title>
            </Head>
            <center>
                <ContactCopy />
            </center>
        </NormalLayout>
    )
}