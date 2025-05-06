
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Icon name="Banknote" className="text-blue-600 h-6 w-6 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">ДеньгиИнфо</h1>
            </div>
            <nav className="flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Главная</Link>
              <Link to="/" className="text-gray-700 hover:text-blue-600">О проекте</Link>
              <Link to="/" className="text-gray-700 hover:text-blue-600">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Наличные деньги в современной жизни человека
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Необходимость или пережиток прошлого?
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Роль наличных денег сегодня</h3>
              <p className="text-gray-700 mb-4">
                В эпоху цифровизации и развития электронных платежей роль наличных денег значительно изменилась.
                Однако наличные по-прежнему остаются важной частью финансовой системы многих стран.
              </p>
              <p className="text-gray-700 mb-4">
                Наличные деньги обеспечивают анонимность, не требуют доступа к технологиям и работают даже при отсутствии
                электричества или интернета. Но они также связаны с рисками хранения, ограничены в использовании и менее удобны
                для крупных транзакций.
              </p>
              <Button variant="outline" className="mt-2">Подробнее о наличных</Button>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Наличные деньги"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Money */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Виды денег</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Banknote" className="mr-2 text-green-600" />
                  Наличные деньги
                </CardTitle>
                <CardDescription>Бумажные купюры и монеты</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Традиционная форма денег, выпускаемая центральными банками. Удобны для небольших покупок,
                  не требуют технических средств для использования.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="CreditCard" className="mr-2 text-blue-600" />
                  Безналичные деньги
                </CardTitle>
                <CardDescription>Банковские счета и карты</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Записи на счетах банков, доступные через карты, онлайн-банкинг и мобильные приложения.
                  Удобны для крупных покупок и дистанционных платежей.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Bitcoin" className="mr-2 text-orange-500" />
                  Электронные деньги
                </CardTitle>
                <CardDescription>Криптовалюты и цифровые активы</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Современная форма денег, существующая только в цифровом виде. Включает криптовалюты,
                  цифровые валюты центральных банков и другие электронные платежные средства.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Money Storage */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Правильное хранение денег</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Icon name="Building" className="mr-2 text-blue-600" />
                  Банковский счёт
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Наиболее распространённый и безопасный способ хранения денег с возможностью получения процентов.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Icon name="Wallet" className="mr-2 text-green-600" />
                  Наличные резервы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Небольшой запас наличных средств для экстренных ситуаций и повседневных расходов.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Icon name="BarChart" className="mr-2 text-purple-600" />
                  Инвестиции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Вложение средств в ценные бумаги, недвижимость или бизнес для получения дохода.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Icon name="Lock" className="mr-2 text-red-600" />
                  Сейфы и хранилища
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Специальные устройства для физической защиты наличных денег и ценностей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Узнайте больше о правильном управлении деньгами</h2>
          <p className="text-white mb-8 max-w-3xl mx-auto">
            Получите доступ к нашим материалам о финансовой грамотности, эффективном использовании различных форм денег
            и оптимальных стратегиях их хранения и приумножения.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Подписаться на новости
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">О проекте</h4>
              <p className="text-gray-300">
                ДеньгиИнфо — образовательный ресурс о роли денег в современном мире, видах денежных средств
                и оптимальных способах их хранения и использования.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ссылки</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Главная</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-white">Статьи</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-white">О нас</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-white">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <p className="text-gray-300 flex items-center mb-2">
                <Icon name="Mail" className="mr-2 h-5 w-5" /> info@dengiinfo.ru
              </p>
              <p className="text-gray-300 flex items-center">
                <Icon name="Phone" className="mr-2 h-5 w-5" /> +7 (800) 123-45-67
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Icon name="Facebook" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Icon name="Twitter" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Icon name="Instagram" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 ДеньгиИнфо. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
