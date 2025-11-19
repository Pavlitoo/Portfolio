import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
        title: "Студент / Web Developer",
        company: "Національний університет «Полтавська політехніка імені Юрія Кондратюка»",
        period: "2025 - Теперішній час",
        description: "Навчаюсь на комп'ютерній інженерії, активно розвиваю навички у веброзробці та створенні сучасних інтерфейсів.",
        achievements: [
            "Створення власних вебсайтів та навчальних проєктів",
            "Вивчення React, JavaScript та основ backend-розробки",
            "Участь у навчальних ІТ-проєктах та командній роботі"
        ]
    },
    {
        title: "Студент спеціальності «Розробка програмного забезпечення»",
        company: "Полтавський політехнічний фаховий коледж",
        period: "2021 - 2025",
        description: "Отримав базові знання з програмування та сучасних ІТ-технологій.",
        achievements: [
            "Вивчення основ алгоритмів та структур даних",
            "Створення навчальних програм і вебсторінок",
            "Захист дипломного проєкту з розробки ПЗ"
        ]
    },
    {
        title: "Intern Web Developer",
        company: "White Label Agency",
        period: "Літо 2025",
        description: "Стажування у вебагенції з фокусом на створенні та підтримці сайтів на WordPress.",
        achievements: [
            "Розробка вебсторінок на WordPress",
            "Робота з темами, плагінами та адаптивною версткою",
            "Участь у реальних клієнтських проектах під менторством досвідчених розробників"
        ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Досвід Роботи</h2>
          <p className="text-lg text-muted-foreground">
            Мій професійний шлях у розробці
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;