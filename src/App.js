import React, { useState } from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import { menuData } from './menuData';
import Logo from './Logo';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'tr');

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const MenuCategory = ({ categoryKey, categoryData }) => (
    <div className="menu-category">
      <h3 className="category-title">{t(categoryData.title)}</h3>
      <div className="menu-items">
        {categoryData.items.map((item, index) => (
          <div key={index} className="menu-item">
            <span className="item-name">{t(item.key)}</span>
            <span className="item-price">{item.price}₺</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="App">
      <div className="menu-container">
        {/* Logo */}
        <div className="logo-position">
          <Logo />
        </div>

        {/* Header */}
        <div className="menu-header">
          <h1 className="restaurant-name">{t('restaurant_name')}</h1>
          <h2 className="menu-title">{t('menu_title')}</h2>
        </div>

        {/* Language Selector */}
        <div className="language-selector">
          <label htmlFor="lang-select">{t('select_language')}:</label>
          <select 
            id="lang-select" 
            value={language} 
            onChange={handleLanguageChange}
            className="lang-select"
          >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
            <option value="zh">中文 (Chinese)</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="es">Español (Spanish)</option>
            <option value="fr">Français (French)</option>
            <option value="ar">العربية (Arabic)</option>
            <option value="bn">বাংলা (Bengali)</option>
            <option value="ru">Русский (Russian)</option>
            <option value="pt">Português (Portuguese)</option>
            <option value="ur">اردو (Urdu)</option>
            <option value="id">Bahasa Indonesia (Indonesian)</option>
            <option value="de">Deutsch (German)</option>
            <option value="ja">日本語 (Japanese)</option>
            <option value="sw">Kiswahili (Swahili)</option>
            <option value="mr">मराठी (Marathi)</option>
            <option value="te">తెలుగు (Telugu)</option>
            <option value="ta">தமிழ் (Tamil)</option>
            <option value="vi">Tiếng Việt (Vietnamese)</option>
            <option value="ko">한국어 (Korean)</option>
            <option value="fa">فارسی (Persian)</option>
            <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
            <option value="gu">ગુજરાતી (Gujarati)</option>
            <option value="ms">Bahasa Melayu (Malay)</option>
            <option value="it">Italiano (Italian)</option>
            <option value="uk">Українська (Ukrainian)</option>
          </select>
        </div>

        {/* Menu Content */}
        <div className="menu-content">
          <div className="menu-column">
            <MenuCategory categoryKey="grills" categoryData={menuData.grills} />
            <MenuCategory categoryKey="service_grills" categoryData={menuData.service_grills} />
            <MenuCategory categoryKey="hamburgers" categoryData={menuData.hamburgers} />
            <MenuCategory categoryKey="snacks" categoryData={menuData.snacks} />
            <MenuCategory categoryKey="piyaz" categoryData={menuData.piyaz} />
          </div>
          
          <div className="menu-column">
            <MenuCategory categoryKey="cold_drinks" categoryData={menuData.cold_drinks} />
            <MenuCategory categoryKey="special" categoryData={menuData.special} />
            <MenuCategory categoryKey="hot_drinks" categoryData={menuData.hot_drinks} />
            <MenuCategory categoryKey="desserts" categoryData={menuData.desserts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
