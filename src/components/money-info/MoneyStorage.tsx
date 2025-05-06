
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type StorageOptionProps = {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
};

const StorageOption = ({ icon, title, description, iconColor }: StorageOptionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Icon name={icon} className={`mr-2 ${iconColor}`} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const MoneyStorage = () => {
  const storageOptions = [
    {
      icon: "Building",
      title: "Банковский счёт",
      description: "Наиболее распространённый и безопасный способ хранения денег с возможностью получения процентов.",
      iconColor: "text-blue-600"
    },
    {
      icon: "Wallet",
      title: "Наличные резервы",
      description: "Небольшой запас наличных средств для экстренных ситуаций и повседневных расходов.",
      iconColor: "text-green-600"
    },
    {
      icon: "BarChart",
      title: "Инвестиции",
      description: "Вложение средств в ценные бумаги, недвижимость или бизнес для получения дохода.",
      iconColor: "text-purple-600"
    },
    {
      icon: "Lock",
      title: "Сейфы и хранилища",
      description: "Специальные устройства для физической защиты наличных денег и ценностей.",
      iconColor: "text-red-600"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Правильное хранение денег</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storageOptions.map((option, index) => (
            <StorageOption
              key={index}
              icon={option.icon}
              title={option.title}
              description={option.description}
              iconColor={option.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoneyStorage;
