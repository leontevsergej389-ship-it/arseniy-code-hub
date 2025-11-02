import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML/CSS", level: 98 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "REST API", level: 88 },
        { name: "Supabase", level: 85 }
      ]
    },
    {
      category: "Tools & Other",
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Vite", level: 92 },
        { name: "Vercel/Deploy", level: 88 }
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Навыки и технологии
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современный стек технологий для создания качественных проектов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105"
                        style={{ 
                          width: `${skill.level}%`,
                          transformOrigin: 'left'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
