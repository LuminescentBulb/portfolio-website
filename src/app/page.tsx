import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Github, Linkedin, Mail, ExternalLink, Database, Code, BarChart3, Globe, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/avatar.jpg" alt="Taemin" />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  T
                </AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
              Taemin
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Data Science Major at University of Michigan
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Passionate about building complex systems that bring data, policy, and human behavior into interactive environments. 
              Specializing in data visualization, simulation modeling, and applied analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Full-stack development, simulation modeling, and statistical analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                  <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                  <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Simulation & Modeling</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">Simulation</Badge>
                  <Badge variant="secondary">Modeling</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                  <BarChart3 className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl">Data Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">pandas</Badge>
                  <Badge variant="secondary">scikit-learn</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Interactive data visualization and policy research applications
            </p>
          </div>

          <Tabs defaultValue="migration" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 mb-8">
              <TabsTrigger value="migration" className="text-sm lg:text-base">Migration Dashboard</TabsTrigger>
              <TabsTrigger value="simulation" className="text-sm lg:text-base">Simulation Models</TabsTrigger>
              <TabsTrigger value="analytics" className="text-sm lg:text-base">Data Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="migration" className="space-y-6">
              <Card className="max-w-6xl mx-auto border-0 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default" className="bg-blue-600">Featured</Badge>
                      <Badge variant="outline">Data Visualization</Badge>
                      <Badge variant="outline">Policy Research</Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      EU Intra-Migration Dashboard
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      An interactive web dashboard visualizing intra-European migration flows since EU expansion. 
                      This project integrates performant mapping, demographic overlays, and policy-relevant analytics.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>Deck.gl and MapLibre</strong> for performant, animated migration arcs across custom maps
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>GeoJSON integration</strong> with tooltips, country selectors, and demographic overlays
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>Eurostat & World Bank data</strong> analyzing migration by year, net flows, GDP, and dependency ratios
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>Policy-focused UX</strong> exploring top sender/receiver countries and historical shifts
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                      <Button variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <Globe className="h-16 w-16 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        Interactive Migration Visualization
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Real-time data visualization for policy researchers and academics
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="simulation" className="space-y-6">
              <Card className="max-w-6xl mx-auto border-0 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default" className="bg-purple-600">In Development</Badge>
                      <Badge variant="outline">C++</Badge>
                      <Badge variant="outline">Simulation</Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      Policy Impact Simulation Models
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      High-performance simulation models for analyzing policy impacts on complex systems. 
                      Built with C++ for computational efficiency and real-time policy scenario testing.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>Agent-based modeling</strong> for complex policy scenario analysis
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>Real-time simulation</strong> with interactive parameter adjustment
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>Policy impact visualization</strong> with statistical analysis and reporting
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </Button>
                      <Button variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <TrendingUp className="h-16 w-16 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        Policy Impact Analysis
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        High-performance simulation for policy decision support
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card className="max-w-6xl mx-auto border-0 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default" className="bg-green-600">Completed</Badge>
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">Machine Learning</Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      Behavioral Analytics Platform
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Advanced analytics platform for understanding human behavior patterns in policy contexts. 
                      Combines statistical analysis with machine learning for predictive insights.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>Statistical modeling</strong> with pandas and scikit-learn for pattern recognition
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>Predictive analytics</strong> for policy outcome forecasting
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>Interactive dashboards</strong> for real-time data exploration and visualization
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Platform
                      </Button>
                      <Button variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <Users className="h-16 w-16 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                        Behavioral Analytics
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Machine learning insights for policy and human behavior
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <Separator className="w-24 mx-auto" />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I'm a data science major at the University of Michigan, passionate about building complex systems 
              that bring data, policy, and human behavior into interactive environments. My work spans data 
              visualization, simulation modeling, and applied analytics—each project rooted in a practical goal: 
              turning raw data into insight or immersion.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I work across full-stack development (React, Next.js, Prisma, PostgreSQL), simulation (C++), 
              and statistical analysis (Python, pandas, scikit-learn), with a focus on realistic, 
              policy-relevant systems.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              The EU Intra-Migration Dashboard targets policy researchers and academics, providing a clear 
              visual of how population movement is consolidating wealth and deepening regional inequality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            Interested in data science, policy research, or building interactive systems? 
            I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
