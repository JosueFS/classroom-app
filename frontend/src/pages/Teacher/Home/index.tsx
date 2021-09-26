import React, { useCallback } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';
import { FaPowerOff, FaUsers } from 'react-icons/fa';
import { MdDashboard, MdSettings } from 'react-icons/md';

import Footer from '../../../components/Footer';

import * as S from './styles';

import { useAuth } from '../../../hooks/auth';

type MenuButton = {
  labelText: string;
  Icon?: React.ComponentType<IconBaseProps>;
};

const Home: React.FC = () => {
  const { authState, signOut } = useAuth();
  const { url } = useRouteMatch();
  // const history = useHistory();

  const handleJoinClassroom = useCallback(() => {
    return `${url}/classroom`;
  }, [url]);

  const handleNotImplementedYet = useCallback(() => {
    return `${url}`;
  }, [url]);

  const buttonList: MenuButton[] = [
    {
      labelText: 'Dashboard',
      Icon: MdDashboard,
    },
    {
      labelText: 'Turmas',
      Icon: FaUsers,
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
            src="https://avatars.dicebear.com/api/personas/2b1dfefc-8172-4c22-bb71-6f032fc0d3e9.svg"
            alt="jovens genios logo"
          />
          <h3>Olá, {authState.name}</h3>
        </div>
        <FaPowerOff size={24} onClick={signOut} />
      </div>

      <main className="class-content">
        <h3>Próxima aula</h3>
        <div className="container">
          <Link to={handleJoinClassroom} className="class">
            <h5>Matemática</h5>
            <span>08:00 - 09:20</span>
            <img
              className="avatar"
              src="https://avatars.dicebear.com/api/personas/2b1dfefc-8172-4c22-bb71-6f032fc0d3e9.svg"
              alt="avatar do professor"
            />
          </Link>
        </div>

        <h3>Planejar</h3>
        <div className="container">
          <Link to={handleNotImplementedYet}>
            <h5>Planejar Aula</h5>
            <p>
              Preencha as informações da aula que serão visualizadas no lobby da
              sala de aula.
            </p>
          </Link>
        </div>

        <div className="container">
          <Link to={handleNotImplementedYet}>
            <h5>Criar Quiz</h5>
            <p>
              Crie quizzes interativos relacionadas a essa matéria para serem
              utilizadas nas aulas.
            </p>
          </Link>
        </div>
      </main>

      <Footer buttonList={buttonList} />
    </S.Container>
  );
};

export default Home;
