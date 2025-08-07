import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Github, Linkedin, Mail, ExternalLink, Database, Code, BarChart3, Globe, TrendingUp, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Avatar className="h-16 w-16 ring-2 ring-white/30 shadow-sm">
                <AvatarImage src="/avatar.png" alt="Taemin" />
                <AvatarFallback className="text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  T
                </AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-3">
              Taemin Kim
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-xl mx-auto">
              Data Science Major at the University of Michigan
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about building complex systems that bring data, policy, and human behavior into interactive environments.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Link href="/about">
                  <ArrowRight className="mr-2 h-3.5 w-3.5" />
                  About Me
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-3.5 w-3.5" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Project Demo Section */}
      <section className="py-12 bg-white/30 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Live Project Demo
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Explore my EU Intra-Migration Dashboard in real-time
            </p>
          </div>

          <Card className="border-0 pb-0 shadow-sm overflow-hidden bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="pb-0">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md">
                  <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                    EU Intra-Migration Dashboard
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    Interactive visualization of European migration flows since EU expansion
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 h-[28rem] md:h-[32rem]">
              <div className="relative w-full h-full m-0 p-0">
                <iframe
                  src="https://eu-dashboard.stellux.org/?embedded=true"
                  className="absolute top-0 left-0 w-full h-full border-0 m-0 p-0"
                  allowFullScreen
                  title="EU Migration Dashboard"
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Built with React, Deck.gl, MapLibre, and Eurostat data
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                <ExternalLink className="mr-2 h-3 w-3" />
                View Full Project
              </Button>
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-3 w-3" />
                Source Code
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-slate-50/30 dark:bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Interactive data visualization and policy research applications
            </p>
          </div>

          <Tabs defaultValue="migration" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 mb-6 bg-white/50 dark:bg-slate-800/50">
              <TabsTrigger value="migration" className="text-xs">Migration Dashboard</TabsTrigger>
              <TabsTrigger value="simulation" className="text-xs">Simulation Models</TabsTrigger>
              <TabsTrigger value="analytics" className="text-xs">Data Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="migration" className="space-y-4">
              <Card className="max-w-4xl mx-auto border-0 shadow-sm overflow-hidden bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-5 lg:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default" className="bg-blue-500 text-white text-xs">Featured</Badge>
                      <Badge variant="outline" className="text-xs">Data Visualization</Badge>
                      <Badge variant="outline" className="text-xs">Policy Research</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      EU Intra-Migration Dashboard
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                      An interactive web dashboard visualizing intra-European migration flows since EU expansion.
                      This project integrates performant mapping, demographic overlays, and policy-relevant analytics.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Deck.gl and MapLibre</strong> for performant, animated migration arcs across custom maps
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>GeoJSON integration</strong> with tooltips, country selectors, and demographic overlays
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
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

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-5 lg:p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
                        <Globe className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
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

            <TabsContent value="simulation" className="space-y-4">
              <Card className="max-w-4xl mx-auto border-0 shadow-sm overflow-hidden bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-5 lg:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default" className="bg-purple-500 text-white text-xs">In Development</Badge>
                      <Badge variant="outline" className="text-xs">C++</Badge>
                      <Badge variant="outline" className="text-xs">Simulation</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      Policy Impact Simulation Models
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                      High-performance simulation models for analyzing policy impacts on complex systems.
                      Built with C++ for computational efficiency and real-time policy scenario testing.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Agent-based modeling</strong> for complex policy scenario analysis
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Real-time simulation</strong> with interactive parameter adjustment
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
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

                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-5 lg:p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
                        <TrendingUp className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
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

            <TabsContent value="analytics" className="space-y-4">
              <Card className="max-w-4xl mx-auto border-0 shadow-sm overflow-hidden bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-5 lg:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default" className="bg-green-500 text-white text-xs">Completed</Badge>
                      <Badge variant="outline" className="text-xs">Python</Badge>
                      <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      Behavioral Analytics Platform
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                      Advanced analytics platform for understanding human behavior patterns in policy contexts.
                      Combines statistical analysis with machine learning for predictive insights.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Statistical modeling</strong> with pandas and scikit-learn for pattern recognition
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          <strong>Predictive analytics</strong> for policy outcome forecasting
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
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

                  <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-5 lg:p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
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
    </>
  );
}
