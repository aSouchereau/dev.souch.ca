import ContactForm from "@/components/ContactFormComponent";
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

export default function ContactSection() {
    return <section id='contact'>
        <h2>Get In Touch</h2>
        <div className='contact-content'>
            <div className='contact-item'>
                <ContactForm></ContactForm>
            </div>
            <div className='contact-item personal-info'>
                <h3>Contact</h3>
                <ul className='contact-list'>
                    <li><a href="mailto:alex@souch.ca"><EnvelopeSimple size={16} weight="bold" className='contact-icon' />alex@souch.ca</a></li>
                    <li><a href="https://linkedin.com/in/alex-souchereau-419132253" target="_blank"><LinkedinLogo size={16} weight="bold" className='contact-icon' />LinkedIn</a></li>
                    <li><a href='https://github.com/aSouchereau' target="_blank"><GithubLogo size={16} weight="bold" className='contact-icon' />Github</a></li>
                </ul>
            </div>
        </div>

    </section>
}