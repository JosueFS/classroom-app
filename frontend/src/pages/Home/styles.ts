import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 20px;
    list-style-type: none;

    li {
      width: 100%;
      display: flex;
      padding: 8px 16px;
      gap: 32px;

      background: rgba(0, 61, 125, 0.15);
      box-shadow: 0 8px 8px 0 rgba(0, 61, 125, 0.37);
      backdrop-filter: blur(2.5px);
      -webkit-backdrop-filter: blur(2.5px);
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.18);
    }
  }

  div.video-container {
    position: relative;
    width: 280px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;

    img.teacher-webcam {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 50%;
    }

    img.student-webcam {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;
