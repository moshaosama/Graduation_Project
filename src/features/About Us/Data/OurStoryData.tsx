import { FaRegLightbulb, FaUserGroup } from "react-icons/fa6";
import { LiaHandshake } from "react-icons/lia";

export const OurStoryCardData = [
    {
        id: 1,
        icon: <FaUserGroup className="text-blue-900 text-xl"/>,
        question: "Who",
        title: "We Are?",
        answer: "We are a team of dedicated senior Computer Science students, brought together by a shared goal to create a meaningful, real-world solution that reflects both our technical knowledge and our desire to make a difference. Each member brings a unique skill set to the table, from artificial intelligence and full-stack development to UI/UX design, security, Application development and databases. Together, we are MediPulse, a group committed to blending healthcare with technology."
    }, 
    {
        id: 2,
        icon: <FaRegLightbulb className="text-[yellow] text-xl"/>,
        question: "What",
        title: "Inspired Us?",
        answer: "Throughout our academic journey, we recognized a growing issue in everyday healthcare: many people delay or skip seeking medical advice due to time constraints, fear of cost, or lack of access to nearby facilities. We also noticed that during emergencies or in underserved areas, basic symptoms often go unchecked, leading to more serious complications. Inspired by this real-world problem and the increasing role of technology in healthcare, we envisioned MediPulse as a smart, easy-to-use web platform that enables users to check symptoms, find medical help, and stay informed."
    }, 
    {
        id: 3,
        icon: <LiaHandshake className="text-orange-900 text-xl"/>      ,
        question: "How",
        title: "We Work?",
        answer: "Our collaboration is built on communication, trust, and clear roles. With each teammate assigned to a core domain—like AI modeling, frontend and backend development, security integration, database architecture, and user experience design—we worked in sync to bring MediPulse to life. We held regular meetings, shared progress through GitHub, tested features collectively, and continuously reviewed user feedback to improve the platform.  The project taught us not just technical skills, but how to operate like a real startup team—problem-solving under pressure, learning from each other, and staying focused on a shared purpose."
    }
]