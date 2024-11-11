import React, { useState, useEffect } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/your-image.jpg', // ใส่ URL ของภาพที่ต้องการ
    '/cat.jpg', // ใส่ URL ของภาพที่ต้องการ
    '/mo.jpg', // ใส่ URL ของภาพที่ต้องการ
  ];

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className={`portfolio-container ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <div className="toggle-switch" onClick={toggleTheme}>
        <div className={`toggle-knob ${isNightMode ? 'night' : 'day'}`}>
          {isNightMode ? '🌙' : '🌞'}
        </div>
      </div>

      {/* ปุ่มเลื่อนด้านบน */}
      <div className="top-nav">
        <button onClick={() => scrollToSection('profile')} className="small-nav-button">โปรไฟล์</button>
        <button onClick={() => scrollToSection('personal-info')} className="small-nav-button">ข้อมูลส่วนตัว</button>
        <button onClick={() => scrollToSection('education')} className="small-nav-button">ระดับศึกษา</button>
        <button onClick={() => scrollToSection('experience')} className="small-nav-button">ประสบการณ์</button>
        <button onClick={() => scrollToSection('skills')} className="small-nav-button">ความสามารถ</button>
      </div>

      {/* เนื้อหาหลัก */}
      <div className="content-container">
        <div className="main-content">
          <div id="profile" className="profile section">
            <h1>MOTAIR</h1>
            <p>Portfolio แนะนำตัว</p>
          </div>

          <div id="personal-info" className="section personal-info">
            <h2>ข้อมูลส่วนตัว</h2>
            <ul>
              <li><strong>ชื่อ:</strong> กนลภัทรชาฎา</li>
              <li><strong>นามสกุล:</strong> พรฉิมมี</li>
              <li><strong>ชื่อภาษาอังกฤษ:</strong> Kanonphatchada</li>
              <li><strong>นามสกุลภาษาอังกฤษ:</strong> Pornchimmee</li>
              <li><strong>อายุ:</strong> 21 ปี</li>
              <li><strong>วันเกิด:</strong> 09 มีนาคม 2003</li>
            </ul>
          </div>

          <div id="education" className="section education">
            <h2>ระดับศึกษา</h2>
            <ul>
              <li><strong>มหาวิทยาลัย:</strong> มหาวิทยาลัยพระจอมเกล้าพระนครเหนือ</li>
              <li><strong>คณะ:</strong> วิทยาลัยเทคโนโลยีอุตสหกรรม</li>
              <li><strong>สาขาวิชา:</strong> เทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ (EnEt-C)</li>
              <li><strong>วิทยาเขต:</strong> มจพ. กรุงเทพ</li>
            </ul>
          </div>

          <div id="experience" className="section experience">
            <h2>ประสบการณ์</h2>
            <p>ตัวอย่างตำแหน่งงานที่เคยทำ...</p>
          </div>

          <div id="skills" className="section skills">
            <h2>ความสามารถพิเศษ</h2>
            <ul>
              <li>วาดรูป</li>
              <li>การออกแบบกราฟิก</li>
              <li>การถ่ายภาพ</li>
              <li>เขียนโปรแกรม</li>
            </ul>
          </div>
        </div>

        {/* รูปโปรไฟล์ทางขวาพร้อมปุ่มเลื่อน */}
        <div className="profile-image">
          <img src={images[currentImageIndex]} alt="Profile" className="profile-pic" />
          <div className="image-nav">
            <button onClick={previousImage} className="image-nav-button"><i class="bi bi-arrow-left"></i></button>
            <button onClick={nextImage} className="image-nav-button"><i class="bi bi-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
