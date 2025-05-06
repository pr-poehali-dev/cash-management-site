
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
