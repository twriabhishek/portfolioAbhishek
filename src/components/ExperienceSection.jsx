import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const experiences = [
  {
    title: "Software Engineer",
    company: "Exato.AI",
    period: "June 2023 - Present",
    description: [
      "Developed and maintained robust, well-tested code for diverse projects, utilizing HTML, CSS, JavaScript, React, and Bootstrap for frontend development.",
      "Collaborated with team members to identify and resolve bugs while creating APIs and managing backend tasks using Node.js, MySQL and MongodB",
      "Proficient in Structured Query Language (SQL) with hands-on experience in database management and optimization.",
    ],
  },
  {
    title: "Software Engineer",
    company: "SRDT PRIVATE LIMITED",
    period: "October 2022 - May 2023",
    description: [
      "Envolved in Design, Development, Unit testing, Enhancement of ERP solution and also creating Reports as per business requirement of client in Bi publisher.",
      "Wrote queries to extract precise data from the Oracle Database So that I have a Good knowledge of Oracle sql, Key concept of DDL command, DML command, DQL command and DBMS.",
      "I have also worked on live project.",
    ],
  },
  {
    title: "Software Intern",
    company: "SOFTPRO INDIA PVT. LTD.",
    period: "July 2019 - – August 2019",
    description: [
      "Researched software solutions, tools and languages and applied informed results in selecting and using utilities to support product development.",
      "Worked with technologies like HTML, CSS, JavaScript, React.js, Node.js, MySQL, and MongoDB.During the SummerInternship I worked on backend using server-side scripting language PHP which was quite challenging. I got to learn a lot during the internship.",
      "Offered training to end-users on new or updated technologies and created reference materials and guidelines for everyday operations and troubleshooting tasks.",
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
