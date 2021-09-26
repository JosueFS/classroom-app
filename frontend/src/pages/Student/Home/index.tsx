import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaPowerOff, FaUserFriends } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { IconBaseProps } from 'react-icons';

import { useAuth } from '../../../hooks/auth';
import Footer from '../../../components/Footer';

import userAvatar from '../../../assets/avatar.png';

import * as S from './styles';

type MenuButton = {
  labelText: string;
  Icon?: React.ComponentType<IconBaseProps>;
};

const Home: React.FC = () => {
  const { authState, signOut } = useAuth();
  // const history = useHistory();

  const handleJoinClassroom = useCallback(() => {
    return '/classroom';
  }, []);

  const buttonList: MenuButton[] = [
    {
      labelText: 'Aulas',
      Icon: FaBook,
    },
    {
      labelText: 'Amigos',
      Icon: FaUserFriends,
    },
    {
      labelText: 'Configurações',
      Icon: MdSettings,
    },
  ];

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
              src="https://avatars.dicebear.com/api/personas/2b1dfefc-8172-4c22-bb71-6f032fc0d3e9.svg"
              alt="avatar do professor"
            />
          </Link>

          <Link to={handleJoinClassroom}>
            <h5>Biologia</h5>
            <span>09:20 - 10:40</span>
            <img
              className="avatar"
              src="https://avatars.dicebear.com/api/personas/ef975797-5cde-4204-981d-f839a3e582b4.svg"
              alt="avatar do professor"
            />
          </Link>

          <Link to={handleJoinClassroom}>
            <h5>Filosofia</h5>
            <span>11:20 - 12:00</span>
            <img
              className="avatar"
              src="https://avatars.dicebear.com/api/personas/c4d8e388-e0d7-41fb-9d95-c32b5d313503.svg"
              alt="avatar do professor"
            />
          </Link>
        </div>
      </main>

      <Footer buttonList={buttonList} />
    </S.Container>
  );
};

export default Home;
