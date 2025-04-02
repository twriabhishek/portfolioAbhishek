import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { GithubIcon, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "JAMMU AND KASHMIR BANK",
    description:
      "Designed and implemented an automated approval workflow, streamlining processes and significantly reducing manual effort. Optimized complex SQL queries and refactored redundant database operations, accelerating data retrieval and boosting system performance. Enhanced security by implementing role-based access control with granular permission levels, ensuring secure and efficient access management.",
    technologies: ["Oracle sql", "ERP", "Fluid Pages"],
    image: "/images/jkBank.png",
    githubUrl: "https://github.com/twriabhishek",
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
    technologies: ["Next js", "TypeScript", "Tailwind CSS", "OpenWeatherMap API", "Framer Motion"],
    image: "/images/weather.png",
    githubUrl:
      "https://github.com/twriabhishek/Weather-Dashboard",
  },
  {
    title: "Enterprise Resource Planning(ERP) Implementation of Exato",
    description:
      "Developed user management, attendance, leave, and expense tracking modules with a dynamic approval system, role-based permissions, real-time employee location tracking via Google Maps API, and automated financial report generation with data validation, improving workflow efficiency and accuracy.",
    technologies: ["React.js", "Redux", "Google Maps API", "Bootstrap"],
    image: "/images/exatoErp.png",
    githubUrl:
      "https://github.com/twriabhishek/Exato_ERP_Complete/tree/main/Exato_ERP_Client",
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some projects that showcase my skills and experience
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <a href={project.githubUrl} target="_blank">
                    <Button size="sm">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
