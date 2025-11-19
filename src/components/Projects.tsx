import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import petopiaImg from "@/assets/petopia.jpg";
import todoImg from "@/assets/todo.jpg";
import wrestlingImg from "@/assets/wrestling.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Petopia — Сайт-візитка притулку для тварин",
      description: "Petopia — де кожна лапка знайде свій дім.",
      tags: ["PHP", "CSS", "MySQL", "Wordpress", "JavaScript"],
      image: petopiaImg,
      liveUrl: "http://ready-for-feedback3.com/ppfc/luhovyi/",
      githubUrl: "https://github.com/Pavlitoo/Petopia"
    },
    {
      title: "Todo - Сайт для створення корисних справ",
      description: "Простий та зручний додаток для управління вашими завданнями",
      tags: ["Html", "Css", "Js"],
      image: todoImg,
      liveUrl: "https://to-do-chi-azure.vercel.app/",
      githubUrl: "https://github.com/Pavlitoo/to-do"
    },
    {
      title: "Сайт Полтавського клубу спортивної боротьби",
      description: "Інформаційний сайт для Полтавського клубу спортивної боротьби",
      tags: ["Html", "Css", "Js"],
      image: wrestlingImg,
      liveUrl: "https://poltava-wrestling.vercel.app/",
      githubUrl: "https://github.com/Pavlitoo/poltava-wrestling"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Мої Проекти</h2>
          <p className="text-lg text-muted-foreground">
            Деякі з моїх останніх робіт
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-all hover:-translate-y-2 duration-300 overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;