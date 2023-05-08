import ContactForm from "@/components/ContactFormComponent";

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
                    <li><a href="mailto:alex@souch.ca">alex@souch.ca</a></li>
                    <li><a href="https://linkedin.com/in/alex-souchereau-419132253">LinkedIn</a></li>
                </ul>
            </div>
        </div>

    </section>
}