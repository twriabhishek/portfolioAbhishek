import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon, Send } from "lucide-react";
import { toast } from "react-toastify";
import { SectionHeader } from "./SectionHeader";

const contactDetails = [
  {
    icon: MailIcon,
    label: "Email",
    value: "abhishek130199@gmail.com",
    href: "mailto:abhishek130199@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+91 9506937439",
    href: "tel:+919506937439",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Noida, UP",
  },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Contact"
            title="Get In Touch"
            description="Open to full-time roles, freelance projects, and technical collaborations"
          />
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="card-elevated h-full p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Contact Information
              </h3>
              <p className="mt-2 text-sm prose-muted">
                Feel free to reach out through any of these channels.
              </p>

              <ul className="mt-8 space-y-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block font-medium text-foreground link-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="card-elevated p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Send a Message
              </h3>
              <p className="mt-2 text-sm prose-muted">
                Share a brief about your opportunity or project — I'll get back
                to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11"
                  />
                </div>
                <Textarea
                  placeholder="Your Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[140px] resize-y"
                />
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
