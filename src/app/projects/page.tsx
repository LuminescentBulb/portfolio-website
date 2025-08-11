import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Database, BarChart3, Globe, Users2, Github } from "lucide-react";

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
    darkBgColor: "from-blue-900/20 to-purple-900/20",
    viewable: true,
    projectUrl: "https://eu-dashboard.stellux.org",
    sourceUrl: "https://github.com/LuminescentBulb/intra-eu-migration"
  },
  {
    id: "dog-breed",
    title: "Dog Breed Classifier",
    description: "Built a deep learning pipeline in PyTorch to classify Golden Retrievers vs. Collies from a 10-class image dataset.",
    status: "Completed",
    statusColor: "bg-green-500",
    category: "Machine Learning",
    technologies: ["PyTorch", "Vision Transformers", "CNNs", "Transfer Learning", "Python"],
    features: [
      "Achieved 0.95+ accuracy and 0.97 AUROC using transfer learning",
      "Implemented Vision Transformer (ViT) architecture from scratch",
      "Designed custom CNN with dropout and early stopping"
    ],
    icon: BarChart3,
    color: "from-green-500 to-blue-600",
    bgColor: "from-green-50 to-blue-50",
    darkBgColor: "from-green-900/20 to-blue-900/20",
    viewable: false,
    sourceUrl: null
  },
  {
    id: "political-simulator",
    title: "Online Political Simulator",
    description: "Developing a multiplayer political strategy game simulating U.S. elections, parties, and governance across 50 states.",
    status: "In Development",
    statusColor: "bg-purple-500",
    category: "Full-Stack Web",
    technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      "Turn-based system with dynamic influence and finance mechanics",
      "Backend schema and REST API with custom authentication",
      "Game logic for primaries, elections, and legislative proposals"
    ],
    icon: Users2,
    color: "from-purple-500 to-blue-600",
    bgColor: "from-purple-50 to-blue-50",
    darkBgColor: "from-purple-900/20 to-blue-900/20",
    viewable: false,
    projectUrl: "https://union.stellux.org",
    sourceUrl: null
  },
  {
    id: "dishes-data",
    title: "Dishes to Data – Recipe Analysis",
    description: "Conducted an analysis of over 80,000 recipes and ratings from Food.com to investigate the relationship between nutritional values and user ratings.",
    status: "Completed",
    statusColor: "bg-orange-500",
    category: "Data Analysis",
    technologies: ["Python", "pandas", "NumPy", "Plotly", "scikit-learn"],
    features: [
      "Cleaned and merged multiple datasets with exploratory analysis",
      "Built predictive model to determine nutritional factors",
      "Created visualizations to uncover trends in ratings and nutrition"
    ],
    icon: Database,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    darkBgColor: "from-orange-900/20 to-red-900/20",
    viewable: false,
    sourceUrl: "https://github.com/LuminescentBulb/dishes-to-data"
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
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="border-0 py-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                <div className="grid grid-cols-1 lg:grid-cols-3 flex-1">
                  <div className="p-6 lg:p-6 xl:p-8 lg:col-span-2 flex flex-col">
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

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.viewable && project.projectUrl && (
                        <a 
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r ${project.color} hover:opacity-90 text-white transition-opacity`}
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Project
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a 
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Github className="mr-2 h-3 w-3" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-br ${project.bgColor} dark:${project.darkBgColor} p-6 lg:p-6 xl:p-8 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`w-16 h-16 xl:w-20 xl:h-20 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                        <project.icon className="h-8 w-8 xl:h-10 xl:w-10 text-white" />
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

    </>
  );
} 