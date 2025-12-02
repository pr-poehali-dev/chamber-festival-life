import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const ticketUrl = "https://afisha.nethouse.ru/event/transformacionnyi-festival-pro-zizn";

  const benefits = [
    { title: "Выбрать игру под своё состояние", icon: "Heart" },
    { title: "Попробовать то, на что давно не решались", icon: "Sparkles" },
    { title: "Познакомиться с ведущими, которые работают экологично", icon: "Users" },
    { title: "Мягко восстановиться и переключиться", icon: "Flower2" },
    { title: "Почувствовать атмосферу тепла и присутствия", icon: "Sun" },
  ];

  const audience = [
    {
      title: "В жизненных переменах",
      description: "Нужны ясность и внутренний ориентир",
    },
    {
      title: "С тихой формой выгорания",
      description: "Нужен мягкий формат восстановления",
    },
    {
      title: "Не умеете отдыхать",
      description: "Безопасные практики расслабления",
    },
    {
      title: "Новичок в саморазвитии",
      description: "Простые объяснения, никакой мистики",
    },
    {
      title: "После переезда",
      description: "Чувство места, принятие и новые контакты",
    },
    {
      title: "Устали от эзотерики",
      description: "Честные экологичные игры",
    },
    {
      title: "Родитель подростка",
      description: "Восстановление опоры и снижение тревоги",
    },
    {
      title: "Живёте на автопилоте",
      description: "Возвращение чувств и присутствия",
    },
  ];

  const steps = [
    "Вы приходите и знакомитесь с пространством",
    "Выбираете игру, которая откликается",
    "Погружаетесь в процесс в безопасной, тёплой атмосфере",
    "Между играми — отдых, чай и общение",
    "Можно пройти одну или несколько игр",
  ];

  const tickets = [
    {
      title: "Первый опыт",
      features: ["Пробная игра", "Подробное объяснение процесса"],
    },
    {
      title: "Стандарт",
      features: ["1 игра по выбору", "Доступ к пространству"],
      popular: true,
    },
    {
      title: "Расширенный",
      features: [
        "2 игры",
        "Приоритетная запись",
        'Материалы "Как продолжить работу после фестиваля"',
      ],
    },
  ];

  const faqs = [
    {
      question: "Если я никогда не играл в такие игры?",
      answer:
        "Это совершенно нормально! Большинство участников приходят впервые. Ведущие подробно объясняют правила и создают безопасное пространство для новичков. Вы можете начать с пробной игры в тарифе 'Первый опыт'.",
    },
    {
      question: "Это терапия?",
      answer:
        "Нет, это не терапия в классическом понимании. Трансформационные игры — это мягкий метод самопознания через игровой процесс. Если вам нужна психотерапия, мы рекомендуем обратиться к специалисту.",
    },
    {
      question: "Можно прийти одному?",
      answer:
        "Конечно! Многие участники приходят в одиночку и находят здесь поддержку и новые знакомства. Атмосфера фестиваля располагает к общению, но при этом уважает личные границы каждого.",
    },
    {
      question: "Сколько длится игра?",
      answer:
        "Продолжительность игры зависит от её типа и обычно составляет от 1 до 2 часов. Между играми есть время на отдых, чай и общение. Фестиваль длится с 12:00 до 17:00.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/b1f1dafe-0f45-4cab-af44-c599e2a5e2f9/files/66fd1679-7d06-483e-bc51-ba952e75929a.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        </div>
        
        <div className="container max-w-4xl text-center relative z-10 animate-fade-in">
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/5103bfaa-ec56-4111-bc96-e3f6fc796e82.jpg" 
              alt="Трансформационный фестиваль игр"
              className="w-48 h-48 mx-auto mb-6 rounded-full object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Трансформационный<br />фестиваль игр
          </h1>
          
          <div className="text-2xl md:text-3xl text-accent font-semibold mb-8">
            Про Жизнь
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-foreground/90 mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              <span>14 декабря</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} />
              <span>12:00–17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} />
              <span>Геленджик</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 font-light leading-relaxed">
            Мягкое пространство для тех, кто ищет ясность,<br />поддержку и внутренний ориентир
          </p>
          
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Камерный фестиваль, где можно выбрать игру под своё состояние,<br />восстановиться и почувствовать себя живее
          </p>
          
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open(ticketUrl, '_blank')}
          >
            Купить билет
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-card-foreground">
                О фестивале
              </h2>
              <div className="prose prose-lg max-w-none text-card-foreground/80 leading-relaxed">
                <p className="text-xl mb-6">
                  Фестиваль создан как место, где можно наконец-то выдохнуть. Если вы в переменах, 
                  в тихом выгорании, после переезда, устали от контроля или ищете честный формат 
                  без эзотерики — здесь вы найдёте поддержку, простоту и ясность.
                </p>
                <p className="text-xl">
                  Ведущие работают глубоко, но бережно.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://cdn.poehali.dev/projects/b1f1dafe-0f45-4cab-af44-c599e2a5e2f9/files/ab5eb7a3-f0d0-4706-aa7e-2ea0d40be23b.jpg"
                alt="Атмосфера фестиваля"
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Что вас ждёт
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name={benefit.icon} size={32} className="text-accent" />
                  </div>
                  <p className="text-lg text-card-foreground leading-relaxed">
                    {benefit.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-card-foreground">
            Для кого фестиваль
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.map((item, index) => (
              <Card 
                key={index} 
                className="border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 bg-background"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Как проходит фестиваль
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/b1f1dafe-0f45-4cab-af44-c599e2a5e2f9/files/88046de1-a572-442e-b922-250a7051ace4.jpg"
                alt="Процесс игры"
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <p className="text-xl text-foreground/80 pt-2 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-card-foreground">
            Билеты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tickets.map((ticket, index) => (
              <Card 
                key={index} 
                className={`border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  ticket.popular 
                    ? 'border-accent bg-accent/5' 
                    : 'border-border bg-background'
                }`}
              >
                <CardContent className="p-8">
                  {ticket.popular && (
                    <div className="text-center mb-4">
                      <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Популярный
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-center mb-6 text-card-foreground">
                    {ticket.title}
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-1" />
                        <span className="text-card-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                    onClick={() => window.open(ticketUrl, '_blank')}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-3xl px-6 bg-card shadow-md"
              >
                <AccordionTrigger className="text-lg text-left text-card-foreground hover:text-accent py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-card-foreground/80 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-card-foreground">
            Контакты
          </h2>
          <div className="space-y-6 text-lg text-card-foreground/80 mb-12">
            <div className="flex items-center justify-center gap-3">
              <Icon name="MapPin" size={24} className="text-accent" />
              <span>Геленджик</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Calendar" size={24} className="text-accent" />
              <span>14 декабря 2024</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Clock" size={24} className="text-accent" />
              <span>12:00 – 17:00</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open(ticketUrl, '_blank')}
          >
            Купить билет
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container max-w-6xl text-center text-foreground/60">
          <p>© 2024 Трансформационный фестиваль игр "Про Жизнь"</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;