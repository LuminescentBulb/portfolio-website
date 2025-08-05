import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Github, Linkedin, Mail, ExternalLink, Database, Code, BarChart3, Globe, TrendingUp, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Avatar className="h-20 w-20 ring-4 ring-white/50 shadow-lg">
                <AvatarImage src="/avatar.jpg" alt="Taemin" />
                <AvatarFallback className="text-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  T
                </AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-4">
              Taemin
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Data Science Major at University of Michigan
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Passionate about building complex systems that bring data, policy, and human behavior into interactive environments. 
              Specializing in data visualization, simulation modeling, and applied analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button size="default" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
              <Button variant="outline" size="default" className="border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" size="default" className="border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Technical Skills
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Full-stack development, simulation modeling, and statistical analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Full-Stack Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <div className="flex flex-wrap justify-center gap-1.5">
                  <Badge variant="secondary" className="text-xs">React</Badge>
                  <Badge variant="secondary" className="text-xs">Next.js</Badge>
                  <Badge variant="secondary" className="text-xs">Prisma</Badge>
                  <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Simulation & Modeling</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <div className="flex flex-wrap justify-center gap-1.5">
                  <Badge variant="secondary" className="text-xs">C++</Badge>
                  <Badge variant="secondary" className="text-xs">Simulation</Badge>
                  <Badge variant="secondary" className="text-xs">Modeling</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-2.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Data Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <div className="flex flex-wrap justify-center gap-1.5">
                  <Badge variant="secondary" className="text-xs">Python</Badge>
                  <Badge variant="secondary" className="text-xs">pandas</Badge>
                  <Badge variant="secondary" className="text-xs">scikit-learn</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Interactive data visualization and policy research applications
            </p>
          </div>

          <Tabs defaultValue="migration" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 mb-8 bg-white/50 dark:bg-slate-800/50">
              <TabsTrigger value="migration" className="text-sm">Migration Dashboard</TabsTrigger>
              <TabsTrigger value="simulation" className="text-sm">Simulation Models</TabsTrigger>
              <TabsTrigger value="analytics" className="text-sm">Data Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="migration" className="space-y-6">
              <Card className="max-w-5xl mx-auto border-0 shadow-lg overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default" className="bg-blue-500 text-white text-xs">Featured</Badge>
                      <Badge variant="outline" className="text-xs">Data Visualization</Badge>
                      <Badge variant="outline" className="text-xs">Policy Research</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      EU Intra-Migration Dashboard
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm">
                      An interactive web dashboard visualizing intra-European migration flows since EU expansion. 
                      This project integrates performant mapping, demographic overlays, and policy-relevant analytics.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Deck.gl and MapLibre</strong> for performant, animated migration arcs across custom maps
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>GeoJSON integration</strong> with tooltips, country selectors, and demographic overlays
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Eurostat & World Bank data</strong> analyzing migration by year, net flows, GDP, and dependency ratios
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Project
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-3 w-3" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 lg:p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <Globe className="h-12 w-12 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        Interactive Migration Visualization
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">
                        Real-time data visualization for policy researchers and academics
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="simulation" className="space-y-6">
              <Card className="max-w-5xl mx-auto border-0 shadow-lg overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default" className="bg-purple-500 text-white text-xs">In Development</Badge>
                      <Badge variant="outline" className="text-xs">C++</Badge>
                      <Badge variant="outline" className="text-xs">Simulation</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      Policy Impact Simulation Models
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm">
                      High-performance simulation models for analyzing policy impacts on complex systems. 
                      Built with C++ for computational efficiency and real-time policy scenario testing.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Agent-based modeling</strong> for complex policy scenario analysis
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Real-time simulation</strong> with interactive parameter adjustment
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Policy impact visualization</strong> with statistical analysis and reporting
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Demo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-3 w-3" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 lg:p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <TrendingUp className="h-12 w-12 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        Policy Impact Analysis
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">
                        High-performance simulation for policy decision support
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card className="max-w-5xl mx-auto border-0 shadow-lg overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default" className="bg-green-500 text-white text-xs">Completed</Badge>
                      <Badge variant="outline" className="text-xs">Python</Badge>
                      <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      Behavioral Analytics Platform
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm">
                      Advanced analytics platform for understanding human behavior patterns in policy contexts. 
                      Combines statistical analysis with machine learning for predictive insights.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Statistical modeling</strong> with pandas and scikit-learn for pattern recognition
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Predictive analytics</strong> for policy outcome forecasting
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Interactive dashboards</strong> for real-time data exploration and visualization
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Platform
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-3 w-3" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 lg:p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <Users className="h-12 w-12 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        Behavioral Analytics
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">
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
      <section className="py-16 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              About Me
            </h2>
            <Separator className="w-16 mx-auto" />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I'm a data science major at the University of Michigan, passionate about building complex systems 
              that bring data, policy, and human behavior into interactive environments. My work spans data 
              visualization, simulation modeling, and applied analytics—each project rooted in a practical goal: 
              turning raw data into insight or immersion.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I work across full-stack development (React, Next.js, Prisma, PostgreSQL), simulation (C++), 
              and statistical analysis (Python, pandas, scikit-learn), with a focus on realistic, 
              policy-relevant systems.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              The EU Intra-Migration Dashboard targets policy researchers and academics, providing a clear 
              visual of how population movement is consolidating wealth and deepening regional inequality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            Interested in data science, policy research, or building interactive systems? 
            I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="default" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
            <Button variant="outline" size="default" className="border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" size="default" className="border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
