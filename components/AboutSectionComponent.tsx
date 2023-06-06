import Image from "next/image";

export default function AboutSection() {
    return <section id='about'>
        <div className='about-item intro-paragraph'>
            <h2 className='light'>Hey, I’m Alex. </h2>
            <p className='light'>I'm a front-end focused full stack developer with 2 years of dedicated study in web development. I'm passionate about learning and creating visually appealing sites and apps.</p>
        </div>
        <div className='about-item image-wrapper'>
            <Image src="/images/portrait.jpg" alt="Picture of Me" loading='lazy' width={250} height={250}/>
        </div>
    </section>
}