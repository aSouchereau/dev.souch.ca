export default function ContactSection() {
    return <section id='contact'>
        <h2>Get In Touch</h2>
        <div className='contact-content'>
            <div className='contact-item'>
                <form action="mailto:alex@souch.ca?subject=Portfolio Inquiry" method="post" encType='text/plain'>
                    <label htmlFor="email_address">Email</label>
                    <input type="text" name='email_address' id='email_address' maxLength='100' placeholder='Email'/>
                    <label htmlFor="message">Message</label>
                    <textarea name='message' id='message' rows='8' cols='30' maxLength='300' placeholder='Type your message...'/>
                    <input className='input-button' type="submit" value='Send'/>
                </form>
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