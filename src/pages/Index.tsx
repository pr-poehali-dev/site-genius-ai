import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [siteDescription, setSiteDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const examples = [
    {
      title: "Сайт-визитка фотографа",
      description: "Портфолио в минималистичном стиле",
      image: "/img/e42bb838-89c6-4e77-95c7-20757eec17c9.jpg"
    },
    {
      title: "Интернет-магазин",
      description: "Современный e-commerce с каталогом",
      image: "/img/e42bb838-89c6-4e77-95c7-20757eec17c9.jpg"
    },
    {
      title: "Блог путешественника",
      description: "Личный блог с яркими фотографиями",
      image: "/img/e42bb838-89c6-4e77-95c7-20757eec17c9.jpg"
    }
  ];

  const steps = [
    {
      icon: "PenTool",
      title: "Опишите свой сайт",
      description: "Просто напишите, какой сайт вы хотите создать"
    },
    {
      icon: "Brain",
      title: "ИИ генерирует макет",
      description: "Нейросеть создаёт полноценный сайт за секунды"
    },
    {
      icon: "Edit3",
      title: "Редактируйте",
      description: "Настройте дизайн и контент под себя"
    },
    {
      icon: "Globe",
      title: "Публикуйте",
      description: "Выводите сайт в интернет одним кликом"
    }
  ];

  const testimonials = [
    {
      name: "Мария Петрова",
      role: "Дизайнер",
      text: "Создала сайт портфолио за 10 минут! Раньше на это уходили недели.",
      avatar: "👩‍🎨"
    },
    {
      name: "Игорь Смирнов",
      role: "Предприниматель",
      text: "Запустил интернет-магазин без единой строчки кода. Просто невероятно!",
      avatar: "👨‍💼"
    },
    {
      name: "Анна Козлова",
      role: "Блогер",
      text: "Идеальное решение для создания современных сайтов. Рекомендую всем!",
      avatar: "✍️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/5 to-secondary/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-inter">SiteGenie AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">Как работает</a>
            <a href="#examples" className="text-gray-600 hover:text-primary transition-colors">Примеры</a>
            <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
            <Button variant="outline">Войти</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-inter mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Создавай сайты за минуты
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-open-sans">
            Просто опиши словами — ИИ создаст полноценный сайт
          </p>
          
          {/* Main Generator Interface */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <Textarea
                  placeholder="Опишите, какой сайт вы хотите создать... 

Например: 'Сайт-визитка фотографа в минималистичном стиле с портфолио, страницей обо мне и формой обратной связи. Чёрно-белая цветовая схема с акцентами золотого цвета.'"
                  value={siteDescription}
                  onChange={(e) => setSiteDescription(e.target.value)}
                  className="min-h-[120px] text-lg border-0 resize-none focus:ring-0"
                />
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Lightbulb" className="w-4 h-4 mr-2" />
                    Чем подробнее описание, тем лучше результат
                  </div>
                  <Button 
                    onClick={handleGenerate}
                    disabled={!siteDescription.trim() || isGenerating}
                    className="px-8 py-3 text-lg font-semibold"
                  >
                    {isGenerating ? (
                      <>
                        <Icon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
                        Генерирую...
                      </>
                    ) : (
                      <>
                        <Icon name="Sparkles" className="w-5 h-5 mr-2" />
                        Создать сайт с ИИ
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button variant="outline" className="px-6 py-2">
              <Icon name="Camera" className="w-4 h-4 mr-2" />
              Портфолио фотографа
            </Button>
            <Button variant="outline" className="px-6 py-2">
              <Icon name="ShoppingBag" className="w-4 h-4 mr-2" />
              Интернет-магазин
            </Button>
            <Button variant="outline" className="px-6 py-2">
              <Icon name="FileText" className="w-4 h-4 mr-2" />
              Корпоративный сайт
            </Button>
            <Button variant="outline" className="px-6 py-2">
              <Icon name="Heart" className="w-4 h-4 mr-2" />
              Свадебный сайт
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter mb-4">Как это работает</h2>
            <p className="text-xl text-gray-600 font-open-sans">Создание сайта в 4 простых шага</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-inter">{step.title}</h3>
                <p className="text-gray-600 font-open-sans">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter mb-4">Примеры созданных сайтов</h2>
            <p className="text-xl text-gray-600 font-open-sans">Посмотрите, что уже создали наши пользователи</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-inter">{example.title}</h3>
                  <p className="text-gray-600 font-open-sans">{example.description}</p>
                  <Button variant="ghost" className="mt-4 p-0 h-auto">
                    Посмотреть сайт
                    <Icon name="ExternalLink" className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter mb-4">Что говорят пользователи</h2>
            <p className="text-xl text-gray-600 font-open-sans">Отзывы тех, кто уже создал сайты с нами</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <p className="text-gray-700 mb-4 font-open-sans">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold font-inter">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-inter mb-4">Готовы создать свой сайт?</h2>
          <p className="text-xl mb-8 font-open-sans">Присоединяйтесь к тысячам пользователей, которые уже создали сайты с помощью ИИ</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <Icon name="Sparkles" className="w-5 h-5 mr-2" />
              Создать сайт бесплатно
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-inter">SiteGenie AI</span>
              </div>
              <p className="text-gray-400 font-open-sans">Создавайте сайты с помощью искусственного интеллекта</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-inter">Продукт</h4>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li><a href="#" className="hover:text-white transition-colors">Как работает</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Примеры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-inter">Поддержка</h4>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Статус</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-inter">Соцсети</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Twitter" className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Github" className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Linkedin" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-open-sans">
            <p>&copy; 2024 SiteGenie AI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;