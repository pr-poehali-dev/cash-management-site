
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MoneyTypeCard = ({ 
  icon, 
  title, 
  subtitle, 
  description 
}: { 
  icon: string; 
  title: string; 
  subtitle: string; 
  description: string; 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon name={icon} className={`mr-2 ${
            icon === "Banknote" ? "text-green-600" : 
            icon === "CreditCard" ? "text-blue-600" : "text-orange-500"
          }`} />
          {title}
        </CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

const MoneyTypes = () => {
  const moneyTypes = [
    {
      icon: "Banknote",
      title: "Наличные деньги",
      subtitle: "Бумажные купюры и монеты",
      description: "Традиционная форма денег, выпускаемая центральными банками. Удобны для небольших покупок, не требуют технических средств для использования."
    },
    {
      icon: "CreditCard",
      title: "Безналичные деньги",
      subtitle: "Банковские счета и карты",
      description: "Записи на счетах банков, доступные через карты, онлайн-банкинг и мобильные приложения. Удобны для крупных покупок и дистанционных платежей."
    },
    {
      icon: "Bitcoin",
      title: "Электронные деньги",
      subtitle: "Криптовалюты и цифровые активы",
      description: "Современная форма денег, существующая только в цифровом виде. Включает криптовалюты, цифровые валюты центральных банков и другие электронные платежные средства."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Виды денег</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moneyTypes.map((type, index) => (
            <MoneyTypeCard 
              key={index}
              icon={type.icon}
              title={type.title}
              subtitle={type.subtitle}
              description={type.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoneyTypes;
