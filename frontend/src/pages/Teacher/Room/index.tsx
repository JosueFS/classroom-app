import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  FaArrowLeft,
  FaRegCommentDots,
  FaVideo,
  FaVideoSlash,
  FaMicrophone,
  FaMicrophoneSlash,
  FaPhone,
} from 'react-icons/fa';
import { MdScreenShare, MdStopScreenShare } from 'react-icons/md';
import { HiDotsHorizontal, HiOutlineDotsVertical } from 'react-icons/hi';
import { BsCardChecklist } from 'react-icons/bs';
import Carousel, { ItemObject } from 'react-elastic-carousel';
import { Socket } from 'socket.io-client';

import { generateRandomAvatar } from '../../../utils/generateRandomAvatar';

import { useAuth } from '../../../hooks/auth';
import ToggleMediaIcon from '../../../components/ToggleMediaIcon';

import * as S from './styles';
import { useWebSocket } from '../../../hooks/websocket';
import Modal from '../../../components/Modal';
import Quiz from '../Quiz';

interface IStudents {
  id: string;
  token: string;
  type: string;
  room: string;
}

const Room: React.FC = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const { authState } = useAuth();
  const { openSocket } = useWebSocket();

  const [socket, setSocket] = useState<Socket>();
  const [numberStudentsInRoom, setNumberStudentsInRoom] = useState(0);
  const [students, setStudents] = useState<IStudents[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleNavigateToBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleLeaveRoom = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    if (socket) {
      socket.emit('join', { ...authState, room: 'matematica' });

      socket.on('numberOfStudentsInRoom', (number: number) => {
        console.log(number);
        setNumberStudentsInRoom(number);
      });

      socket.on('updatedRoomInfo', data => {
        console.log(data);
      });

      socket.on('fetchUsers', (connectedStudents: IStudents[]) => {
        setStudents(connectedStudents);
      });
    }

    return () => {
      if (socket) {
        socket.disconnect();
        socket.close();
      }
    };
  }, [authState, socket]);

  useEffect(() => {
    const newSocket = openSocket();
    setSocket(newSocket);
  }, [openSocket]);

  return (
    <S.Container>
      <header>
        <FaArrowLeft size={24} onClick={handleNavigateToBack} />
        <div>
          <h2>Matemática</h2>
          <span>{numberStudentsInRoom} Alunos Conectados</span>
        </div>
        <BsCardChecklist size={48} onClick={() => setShowModal(true)} />
      </header>

      <main
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1548449112-96a38a643324?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80)`,
        }}
      >
        <div className="room-info">
          <div className="user-info">
            <HiDotsHorizontal size={24} />
            <span>
              {authState.name} <FaMicrophoneSlash size={16} color="#fff" />
            </span>
            <span>00:33:12</span>
          </div>

          <div className="controller-list">
            <ToggleMediaIcon
              className="controller-list__button"
              originalIcon={FaVideo}
              alternativeIcon={FaVideoSlash}
            />

            <ToggleMediaIcon
              className="controller-list__button"
              originalIcon={FaMicrophone}
              alternativeIcon={FaMicrophoneSlash}
            />

            <ToggleMediaIcon
              className="controller-list__button"
              originalIcon={MdScreenShare}
              alternativeIcon={MdStopScreenShare}
            />

            <button
              type="button"
              className="controller-list__button phone"
              onClick={handleLeaveRoom}
            >
              <FaPhone color="#fff" size={32} />
            </button>
          </div>

          <Carousel
            itemsToScroll={2}
            itemsToShow={3.5}
            showArrows={false}
            pagination={false}
            isRTL={false}
          >
            {students &&
              students.map(student => (
                <div className="student-list__card">
                  <img src={generateRandomAvatar(student.token)} alt="avatar" />
                  <div>
                    <span>{authState.name}</span>
                    <FaMicrophoneSlash size={14} />
                    <HiOutlineDotsVertical size={14} />
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </main>

      <Quiz showModal={showModal} setShowModal={setShowModal} />
    </S.Container>
  );
};

export default Room;
