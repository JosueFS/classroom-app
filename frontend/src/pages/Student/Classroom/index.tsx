import React, { useCallback, useEffect, useRef, useState } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  FaArrowLeft,
  FaCheckSquare,
  FaRegClock,
  FaBookReader,
  FaRegCommentDots,
  FaTrophy,
  FaRegSquare,
} from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { GiRank1, GiRank2, GiRank3 } from 'react-icons/gi';

import { generateRandomAvatar } from '../../../utils/generateRandomAvatar';

import { useAuth } from '../../../hooks/auth';
import { useWebSocket } from '../../../hooks/websocket';

import ProgressBar from '../../../components/ProgressBar';
import Button from '../../../components/Button';

import * as S from './styles';
import LoadingSpinner from '../../../components/LoadingSpinner';

interface IStudents {
  id: string;
  token: string;
  type: string;
  room: string;
}

const Classroom: React.FC = () => {
  const { authState } = useAuth();
  const { openSocket } = useWebSocket();
  const history = useHistory();
  const { url } = useRouteMatch();

  const [socket, setSocket] = useState<Socket>(() => {
    return openSocket();
  });
  const [numberStudentsInRoom, setNumberStudentsInRoom] = useState(0);
  const [students, setStudents] = useState<IStudents[]>([]);
  const [teacherStatus, setTeacherStatus] = useState('offline');

  const tabsRef = useRef<HTMLElement>({} as HTMLElement);
  const tabMarkerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const handleSelectTab = useCallback(selectedTab => {
    if (
      selectedTab.target.ariaDisabled === 'true' ||
      selectedTab.target.ariaDisabled === null
    )
      return;

    tabMarkerRef.current.style.left = `${selectedTab.target.offsetLeft}px`;
    tabMarkerRef.current.style.width = `${selectedTab.target.offsetWidth}px`;
  }, []);

  const handleNavigateToBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleJoinRoom = useCallback(() => {
    history.push(`${url}/matematica`);
  }, [history, url]);

  useEffect(() => {
    const firstTab: HTMLLIElement = tabsRef.current.firstElementChild
      ?.firstElementChild as HTMLLIElement;
    if (firstTab) {
      tabMarkerRef.current.style.left = `${firstTab.offsetLeft}px`;
      tabMarkerRef.current.style.width = `${firstTab.offsetWidth}px`;
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit('join', { ...authState, room: 'matematica' });

      socket.on('numberOfStudentsInRoom', (number: number) => {
        setNumberStudentsInRoom(number);
      });

      socket.on('teacherStatus', (status: string) => {
        console.log(status);
        setTeacherStatus(status);
      });

      socket.on('updatedRoomInfo', data => {
        console.log(data);
      });

      socket.on('fetchUsers', (connectedStudents: IStudents[]) => {
        setStudents(connectedStudents);
      });
    }

    return () => {
      socket.disconnect();
      socket.close();
    };
  }, [authState, socket]);

  return (
    <S.Container>
      <header>
        <FaArrowLeft size={24} onClick={handleNavigateToBack} />
        <h2>Matemática</h2>
      </header>

      <Tabs
        domRef={(node?: HTMLElement) => {
          if (node) {
            tabsRef.current = node;
          }
        }}
      >
        <TabList onClick={e => handleSelectTab(e)}>
          <Tab>
            <SiGoogleclassroom size={16} />
            Turma
          </Tab>
          <Tab>
            <FaBookReader size={16} /> Para casa
          </Tab>
          <Tab disabled>
            <FaRegCommentDots size={16} />
            Chat
          </Tab>
          <div id="marker" ref={tabMarkerRef} />
        </TabList>

        <TabPanel>
          <section className="class-time">
            <strong className="label">Próxima Aula</strong>
            <div>
              <FaRegClock size={16} />
              <strong>08:00 - 09:40 • 1h30m</strong>
            </div>
          </section>

          <section className="classroom-info">
            <strong className="label">Informações da aula</strong>
            <p>
              Hoje daremos continuidade aos estudos dos operadores matemáticos,
              abordaremos a multiplicação, teremos um quiz rápido e exercícios
              para praticar em casa!
            </p>
          </section>

          <section className="students">
            <strong className="label">Alunos conectados</strong>
            <div className="students__list">
              {students.length &&
                students
                  .filter(student => student.type !== 'teacher')
                  .slice(0, 7)
                  .map(student => (
                    <img
                      key={authState.token}
                      className="students"
                      src={generateRandomAvatar(student.token)}
                      alt={`avatar do aluno - ${student}`}
                    />
                  ))}
              <div>{`${
                numberStudentsInRoom - 7 > 0
                  ? `+${numberStudentsInRoom - 7}`
                  : ''
              }`}</div>
            </div>
          </section>

          <section className="progress">
            <strong className="label">Progresso da matéria</strong>

            <div className="progress__item">
              <GiRank1 size={52} />
              <div className="progress__item-text">
                <strong>Conjuntos Numéricos</strong>
                <span>Concluído</span>
                <ProgressBar done={100} />
              </div>
            </div>

            <div className="progress__item">
              <GiRank2 size={52} />
              <div className="progress__item-text">
                <strong>Operações Matemáticas</strong>
                <span>III - Multiplicação</span>
                <ProgressBar done={50} />
              </div>
            </div>

            <div className="progress__item">
              <GiRank3 size={52} />
              <div className="progress__item-text">
                <strong>Geometria</strong>
                <span>Não iniciado</span>
                <ProgressBar done={0} />
              </div>
            </div>
          </section>

          <S.Footer>
            <Button
              className="btn join-room"
              type="button"
              onClick={handleJoinRoom}
            >
              {teacherStatus === 'online' ? (
                'Entrar na sala'
              ) : (
                <>
                  <span>Aguarde seu professor</span>
                  <LoadingSpinner />
                </>
              )}
            </Button>
          </S.Footer>
        </TabPanel>

        <TabPanel>
          <section className="progress">
            <strong className="label">Exercícios</strong>

            <div className="progress__item">
              <FaCheckSquare size={40} color="#27D58C" />
              <div className="progress__item-text">
                <strong>Conjuntos Numéricos</strong>
                <span>Concluído</span>
                <span>Prazo máximo: 25/09/2021</span>
              </div>
            </div>

            <div className="progress__item">
              <FaRegSquare size={40} color="#555" />
              <div className="progress__item-text">
                <strong>Operações Matemáticas</strong>
                <span>III - Multiplicação</span>
                <span>Prazo máximo: 27/09/2021</span>
              </div>
            </div>
          </section>

          <section className="progress">
            <strong className="label">Quizzes</strong>

            <div className="progress__item">
              <FaTrophy size={40} color="#27D58C" />
              <div className="progress__item-text">
                <strong>Conjuntos Numéricos</strong>
                <span>Concluído</span>
                <span>Pontuação: 10/10</span>
              </div>
            </div>

            <div className="progress__item">
              <FaTrophy size={40} color="#555" />
              <div className="progress__item-text">
                <strong>Operações Matemáticas</strong>
                <span>III - Multiplicação</span>
                <span>Data da aula: 27/09/2021</span>
              </div>
            </div>
          </section>
        </TabPanel>
      </Tabs>
    </S.Container>
  );
};

export default Classroom;
