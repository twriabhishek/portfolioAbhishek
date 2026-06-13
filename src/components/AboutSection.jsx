import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FileText, Code2, Database, Layers } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const focusAreas = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Building modern, responsive, and user-friendly applications using React.js, Next.js, TypeScript, Redux",
  },
  {
    icon: Database,
    title: "Backend & Distributed Systems",
    description: "Designing scalable microservices, REST APIs, event-driven architectures, and real-time communication systems using NestJS, Kafka, Redis, gRPC, MongoDB, and MySQL.",
  },
  {
    icon: Layers,
    title: "Cloud Telephony & CPaaS",
    description: "Developing IVR workflows, call-flow engines, real-time TTS systems, outbound dialing solutions, call recording infrastructure, and live call monitoring platforms using Asterisk ARI.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="About"
            title="Building Scalable Software & Cloud Telephony Solutions"
            description="I am a dedicated Software Engineer with a strong foundation in Computer Science and a passion for creating scalable and efficient web applications."
          />
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            viewport={{ once: true }}
            className="space-y-5 prose-muted text-base sm:text-lg"
          >
            <p>
              My expertise spans the full software development lifecycle, from building intuitive frontend experiences with React and Next.js to developing high-performance backend services using NestJS, TypeScript, Kafka, Redis, and MongoDB
            </p>
            <p>
              I enjoy solving complex engineering challenges, designing reliable architectures, and building products that deliver real business impact. I am passionate about continuous learning and leveraging modern technologies to create scalable, maintainable, and high-performing software solutions.
            </p>
            <Button asChild className="mt-2">
              <a
                href="https://drive.google.com/file/d/1Ga8HmGqzd7U0clG9XSKU1fl0hGBusbM2/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText />
                View Full Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="card-elevated flex gap-4 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <area.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{area.title}</h3>
                  <p className="mt-1 text-sm prose-muted">{area.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
