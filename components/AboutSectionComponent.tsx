import Image from "next/image";

export default function AboutSection() {
    return <section id='about'>
        <div className='about-item intro-paragraph'>
            <h2 className='light'>Hey, I’m Alex. </h2>
            <p className='light'>I’m a full stack developer with a focus on front-end. I have an eye for design and enjoy creating visually appealing websites. I’ve studied to become a web developer for the past 2 years. And additionally, I have 6 years of experience creating graphics and layouts with the Adobe Suite. I’m passionate about development and I love to learn.</p>
        </div>
        <div className='about-item image-wrapper'>
            <Image src="/images/portrait.jpg" alt="Picture of Me" loading='lazy' width={300} height={300}/>
        </div>
    </section>
}