import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Github, Linkedin, Mail, ExternalLink, GraduationCap, Calendar, Users, Award, BookOpen, Code, Database, BarChart3 } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Avatar className="h-24 w-24 ring-4 ring-white/50 shadow-lg">
                <AvatarImage src="/avatar.jpg" alt="Taemin" />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  T
                </AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Data Science Major at University of Michigan, passionate about building complex systems 
              that bring data, policy, and human behavior into interactive environments.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                My Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a data science major at the University of Michigan, passionate about building complex systems 
                that bring data, policy, and human behavior into interactive environments. My work spans data 
                visualization, simulation modeling, and applied analytics—each project rooted in a practical goal: 
                turning raw data into insight or immersion.
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I work across full-stack development (React, Next.js, Prisma, PostgreSQL), simulation (C++), 
                and statistical analysis (Python, pandas, scikit-learn), with a focus on realistic, 
                policy-relevant systems.
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The EU Intra-Migration Dashboard targets policy researchers and academics, providing a clear 
                visual of how population movement is consolidating wealth and deepening regional inequality.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-12 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Education
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        University of Michigan
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Bachelor of Science in Data Science
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          2021 - 2025
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Ann Arbor, MI
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-slate-900 dark:text-white text-sm">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">Data Structures & Algorithms</Badge>
                      <Badge variant="secondary" className="text-xs">Machine Learning</Badge>
                      <Badge variant="secondary" className="text-xs">Statistical Analysis</Badge>
                      <Badge variant="secondary" className="text-xs">Database Systems</Badge>
                      <Badge variant="secondary" className="text-xs">Policy Analysis</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="border-0 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                    Technical Skills
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">Python</Badge>
                      <Badge variant="secondary" className="text-xs">JavaScript/TypeScript</Badge>
                      <Badge variant="secondary" className="text-xs">C++</Badge>
                      <Badge variant="secondary" className="text-xs">SQL</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">React</Badge>
                      <Badge variant="secondary" className="text-xs">Next.js</Badge>
                      <Badge variant="secondary" className="text-xs">pandas</Badge>
                      <Badge variant="secondary" className="text-xs">scikit-learn</Badge>
                      <Badge variant="secondary" className="text-xs">Prisma</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
                      <Badge variant="secondary" className="text-xs">Docker</Badge>
                      <Badge variant="secondary" className="text-xs">Git</Badge>
                      <Badge variant="secondary" className="text-xs">AWS</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Research Interests
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Areas of focus in data science and policy research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Data Visualization</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Interactive dashboards and visualizations for complex policy data analysis, 
                  focusing on making data accessible to policymakers and researchers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Simulation Modeling</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  High-performance simulation models for analyzing policy impacts on complex systems, 
                  with a focus on agent-based modeling and real-time scenario testing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-2.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Policy Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Applied analytics for policy research, combining statistical analysis with 
                  machine learning to understand human behavior and policy outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-slate-50/50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on data science projects, policy research, or building 
            interactive systems? I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="default" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
            <Button variant="outline" size="default" className="border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800">
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
            <Button variant="outline" size="default" className="border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800">
              <Github className="mr-2 h-4 w-4" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 