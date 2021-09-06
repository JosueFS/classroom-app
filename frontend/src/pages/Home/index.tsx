import React from 'react';
import { FaCircle } from 'react-icons/fa';

import Footer from '../../components/Footer';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <div className="title">
        <h3>Olá, Josué F</h3>
      </div>

      <ul className="class-content">
        <li className="class-content_item">
          <FaCircle size={24} />
          <span>Números Pares</span>
        </li>

        <li className="class-content_item">
          <FaCircle size={24} />
          <span>Números Impares</span>
        </li>
      </ul>

      <div className="video-container">
        <img
          src="https://media.istockphoto.com/videos/smiling-indian-woman-vlogger-speaking-looking-at-camera-at-home-video-id1180677533?s=640x640"
          alt="teacher"
          className="teacher-webcam"
        />
        <img
          src="https://media.istockphoto.com/videos/an-elementary-school-student-working-at-home-video-id1262546383?s=640x640"
          alt="student"
          className="student-webcam"
        />
      </div>

      <Footer />
    </S.Container>
  );
};

export default Home;
