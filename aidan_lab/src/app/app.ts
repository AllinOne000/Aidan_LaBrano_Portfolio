import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  college: string;
  graduationDate: string;
  gpa: string;
  coursework: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  current: boolean;
  responsibilities: string[];
}

interface EssentialSkill {
  name: string;
  level: number;
}

interface TechnicalSkills {
  languages: string[];
  frameworks: string[];
  operatingsys: string[];
  tools: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Personal Information
  name: string = 'Aidan LaBrano';
  jobTitle: string = 'Current Student at LSU';
  location: string = 'Marrero, Louisiana';
  email: string = 'aidanlouis10@gmail.com';
  profileImage: string = 'assets/aidan.jpg';
  
  // Social Media Links
  githubUrl: string = 'https://github.com/AllinOne000';
  linkedinUrl: string = 'https://www.linkedin.com/in/aidan-labrano-33732a383';
  resumeUrl: string = 'assets/myresume.pdf';
  
  // Summary
  summary: string = `Current student at Louisiana State University majoring in Computer Science with a concentration in Cybersecurity. 
Looking to gain more experience in the I.T./cybersecurity industry after a hands-on experience at a summer internship at 
Gulf Coast Bank and Trust. Gaining customer service experience at Rouses Supermarkets to help with professional career. 
Eager to develop more technical and professional skills through further opportunities in the I.T. and cybersecurity 
industry.`;
  
  // Education
  education: Education[] = [
    {
      degree: 'Bachelor of Science, Computer Science - Cybersecurity',
      institution: 'Louisiana State University (LSU), Baton Rouge, LA',
      college: 'College of Engineering',
      graduationDate: 'May 2026',
      gpa: '3.87',
      coursework: 'Relevant Coursework: Computer Networks, Intro to Systems Programming, Programming Languages, Operating Systems, Software Systems, Software Vulnerabilities, Artificial Intelligence, Mobile Security and Applied Cryptography, Malware Analysis and Reverse Engineering'
    }
  ];
  
  // Experience
  experience: Experience[] = [
    {
      title: 'Cashier',
      company: 'Rouses Supermarkets, Marrero and Baton Rouge, LA',
      period: 'June 2025 - Present',
      current: true,
      responsibilities: [
        'Operating cash registers and accurately processing payments, returns, and exchanges.',
        'Performing opening and closing procedures, such as counting cash register, restocking, and cleaning.',
        'Developing strong customer service experience by providing efficient and accurate service.',
        'Utilizing problem solving skills to effectively handle difficult situations.'
      ]
    },
    {
      title: 'I.T. Intern',
      company: 'Gulf Coast Bank and Trust, Metairie, LA',
      period: 'May 2024 - July 2024',
      current: false,
      responsibilities: [
        'Created phishing emails to be used for company internet safety training.',
        'Documented and organized key information for company equipment, such as printers and Bluetooth connections.',
        'Organized data to help track current companies and assets used for cybersecurity purposes.'
      ]
    },
    {
      title: 'Camp Counselor',
      company: 'Immaculate Conception School, Marrero, LA',
      period: 'June 2023 - July 2023',
      current: false,
      responsibilities: [
        'Supervised campers during daily activities and ensured their safety.',
        'Planned and executed engaging games, crafts, and projects for campers.'
      ]
    }
  ];
  
  // Essential Skills
  essentialSkills: EssentialSkill[] = [
    { name: 'Organizational Skills', level: 100 },
    { name: 'Critical Thinking Capacity', level: 100 },
     { name: 'Time Management', level: 95},
    { name: 'Computer Proficiency', level: 95},
    { name: 'Strong Communication Skills', level: 90 },
    { name: 'Customer Service Experience', level: 85 },
  ];
  
  // Technical Skills
  technicalSkills: TechnicalSkills = {
    languages: ['TypeScript', 'JavaScript', 'Python', 'Java', 'HTML', 'CSS', 'C#', 'C', 'SQL'],
    frameworks: ['Angular', 'Node.js'],
    operatingsys: ['Kali Linux, Windows'],
    tools: ['Git', 'GitHub', 'VS Code', 'Jira', 'PowerPoint', 'SQL Server Management 21', 'Unity', 'VMWare', 'Discord']
  };
  
  // Projects
  projects: Project[] = [
    {
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with Angular, Node.js, and MongoDB featuring user authentication, product management, and payment integration.',
      technologies: ['Angular', 'Node.js'],
      url: '#'
    },
  ];
}