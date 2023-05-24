import Head from 'next/head'
import Image from 'next/image'
import {projects} from "@/utils/projects";
import HeroSection from "@/components/HeroSectionComponent";
import Nav from "@/components/NavComponent";
import AboutSection from "@/components/AboutSectionComponent";
import ProjectSection from "@/components/ProjectSectionComponent";
import Footer from "@/components/FooterComponent";
import ProjectPreviewComponent from "@/components/ProjectPreviewComponent";
import SkillsSection from "@/components/SkillsSectionComponent";
import ContactSection from "@/components/ContactSectionComponent";


export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Souchereau</title>
        <meta name="description" content="Alex Souchereau - Portfolio - Full Stack Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Nav></Nav>
          <HeroSection></HeroSection>
          <AboutSection></AboutSection>
          <SkillsSection></SkillsSection>
          <ProjectSection>
              {
                  projects.map((project) => (
                      <div className='projects-container' key={project.slug}>
                          <ProjectPreviewComponent
                              title={project.title}
                              slug={project.slug}
                              subtitle={project.subtitle}
                              summary={project.summary}
                              images={project.images}
                              tags={project.tags}
                          />
                      </div>
                  ))
              }
          </ProjectSection>
          <ContactSection></ContactSection>
      </main>
      <Footer></Footer>
    </>
  )
}
