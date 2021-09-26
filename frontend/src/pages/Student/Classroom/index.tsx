import React, { useCallback, useEffect, useRef } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useHistory } from 'react-router-dom';
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

import ProgressBar from '../../../components/ProgressBar';
import Button from '../../../components/Button';

import * as S from './styles';

const Classroom: React.FC = () => {
  const history = useHistory();

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

  useEffect(() => {
    const firstTab: HTMLLIElement = tabsRef.current.firstElementChild
      ?.firstElementChild as HTMLLIElement;
    if (firstTab) {
      tabMarkerRef.current.style.left = `${firstTab.offsetLeft}px`;
      tabMarkerRef.current.style.width = `${firstTab.offsetWidth}px`;
    }
  }, []);

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
              {Array(7)
                .fill(0)
                .map(student => (
                  <img
                    key={generateRandomAvatar()}
                    className="students"
                    src={generateRandomAvatar()}
                    alt={`avatar do aluno - ${student}`}
                  />
                ))}
              <div>+{16 - 5}</div>
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
            <Button className="btn join-room" type="button">
              Entrar na sala
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
                <span>Prazo máximo: 27/09/2021</span>
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

            <div className="progress__item">
              <FaRegSquare size={40} color="#555" />
              <div className="progress__item-text">
                <strong>Geometria</strong>
                <span>Não iniciado</span>
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
                <span>Prazo máximo: 27/09/2021</span>
              </div>
            </div>

            <div className="progress__item">
              <FaTrophy size={40} color="#555" />
              <div className="progress__item-text">
                <strong>Operações Matemáticas</strong>
                <span>III - Multiplicação</span>
                <span>Prazo máximo: 27/09/2021</span>
              </div>
            </div>
          </section>
        </TabPanel>
      </Tabs>
    </S.Container>
  );
};

export default Classroom;
