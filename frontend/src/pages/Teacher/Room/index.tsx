import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  FaArrowLeft,
  FaVideo,
  FaVideoSlash,
  FaMicrophone,
  FaMicrophoneSlash,
  FaPhone,
} from 'react-icons/fa';
import { MdScreenShare, MdStopScreenShare, MdClose } from 'react-icons/md';
import { HiDotsHorizontal, HiOutlineDotsVertical } from 'react-icons/hi';
import { BsCardChecklist } from 'react-icons/bs';
import Carousel from 'react-elastic-carousel';
import { Socket } from 'socket.io-client';

import { generateRandomAvatar } from '../../../utils/generateRandomAvatar';

import { useAuth } from '../../../hooks/auth';
import ToggleMediaIcon from '../../../components/ToggleMediaIcon';

import * as S from './styles';
import { useWebSocket } from '../../../hooks/websocket';

import SendNotificationModal from '../../../components/Notification/SendNotification';
import api from '../../../services/api';

interface IStudents {
  id: string;
  name: string;
  token: string;
  type: string;
  room: string;
}

const Room: React.FC = () => {
  const history = useHistory();

  const { authState } = useAuth();
  const { openSocket } = useWebSocket();

  const [socket, setSocket] = useState<Socket>();
  const [numberStudentsInRoom, setNumberStudentsInRoom] = useState(0);
  const [students, setStudents] = useState<IStudents[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [idQuizToSend, setIdQuizToSend] = useState('');

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
        setNumberStudentsInRoom(number);
      });

      socket.on('updatedRoomInfo', (connectedSockets: IStudents[]) => {
        const teacher = connectedSockets.filter(
          users => users.type === 'teacher',
        );
      });

      socket.on('fetchUsers', (connectedStudents: IStudents[]) => {
        setStudents(connectedStudents);
      });

      socket.on('studentsQuizResults', quizResult => {
        console.log(quizResult);
      });
    }

    return () => {
      if (socket) {
        socket.disconnect();
        socket.close();
      }
    };
  }, [authState, socket]);

  const getQuizToSend = async () => {
    const response = await api.get(`quiz/${idQuizToSend}`);

    if (socket) {
      socket.emit('sendQuizNotification', response.data);

      socket.on('receiveNotification', data => {
        console.log(data);
      });
    }
  };

  useEffect(() => {
    getQuizToSend();
  }, [idQuizToSend, socket]);

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
        {showModal ? (
          <MdClose
            size={48}
            onClick={() => setShowModal(false)}
            color="#fff"
            style={{ backgroundColor: '#c00', borderRadius: '4px' }}
          />
        ) : (
          <BsCardChecklist size={48} onClick={() => setShowModal(true)} />
        )}
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
                <div className="student-list__card" key={student.token}>
                  <img src={generateRandomAvatar(student.token)} alt="avatar" />
                  <div>
                    <span>{student.name}</span>
                    <FaMicrophoneSlash size={14} />
                    <HiOutlineDotsVertical size={14} />
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </main>

      <SendNotificationModal
        setIdQuizToSend={setIdQuizToSend}
        setShowNotificationModal={setShowModal}
        showNotificationModal={showModal}
      />
    </S.Container>
  );
};

export default Room;
