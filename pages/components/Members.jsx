import React, { useState } from 'react';
import Image from 'next/image';
import ProfilePic from '../../public/photo.jpg';
import ProfilePic1 from '../../public/photo1.jpg';
import ProfilePic2 from '../../public/photo2.jpg';
import styles from '../../styles/Members.module.css';
import Header1 from "./Header1";

const members = {
    B19: [
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
      { name: 'Madhav', image: ProfilePic2 ,position:'Secretary'},
    ],
    B20: [
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
      { name: 'Abhiram K R', image: ProfilePic1 ,position:'Secretary'},
  
    ],
    B21: [
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
      { name: 'Pranav Prashant', image: ProfilePic ,position:'Secretary'},
    ],
  };

const Members = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('B19');

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
    <Header1 title="EVENTS"/>
    <div className={`${styles.container} ${isMenuOpen ? styles['menu-open'] : ''}`}>
      <div className={`${styles.hamburger} ${isMenuOpen ? styles.hidden : ''}`} onClick={handleToggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <div className={styles['side-menu']}>
        <div className={styles['menu-toggle']} onClick={handleToggleMenu}>
          <div className={`${styles.icon} ${isMenuOpen ? styles.cross : styles.hamburger}`}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </div>

        <div className={styles['menu-items']}>
          <div
            className={`${styles['menu-item']} ${selectedSection === 'B19' ? styles.active : ''}`}
            onClick={() => handleSectionClick('B19')}
          >
            <span className={styles.name1}>B19</span>
          </div>
          <div
            className={`${styles['menu-item']} ${selectedSection === 'B20' ? styles.active : ''}`}
            onClick={() => handleSectionClick('B20')}
          >
            <span className={styles.name1}>B20</span>
          </div>
          <div
            className={`${styles['menu-item']} ${selectedSection === 'B21' ? styles.active : ''}`}
            onClick={() => handleSectionClick('B21')}
          >
            <span className={styles.name1}>B21</span>
          </div>
        </div>
      </div>

      <div className={styles['main-content']}>
        {members[selectedSection].map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles['image-container']}>
              <Image src={member.image} alt={member.name} />
            </div>
            <div className={styles.name}>{member.name}</div>
            <div className={styles.name}>{member.position}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Members;
