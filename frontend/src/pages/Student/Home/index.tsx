import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

import Footer from '../../../components/Footer';

import * as S from './styles';

import userAvatar from '../../../assets/avatar.png';
import teacherAvatar from '../../../assets/logo-teacher.png';
import { useAuth } from '../../../hooks/auth';

const Home: React.FC = () => {
  const { authState, signOut } = useAuth();
  // const history = useHistory();

  const handleJoinClassroom = useCallback(() => {
    return '/classroom';
  }, []);

  return (
    <S.Container>
      <div className="title">
        <div>
          <img
            className="avatar"
            src={userAvatar}
            alt="logo da jovens genios"
          />
          <h3>Olá, {authState.name}</h3>
        </div>
        <FaPowerOff size={24} onClick={signOut} />
      </div>

      <main className="class-content">
        <h3>Próximas aulas</h3>
        <div className="classroom-container">
          <Link to={handleJoinClassroom}>
            <h5>Matemática</h5>
            <span>08:00 - 09:20</span>
            <img
              className="avatar"
              src={teacherAvatar}
              alt="avatar do professor"
            />
          </Link>

          <Link to={handleJoinClassroom}>
            <h5>Biologia</h5>
            <span>09:20 - 10:40</span>
            <img
              className="avatar"
              src={teacherAvatar}
              alt="avatar do professor"
            />
          </Link>

          <Link to={handleJoinClassroom}>
            <h5>Filosofia</h5>
            <span>11:20 - 12:00</span>
            <img
              className="avatar"
              src={teacherAvatar}
              alt="avatar do professor"
            />
          </Link>
        </div>
      </main>
      {/* 
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
      </div> */}

      <Footer />
    </S.Container>
  );
};

export default Home;
