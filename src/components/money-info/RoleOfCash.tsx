
import { Button } from "@/components/ui/button";

const RoleOfCash = () => {
  return (
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
  );
};

export default RoleOfCash;
