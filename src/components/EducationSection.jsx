import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const educations = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "DR. RMLAU UNIVERSITY AYODHYA",
    period: "2018 - 2022",
    description: "Gained a strong foundation in core computer science subjects and practical experience in software development, web technologies, and database management."
  },
  {
    degree: "Intermediate in Physics, Chemistry and Mathematics",
    institution: "MRLB INTER COLLEGE",
    period: "2015 - 2017",
    description: "Developed a strong analytical and problem-solving foundation, excelling in mathematics and science subjects."
  },
  {
    degree: "HighSchool in Mathematics",
    institution: "MRLB INTER COLLEGE",
    period: "2014 - 2015",
    description: "Built a solid foundation in mathematics and science, fostering critical thinking and a passion for problem-solving."
  }
]

export function EducationSection() {
  return (
    <section id="education" className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My academic background and qualifications
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <p className="mt-2">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}