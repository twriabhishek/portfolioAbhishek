import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const educations = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "DR. RMLAU UNIVERSITY AYODHYA",
    period: "2018 — 2022",
    description:
      "Gained a strong foundation in core computer science subjects and practical experience in software development, web technologies, and database management.",
  },
  {
    degree: "Intermediate in Physics, Chemistry and Mathematics",
    institution: "MRLB INTER COLLEGE",
    period: "2015 — 2017",
    description:
      "Developed a strong analytical and problem-solving foundation, excelling in mathematics and science subjects.",
  },
  {
    degree: "High School in Mathematics",
    institution: "MRLB INTER COLLEGE",
    period: "2014 — 2015",
    description:
      "Built a solid foundation in mathematics and science, fostering critical thinking and a passion for problem-solving.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="section-padding section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Education"
            title="Academic Background"
            description="My academic background and qualifications"
          />
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {educations.map((edu, index) => (
            <motion.article
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card-elevated flex h-full flex-col p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">
                {edu.degree}
              </h3>
              <p className="mt-2 font-medium text-accent">{edu.institution}</p>
              <time className="mt-1 text-sm text-muted-foreground">{edu.period}</time>
              <p className="mt-4 flex-1 text-sm leading-relaxed prose-muted">
                {edu.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
