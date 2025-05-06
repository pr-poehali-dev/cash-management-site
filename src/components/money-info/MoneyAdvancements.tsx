
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Timeline, TimelineItem, TimelineContent, TimelineDot, TimelineSeparator, TimelineConnector } from "@/components/custom/Timeline";

const MoneyAdvancements = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Эволюция денег</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot icon="Coins" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h3 className="font-semibold">Металлические деньги</h3>
                  <p className="text-gray-600">Первые монеты появились около 700 г. до н.э. в Лидии (территория современной Турции).</p>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot icon="Scroll" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h3 className="font-semibold">Бумажные деньги</h3>
                  <p className="text-gray-600">Впервые появились в Китае во времена династии Тан (618-907 гг.). В Европе распространились с XVII века.</p>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot icon="CreditCard" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h3 className="font-semibold">Безналичные платежи</h3>
                  <p className="text-gray-600">Массовое распространение получили во второй половине XX века с появлением банковских карт.</p>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot icon="Smartphone" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h3 className="font-semibold">Мобильные платежи</h3>
                  <p className="text-gray-600">Стали популярны в 2010-х годах с развитием смартфонов и технологий NFC.</p>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot icon="Bitcoin" />
                </TimelineSeparator>
                <TimelineContent>
                  <h3 className="font-semibold">Криптовалюты</h3>
                  <p className="text-gray-600">Начиная с биткоина в 2009 году, представляют новый тип децентрализованных цифровых активов.</p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Icon name="TrendingUp" className="mr-2 text-blue-600" />
                  Будущее денег
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Дальнейшее развитие денежных систем, вероятно, будет связано с цифровыми валютами центральных банков (CBDC), 
                  которые сочетают технологические преимущества криптовалют с государственным регулированием.
                </p>
                <p className="text-gray-700">
                  Эксперты прогнозируют постепенное снижение доли наличных в обороте, но не их полное исчезновение. 
                  Важными факторами останутся вопросы кибербезопасности, конфиденциальности и доступности платежных средств.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Icon name="Globe" className="mr-2 text-green-600" />
                  Региональные различия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  В разных странах отношение к наличным деньгам существенно различается:
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-2">
                  <li>Швеция и Норвегия близки к созданию безналичного общества</li>
                  <li>Япония и Германия сохраняют высокую долю наличных платежей</li>
                  <li>Китай быстро переходит на мобильные платежи</li>
                  <li>В развивающихся странах наличные остаются основным платежным средством</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyAdvancements;
