import { Globe, Smartphone, Database, Palette, ShoppingCart, Rocket } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Веб-сайты",
      description: "Создание современных лендингов, корпоративных сайтов и портфолио",
      features: ["Адаптивный дизайн", "SEO оптимизация", "Быстрая загрузка"]
    },
    {
      icon: Smartphone,
      title: "Веб-приложения",
      description: "Разработка интерактивных веб-приложений любой сложности",
      features: ["React/TypeScript", "Современный UI", "API интеграция"]
    },
    {
      icon: Database,
      title: "Backend решения",
      description: "Создание серверной части и баз данных для ваших проектов",
      features: ["База данных", "API разработка", "Аутентификация"]
    },
    {
      icon: Palette,
      title: "UI/UX дизайн",
      description: "Разработка привлекательного и удобного интерфейса",
      features: ["Figma прототипы", "Анимации", "Брендинг"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Интернет-магазины с системами оплаты и управления",
      features: ["Каталог товаров", "Корзина", "Платежи"]
    },
    {
      icon: Rocket,
      title: "Поддержка",
      description: "Техническая поддержка и развитие существующих проектов",
      features: ["Обновления", "Исправления", "Консультации"]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Мои услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки от идеи до запуска проекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
