import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const experiences = [
  {
    title: "Full Stack Developer(MERN)",
    company: "Exato.AI",
    period: "June 2023 - Present",
    description: [
      "Engineered and optimized React.js components to enhance performance efficiency and reduce page load speed. Implemented techniques like lazy loading, memoization, and code splitting to streamline rendering. These optimizations significantly improved user experience and application responsiveness.",
      "Architected and optimized REST API integrations using Node.js and Express.js to improve system efficiency and scalability. Designed robust endpoints, implemented middleware for security and logging, and optimized database interactions. These enhancements streamlined data flow, reduced latency, and ensured seamless client-server communication.",
      "Developed and implemented Redux for efficient state management, optimizing data flow and minimizing unnecessary re-renders. Structured the Redux store with scalable reducers and middleware to enhance performance. These improvements resulted in a more responsive and maintainable application.",
      "Enhanced MySQL and MongoDB query performance by optimizing indexes, query structures, and caching strategies. Reduced response times through efficient data modeling and query optimization techniques. These improvements significantly boosted database efficiency and application responsiveness."
    ],
  },
  {
    title: "Software Engineer",
    company: "SRDT PRIVATE LIMITED",
    period: "October 2022 - May 2023",
    description: [
      "Designed and developed ERP solutions using SQL and BI Publisher to streamline automation processes and enhance data reporting. Optimized database queries and report generation for improved efficiency and accuracy. These enhancements reduced manual workload and improved overall business operations.",
      "Engineered optimized SQL queries and indexing strategies to enhance database performance and query execution speed. Improved data retrieval efficiency for large datasets, significantly reducing latency. These optimizations boosted system scalability and ensured seamless data processing.",
      "Architected workflow enhancements for live projects by optimizing SQL processes and streamlining data operations. Improved query efficiency and database performance, reducing response times. These optimizations enhanced system reliability and improved overall customer experience.",
    ],
  },
  {
    title: "Software Intern",
    company: "SOFTPRO INDIA PVT. LTD.",
    period: "July 2019 - – August 2019",
    description: [
      "Researched and integrated new software tools and frameworks to enhance development efficiency and scalability. Evaluated emerging technologies to optimize workflows and streamline system architecture. These integrations improved performance, reduced technical debt, and accelerated project delivery.",
      "Developed secure backend solutions using PHP and MySQL, implementing best practices for data protection and performance optimization. Optimized database queries and indexing strategies to enhance efficiency and reduce latency. These improvements strengthened system security, scalability, and overall reliability.",
      "Collaborated with the team to debug and enhance existing applications, identifying and resolving critical issues. Optimized code performance and implemented improvements to ensure smooth functionality. These efforts enhanced application stability, user experience, and overall system reliability.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My journey in the tech industry so far
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <ul className="mt-2 list-disc pl-5">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
