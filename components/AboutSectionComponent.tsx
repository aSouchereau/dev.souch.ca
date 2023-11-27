import Image from "next/image";

export default function AboutSection() {
    return <section id='about'>
        <div className='about-item intro-paragraph'>
            <h2 className='light'>Hey, I’m Alex. </h2>
            <p className='light'>I'm a Full Stack Web Developer, trying to enter the industry. I’m excited to gain valuable experience and find my specialty. I find joy in every step of the development process, from designing user interfaces, to planning and problem-solving, or implementing functionality.</p>
        </div>
        <div className='about-item image-wrapper'>
            <Image src="/images/portrait.jpg" alt="Picture of Me" loading='lazy' width={250} height={250}/>
        </div>
    </section>
}