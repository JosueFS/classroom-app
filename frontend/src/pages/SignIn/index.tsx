import React, { useRef, useCallback, FormEvent } from 'react';
import { FaUserGraduate } from 'react-icons/fa';

import * as S from './styles';
import logoJG from '../../assets/logo.jpeg';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const inputName = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (inputName.current !== null) {
        await signIn(inputName.current.value);
      }
    },
    [signIn],
  );
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={logoJG} alt="logo-jovens-genios" />
        <h2>Sala dos Gênios</h2>
      </S.LogoContainer>

      <S.Form onSubmit={handleSubmit}>
        <h4>Acessar sala de aula</h4>
        <Input
          ref={inputName}
          name="student-name"
          type="text"
          placeholder="Digite seu nome"
          icon={FaUserGraduate}
        />

        <button type="submit">Entrar</button>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
