import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "pasalugovij@gmail.com",
      href: "mailto:pasalugovij@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Pavlitoo",
      href: "https://github.com/Pavlitoo"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/luhovyi-pavlo",
      href: "https://www.linkedin.com/in/luhovyi-pavlo-3b2145354/"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Зв'яжіться зі Мною</h2>
          <p className="text-lg text-muted-foreground">
            Маєте проект чи пропозицію? Я завжди відкритий до нових можливостей!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <a 
                  href={method.href} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {method.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <a href="mailto:pasalugovij@gmail.com">
              <Send className="mr-2 h-4 w-4" />
              Написати Мені
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;