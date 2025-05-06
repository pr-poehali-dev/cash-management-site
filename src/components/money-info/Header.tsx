
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
