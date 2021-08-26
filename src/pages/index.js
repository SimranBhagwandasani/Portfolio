import React, {useState} from 'react'
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import AchievementsSection from "../components/AchievementsSection";
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/Footer';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/> 
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ExperienceSection/>
            <AchievementsSection/>
            <ContactSection/>
            <FooterSection/>
        </>
    )
}

export default Home
