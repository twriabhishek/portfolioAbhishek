import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { SectionHeader } from "./SectionHeader";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Java (Novice)", "Python (Novice)"],
  },
  {
    name: "Frontend",
    skills: ["HTML5", "CSS", "JavaScript", "React.js", "Bootstrap", "Redux"],
  },
  {
    name: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Nest.js",
      "SQL",
      "MongoDB",
      "Oracle SQL",
      "Microservices",
      "GRPC",
    ],
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "Postman", "Agile Development", "AWS", "Agile Methodology", "AI"],
  },
  {
    name: "Telephony & Real-Time Communication",
    skills: [
      "VoIP",
      "SIP",
      "WebRTC",
      "Real-Time Communication",
      "Call Routing & IVR",
      "Voice APIs / CPaaS",
      "WebSockets",
      "Audio Streaming",
    ],
  },
  {
    name: "Other Core Knowledge",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "Design Patterns",
      "Problem Solving",
      "Software Development Life Cycle (SDLC)",
      "Agile Methodology",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Skills"
            title="Skills & Expertise"
            description="Technologies across full-stack development, ERP, and telephony product engineering"
          />
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="card-elevated p-6"
            >
              <h3 className="text-base font-semibold text-foreground">
                {category.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-md border border-border/60 bg-background px-2.5 py-1 text-xs font-medium text-foreground/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
