
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
