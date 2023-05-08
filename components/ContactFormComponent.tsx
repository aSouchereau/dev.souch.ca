import { useForm, ValidationError } from '@formspree/react';
import {X} from "@phosphor-icons/react";
export default function ContactForm() {
    const [state, handleSubmit] = useForm("mwkjyqwk");
    if (state.succeeded) {
        return <>
            <div className='thanks-message'>
                <p>Thanks! I'll get back to you shortly...</p>
                <X size={24} weight="bold" role='button' className='dismiss-button'/>
            </div>
        </>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email address"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder="Your message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <input className='input-button' type="submit" disabled={state.submitting} value='Send'>
            </input>
        </form>
    );
}