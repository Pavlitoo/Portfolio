import { Card, CardContent } from "@/components/ui/card";
import { Code2, Sparkles, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Чистий Код",
      description: "Пишу зрозумілий, підтримуваний код з фокусом на best practices"
    },
    {
      icon: Sparkles,
      title: "Сучасні Технології",
      description: "React, TypeScript, Node.js, Tailwind CSS та інші провідні інструменти"
    },
    {
      icon: Rocket,
      title: "Швидка Доставка",
      description: "Ефективна розробка з увагою до деталей та дедлайнів"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Про Мене</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Я Full-Stack розробник з пристрастю до створення елегантних рішень складних проблем. 
            Спеціалізуюся на розробці веб-додатків, які поєднують функціональність з чудовим 
            дизайном та користувацьким досвідом.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;