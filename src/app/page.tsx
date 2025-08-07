import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Globe, ArrowRight, ExternalLink, Github, Calendar } from "lucide-react";
import Link from "next/link";
import { getRecentBlogPosts } from "@/lib/blog";

export default async function Home() {
  const recentPosts = await getRecentBlogPosts(3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Avatar className="h-48 w-48 ring-2 ring-white/30 shadow-sm">
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
              <a 
                href="https://eu-dashboard.stellux.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all"
              >
                <ExternalLink className="mr-2 h-3 w-3" />
                View Full Project
              </a>
              <a 
                href="https://github.com/LuminescentBulb/intra-eu-migration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Github className="mr-2 h-3 w-3" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Thoughts & Blog Section */}
      <section className="py-12 bg-slate-50/30 dark:bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Recent Thoughts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.length > 0 ? (
              recentPosts.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                  <Card className={`border-0 shadow-sm overflow-hidden bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:shadow-md transition-all duration-200 cursor-pointer ${index === 0 ? 'col-span-full lg:col-span-2' : ''}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md">
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className={`font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${index === 0 ? 'text-lg' : 'text-base'}`}>
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-slate-600 dark:text-slate-300">
                            {post.date} • {post.readTime} min read
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-600 dark:text-slate-300">
                  No blog posts yet. Check back soon!
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Link href="/blog">
                <ArrowRight className="mr-2 h-4 w-4" />
                View All Thoughts
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
