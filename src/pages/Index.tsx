import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [phone, setPhone] = useState('');
  const [visibleIndustries, setVisibleIndustries] = useState(10);
  const mainRef = useRef<HTMLDivElement>(null);
  const hasShownPopup = useRef(false);

  const industries = [
    {
      id: 1,
      title: 'Старт бизнеса',
      description: 'Все для старта бизнеса',
      programs: [
        { name: 'Авито', logo: '🏢', description: 'Онлайн-сервис для размещения объявлений', benefit: '100% кэшбэк бонусами за продвижение в категории «услуги»', action: 'Активировать' },
        { name: 'Контур.Эльба', logo: '📊', description: 'Онлайн-бухгалтерия для ИП и ООО', benefit: 'До 1 года бесплатно', action: 'Активировать' },
        { name: 'Яндекс Бизнес', logo: '🎯', description: 'Реклама подписки для ИП/ООО-бизнеса', benefit: '10 000 ₽ на запуск рекламы и сопровождение специалистом', action: 'Активировать' },
      ]
    },
    {
      id: 2,
      title: 'Работа в онлайне',
      description: 'Сервисы для перевода бизнеса в интернет и работы в онлайне',
      programs: [
        { name: 'CloudKassir', logo: '💳', description: 'Онлайн-касса для интернет-магазина', benefit: 'Скидка 15 000 ₽ на первый год обслуживания', action: 'Активировать' },
        { name: 'Яндекс Директ', logo: '🎯', description: 'Реклама в Поиске, Картах и Рекламной сети', benefit: 'Промокод на 10 000 ₽ для нового рекламного запуска рекламы', action: 'Активировать' },
        { name: 'Контур.Эльба', logo: '📊', description: 'Онлайн-бухгалтерия для ИП и ООО', benefit: 'До 1 года бесплатно', action: 'Активировать' },
      ]
    },
    {
      id: 3,
      title: 'Всё для ВЭД',
      description: 'Сервисы для работы с экспортом/импортом, таможенным оформлением, ВЭД-контрактами и ведение расчётов',
      programs: [
        { name: 'Weconn', logo: '🌐', description: 'Услуги для импорта и экспорта', benefit: 'Бесплатная Консультация по импорту', action: 'Активировать' },
        { name: 'Сервис GtPaid', logo: '💰', description: 'Приём платежей через сервис «GtPaid»', benefit: 'Приём платежей через сервис', action: 'Активировать' },
        { name: 'Sinotrans', logo: '🚢', description: 'Отгрузка и доставка бизнес-грузов', benefit: 'Скидка 15% на услуги', action: 'Активировать' },
      ]
    },
    {
      id: 4,
      title: 'Розничный бизнес',
      description: 'Сервисы для старта и развития кафе и ресторанов, франшиз/действующих магазинов, салонов, маркет',
      programs: [
        { name: 'Т-Бизнес', logo: '📱', description: 'Раздевание бизнеса', benefit: 'Кэшбэк 100% за первый запуск рекламы', action: 'Активировать' },
        { name: 'Контур.Эльба', logo: '📊', description: 'Онлайн-бухгалтерия для ИП и ООО', benefit: 'До 1 года бесплатно', action: 'Активировать' },
        { name: 'HeadHunter', logo: '👔', description: 'Площадка для поиска сотрудников', benefit: '30 дней бесплатного размещения вакансии', action: 'Активировать' },
      ]
    },
    {
      id: 5,
      title: 'Маркетплейсы',
      description: 'Сервисы для продавцов на маркетплейсах',
      programs: [
        { name: 'Wildberries', logo: '🛍️', description: 'Продажа на маркетплейсе', benefit: 'Кэшбэк до 5% с оборота', action: 'Активировать' },
        { name: 'OZON', logo: '📦', description: 'Маркетплейс для продавцов', benefit: '3 месяца бесплатного размещения', action: 'Активировать' },
        { name: 'Яндекс Маркет', logo: '🛒', description: 'Продажи через Яндекс', benefit: 'Кэшбэк 10% за первый месяц', action: 'Активировать' },
      ]
    },
    {
      id: 6,
      title: 'Бухгалтерия и учет',
      description: 'Программы для ведения бухгалтерии, отчётности и документооборота',
      programs: [
        { name: 'Контур.Эльба', logo: '📊', description: 'Онлайн-бухгалтерия для ИП и ООО', benefit: 'До 1 года бесплатно', action: 'Активировать' },
        { name: '1С-Отчетность', logo: '📄', description: 'Электронная отчётность', benefit: 'Скидка 20% на год', action: 'Активировать' },
        { name: 'МойСклад', logo: '📦', description: 'Учёт товаров и продаж', benefit: '3 месяца бесплатно', action: 'Активировать' },
      ]
    },
    {
      id: 7,
      title: 'Реклама и маркетинг',
      description: 'Сервисы для продвижения бизнеса, рекламы и привлечения клиентов',
      programs: [
        { name: 'Яндекс Директ', logo: '🎯', description: 'Контекстная реклама', benefit: 'Промокод 10 000 ₽', action: 'Активировать' },
        { name: 'VK Реклама', logo: '📱', description: 'Реклама в соцсетях', benefit: 'Кэшбэк 20% за первую кампанию', action: 'Активировать' },
        { name: 'Авито Реклама', logo: '🏢', description: 'Продвижение объявлений', benefit: '100% кэшбэк бонусами', action: 'Активировать' },
      ]
    },
    {
      id: 8,
      title: 'HR и подбор персонала',
      description: 'Сервисы для поиска сотрудников и управления персоналом',
      programs: [
        { name: 'HeadHunter', logo: '👔', description: 'Поиск сотрудников', benefit: '30 дней бесплатно', action: 'Активировать' },
        { name: 'Работа.ру', logo: '💼', description: 'База резюме', benefit: 'Скидка 25% на пакет', action: 'Активировать' },
        { name: 'Superjob', logo: '🎓', description: 'Подбор персонала', benefit: '2 месяца бесплатно', action: 'Активировать' },
      ]
    },
    {
      id: 9,
      title: 'Логистика и доставка',
      description: 'Сервисы для организации доставки товаров и логистики',
      programs: [
        { name: 'СДЭК', logo: '📮', description: 'Доставка по России', benefit: 'Кэшбэк 5% с отправлений', action: 'Активировать' },
        { name: 'Boxberry', logo: '📦', description: 'Курьерская доставка', benefit: 'Скидка 15% на первый месяц', action: 'Активировать' },
        { name: 'DPD', logo: '🚚', description: 'Международная доставка', benefit: 'Кэшбэк 3%', action: 'Активировать' },
      ]
    },
    {
      id: 10,
      title: 'IT и безопасность',
      description: 'Сервисы для IT-инфраструктуры, кибербезопасности и автоматизации',
      programs: [
        { name: 'Kaspersky', logo: '🔐', description: 'Антивирусная защита бизнеса', benefit: 'Скидка 30% на лицензии', action: 'Активировать' },
        { name: 'Битрикс24', logo: '💻', description: 'CRM и автоматизация', benefit: '6 месяцев бесплатно', action: 'Активировать' },
        { name: 'Яндекс 360', logo: '☁️', description: 'Облачный офис', benefit: 'Кэшбэк 20% и скидка 30%', action: 'Активировать' },
      ]
    },
    {
      id: 11,
      title: 'Образование и развитие',
      description: 'Курсы, тренинги и платформы для обучения сотрудников',
      programs: [
        { name: 'Skillbox', logo: '🎓', description: 'Онлайн-курсы для бизнеса', benefit: 'Скидка 40% на корпоративное обучение', action: 'Активировать' },
        { name: 'Нетология', logo: '📚', description: 'Обучение digital-профессиям', benefit: 'Кэшбэк 15%', action: 'Активировать' },
        { name: 'GeekBrains', logo: '💡', description: 'IT-образование', benefit: '3 месяца бесплатно', action: 'Активировать' },
      ]
    },
    {
      id: 12,
      title: 'Финансы и страхование',
      description: 'Финансовые сервисы, страхование и инвестиции',
      programs: [
        { name: 'Тинькофф Страхование', logo: '🛡️', description: 'Страхование бизнеса', benefit: 'Скидка 20% на полисы', action: 'Активировать' },
        { name: 'Сбер Факторинг', logo: '💰', description: 'Финансирование для бизнеса', benefit: 'Льготная ставка 8%', action: 'Активировать' },
        { name: 'Альфа-Лизинг', logo: '🚗', description: 'Лизинг оборудования', benefit: 'Без первого взноса', action: 'Активировать' },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (hasShownPopup.current) return;
      
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      
      if (scrolled > (fullHeight - windowHeight) * 0.66) {
        setShowLeadForm(true);
        hasShownPopup.current = true;
      }
    };

    const timer = setTimeout(() => {
      if (!hasShownPopup.current) {
        setShowLeadForm(true);
        hasShownPopup.current = true;
      }
    }, 20000);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLeadForm(false);
  };

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

        <section className="py-16" ref={mainRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Отраслевые решения</h2>
            <p className="text-muted-foreground mb-12">Программы лояльности для вашего бизнеса</p>

            <div className="space-y-16">
              {industries.slice(0, visibleIndustries).map((industry) => (
                <div key={industry.id} className="space-y-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{industry.title}</h3>
                      <p className="text-sm text-muted-foreground">{industry.description}</p>
                    </div>
                    <Button variant="link" className="text-primary hidden md:flex items-center gap-1">
                      Все предложения
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                      {industry.programs.map((program, idx) => (
                        <Card key={idx} className="min-w-[300px] md:min-w-[350px] snap-start p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all cursor-pointer flex-shrink-0">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 flex items-center justify-center text-3xl bg-muted/50 rounded-xl">
                              {program.logo}
                            </div>
                            <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                          </div>
                          
                          <h4 className="text-xl font-bold mb-2">{program.name}</h4>
                          <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{program.description}</p>
                          
                          <div className="mb-4">
                            <p className="text-sm font-medium text-primary">{program.benefit}</p>
                          </div>
                          
                          <Button variant="link" className="text-primary p-0 h-auto font-medium">
                            {program.action}
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visibleIndustries < industries.length && (
              <div className="flex justify-center mt-12">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full"
                  onClick={() => setVisibleIndustries(prev => Math.min(prev + 5, industries.length))}
                >
                  Показать ещё отрасли
                </Button>
              </div>
            )}
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

      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">
              Не нашли подходящую программу?
            </DialogTitle>
            <p className="text-center text-muted-foreground">
              Оставьте заявку, и мы поможем подобрать лучшее предложение для вашего бизнеса
            </p>
          </DialogHeader>
          
          <form onSubmit={handleSubmitLead} className="space-y-6 mt-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Мобильный телефон</label>
              <Input 
                type="tel" 
                placeholder="+7 ("
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 rounded-xl"
                required
              />
            </div>

            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1 h-12 rounded-xl"
                onClick={() => setShowLeadForm(false)}
              >
                Перезвонить мне
              </Button>
              <Button 
                type="submit" 
                className="flex-1 h-12 rounded-xl bg-accent hover:bg-accent/90"
              >
                Отправить заявку
              </Button>
            </div>

            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <Icon name="Shield" size={16} className="mt-0.5 flex-shrink-0" />
              <p>
                Мы гарантируем безопасность и сохранность ваших данных
              </p>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку «Отправить заявку» или «Перезвонить мне», вы подтверждаете, что согласны на обработку персональных данных
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;