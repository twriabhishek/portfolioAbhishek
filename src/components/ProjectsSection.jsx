import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { GithubIcon, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    title: "Cloud Telephony & IVR Automation Platform",
    description:
      "A cloud telephony platform designed for IVR automation, outbound campaigns, call routing, voicemail management, and real-time call monitoring. Built using Asterisk ARI, NestJS, Kafka, and Redis, the platform enables dynamic call-flow execution, Text-to-Speech (TTS) integration, call recording, and event-driven analytics. It also includes a visual IVR Flow Builder that allows users to design and manage call workflows without coding.",
    technologies: [
      "Asterisk ARI",
      "NestJS",
      "TypeScript",
      "Kafka",
      "Redis",
      "MongoDB",
      "gRPC",
      "React.js",
      "Next.js"
    ],
    image: "/images/cloud-telephony.png",
  },
  {
    title: "JAMMU AND KASHMIR BANK",
    description:
      "Designed and implemented an automated approval workflow, streamlining processes and significantly reducing manual effort. Optimized complex SQL queries and refactored redundant database operations, accelerating data retrieval and boosting system performance. Enhanced security by implementing role-based access control with granular permission levels, ensuring secure and efficient access management.",
    technologies: ["Oracle sql", "ERP", "Fluid Pages"],
    image: "/images/jkBank.png",
  },
  {
    title: "Blogging Application",
    description:
      "Implemented secure user authentication with email verification and OTP-based login, strengthening access control. Developed a dynamic content management system with validation, role-based access, interactive comments, and likes to enhance user engagement. Optimized server-side rendering with EJS, significantly improving page load speed, SEO, and overall performance efficiency.",
    technologies: ["NodeJs", "Express", "Bootstrap", "EJS"],
    image: "/images/BlogingApp.png",
    githubUrl:
      "https://github.com/twriabhishek/nodeJSComplete/tree/master/22_utubeBlog",
  },
  {
    title: "E-commerce Store",
    description:
      "In this application, the main focus has been on manipulating the state using the Connect API. There are various functionalities such as product description, adding a product, remove product from wishlist, updating wishlist, etc.",
    technologies: ["React", "UseContext", "Api", "Bootstrap"],
    image: "/images/Ecommerce.png",
    githubUrl: "https://github.com/twriabhishek/Ecommerce",
  },
  {
    title: "Chat Application",
    description:
      "In this application, a user can enter a chat room by providing their username. Once inside the chat room, they can engage in conversation with all other participants present in the chat. Multiple users can join the chat room simultaneously, allowing for group discussions.",
    technologies: ["NodeJs", "EJS", "Bootstrap", "Websocket"],
    image: "/images/chatRoom.png",
    githubUrl:
      "https://github.com/twriabhishek/nodeJSComplete/tree/master/23_websocket",
  },
  {
    title: "Weather Dashboard",
    description:
      "A modern, interactive weather dashboard built with Next.js that provides real-time weather information for any city worldwide. The application features a beautiful, dynamic UI that changes based on current weather conditions. Users can search for any city, and the dashboard will display the current weather, and additional details such as humidity and wind speed. The app is fully responsive and works seamlessly on both desktop and mobile devices.",
    technologies: [
      "Next js",
      "TypeScript",
      "Tailwind CSS",
      "OpenWeatherMap API",
      "Framer Motion",
    ],
    image: "/images/weather.png",
    githubUrl: "https://github.com/twriabhishek/Weather-Dashboard",
  },
  {
    title: "Enterprise Resource Planning (ERP) — Exato",
    description:
      "Developed user management, attendance, leave, and expense tracking modules with a dynamic approval system, role-based permissions, real-time employee location tracking via Google Maps API, and automated financial report generation with data validation, improving workflow efficiency and accuracy.",
    technologies: ["React.js", "Redux", "Google Maps API", "Bootstrap"],
    image: "/images/exatoErp.png",
    githubUrl: "https://github.com/twriabhishek/Exato_ERP_Complete",
  },
  {
    title: "AI Text Summarizer",
    description:
      "AI Text Summarizer is a web-based application that leverages Next.js, Tailwind CSS, and OpenAI GPT to generate concise summaries of input text. Users can enter text, upload files, and customize summary lengths to get AI-generated summaries in multiple languages. The app features a user-friendly interface, responsive design, and real-time feedback. It is built with Next.js for server-side rendering and optimized performance, while Tailwind CSS ensures a modern and visually appealing layout.",
    technologies: ["Next.js", "Tailwind CSS", "OpenAI GPT"],
    image: "/images/textSummarize.png",
    githubUrl: "https://github.com/twriabhishek/text-Summrizer",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Projects"
            title="Featured Projects"
            description="Selected work that demonstrates my technical skills and real-world impact"
          />
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="group card-elevated flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed prose-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-md border border-border/60 bg-background px-2 py-0.5 text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-5 border-t border-border pt-5">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon />
                      View Code
                      <ExternalLink className="opacity-60" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
