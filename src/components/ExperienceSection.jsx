import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const experiences = [
  {
    title: "Full Stack Developer (MERN)",
    company: "Exato.AI",
    period: "June 2023 — Present",
    description: [
      "Engineered scalable frontend applications using React.js, Next.js, TypeScript, and Redux, delivering responsive user experiences for enterprise and cloud telephony platforms. Optimized application performance through efficient state management, lazy loading, code splitting, and reusable component architecture.",
      "Designed and developed robust backend services and REST APIs using Node.js, NestJS, and Express.js. Built scalable microservices, integrated third-party services, and implemented secure, high-performance APIs to support business-critical workflows and real-time applications.",
      "Developed event-driven and real-time systems using Kafka, Redis, WebSockets, and Server-Sent Events (SSE), enabling live monitoring, asynchronous processing, and seamless communication across distributed services.",
      "Built and maintained cloud telephony features including IVR workflows, call-flow automation, outbound campaign management, call recording infrastructure, and real-time call monitoring using Asterisk ARI and modern backend technologies.",
      "Optimized MongoDB and MySQL databases through efficient schema design, indexing strategies, query optimization, and caching mechanisms, improving application performance, scalability, and reliability under high-load environments."
    ],
  },
  {
    title: "Software Engineer",
    company: "SRDT PRIVATE LIMITED",
    period: "October 2022 — May 2023",
    description: [
      "Designed and developed ERP solutions using SQL and BI Publisher to streamline automation processes and enhance data reporting. Optimized database queries and report generation for improved efficiency and accuracy. These enhancements reduced manual workload and improved overall business operations.",
      "Engineered optimized SQL queries and indexing strategies to enhance database performance and query execution speed. Improved data retrieval efficiency for large datasets, significantly reducing latency. These optimizations boosted system scalability and ensured seamless data processing.",
      "Architected workflow enhancements for live projects by optimizing SQL processes and streamlining data operations. Improved query efficiency and database performance, reducing response times. These optimizations enhanced system reliability and improved overall customer experience.",
    ],
  },
  {
    title: "Software Intern",
    company: "SOFTPRO INDIA PVT. LTD.",
    period: "July 2019 — August 2019",
    description: [
      "Researched and integrated new software tools and frameworks to enhance development efficiency and scalability. Evaluated emerging technologies to optimize workflows and streamline system architecture. These integrations improved performance, reduced technical debt, and accelerated project delivery.",
      "Developed secure backend solutions using PHP and MySQL, implementing best practices for data protection and performance optimization. Optimized database queries and indexing strategies to enhance efficiency and reduce latency. These improvements strengthened system security, scalability, and overall reliability.",
      "Collaborated with the team to debug and enhance existing applications, identifying and resolving critical issues. Optimized code performance and implemented improvements to ensure smooth functionality. These efforts enhanced application stability, user experience, and overall system reliability.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Experience"
            title="Professional Experience"
            description="My journey in the tech industry so far"
          />
        </motion.div>

        <div className="relative mt-14">
          <div
            className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:left-[11px] sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative sm:pl-10"
              >
                <div className="absolute left-0 top-6 hidden h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-background bg-accent shadow-sm sm:flex">
                  <Briefcase className="h-3 w-3 text-accent-foreground" />
                </div>

                <div className="card-elevated p-6 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                        {exp.title}
                      </h3>
                      <p className="mt-1 font-medium text-accent">{exp.company}</p>
                    </div>
                    <time className="shrink-0 text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </time>
                  </div>

                  <ul className="mt-5 space-y-3 border-t border-border pt-5">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
