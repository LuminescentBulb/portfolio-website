import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Github, Linkedin, Mail, ExternalLink, Database, Code, BarChart3, Globe, TrendingUp, Users, Calendar, Users2, Database as DatabaseIcon } from "lucide-react";

const projects = [
  {
    id: "migration",
    title: "EU Intra-Migration Dashboard",
    description: "An interactive web dashboard visualizing intra-European migration flows since EU expansion.",
    status: "Featured",
    statusColor: "bg-blue-500",
    category: "Data Visualization",
    technologies: ["React", "Next.js", "Deck.gl", "MapLibre", "TypeScript"],
    features: [
      "Performant, animated migration arcs across custom maps",
      "GeoJSON integration with tooltips and country selectors",
      "Eurostat & World Bank data integration",
      "Policy-focused UX for researchers and academics"
    ],
    icon: Globe,
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-50 to-purple-50",
    darkBgColor: "from-blue-900/20 to-purple-900/20"
  },
  {
    id: "simulation",
    title: "Policy Impact Simulation Models",
    description: "High-performance simulation models for analyzing policy impacts on complex systems.",
    status: "In Development",
    statusColor: "bg-purple-500",
    category: "Simulation",
    technologies: ["C++", "OpenGL", "CUDA", "Python", "NumPy"],
    features: [
      "Agent-based modeling for complex policy scenarios",
      "Real-time simulation with interactive parameters",
      "Policy impact visualization and reporting",
      "High-performance computational modeling"
    ],
    icon: TrendingUp,
    color: "from-purple-500 to-blue-600",
    bgColor: "from-purple-50 to-blue-50",
    darkBgColor: "from-purple-900/20 to-blue-900/20"
  },
  {
    id: "analytics",
    title: "Behavioral Analytics Platform",
    description: "Advanced analytics platform for understanding human behavior patterns in policy contexts.",
    status: "Completed",
    statusColor: "bg-green-500",
    category: "Machine Learning",
    technologies: ["Python", "pandas", "scikit-learn", "Plotly", "FastAPI"],
    features: [
      "Statistical modeling with pattern recognition",
      "Predictive analytics for policy outcomes",
      "Interactive dashboards for data exploration",
      "Real-time behavioral pattern analysis"
    ],
    icon: Users,
    color: "from-green-500 to-blue-600",
    bgColor: "from-green-50 to-blue-50",
    darkBgColor: "from-green-900/20 to-blue-900/20"
  },
  {
    id: "database",
    title: "Policy Database System",
    description: "Comprehensive database system for policy research and data management.",
    status: "Completed",
    statusColor: "bg-orange-500",
    category: "Database",
    technologies: ["PostgreSQL", "Prisma", "Node.js", "TypeScript", "Docker"],
    features: [
      "Structured policy data management",
      "Advanced querying and filtering",
      "Data validation and integrity checks",
      "API for external integrations"
    ],
    icon: DatabaseIcon,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    darkBgColor: "from-orange-900/20 to-red-900/20"
  }
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Projects
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A collection of my work in data science, policy research, and interactive systems. 
              Each project focuses on turning complex data into actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default" className={`${project.statusColor} text-white text-xs`}>
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" className={`bg-gradient-to-r ${project.color} hover:opacity-90 text-white`}>
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Project
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-3 w-3" />
                        Source
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-br ${project.bgColor} dark:${project.darkBgColor} p-6 lg:p-8 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                        <project.icon className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {project.category}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-xs">
                        {project.status}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Project Categories
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Explore my work across different domains and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Data Visualization</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Interactive dashboards and visualizations for complex data analysis
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  <Badge variant="secondary" className="text-xs">React</Badge>
                  <Badge variant="secondary" className="text-xs">D3.js</Badge>
                  <Badge variant="secondary" className="text-xs">MapLibre</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Simulation & Modeling</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  High-performance simulation models for policy impact analysis
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  <Badge variant="secondary" className="text-xs">C++</Badge>
                  <Badge variant="secondary" className="text-xs">OpenGL</Badge>
                  <Badge variant="secondary" className="text-xs">CUDA</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-2.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Predictive analytics and behavioral pattern recognition
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  <Badge variant="secondary" className="text-xs">Python</Badge>
                  <Badge variant="secondary" className="text-xs">scikit-learn</Badge>
                  <Badge variant="secondary" className="text-xs">TensorFlow</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
} 