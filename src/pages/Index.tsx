import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('bank');

  const partners = [
    { name: 'Яндекс Директ', description: 'Мастер рекламных кампаний', cashback: '50%', type: 'Кэшбек', icon: '🎯' },
    { name: 'Яндекс Бизнес', description: 'Реклама вашей компании, которая приводит клиентов', cashback: '50%', type: 'Кэшбек', icon: '📊' },
    { name: 'Островок!', description: 'Сервис бронирования отелей и квартир', cashback: '5%', type: 'Кэшбек', icon: '🏝️' },
    { name: 'Яндекс 360 для бизнеса', description: 'Облачные офис для вашей компании', cashback: '20% и 30%', type: 'Кэшбэк и скидка', icon: '🔵' },
    { name: 'Айтиком', description: 'Электронная подпись для любых целей бизнеса', cashback: '15%', type: 'Скидка', icon: '🔐' },
    { name: 'МойСклад', description: 'Программа для торговли на маркетплейсах', cashback: '3 месяца', type: 'Бесплатно', icon: '📦' },
  ];

  const benefits = [
    { title: 'Предложения от банка', icon: '🎯', color: 'bg-gradient-to-br from-orange-500 to-orange-600' },
    { title: 'Предложения от партнёров', icon: '💳', color: 'bg-gradient-to-br from-cyan-500 to-cyan-600' },
    { title: 'Реальные деньги', icon: '💰', color: 'bg-gradient-to-br from-green-500 to-green-600' },
    { title: 'Помощь другим', icon: '🤝', color: 'bg-gradient-to-br from-red-500 to-red-600' },
  ];

  const industries = [
    { title: 'Для онлайн-торговли', description: 'Помощь в продаже товаров и услуг на сайте, маркетплейсах и в соцсетях', icon: '🛍️', color: 'bg-gradient-to-br from-lime-400 to-lime-500' },
    { title: 'Для розничной торговли', description: 'Помощь снизить расходы на бизнес и банковское обслуживание', icon: '🛒', color: 'bg-gradient-to-br from-green-400 to-green-500' },
    { title: 'Для бизнеса на маркетплейсах', description: 'Помощь выйти на площадки и стать топ-продавцом', icon: '🏪', color: 'bg-gradient-to-br from-lime-300 to-lime-400' },
    { title: 'Для бьюти-бизнеса и фитнес-клубов', description: 'Автоматизируйте бизнес и снизите расходы на обслуживание', icon: '💅', color: 'bg-gradient-to-br from-pink-400 to-pink-500' },
    { title: 'Для франшизного бизнеса', description: 'Поддержка на старте и помощь масштабировать сеть', icon: '🏢', color: 'bg-gradient-to-br from-red-400 to-red-500' },
    { title: 'Для небольших кафе и фастфуда', description: 'Помощь оптимизировать работу заведения и усилить развитие', icon: '🍔', color: 'bg-gradient-to-br from-blue-400 to-blue-500' },
  ];

  const faqItems = [
    { question: 'Где можно ознакомиться с правилами программы Альфа-Выгодно для бизнеса?', answer: 'С правилами программы вы можете ознакомиться на официальном сайте Альфа-Банка в разделе "Документы" или запросить у менеджера при оформлении счёта.' },
    { question: 'Как стать участником программы лояльности Альфа-Выгодно для бизнеса?', answer: 'Для участия в программе достаточно открыть счёт для бизнеса в Альфа-Банке. После открытия счёта вы автоматически станете участником программы лояльности.' },
    { question: 'Куда приходит кэшбэк?', answer: 'Кэшбэк начисляется в виде баллов на ваш счёт в программе лояльности. Один балл равен одному рублю. Баллами можно оплачивать покупки у партнёров или обменивать на реальные деньги.' },
    { question: 'Какие счета участвуют в программе лояльности?', answer: 'В программе участвуют все расчётные счета для бизнеса, открытые в Альфа-Банке: для ИП, ООО и других форм организации бизнеса.' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-accent">A</div>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#" className="hover:text-primary transition-colors">Частным лицам</a>
                <a href="#" className="hover:text-primary transition-colors">Малому бизнесу и ИП</a>
                <a href="#" className="hover:text-primary transition-colors">Среднему и крупному бизнесу</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="ghost" className="hidden md:inline-flex">
                Онлайн-заявка
              </Button>
              <Button className="bg-accent hover:bg-accent/90">Войти</Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-purple-600 to-secondary rounded-3xl border-0 overflow-hidden relative">
                <div className="relative z-10">
                  <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">
                    Альфа-Выгодно<br />для бизнеса
                  </h1>
                  <p className="text-lg mb-6 text-white/90">
                    Получайте баллы за привычные<br />
                    операции и тратьте<br />
                    их как захотите. 1 балл = 1 ₽
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                    Подключить
                  </Button>
                </div>
                <div className="absolute right-0 bottom-0 w-64 h-64 opacity-20">
                  <div className="text-[200px] font-black text-white leading-none">АЛЬФА ВЫГОДНО</div>
                </div>
              </Card>

              <div className="grid gap-4">
                <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Кэшбэк до 50%</div>
                      <div className="text-lg font-bold text-gray-900">от Авито Рекламы</div>
                    </div>
                    <div className="text-5xl">🎁</div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-0 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Кэшбэк 50%</div>
                      <div className="text-lg font-bold text-gray-900">в Яндекс Директе</div>
                    </div>
                    <div className="text-5xl">50%</div>
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-0 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-xs font-medium text-gray-700 mb-1">Кэшбэк и скидка</div>
                    <div className="text-sm font-bold text-gray-900 mb-2">до 30% на Яндекс 360</div>
                    <div className="text-3xl">🔵</div>
                  </Card>

                  <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-0 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-xs font-medium text-gray-700 mb-1">Кэшбэк до 8%</div>
                    <div className="text-sm font-bold text-gray-900 mb-2">от ВкусВилл</div>
                    <div className="text-3xl">🥗</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Получайте баллы<br />
                и тратьте их как захотите
              </h2>
              <div className="flex gap-2">
                <Button 
                  variant={activeTab === 'bank' ? 'default' : 'outline'}
                  className="rounded-full"
                  onClick={() => setActiveTab('bank')}
                >
                  На что копить
                </Button>
                <Button 
                  variant={activeTab === 'earn' ? 'default' : 'outline'}
                  className="rounded-full"
                  onClick={() => setActiveTab('earn')}
                >
                  Как получить
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className={`${benefit.color} border-0 rounded-3xl p-8 text-white hover:scale-105 transition-transform cursor-pointer`}>
                  <div className="text-6xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Предложения от партнёров</h2>
              <Button variant="outline" className="rounded-full">
                Все предложения
              </Button>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4 mb-6">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Icon name="Search" size={20} />
                </Button>
                <input 
                  type="text" 
                  placeholder="Найти предложение"
                  className="flex-1 bg-muted border-0 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="outline" className="rounded-full">
                  Типы предложений
                  <Icon name="ChevronDown" size={16} className="ml-2" />
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded-sm"></div>
                  <span>Все предложения</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">Популярное</Button>
                <Button variant="ghost" size="sm">По категориям</Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <Card key={index} className="p-6 bg-card hover:bg-muted/50 transition-all rounded-2xl border border-border hover:border-primary/50 cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{partner.icon}</div>
                    <Icon name="ChevronRight" className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">{partner.type}</div>
                      <div className="text-2xl font-bold text-primary">{partner.cashback}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Отраслевые решения</h2>
            <p className="text-muted-foreground mb-8">Понятный комплекс продуктов и сервисов для развития вашего бизнеса</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <Card key={index} className={`${industry.color} border-0 rounded-2xl p-6 text-gray-900 hover:scale-105 transition-transform cursor-pointer`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <Icon name="ChevronRight" className="text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{industry.title}</h3>
                  <p className="text-sm">{industry.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Частые вопросы</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-2xl px-6">
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Частным лицам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Карты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Счета и вклады</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредиты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Бизнесу</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Расчётный счёт</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Эквайринг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредиты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">О банке</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Офисы и банкоматы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-muted-foreground text-center pt-8 border-t border-border">
            © 2025 АО «Альфа-Банк». Генеральная лицензия Банка России № 1326 от 16.01.2015
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;