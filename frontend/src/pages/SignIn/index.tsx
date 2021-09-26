import React, {
  useRef,
  useCallback,
  FormEvent,
  useState,
  useMemo,
} from 'react';
import { FaUserGraduate } from 'react-icons/fa';

import * as S from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import teacherLogo from '../../assets/logo-teacher.png';
import studentLogo from '../../assets/logo.jpeg';

interface IPageInfo {
  logo: string;
  title: string;
  textLink: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const { changeTheme } = useTheme();
  const studentPageInfo: IPageInfo = useMemo(() => {
    return {
      logo: studentLogo,
      title: 'Sala dos Gênios',
      textLink: 'Acessar como Professor',
    };
  }, []);

  const teacherPageInfo: IPageInfo = useMemo(() => {
    return {
      logo: teacherLogo,
      title: 'Ambiente do Professor',
      textLink: 'Acessar como Aluno',
    };
  }, []);

  const [pageInfo, setPageInfo] = useState<IPageInfo>(() => {
    const type = localStorage.getItem('@JG_Classroom:type');

    if (type === 'teacher') {
      return teacherPageInfo;
    }

    return {} as IPageInfo;
  });

  const changeUserType = useCallback(() => {
    changeTheme();

    const type = localStorage.getItem('@JG_Classroom:type');

    if (type === 'teacher') {
      setPageInfo(studentPageInfo);
    } else {
      setPageInfo(teacherPageInfo);
    }
  }, [changeTheme, studentPageInfo, teacherPageInfo]);

  const inputName = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const type = localStorage.getItem('@JG_Classroom:type');

      if (inputName.current && (type === 'student' || type === 'teacher')) {
        const name = inputName.current.value;
        await signIn({ type, name });
      }
    },
    [signIn],
  );

  return (
    <S.Container>
      <S.LogoContainer>
        <img src={pageInfo.logo || studentPageInfo.logo} alt="logo" />
        <h2>{pageInfo.title || studentPageInfo.title}</h2>
      </S.LogoContainer>

      <S.Form onSubmit={handleSubmit}>
        <h4>Acessar plataforma</h4>
        <Input
          ref={inputName}
          name="name"
          type="text"
          placeholder="Digite seu nome"
          icon={FaUserGraduate}
        />

        <Button className="btn" type="submit">
          Entrar
        </Button>

        <Button className="btn outline" type="button" onClick={changeUserType}>
          {pageInfo.textLink || studentPageInfo.textLink}
        </Button>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
