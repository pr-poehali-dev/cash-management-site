
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const StatItem = ({ title, value, maxValue, color }: { title: string; value: number; maxValue: number; color: string }) => {
  const percentage = (value / maxValue) * 100;
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <span className="text-sm font-medium text-gray-700">{value}%</span>
      </div>
      <Progress value={percentage} className={`h-2 ${color}`} />
    </div>
  );
};

const StatisticsSection = () => {
  const countryStats = [
    { title: "Швеция", value: 13, maxValue: 100, color: "bg-blue-500" },
    { title: "США", value: 31, maxValue: 100, color: "bg-green-500" },
    { title: "Германия", value: 58, maxValue: 100, color: "bg-yellow-500" },
    { title: "Япония", value: 62, maxValue: 100, color: "bg-red-500" },
    { title: "Индия", value: 85, maxValue: 100, color: "bg-purple-500" }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Статистика использования наличных</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Доля наличных платежей по странам (2024)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {countryStats.map((stat, index) => (
                  <StatItem 
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    maxValue={stat.maxValue}
                    color={stat.color}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">* Процент от общего количества транзакций</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Тенденции и прогнозы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-medium">Снижение использования наличных</h3>
                  <p className="text-sm text-gray-600">Глобальное снижение доли наличных платежей на 5-7% ежегодно.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-medium">Рост мобильных платежей</h3>
                  <p className="text-sm text-gray-600">Увеличение объема мобильных платежей на 24% в год.</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <h3 className="font-medium">Цифровые валюты центробанков</h3>
                  <p className="text-sm text-gray-600">Более 80% центральных банков изучают возможность внедрения CBDC.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h3 className="font-medium">Банкоматная сеть</h3>
                  <p className="text-sm text-gray-600">Сокращение количества банкоматов на 2-3% ежегодно в развитых странах.</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">* По данным Всемирного банка и национальных центральных банков</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
