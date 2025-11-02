import { Code, Laptop, Zap } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Чистый код",
      description: "Пишу понятный и поддерживаемый код, следуя best practices"
    },
    {
      icon: Zap,
      title: "Быстрая работа",
      description: "Оптимизирую производительность и скорость загрузки"
    },
    {
      icon: Laptop,
      title: "Адаптивность",
      description: "Все сайты отлично работают на любых устройствах"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            О программировании
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Превращаю идеи в работающие веб-приложения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm border-primary/20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Что такое программирование?
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Программирование — это искусство создания цифровых решений, которые упрощают жизнь людей и автоматизируют бизнес-процессы. Это не просто написание кода, а создание инструментов, которые работают на вас.
              </p>
              <p>
                Современные веб-технологии позволяют создавать сложные приложения, которые работают в браузере без установки. Это удобно, быстро и доступно для всех пользователей.
              </p>
              <p>
                Я специализируюсь на создании современных веб-сайтов и приложений с использованием последних технологий: React, TypeScript, и современных фреймворков для создания быстрых и красивых интерфейсов.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
