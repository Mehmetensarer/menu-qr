import React, { useState } from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import { menuData } from './menuData';
import Logo from './Logo';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  const handleBackToMenu = () => {
    setSelectedCategory(null);
  };

  const MenuCategory = ({ categoryKey, categoryData }) => (
    <div className="menu-category">
      <h3 className="category-title">{t(categoryData.title)}</h3>
      <div className="menu-items">
        {categoryData.items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-content">
              <div className="item-image-placeholder">
                <img 
                  src={`/images/${item.key}.jpg`} 
                  alt={t(item.key)}
                  className="item-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder">
                  📷
                </div>
              </div>
              <span className="item-name">{t(item.key)}</span>
            </div>
            <span className="item-price">{item.price}₺</span>
          </div>
        ))}
      </div>
    </div>
  );

  const MainMenu = () => (
    <div className="main-menu">
      <div className="menu-grid">
        <div className="menu-category-card" onClick={() => handleCategoryClick('grills')}>
          <div className="category-image">
            <img src="/images/grills.jpg" alt="Ekmek Arası Köfteler" className="category-img" />
          </div>
          <h3 className="category-card-title">{t('grills')}</h3>
        </div>
        
        <div className="menu-category-card" onClick={() => handleCategoryClick('kokorec')}>
          <div className="category-image">
            <img src="/images/kokorec.jpg" alt="Ekmek Arası Kokoreçler" className="category-img" />
          </div>
          <h3 className="category-card-title">{t('kokorec')}</h3>
        </div>
        
        <div className="menu-category-card" onClick={() => handleCategoryClick('service_grills')}>
          <div className="category-image">
            <img src="/images/service_grills.jpg" alt="Sade Izgara Köfteler" className="category-img" />
          </div>
          <h3 className="category-card-title">{t('service_grills')}</h3>
        </div>
        
        <div className="menu-category-card" onClick={() => handleCategoryClick('balaban')}>
          <div className="category-image">
            <img src="/images/balaban.jpg" alt="Balaban Köfteler" className="category-img" />
          </div>
          <h3 className="category-card-title">{t('balaban')}</h3>
        </div>
        
        <div className="menu-category-card" onClick={() => handleCategoryClick('hamburgers')}>
          <div className="category-image">
            <img src="/images/hamburgers.jpg" alt="Hamburgerler" className="category-img" />
          </div>
          <h3 className="category-card-title">{t('hamburgers')}</h3>
        </div>
        
        <div className="menu-category-card" onClick={() => handleCategoryClick('snacks')}>
          <div className="category-image">
            <img src="/images/snacks.jpg" alt="Atıştırmalıklar" className="category-img" />
          </div>
          <h3 className="category-card-title">{t('snacks')}</h3>
        </div>
        
        <div className="menu-category-card" onClick={() => handleCategoryClick('piyaz')}>
          <div className="category-image">
            <img src="/images/piyaz.jpg" alt="Piyaz (Salad)" className="category-img" />
          </div>
          <h3 className="category-card-title">{t('piyaz')}</h3>
        </div>
        
        <div className="menu-category-card" onClick={() => handleCategoryClick('cold_drinks')}>
          <div className="category-image">
            <img src="/images/cold_drinks.jpg" alt="Soğuk İçecekler" className="category-img" />
          </div>
          <h3 className="category-card-title">{t('cold_drinks')}</h3>
        </div>
        
        <div className="menu-category-card" onClick={() => handleCategoryClick('hot_drinks')}>
          <div className="category-image">
            <img src="/images/hot_drinks.jpg" alt="Sıcak İçecekler" className="category-img" />
          </div>
          <h3 className="category-card-title">{t('hot_drinks')}</h3>
        </div>
        
        <div className="menu-category-card" onClick={() => handleCategoryClick('desserts')}>
          <div className="category-image">
            <img src="/images/desserts.jpg" alt="Tatlılar" className="category-img" />
          </div>
          <h3 className="category-card-title">{t('desserts')}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="menu-container">
        {/* Theme Toggle */}
        <div className="theme-toggle">
          <button onClick={toggleTheme} className="theme-button">
            {isDarkTheme ? '☀️' : '🌙'}
          </button>
        </div>

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

        {/* Content */}
        {selectedCategory ? (
          <div className="category-detail">
            <button onClick={handleBackToMenu} className="back-button">
              ← {t('back_to_menu')}
            </button>
            <MenuCategory categoryKey={selectedCategory} categoryData={menuData[selectedCategory]} />
          </div>
        ) : (
          <MainMenu />
        )}
      </div>
    </div>
  );
}

export default App;
