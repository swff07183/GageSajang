import React from 'react';
import styled from 'styled-components';
import IndexItem from '../organisms/IndexItem';
import { greenTheme, purpleTheme, blueTheme } from '../../styles/theme';
import { useNavigate } from 'react-router-dom';
import IndexSearchBar from '../organisms/IndexSearchBar';
import Footer from '../organisms/Footer';
import { IndexContent } from '../../models/common';
import Transitions from '../atoms/Transition';

const status: IndexContent = {
  title: '상권 현황',
  description: '서울시의 상권 현황을 한 눈에!',
  imgSrc: 'assets/img/index_status.png',
  buttonContent: '상권 현황 보러 가기',
  buttonColor: blueTheme.gradColor,
};

const amatuer: IndexContent = {
  title: '아마 사장',
  description: '나는야 예비 창업가!',
  imgSrc: 'assets/img/index_amatuer.png',
  buttonContent: '창업 현황 확인하기',
  buttonColor: purpleTheme.gradColor,
};

const professional: IndexContent = {
  title: '이미 사장',
  description: '내 가게 상태를 진단하고 싶다면?',
  imgSrc: 'assets/img/index_professional.png',
  buttonContent: '경영 환경 진단하기',
  buttonColor: greenTheme.gradColor,
};

const IndexPage = () => {
  const navigate = useNavigate();
  return (
    <Transitions>
      <Wrapper>
        <IndexSearchBar />
        <IndexItem content={status} onClick={() => navigate('/status')} />
        <IndexItem
          content={amatuer}
          onClick={() => navigate('/amatuer')}
          right
        />
        <IndexItem
          content={professional}
          onClick={() => navigate('/professional')}
        />
        <Footer />
      </Wrapper>
    </Transitions>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export default IndexPage;
