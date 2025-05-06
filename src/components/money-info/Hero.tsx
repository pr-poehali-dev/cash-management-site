
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
  );
};

export default Hero;
