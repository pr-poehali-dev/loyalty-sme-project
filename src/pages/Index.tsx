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
        { name: 'Авито', logo: '🏢', description: 'Онлайн-сервис для размещения объявлений', benefit: 'Кэшбэк', details: '100% бонусами за продвижение в категории «услуги»', amount: '100%', action: 'Активировать' },
        { name: 'Контур.Эльба', logo: '📊', description: 'Онлайн-бухгалтерия для ИП и ООО', benefit: 'Бесплатно', details: 'До 1 года бесплатного использования', amount: '1 год', action: 'Активировать' },
        { name: 'Яндекс Бизнес', logo: '🎯', description: 'Реклама подписки для ИП/ООО-бизнеса', benefit: 'Бонус', details: '10 000 ₽ на запуск рекламы и сопровождение специалистом', amount: '10 000 ₽', action: 'Активировать' },
        { name: 'Тинькофф Бизнес', logo: '💳', description: 'Расчётный счёт с выгодными условиями', benefit: 'Кэшбэк', details: '5% на остаток по счёту', amount: '5%', action: 'Активировать' },
        { name: 'CloudPayments', logo: '💰', description: 'Приём онлайн-платежей', benefit: 'Скидка', details: 'Льготный тариф 1,8% на 3 месяца', amount: '1.8%', action: 'Активировать' },
      ]
    },
    {
      id: 2,
      title: 'Работа в онлайне',
      description: 'Сервисы для перевода бизнеса в интернет и работы в онлайне',
      programs: [
        { name: 'CloudKassir', logo: '💳', description: 'Онлайн-касса для интернет-магазина', benefit: 'Скидка', details: '15 000 ₽ на первый год обслуживания', amount: '15 000 ₽', action: 'Активировать' },
        { name: 'Яндекс Директ', logo: '🎯', description: 'Реклама в Поиске, Картах и Рекламной сети', benefit: 'Промокод', details: '10 000 ₽ для нового рекламного запуска', amount: '10 000 ₽', action: 'Активировать' },
        { name: 'Контур.Эльба', logo: '📊', description: 'Онлайн-бухгалтерия для ИП и ООО', benefit: 'Бесплатно', details: 'До 1 года бесплатного использования', amount: '1 год', action: 'Активировать' },
        { name: 'Битрикс24', logo: '💻', description: 'CRM и управление бизнесом', benefit: 'Бесплатно', details: '6 месяцев тарифа "Профессиональный"', amount: '6 мес', action: 'Активировать' },
        { name: 'Getcourse', logo: '🎓', description: 'Платформа для онлайн-школ', benefit: 'Скидка', details: '20% на первый год', amount: '20%', action: 'Активировать' },
      ]
    },
    {
      id: 3,
      title: 'Всё для ВЭД',
      description: 'Сервисы для работы с экспортом/импортом, таможенным оформлением, ВЭД-контрактами и ведение расчётов',
      programs: [
        { name: 'Weconn', logo: '🌐', description: 'Услуги для импорта и экспорта', benefit: 'Бесплатно', details: 'Бесплатная консультация по импорту', amount: '0 ₽', action: 'Активировать' },
        { name: 'Сервис GtPaid', logo: '💰', description: 'Приём платежей через сервис «GtPaid»', benefit: 'Кэшбэк', details: '2% от суммы транзакций', amount: '2%', action: 'Активировать' },
        { name: 'Sinotrans', logo: '🚢', description: 'Отгрузка и доставка бизнес-грузов', benefit: 'Скидка', details: '15% на услуги логистики', amount: '15%', action: 'Активировать' },
        { name: 'Logsis', logo: '📦', description: 'Таможенное оформление и ВЭД', benefit: 'Скидка', details: '10% на декларирование', amount: '10%', action: 'Активировать' },
        { name: 'AlphaPay', logo: '💳', description: 'Международные переводы', benefit: 'Скидка', details: 'Льготная комиссия 0,5%', amount: '0.5%', action: 'Активировать' },
      ]
    },
    {
      id: 4,
      title: 'Розничный бизнес',
      description: 'Сервисы для старта и развития кафе и ресторанов, франшиз/действующих магазинов, салонов',
      programs: [
        { name: 'iiko', logo: '🍽️', description: 'Автоматизация ресторанов и кафе', benefit: 'Скидка', details: '30% на первые 6 месяцев', amount: '30%', action: 'Активировать' },
        { name: '2ГИС Реклама', logo: '📍', description: 'Продвижение в 2ГИС', benefit: 'Кэшбэк', details: '50% за первую рекламную кампанию', amount: '50%', action: 'Активировать' },
        { name: 'HeadHunter', logo: '👔', description: 'Площадка для поиска сотрудников', benefit: 'Бесплатно', details: '30 дней размещения вакансии', amount: '30 дней', action: 'Активировать' },
        { name: 'МойСклад', logo: '📦', description: 'Учёт товаров, продаж и склада', benefit: 'Бесплатно', details: '3 месяца тарифа "Базовый"', amount: '3 мес', action: 'Активировать' },
        { name: 'Poster', logo: '💳', description: 'POS-система для кафе и магазинов', benefit: 'Скидка', details: '20% на оборудование и ПО', amount: '20%', action: 'Активировать' },
      ]
    },
    {
      id: 5,
      title: 'Маркетплейсы',
      description: 'Сервисы для продавцов на маркетплейсах',
      programs: [
        { name: 'Wildberries', logo: '🛍️', description: 'Продажа на маркетплейсе', benefit: 'Кэшбэк', details: 'До 5% с оборота первые 3 месяца', amount: '5%', action: 'Активировать' },
        { name: 'OZON', logo: '📦', description: 'Маркетплейс для продавцов', benefit: 'Бесплатно', details: '3 месяца размещения без комиссии', amount: '3 мес', action: 'Активировать' },
        { name: 'Яндекс Маркет', logo: '🛒', description: 'Продажи через Яндекс', benefit: 'Кэшбэк', details: '10% за первый месяц продаж', amount: '10%', action: 'Активировать' },
        { name: 'AliExpress Россия', logo: '🌏', description: 'Международная торговая площадка', benefit: 'Бонус', details: '5 000 ₽ на рекламу товаров', amount: '5 000 ₽', action: 'Активировать' },
        { name: 'Мегамаркет', logo: '🏬', description: 'Маркетплейс Сбера', benefit: 'Скидка', details: '0% комиссии на 2 месяца', amount: '2 мес', action: 'Активировать' },
      ]
    },
    {
      id: 6,
      title: 'Бухгалтерия и учет',
      description: 'Программы для ведения бухгалтерии, отчётности и документооборота',
      programs: [
        { name: 'Контур.Эльба', logo: '📊', description: 'Онлайн-бухгалтерия для ИП и ООО', benefit: 'Бесплатно', details: 'До 1 года использования сервиса', amount: '1 год', action: 'Активировать' },
        { name: '1С-Отчетность', logo: '📄', description: 'Электронная отчётность', benefit: 'Скидка', details: '20% на годовой тариф', amount: '20%', action: 'Активировать' },
        { name: 'МойСклад', logo: '📦', description: 'Учёт товаров и продаж', benefit: 'Бесплатно', details: '3 месяца тарифа "Базовый"', amount: '3 мес', action: 'Активировать' },
        { name: 'Контур.Диадок', logo: '📨', description: 'Электронный документооборот', benefit: 'Бесплатно', details: '100 документов в месяц', amount: '100 док', action: 'Активировать' },
        { name: 'Небо', logo: '☁️', description: 'Облачная 1С для бизнеса', benefit: 'Скидка', details: '25% на первые 6 месяцев', amount: '25%', action: 'Активировать' },
      ]
    },
    {
      id: 7,
      title: 'Реклама и маркетинг',
      description: 'Сервисы для продвижения бизнеса, рекламы и привлечения клиентов',
      programs: [
        { name: 'Яндекс Директ', logo: '🎯', description: 'Контекстная реклама', benefit: 'Промокод', details: '10 000 ₽ на запуск кампании', amount: '10 000 ₽', action: 'Активировать' },
        { name: 'VK Реклама', logo: '📱', description: 'Реклама в соцсетях', benefit: 'Кэшбэк', details: '20% за первую кампанию', amount: '20%', action: 'Активировать' },
        { name: 'Авито Реклама', logo: '🏢', description: 'Продвижение объявлений', benefit: 'Кэшбэк', details: '100% бонусами до 5 000 ₽', amount: '100%', action: 'Активировать' },
        { name: 'Telegram Ads', logo: '✈️', description: 'Реклама в Telegram', benefit: 'Бонус', details: '3 000 ₽ на первый запуск', amount: '3 000 ₽', action: 'Активировать' },
        { name: 'Яндекс Бизнес', logo: '📊', description: 'Продвижение на Яндекс Картах', benefit: 'Бесплатно', details: '2 месяца тарифа "Оптимальный"', amount: '2 мес', action: 'Активировать' },
      ]
    },
    {
      id: 8,
      title: 'HR и подбор персонала',
      description: 'Сервисы для поиска сотрудников и управления персоналом',
      programs: [
        { name: 'HeadHunter', logo: '👔', description: 'Поиск сотрудников', benefit: 'Бесплатно', details: '30 дней размещения вакансии', amount: '30 дней', action: 'Активировать' },
        { name: 'Работа.ру', logo: '💼', description: 'База резюме', benefit: 'Скидка', details: '25% на пакет вакансий', amount: '25%', action: 'Активировать' },
        { name: 'Superjob', logo: '🎓', description: 'Подбор персонала', benefit: 'Бесплатно', details: '2 месяца доступа к базе резюме', amount: '2 мес', action: 'Активировать' },
        { name: 'Зарплата.ру', logo: '💰', description: 'Поиск сотрудников в регионах', benefit: 'Скидка', details: '30% на годовой пакет', amount: '30%', action: 'Активировать' },
        { name: 'Авито Работа', logo: '🏢', description: 'Размещение вакансий', benefit: 'Кэшбэк', details: '50% бонусами за размещение', amount: '50%', action: 'Активировать' },
      ]
    },
    {
      id: 9,
      title: 'Логистика и доставка',
      description: 'Сервисы для организации доставки товаров и логистики',
      programs: [
        { name: 'СДЭК', logo: '📮', description: 'Доставка по России', benefit: 'Кэшбэк', details: '5% с отправлений первые 3 месяца', amount: '5%', action: 'Активировать' },
        { name: 'Boxberry', logo: '📦', description: 'Курьерская доставка', benefit: 'Скидка', details: '15% на первый месяц', amount: '15%', action: 'Активировать' },
        { name: 'DPD', logo: '🚚', description: 'Международная доставка', benefit: 'Кэшбэк', details: '3% от суммы отправлений', amount: '3%', action: 'Активировать' },
        { name: 'ПЭК', logo: '🚛', description: 'Грузоперевозки по России', benefit: 'Скидка', details: '10% на первые 5 отправлений', amount: '10%', action: 'Активировать' },
        { name: 'Деловые Линии', logo: '📦', description: 'Доставка грузов', benefit: 'Бонус', details: '2 000 ₽ на первый заказ', amount: '2 000 ₽', action: 'Активировать' },
      ]
    },
    {
      id: 10,
      title: 'IT и безопасность',
      description: 'Сервисы для IT-инфраструктуры, кибербезопасности и автоматизации',
      programs: [
        { name: 'Kaspersky', logo: '🔐', description: 'Антивирусная защита бизнеса', benefit: 'Скидка', details: '30% на лицензии на год', amount: '30%', action: 'Активировать' },
        { name: 'Битрикс24', logo: '💻', description: 'CRM и автоматизация', benefit: 'Бесплатно', details: '6 месяцев тарифа "Профессиональный"', amount: '6 мес', action: 'Активировать' },
        { name: 'Яндекс 360', logo: '☁️', description: 'Облачный офис', benefit: 'Комбо', details: 'Кэшбэк 20% и скидка 30%', amount: '20%+30%', action: 'Активировать' },
        { name: 'Timeweb Cloud', logo: '☁️', description: 'Облачные серверы', benefit: 'Бонус', details: '5 000 ₽ на баланс', amount: '5 000 ₽', action: 'Активировать' },
        { name: 'VK WorkSpace', logo: '💼', description: 'Корпоративный мессенджер', benefit: 'Бесплатно', details: '3 месяца Premium для команды', amount: '3 мес', action: 'Активировать' },
      ]
    },
    {
      id: 11,
      title: 'Образование и развитие',
      description: 'Курсы, тренинги и платформы для обучения сотрудников',
      programs: [
        { name: 'Skillbox', logo: '🎓', description: 'Онлайн-курсы для бизнеса', benefit: 'Скидка', details: '40% на корпоративное обучение', amount: '40%', action: 'Активировать' },
        { name: 'Нетология', logo: '📚', description: 'Обучение digital-профессиям', benefit: 'Кэшбэк', details: '15% от стоимости курсов', amount: '15%', action: 'Активировать' },
        { name: 'GeekBrains', logo: '💡', description: 'IT-образование', benefit: 'Бесплатно', details: '3 месяца доступа к платформе', amount: '3 мес', action: 'Активировать' },
        { name: 'Яндекс Практикум', logo: '📖', description: 'Онлайн-университет', benefit: 'Скидка', details: '25% на курсы для команды', amount: '25%', action: 'Активировать' },
        { name: 'Coursera', logo: '🌍', description: 'Международные курсы', benefit: 'Бонус', details: '10 000 ₽ на обучение команды', amount: '10 000 ₽', action: 'Активировать' },
      ]
    },
    {
      id: 12,
      title: 'Финансы и страхование',
      description: 'Финансовые сервисы, страхование и инвестиции',
      programs: [
        { name: 'Тинькофф Страхование', logo: '🛡️', description: 'Страхование бизнеса', benefit: 'Скидка', details: '20% на полисы для бизнеса', amount: '20%', action: 'Активировать' },
        { name: 'Сбер Факторинг', logo: '💰', description: 'Финансирование для бизнеса', benefit: 'Ставка', details: 'Льготная ставка от 8% годовых', amount: '8%', action: 'Активировать' },
        { name: 'Альфа-Лизинг', logo: '🚗', description: 'Лизинг оборудования', benefit: 'Условие', details: 'Без первоначального взноса', amount: '0%', action: 'Активировать' },
        { name: 'Ингосстрах', logo: '🛡️', description: 'Страхование имущества', benefit: 'Скидка', details: '15% на полисы', amount: '15%', action: 'Активировать' },
        { name: 'ВТБ Факторинг', logo: '💳', description: 'Пополнение оборотных средств', benefit: 'Ставка', details: 'От 9,5% годовых', amount: '9.5%', action: 'Активировать' },
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
      <header className="border-b border-border bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="text-2xl font-bold text-accent">A</div>
              <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium">
                <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">Частным лицам</a>
                <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">Малому бизнесу и ИП</a>
                <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">Среднему и крупному бизнесу</a>
              </nav>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-muted hidden sm:flex">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-muted hidden sm:flex">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="ghost" className="hidden md:inline-flex hover:bg-muted text-xs lg:text-sm">
                Онлайн-заявка
              </Button>
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full text-xs md:text-sm px-4 md:px-6">Войти</Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-8 md:py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
              <Card className="p-6 md:p-8 lg:p-12 bg-gradient-to-br from-primary via-purple-600 to-secondary rounded-3xl border-0 overflow-hidden relative">
                <div className="relative z-10">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
                    Альфа-Выгодно<br />для бизнеса
                  </h1>
                  <p className="text-base md:text-lg mb-6 text-white/90">
                    Получайте баллы за привычные<br />
                    операции и тратьте<br />
                    их как захотите. 1 балл = 1 ₽
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 md:px-8">
                    Подключить
                  </Button>
                </div>
                <div className="absolute right-0 bottom-0 w-48 md:w-64 h-48 md:h-64 opacity-20">
                  <div className="text-[120px] md:text-[200px] font-black text-white leading-none">АЛЬФА ВЫГОДНО</div>
                </div>
              </Card>

              <div className="grid gap-3 md:gap-4">
                <Card className="p-4 md:p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs md:text-sm font-medium text-gray-700 mb-1">Кэшбэк до 50%</div>
                      <div className="text-base md:text-lg font-bold text-gray-900">от Авито Рекламы</div>
                    </div>
                    <div className="text-4xl md:text-5xl">🎁</div>
                  </div>
                </Card>

                <Card className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-0 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs md:text-sm font-medium text-gray-700 mb-1">Кэшбэк 50%</div>
                      <div className="text-base md:text-lg font-bold text-gray-900">в Яндекс Директе</div>
                    </div>
                    <div className="text-4xl md:text-5xl">50%</div>
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <Card className="p-3 md:p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-0 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-xs font-medium text-gray-700 mb-1">Кэшбэк и скидка</div>
                    <div className="text-xs md:text-sm font-bold text-gray-900 mb-2">до 30% на Яндекс 360</div>
                    <div className="text-2xl md:text-3xl">🔵</div>
                  </Card>

                  <Card className="p-3 md:p-4 bg-gradient-to-br from-green-50 to-green-100 border-0 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-xs font-medium text-gray-700 mb-1">Кэшбэк до 8%</div>
                    <div className="text-xs md:text-sm font-bold text-gray-900 mb-2">от ВкусВилл</div>
                    <div className="text-2xl md:text-3xl">🥗</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" ref={mainRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">Отраслевые решения</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-12">Программы лояльности для вашего бизнеса</p>

            <div className="space-y-12 md:space-y-16">
              {industries.slice(0, visibleIndustries).map((industry) => (
                <div key={industry.id} className="space-y-4 md:space-y-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{industry.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{industry.description}</p>
                    </div>
                    <Button variant="link" className="text-primary hidden lg:flex items-center gap-1 text-sm">
                      Все предложения
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>

                  <div className="relative group">
                    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth">
                      {industry.programs.map((program, idx) => (
                        <Card 
                          key={idx} 
                          className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] snap-start p-5 md:p-6 bg-card border border-border rounded-2xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer flex-shrink-0 animate-fade-in flex flex-col h-[320px]" 
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-2xl md:text-3xl bg-muted rounded-xl flex-shrink-0">
                              {program.logo}
                            </div>
                            <Icon name="ArrowRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          
                          <h4 className="text-lg md:text-xl font-bold mb-2">{program.name}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">{program.description}</p>
                          
                          <div className="mb-4 pb-4 border-b border-border">
                            <p className="text-xs text-muted-foreground mb-1">{program.benefit}</p>
                            <p className="text-lg md:text-xl font-bold text-foreground mb-1">{program.amount}</p>
                            <p className="text-xs text-muted-foreground line-clamp-2">{program.details}</p>
                          </div>
                          
                          <Button variant="link" className="text-primary p-0 h-auto font-medium hover:gap-2 transition-all flex items-center gap-1 text-sm mt-auto">
                            {program.action}
                            <Icon name="ArrowRight" size={16} />
                          </Button>
                        </Card>
                      ))}
                    </div>
                    
                    <button 
                      className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted z-10"
                      onClick={(e) => {
                        const container = e.currentTarget.parentElement?.querySelector('.overflow-x-auto');
                        if (container) container.scrollBy({ left: -350, behavior: 'smooth' });
                      }}
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    
                    <button 
                      className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted z-10"
                      onClick={(e) => {
                        const container = e.currentTarget.parentElement?.querySelector('.overflow-x-auto');
                        if (container) container.scrollBy({ left: 350, behavior: 'smooth' });
                      }}
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
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

        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Как начать получать выгоду</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-4 md:px-6 text-xs md:text-sm">
                    Не клиент Альфа-Бизнес
                  </Button>
                  <Button variant="outline" className="rounded-full px-4 md:px-6 text-xs md:text-sm">
                    Клиент Альфа-Бизнес
                  </Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                <div className="text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-bold text-lg md:text-xl mx-auto mb-3 md:mb-4">
                    1
                  </div>
                  <h3 className="text-base md:text-xl font-bold mb-2">Заявка</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Заполните заявку и откройте бесплатный счёт для бизнеса
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-bold text-lg md:text-xl mx-auto mb-3 md:mb-4">
                    2
                  </div>
                  <h3 className="text-base md:text-xl font-bold mb-2">Войдите в интернет-банк Альфа-Бизнес</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Авторизуйтесь под своими учётными данными
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-bold text-lg md:text-xl mx-auto mb-3 md:mb-4">
                    3
                  </div>
                  <h3 className="text-base md:text-xl font-bold mb-2">Готово</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Перейдите в раздел Альфа-Выгодно для бизнеса и начинайте получать выгоду
                  </p>
                </div>
              </div>

              <Card className="p-6 md:p-8 lg:p-12 bg-card rounded-3xl shadow-lg max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">
                  Заявка на открытие счёта<br />для бизнеса
                </h3>

                <form className="space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm text-muted-foreground">Мобильный телефон</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 ("
                      className="h-11 md:h-12 rounded-xl bg-muted/50 border-0 text-sm md:text-base"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1 h-11 md:h-12 rounded-xl text-xs md:text-sm"
                    >
                      Перезвонить мне
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1 h-11 md:h-12 rounded-xl bg-accent hover:bg-accent/90 text-xs md:text-sm"
                    >
                      Отправить заявку
                    </Button>
                  </div>

                  <div className="flex items-start gap-3 p-3 md:p-4 bg-muted/50 rounded-xl">
                    <Icon name="Shield" size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">
                      Мы гарантируем безопасность и сохранность ваших данных
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку «Отправить заявку» или «Перезвонить мне», вы подтверждаете, что согласны на обработку персональных данных
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Частным лицам</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Карты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Счета и вклады</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредиты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Бизнесу</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Расчётный счёт</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Эквайринг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кредиты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">О банке</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Поддержка</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Офисы и банкоматы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
              </ul>
            </div>
          </div>
          <div className="text-xs md:text-sm text-muted-foreground text-center pt-6 md:pt-8 border-t border-border">
            © 2025 АО «Альфа-Банк». Генеральная лицензия Банка России № 1326 от 16.01.2015
          </div>
        </div>
      </footer>

      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl mx-4">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold text-center mb-2">
              Не нашли подходящую программу?
            </DialogTitle>
            <p className="text-sm md:text-base text-center text-muted-foreground">
              Оставьте заявку, и мы поможем подобрать лучшее предложение для вашего бизнеса
            </p>
          </DialogHeader>
          
          <form onSubmit={handleSubmitLead} className="space-y-4 md:space-y-6 mt-4 md:mt-6">
            <div className="space-y-2">
              <label className="text-xs md:text-sm font-medium">Мобильный телефон</label>
              <Input 
                type="tel" 
                placeholder="+7 ("
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-11 md:h-12 rounded-xl text-sm md:text-base"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1 h-11 md:h-12 rounded-xl text-xs md:text-sm"
                onClick={() => setShowLeadForm(false)}
              >
                Перезвонить мне
              </Button>
              <Button 
                type="submit" 
                className="flex-1 h-11 md:h-12 rounded-xl bg-accent hover:bg-accent/90 text-xs md:text-sm"
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
