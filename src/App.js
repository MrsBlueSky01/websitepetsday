import React, { useState } from 'react';
import { FaBone } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar font-bold text-2xl">
      <div className="navbar-logo">
        <img src="WhatsApp_Gorsel_2024-02-19_saat_22.05.06_a821e171.jpg" alt="PetsDay Logo" />
        
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href="#features" className="nav-link">Hakkında</a>
        <a href="#features" className="nav-link">Özellikler</a>
        <a href="#contact" className="nav-link">Bize Ulaşın</a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    
  );
}
const Body = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="text-section">
          <h1>Evcil Hayvanlarınızın Hayatlarını Kolaylaştırın.</h1>
          <p>PetsDay kullanarak, sağlık ve yaşam takibi, aktivite önerileri ve oyun arkadaşı bulun.</p>
          <div className="download-buttons">
            <a href="https://play.google.com/store/apps/details?id=host.exp.exponent" className="store-button">
              <img src="google-play.png" alt="Google Play" className="store-icon" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=host.exp.exponent" className="store-button">
              <img src="app-store.png" alt="App Store" className="store-icon" />
            </a>
          </div>
        </div>
        <div className="image-section">
          <img src="Ekran_goruntusu_2024-02-21_195530.png" alt="Resim Açıklaması" className="content-image" />
        </div>
      </div>
    </div>
    
  );
  
  
}
const AppAbout = () => {
  return (
    <div className="app-about">
      <h2 div className='app-header'>Uygulama Hakkında</h2>
      <div className="about-content">
        <div className="about-text">
          <h3  >Kullanıcı Dostu Arayüz ve Kullanımı Çok Kolay</h3>
          <ul>
            <li>PetsDay uygulamasının sunduğu faydalar...</li>
            <li>Sağlık takibini kolaylaştırır.</li>
            <li>Sade arayüzü ile kullanması basit.</li>
            <li>Online olarak veterinerle görüşme sağlayabilirsiniz.</li>
            <li>Konumunuzu kullanarak oyun arkadaşı edinebilirsiniz.</li>
            <li>Uygulama vasıtasıyla artık online olarak hayvan sahiplenebilirsiniz.</li>
          </ul>
        </div>
        
        <div className="about-image">
          <img src="Ekran_goruntusu_2024-02-21_200014.png" alt="Uygulama Hakkında Resim" />
        </div>
      </div>
    </div>
  );
}
const Features = () => {
  return (
    
    <><h2 className="features-heading">Uygulama Özellikleri</h2><br></br><div className="features-container">
      <div className="feature-card">
        <div className="purple-circle">
          <MdAdd className="purple-icon" />
        </div>
        <h2>Sağlık Takibi</h2>
        <p>Evcil hayvanınızın bilgilerini girin ve size aşı takviminizi oluşturalım. Bildirimler aracılığıyla asla unutmazsınız.</p>
      </div>
      <div className="feature-card">
        <div className="green-circle">
          <FaBone className="icon" />
        </div>

        <h2>Aktivite Önerileri</h2>
        <p>Evcil hayvan uzmanlarına sorarak oluşturduğumuz aktivite programlarıyla, eğlenerek fiziksel aktivite yapmış olacaksınız.</p>
      </div>
      <div className="feature-card">
        <div className="blue-circle">
          <FaSearchLocation className="icon" />
        </div>
        <h2>Oyun Arkadaşları Bulun</h2>
        <p>Konumunuzu kullanarak evcil hayvanınıza eğlenceli bir oyun arkadaşı bulun.</p>
      </div>
      <div className="feature-card">
        <div className="yellow-circle">
          <FaLanguage className="icon" />
        </div>

        <h2>Çoklu Dil Desteği</h2>
        <p>İngilizce, Almanca ve Türkçe dil desteğiyle kullanın.</p>
      </div>
    </div></>
  );
}
const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1 className="contact-heading">Bize Ulaşın</h1>
        <p>Soru, görüş ve önerileriniz için aşağıdaki formu doldurabilirsiniz. En kısa zamanda size yanıt vermeye çalışacağız.</p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Adınız Soyadınız</label>
              <input type="text" id="fullName" name="fullName" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta Adresiniz</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Konu</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesajınız</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-button">Gönder</button>
        </form>
      </div>
    </div>
  );
}
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>PetsDay</p>
        </div>
        <div className="footer-center">
          <h3>Kullanışlı Linkler</h3>
          <p><a href="#">Gizlilik Sözleşmesi</a></p>
          <p><a href="#">Kullanım Koşulları</a></p>
          <p><a href="#">SSS</a></p>
        </div>
        <div className="footer-right">
          <p>PetsDay Groups © 2024</p>
        </div>
      </div>
    </footer>
  );
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <AppAbout />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
}


export default App;
