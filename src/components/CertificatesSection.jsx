import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { SectionHeader } from "./SectionHeader";

const certificates = [
  {
    title: "CSS",
    issuer: "HackerRank",
    period: "Apr 2023",
    credentialUrl: "https://www.hackerrank.com/certificates/0b627b2d09ca",
    category: "Frontend",
  },
  {
    title: "JavaScript",
    issuer: "HackerRank",
    period: "Apr 2023",
    credentialUrl: "https://www.hackerrank.com/certificates/527d3b043319",
    category: "Programming",
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    period: "Apr 2023",
    credentialUrl: "https://www.hackerrank.com/certificates/5be18ae2dadb",
    category: "Problem Solving",
  },
  {
    title: "Python Basic",
    issuer: "HackerRank",
    period: "Apr 2023",
    credentialUrl: "https://www.hackerrank.com/certificates/ee77415f2235",
    category: "Programming",
  },
  {
    title: "SQL Basic",
    issuer: "HackerRank",
    period: "Mar 2023",
    credentialUrl: "https://www.hackerrank.com/certificates/f069c6e80e44",
    category: "Database",
  },
  {
    title: "SQL Intermediate",
    issuer: "HackerRank",
    period: "Mar 2023",
    credentialUrl: "https://www.hackerrank.com/certificates/1f44ed2b7d59",
    category: "Database",
  },
  {
    title: "Object Oriented Programming in C++",
    issuer: "Coding Ninjas",
    period: "Sep 2022",
    credentialUrl:
      "https://drive.google.com/file/d/1bsa6YT2Hr1O0mLzWLeVMdwgly8H9CZdV/view",
    category: "Programming",
  },
  {
    title: "C++ Language",
    issuer: "Great Learning",
    period: "Jan 2022",
    credentialUrl:
      "https://drive.google.com/file/d/1sM3EC9dkqJCf74qwfz4ENK3ul7ZQGc0h/view",
    category: "Programming",
  },
  {
    title: "Data Structure and Algorithm",
    issuer: "Great Learning",
    period: "Jan 2022",
    credentialUrl:
      "https://drive.google.com/file/d/1sNBASsjgR8xr5O5jz_z9T8Lgtzcm0Vu5/view",
    category: "Computer Science",
  },
  {
    title: "Basics of Computer Fundamental",
    issuer: "NIELIT",
    period: "Sep 2020",
    credentialUrl:
      "https://drive.google.com/file/d/1Y5tfLvQod9RbQyAhJAjGyPc9yY5Rz3c9/view",
    category: "Fundamentals",
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Certifications"
            title="Licenses & Certifications"
            description="Professional credentials validating my technical skills and continuous learning"
          />
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.title + cert.issuer}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="card-elevated flex h-full flex-col p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Award className="h-5 w-5" />
                </div>
                <Badge
                  variant="secondary"
                  className="rounded-md border border-border/60 bg-background px-2 py-0.5 text-xs font-medium"
                >
                  {cert.category}
                </Badge>
              </div>

              <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
                {cert.title}
              </h3>
              <p className="mt-2 font-medium text-accent">{cert.issuer}</p>
              <time className="mt-1 text-sm text-muted-foreground">
                Issued {cert.period}
              </time>

              <div className="mt-auto border-t border-border pt-5">
                <Button size="sm" variant="outline" asChild className="w-full">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                    <ExternalLink className="opacity-60" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
