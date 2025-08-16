import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Github, Linkedin, Mail, Calendar, Clock, Send } from "lucide-react";
import ContactCard from "./contactCard";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Interested in data science, policy research, or building interactive systems? 
              I&apos;d love to hear from you and discuss potential collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <ContactCard />

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Email</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">taeminkm@umich.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Location</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Portland, Oregon</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">Availability</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Available for new opportunities</p>
                    </div>
                  </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://github.com/LuminescentBulb"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </a>
                  <a
                    href="http://linkedin.com/in/taemin-kim-010344235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                  </a>
                </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-12 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              What I&apos;m Looking For
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Opportunities and collaborations that align with my interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Research Collaborations</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Data science projects focused on policy research, migration analysis, 
                  and behavioral pattern recognition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Internship Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Summer internships in data science, policy analysis, or 
                  full-stack development roles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 p-2.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Send className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Open Source Projects</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Contributing to open source projects in data visualization, 
                  policy research tools, or educational platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
} 