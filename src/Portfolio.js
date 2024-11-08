import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`portfolio-container ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      {/* ปุ่ม Toggle Switch สำหรับเปลี่ยนโหมดกลางวัน/กลางคืน */}
      <div className="toggle-switch" onClick={toggleTheme}>
        <div className={`toggle-knob ${isNightMode ? 'night' : 'day'}`}>
          {isNightMode ? '🌙' : '🌞'}
        </div>
      </div>

      {/* เมนูเลื่อนสำหรับหัวข้อต่างๆ */}
      <nav className="nav-buttons">
        <button onClick={() => scrollToSection('profile')} className="nav-button">โปรไฟล์</button>
        <button onClick={() => scrollToSection('personal-info')} className="nav-button">ข้อมูลส่วนตัว</button>
        <button onClick={() => scrollToSection('education')} className="nav-button">ระดับศึกษา</button>
        <button onClick={() => scrollToSection('experience')} className="nav-button">ประสบการณ์</button>
        <button onClick={() => scrollToSection('skills')} className="nav-button">ความสามารถ</button>
      </nav>

      {/* รูปโปรไฟล์ */}
      <div id="profile" className="profile">
      <img src="/your-image.jpg" alt="Profile" className="profile-pic" />

        <h1>MOTAIR</h1>
        <p>Portfolio แนะนำตัว</p>
      </div>

      {/* ข้อมูลส่วนตัว */}
      <div id="personal-info" className="section personal-info">
        <h2>ข้อมูลส่วนตัว</h2>
        <ul>
          <li><strong>ชื่อ:</strong> กนลภัทรชาฎา </li>
          <li><strong>นามสกุล:</strong> พรฉิมมี </li>
          <li><strong>ชื่อภาษาอังกฤษ:</strong> Kanonphatchada </li>
          <li><strong>นามสกุลภาษาอังกฤษ:</strong> Pornchimmee </li>
          <li><strong>อายุ:</strong> 21 ปี</li>
          <li><strong>วันเกิด:</strong> 09 มีนาคม 2003</li>
        </ul>
      </div>

      {/* การศึกษา */}
      <div id="education" className="section education">
        <h2>ระดับศึกษา</h2>
        <ul>
          <li><strong>มหาวิทยาลัย:</strong> มหาวิทยาลัยพระจอมเกล้าพระนครเหนือ </li>
          <li><strong>คณะ:</strong> วิทยาลัยเทคโนโลยีอุตสหกรรม </li>
          <li><strong>สาขาวิชา:</strong> เทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ (EnEt-C)</li>
          <li><strong>วิทยาเขต:</strong> มจพ. กรุงเทพ</li>
        </ul>
      </div>

      {/* ประสบการณ์ */}
      <div id="experience" className="section experience">
        <h2>ประสบการณ์</h2>
        <p>ตัวอย่างตำแหน่งงานที่เคยทำ...</p>
      </div>

      {/* ความสามารถพิเศษ */}
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
  );
}

export default Portfolio;
