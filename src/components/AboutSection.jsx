import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            I am a dedicated Software Engineer with a strong foundation in
            Computer Science and a passion for creating scalable and efficient
            web applications. My journey into software development began with a
            fascination for solving problems, driving me to master both frontend
            and backend technologies.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Committed to continuous learning, I stay at the forefront of
            emerging trends to deliver innovative, user-focused solutions. With
            expertise in React.js, Node.js, and databases, I specialize in
            building responsive, high-quality applications that meet dynamic
            business needs.
          </p>
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/1AqpdTkznS3HKKP3a4KphyeS-ObHVMzIJ/view"
              target="_blank"
            >
              <Button as="a">
                <FileText className="mr-2 h-4 w-4" />
                View Full Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
