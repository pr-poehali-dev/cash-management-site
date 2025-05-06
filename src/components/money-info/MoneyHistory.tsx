
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const MoneyHistory = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">История денег: от древности до наших дней</h2>
        
        <Tabs defaultValue="ancient" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
            <TabsTrigger value="ancient">Древний мир</TabsTrigger>
            <TabsTrigger value="medieval">Средневековье</TabsTrigger>
            <TabsTrigger value="modern">Новое время</TabsTrigger>
            <TabsTrigger value="industrial">Индустриальная эпоха</TabsTrigger>
            <TabsTrigger value="digital">Цифровая эра</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ancient" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="History" className="mr-2 text-amber-600" />
                  Бартер и товарные деньги (10000-3000 до н.э.)
                </h3>
                <p className="text-gray-700 mb-4">
                  До появления денег в современном понимании люди использовали бартер — прямой обмен товарами и услугами. 
                  С развитием торговли возникли первые товарные деньги — предметы, которые принимались в качестве оплаты за их внутреннюю ценность:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Скот (особенно крупный рогатый)</li>
                  <li>Раковины каури (использовались в Африке, Азии и Океании)</li>
                  <li>Соль (особенно ценна в регионах, удаленных от моря)</li>
                  <li>Зерно и другие сельскохозяйственные товары</li>
                  <li>Меха и шкуры (особенно в северных регионах)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="Coins" className="mr-2 text-amber-600" />
                  Первые монеты (700-600 до н.э.)
                </h3>
                <p className="text-gray-700 mb-4">
                  Первые стандартизированные металлические монеты появились в Лидии (территория современной Турции) 
                  около 700-650 гг. до н.э. Они были изготовлены из электрума — природного сплава золота и серебра.
                </p>
                <p className="text-gray-700 mb-4">
                  Вскоре идея металлических денег распространилась по всему древнему миру:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Древняя Греция: полисы начали чеканить серебряные драхмы</li>
                  <li>Персидская империя: золотые дарики стали международной валютой</li>
                  <li>Римская империя: создала сложную монетную систему с денарием в основе</li>
                  <li>Древний Китай: изобрел круглые монеты с отверстием в центре</li>
                  <li>Древняя Индия: использовала серебряные каршапаны и пурпаны</li>
                </ul>
              </div>
            </div>
            <Card className="mt-6">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic">
                  "Использование драгоценных металлов в качестве денег стало революционным шагом в экономической истории. 
                  Монеты обладали внутренней ценностью, были портативными, долговечными и легко делимыми, что сделало их 
                  идеальным средством обмена для растущих экономик древнего мира."
                </p>
                <p className="text-right font-semibold mt-2">— Профессор Йорам Барзел, историк экономики</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="medieval" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="Building" className="mr-2 text-amber-600" />
                  Банковская система и векселя (1000-1500)
                </h3>
                <p className="text-gray-700 mb-4">
                  В средневековой Европе происходило развитие банковской системы, особенно в итальянских городах-государствах:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Банкирские дома Медичи, Барди и Перуцци стали первыми международными банками</li>
                  <li>Появились переводные векселя, позволявшие купцам избегать перевозки наличных</li>
                  <li>Система двойной бухгалтерии, разработанная в Италии, улучшила финансовый учет</li>
                  <li>Тамплиеры создали одну из первых систем международных платежей</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  В Китае во времена династии Сун (960-1279) появились первые бумажные деньги — "летающие деньги" (фэйцянь), 
                  которые первоначально были расписками для купцов, чтобы избежать перевозки тяжелых медных монет.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="Crown" className="mr-2 text-amber-600" />
                  Монетные дворы и порча монет (1200-1600)
                </h3>
                <p className="text-gray-700 mb-4">
                  Право чеканки монет стало одной из важнейших королевских привилегий. Монархи часто прибегали к "порче монет" —
                  уменьшению содержания драгоценных металлов для пополнения казны:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Филипп IV Красивый во Франции значительно снизил содержание серебра в монетах</li>
                  <li>Генрих VIII в Англии получил прозвище "Старый Медная Нос" из-за порчи серебряных монет</li>
                  <li>Экономические кризисы, вызванные обесцениванием денег, были частыми явлениями</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Появились первые законы против фальшивомонетчиков с жестокими наказаниями (часто смертная казнь). 
                  В разных регионах формировались торговые союзы с собственными валютными системами, например, Ганзейский союз.
                </p>
              </div>
            </div>
            <Card className="mt-6">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h4 className="font-semibold mb-2">Исламский мир и инновации</h4>
                    <p className="text-gray-700">
                      В исламском мире развивались собственные финансовые инновации. Появились сукук (исламские облигации), 
                      хавала (система перевода денег на основе доверия) и различные формы партнерства, соответствующие исламским 
                      принципам запрета риба (процента).
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <h4 className="font-semibold mb-2">Серебряный кризис</h4>
                    <p className="text-gray-700">
                      В конце средневековья Европа столкнулась с "серебряным голодом" из-за истощения месторождений и оттока 
                      серебра на Восток. Ситуация изменилась после испанского завоевания Америки и открытия богатых серебряных 
                      рудников в Потоси (современная Боливия).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="modern" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="BanknoteIcon" className="mr-2 text-amber-600" />
                  Банкноты и первые центральные банки (1600-1800)
                </h3>
                <p className="text-gray-700 mb-4">
                  XVII-XVIII века стали временем революционных изменений в денежной системе:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Банк Швеции (1668) и Банк Англии (1694) — первые настоящие центральные банки</li>
                  <li>Появление банкнот, первоначально как расписок о депозите золота или серебра</li>
                  <li>Эксперимент Джона Ло с бумажными деньгами во Франции (1716-1720) и его крах</li>
                  <li>Колониальные валюты в Америке — от вампума до континентальных долларов</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Этот период характеризовался многочисленными финансовыми экспериментами, некоторые из которых приводили 
                  к спекулятивным пузырям, как "Тюльпаномания" в Нидерландах или "Пузырь Южных морей" в Англии.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="Scale" className="mr-2 text-amber-600" />
                  Золотой стандарт (1800-1900)
                </h3>
                <p className="text-gray-700 mb-4">
                  XIX век стал эпохой золотого стандарта — привязки национальных валют к золоту:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Великобритания официально перешла на золотой стандарт в 1816 году</li>
                  <li>Большинство развитых стран приняли золотой стандарт к концу XIX века</li>
                  <li>Установление фиксированных обменных курсов между валютами</li>
                  <li>Период относительной ценовой стабильности и роста международной торговли</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Это время также характеризовалось унификацией национальных валют. Например, в Германии после объединения 
                  в 1871 году множество местных валют были заменены единой рейхсмаркой. В США Закон о национальной валюте 1863 года 
                  начал процесс стандартизации, ранее децентрализованной банковской системы.
                </p>
              </div>
            </div>
            <Card className="mt-6 bg-amber-50">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2 text-center">Экономическая теория и деньги</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border-r border-amber-200 pr-4 last:border-0">
                    <p className="text-gray-700 font-semibold mb-1">Адам Смит</p>
                    <p className="text-sm text-gray-600">
                      В "Богатстве народов" (1776) анализировал роль денег как средства обмена и меры стоимости, 
                      подчеркивая, что настоящее богатство создается производительным трудом, а не накоплением золота.
                    </p>
                  </div>
                  <div className="md:border-r md:border-amber-200 md:pr-4 last:border-0">
                    <p className="text-gray-700 font-semibold mb-1">Давид Рикардо</p>
                    <p className="text-sm text-gray-600">
                      Разработал теорию сравнительных преимуществ и выступал за стабильную денежную систему, 
                      основанную на золоте. Его взгляды повлияли на монетарную политику Британии в XIX веке.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">Карл Маркс</p>
                    <p className="text-sm text-gray-600">
                      Рассматривал деньги как особый товар, служащий всеобщим эквивалентом. Анализировал превращение 
                      денег в капитал и критиковал капиталистическую денежную систему в "Капитале" (1867).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="industrial" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="Factory" className="mr-2 text-amber-600" />
                  Мировые войны и отказ от золота (1914-1971)
                </h3>
                <p className="text-gray-700 mb-4">
                  Мировые войны и Великая депрессия радикально изменили мировую финансовую систему:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Первая мировая война: большинство стран приостановили конвертируемость валют в золото</li>
                  <li>Гиперинфляция в Германии (1923) и других странах после войны</li>
                  <li>Великая депрессия (1929-1939) привела к краху золотого стандарта</li>
                  <li>Бреттон-Вудская система (1944): доллар привязан к золоту, другие валюты к доллару</li>
                  <li>"Никсоновский шок" (1971): США отменили конвертируемость доллара в золото</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Этот период также характеризовался расширением функций центральных банков, которые стали не только эмитентами 
                  валюты, но и инструментами макроэкономической политики, способными влиять на экономический цикл.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="Landmark" className="mr-2 text-amber-600" />
                  Фиатные деньги и монетаризм (1971-2000)
                </h3>
                <p className="text-gray-700 mb-4">
                  После отказа от золотого стандарта мир перешел к системе фиатных денег, не обеспеченных драгоценными металлами:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Ямайская валютная система (1976) установила режим плавающих обменных курсов</li>
                  <li>Инфляционный кризис 1970-х годов</li>
                  <li>Монетаристская революция Пола Волкера в ФРС США и Маргарет Тэтчер в Великобритании</li>
                  <li>Создание Европейской валютной системы (1979) и евро (1999)</li>
                  <li>Долговые и валютные кризисы в развивающихся странах</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  В этот период произошел переход к инфляционному таргетированию как основному инструменту денежно-кредитной политики. 
                  Центральные банки получили большую независимость от правительств и сфокусировались на поддержании ценовой стабильности.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Icon name="BookText" className="mr-2 text-amber-600" size={18} />
                    Теория Кейнса
                  </h4>
                  <p className="text-sm text-gray-700">
                    Джон Мейнард Кейнс революционизировал экономическую теорию, обосновав необходимость государственного 
                    вмешательства в экономику через денежно-кредитную и фискальную политику. Его "Общая теория занятости, 
                    процента и денег" (1936) стала основой экономической политики послевоенного периода.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Icon name="LineChart" className="mr-2 text-amber-600" size={18} />
                    Монетаризм
                  </h4>
                  <p className="text-sm text-gray-700">
                    Милтон Фридман и представители Чикагской школы противопоставили кейнсианству монетаристскую теорию, 
                    согласно которой инфляция всегда и везде является денежным феноменом. Монетаристы подчеркивали важность 
                    контроля денежной массы и минимального вмешательства государства в экономику.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Icon name="Coins" className="mr-2 text-amber-600" size={18} />
                    Австрийская школа
                  </h4>
                  <p className="text-sm text-gray-700">
                    Представители австрийской школы, такие как Фридрих Хайек и Людвиг фон Мизес, критиковали централизованное 
                    управление денежной системой, выступая за свободную банковскую деятельность и возврат к золотому стандарту. 
                    Их идеи получили новую популярность после финансового кризиса 2008 года.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="digital" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="CreditCard" className="mr-2 text-amber-600" />
                  Электронные платежи (1950-2010)
                </h3>
                <p className="text-gray-700 mb-4">
                  Вторая половина XX века ознаменовалась революцией в платежных технологиях:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>1950-е: Появление первых кредитных карт (Diners Club, American Express)</li>
                  <li>1960-е: Создание банкоматов (ATM) и магнитных полос для карт</li>
                  <li>1970-е: Развитие электронных систем перевода средств (SWIFT, CHIPS)</li>
                  <li>1980-е: Дебетовые карты и POS-терминалы в розничной торговле</li>
                  <li>1990-е: Интернет-банкинг и первые цифровые валюты (E-gold, DigiCash)</li>
                  <li>2000-е: PayPal и другие электронные платежные системы</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Эти инновации значительно ускорили финансовые транзакции и снизили их стоимость, сделав мировую экономику 
                  более взаимосвязанной и эффективной, но также создали новые риски в области кибербезопасности.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="Bitcoin" className="mr-2 text-amber-600" />
                  Криптовалюты и будущее денег (2009-настоящее время)
                </h3>
                <p className="text-gray-700 mb-4">
                  Недавняя история денег отмечена появлением принципиально новых форм валют:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>2009: Сатоши Накамото создает биткоин — первую децентрализованную криптовалюту</li>
                  <li>2010-е: Появление тысяч альтернативных криптовалют и токенов</li>
                  <li>2015: Запуск Ethereum с поддержкой смарт-контрактов</li>
                  <li>2017-2018: Криптовалютный бум и последующий крах</li>
                  <li>2019-2020: Проекты корпоративных криптовалют (Libra/Diem от Facebook)</li>
                  <li>2020-е: Центральные банки начинают разрабатывать цифровые валюты (CBDC)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Параллельно с этим происходит дальнейшее развитие безналичных платежей: мобильные платежные системы 
                  (Apple Pay, Google Pay), системы мгновенных платежей, технологии NFC и QR-кодов, а также рост финтех-сектора, 
                  бросающего вызов традиционным финансовым институтам.
                </p>
              </div>
            </div>
            <Card className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-4 text-center">Основные тренды современной денежной эволюции</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <Icon name="TrendingUp" className="mr-2 text-green-600 shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-medium mb-1">Дематериализация</p>
                      <p className="text-sm text-gray-700">
                        Деньги становятся все более абстрактными, переходя от физических объектов к цифровым записям и криптографическим кодам.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Network" className="mr-2 text-blue-600 shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-medium mb-1">Децентрализация</p>
                      <p className="text-sm text-gray-700">
                        Блокчейн-технологии позволяют создавать денежные системы без центрального контроля, что может изменить роль банков и государств.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Bot" className="mr-2 text-purple-600 shrink-0 mt-1" size={18} />
                    <div>
                      <p className="font-medium mb-1">Программируемость</p>
                      <p className="text-sm text-gray-700">
                        Цифровые валюты могут включать программную логику (смарт-контракты), автоматизирующую финансовые отношения и создающую "программируемые деньги".
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 text-gray-700 text-center italic">
                  "Мы находимся в середине самой фундаментальной трансформации денег за последние пять веков. 
                  Подобно тому, как печатный станок демократизировал знания, цифровые технологии могут демократизировать финансы."
                  <p className="font-normal mt-1">— Кристин Лагард, президент Европейского центрального банка</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MoneyHistory;
