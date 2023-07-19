// import images
import Hero_person from "./assets/images/Hero/person.png";
import resume from "./assets/Arif CV.pdf";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img2.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: `HR Manager`,
    firstName: "Syed Muhammad",
    LastName: "Arif Ullah",
    btnText: "Hire Me",
    btnDownload: "Download CV",
    image: Hero_person,
    resumeDownload: resume,

    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Finance Accounting Manager",
      },
      {
        count: "3+",
        text: "Google Certificates",
      },
      // {
      //   count: "20+",
      //   text: "Projects Worked in my career",
      // },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Finance Manager",
        para: " Expert in financial planning, analysis, and management.",
        skillDetail: [
          "Expertise in financial planning, analysis, and management",
          "Experienced in budgeting, forecasting, and financial reporting",
          "Skilled in risk management and identifying financial opportunities",
          "Strong analytical skills to interpret complex financial data",
          "Ability to make informed decisions to optimize profitability",
          "Track record of implementing cost-saving measures and improving efficiency",
          "Dedicated to driving financial growth and ensuring fiscal stability",
        ],
        logo: reactjs,
      },
      {
        name: "HR Services",
        para: "Lorem ipsum text  dummy",
        skillDetail: [
          "Skilled in risk management and identifying financial opportunities",
          "Strong analytical skills to interpret complex financial data",
          "Ability to make informed decisions to optimize profitability",
          "Track record of implementing cost-saving measures and improving efficiency",
          "Dedicated to driving financial growth and ensuring fiscal stability",
        ],
        logo: sketch,
      },
      {
        name: "Administration",
        para: "Lorem ipsum text  dummy",
        skillDetail: [
          "Experienced in budgeting, forecasting, and financial reporting",
          "Skilled in risk management and identifying financial opportunities",
          "Strong analytical skills to interpret complex financial data",
          "Ability to make informed decisions to optimize profitability",
          "Track record of implementing cost-saving measures and improving efficiency",
        ],
        logo: python,
      },
      {
        name: "Financial Analyst",
        para: "Lorem ipsum text  dummy",
        skillDetail: [
          "Strong analytical skills to interpret complex financial data",
          "Ability to make informed decisions to optimize profitability",
          "Track record of implementing cost-saving measures and improving efficiency",
          "Dedicated to driving financial growth and ensuring fiscal stability",
        ],
        logo: python,
      },
      {
        name: "Digital Accounts",
        para: "Lorem ipsum text  dummy",
        skillDetail: [
          "Expertise in financial planning, analysis, and management",
          "Experienced in budgeting, forecasting, and financial reporting",
          "Ability to make informed decisions to optimize profitability",
          "Track record of implementing cost-saving measures and improving efficiency",
          "Dedicated to driving financial growth and ensuring fiscal stability",
        ],
        logo: python,
      },
      {
        name: "Quick Books",
        para: "Lorem ipsum text  dummy",
        skillDetail: [
          "Expertise in financial planning, analysis, and management",
          "Experienced in budgeting, forecasting, and financial reporting",
          "Skilled in risk management and identifying financial opportunities",
          "Strong analytical skills to interpret complex financial data",
        ],
        logo: python,
      },
      {
        name: "Telly Account",
        para: "Lorem ipsum text  dummy",
        skillDetail: [
          "Expertise in financial planning, analysis, and management",
          "Experienced in budgeting, forecasting, and financial reporting",
          "Skilled in risk management and identifying financial opportunities",
          "Strong analytical skills to interpret complex financial data",
          "Dedicated to driving financial growth and ensuring fiscal stability",
        ],
        logo: python,
      },
      {
        name: "Medical Billing",
        para: "Lorem ipsum text  dummy",
        skillDetail: [
          "Expertise in financial planning, analysis, and management",
          "Experienced in budgeting, forecasting, and financial reporting",
          "Track record of implementing cost-saving measures and improving efficiency",
          "Dedicated to driving financial growth and ensuring fiscal stability",
        ],
        logo: figma,
      },
      {
        name: "Hospitality Management",
        para: "Lorem ipsum text  dummy",
        skillDetail: [
          "Strong analytical skills to interpret complex financial data",
          "Ability to make informed decisions to optimize profitability",
          "Track record of implementing cost-saving measures and improving efficiency",
          "Dedicated to driving financial growth and ensuring fiscal stability",
        ],
        logo: nodejs,
      },
      {
        name: "Microsoft Access",
        para: "Lorem ipsum text  dummy",
        skillDetail: [
          "Expertise in financial planning, analysis, and management",
          "Experienced in budgeting, forecasting, and financial reporting",
          "Skilled in risk management and identifying financial opportunities",
          "Strong analytical skills to interpret complex financial data",
          "Ability to make informed decisions to optimize profitability",
        ],
        logo: ps,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "WHAT I HAVE DONE SO FAR",
    subtitle: "Work Experience.",
    service_content: [
      {
        title: "Finance Accounting Manager",
        company: "Relymer Group",
        date: "(01/2022 - Present)",
        para: `Finance managers are responsible for the overall financial health of an
        organization. Working in many different industries, they produce financial
        reports, direct investment activities, and develop strategies and plans for the
        long-term financial goals of their organization`,
        logo: services_logo1,
      },
      {
        title: "Finance Accounting Manager",
        company: "Virtual City",
        date: "(03/2022 - Present)",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "Finance Accounting Manager",
        company: "Printage Education",
        date: "(03/2022 - Present)",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      {
        title: "Finance Accounting Manager",
        company: "FWO",
        date: "(05/2019 - 09/2021)",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      {
        title: "Finance Accounting Manager",
        company: "MTBC",
        date: "(02/2017 - 04/2019)",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      {
        title: "Finance Accounting Manager",
        company: "ZF",
        date: "(08/2014 - 12/2016)",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
      {
        title: "Finance Accounting Manager",
        company: "Khushali Bank",
        date: "(072014 - 01/2014)",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Certifications",
    subtitle: "MY Acheviements",
    image: person_project,
    project_content: [
      {
        title: "Fundamental of Digital Marketing",
        image: project1,
        para:"Completed Google Digital Garage's Fundamental of Digital Marketing certificate, covering SEO, PPC, social media marketing, email marketing, and more. Acquired practical skills in optimizing websites, running online campaigns, and leveraging social media platforms. Demonstrates a commitment to expanding digital marketing knowledge and applying effective strategies.",
      },
      {
        title: "Google.com",
        image: project2,
        para:"Google.com is a widely recognized and popular search engine and technology company. It provides a variety of services and products, including web search, online advertising technologies, cloud computing, productivity tools, and more. Google.com serves as a gateway to access information, connect with people, and discover a wide range of resources available on the internet.",
      },
      
      {
        title: "Google Ads Measurement",
        image: project3,
        para:"Google Ads Measurement involves analyzing and evaluating the performance of advertising campaigns on Google Ads. It provides data-driven insights on conversions, KPIs, and user behavior. Helps optimize advertising strategies for better campaign results.",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "Shah Faisal",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Kamran",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Hamza",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "A versatile professional skilled in Finance Management, HR Services, Administration, Financial Analysis, Digital Accounts, QuickBooks, and Tally Accounting. Hire me to drive success and efficiency in your business.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "arifktk89@gmail.com",
        icon: GrMail,
        link: "mailto:arifktk89@gmail.com",
      },
      {
        text: "+923419283482",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "ArifUllah",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
      {
        text: "ArifUllah",
        icon: BsLinkedin,
        link: "www.linkedin.com/in/syedmuhammad-arif-ullah-b9306562",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
