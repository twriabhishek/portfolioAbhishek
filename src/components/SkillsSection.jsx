import React from 'react'
import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const skillCategories = [
  {
    name: "Frontend",
    skills: ["HTML5", "CSS", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MySQL","Oracle SQL"],
  },
  {
    name: "Other Core Knowledge",
    skills: ["Git", "AWS", "SDLC", "Data Structures", "Algorithms", "Postman", "AI Tools"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are the technologies and tools I work with
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}