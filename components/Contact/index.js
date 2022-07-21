import hCaptcha from '@hcaptcha/react-hcaptcha';

export default function Contct () {
    return (
        <form>
            <input type="text" placeholder="Enter your email!" />
            <hCaptcha sitekey="f4d2c5d6-134d-459a-b8ca-efd674ae5a54" onverify={console.log} />
            <button type="submit">Sign Up!</button>
        </form>
    )
}