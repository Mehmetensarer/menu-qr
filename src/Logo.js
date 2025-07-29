import React from 'react';
// import logoImage from './logo.png'; // Bu satırı logonun dosya adına göre değiştireceğim

const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src={require('./logo.png')} 
        alt="Köfteci MELİH Logo" 
        className="custom-logo"
      />
    </div>
  );
};

export default Logo; 