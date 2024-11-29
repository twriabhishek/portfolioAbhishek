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
      "Led the development of dynamic, fully functional pages and designed an efficient approval process, streamlining workflows to align with business objectives. Additionally, optimized database design and queries, ensuring seamless integration and enhanced project efficiency.",
    technologies: ["Oracle sql", "ERP", "Fluid Pages"],
    image: "/images/jkBank.png",
    githubUrl: "https://github.com",
  },
  {
    title: "Blogging Application",
    description:
      "I have built a complete server-side rendered application using Node.js, Express, and EJS. I have implemented various functionalities such as register, login, comment, like, add blog, update blog, delete blog, etc.",
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
