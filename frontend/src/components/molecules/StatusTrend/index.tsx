import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface StatusTrendProps {
  trendData: any;
}

const StatusTrend = ({ trendData }: StatusTrendProps) => {
  const [trend, setTrend] = useState(0);
  const [getNumber, setGetNumber] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const trendTitle = [
    '입점 많은 상권',
    '요즘 뜨는 업종',
    '폐점 많은 업종',
    '매출 높은 동네',
    '매출 높은 업종',
  ];

  const trendContent = [
    trendData.data.commercial,
    trendData.data.sectors,
    trendData.data.close,
    trendData.data.salesDong,
    trendData.data.salesCS,
  ];

  useEffect(() => {
    if (!isHover) {
      const timer = setInterval(
        () => setTrend((trend) => (trend + 1) % 10),
        5000
      );
      return () => clearInterval(timer);
    }
  }, [isHover]);

  const onHoverHandler = (i: any) => {
    setIsHover(true);
    setTrend(i);
  };

  const onNotHoverHandler = () => {
    setIsHover(false);
  };

  const onClickLeftHandler = () => {
    setGetNumber((getNumber) => (getNumber + 3) % 4);
    setTrend(0);
  };

  const onClickRightHandler = () => {
    setGetNumber((getNumber) => (getNumber + 1) % 4);
    setTrend(0);
  };

  return (
    <Wrapper>
      <TitleDiv>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="trend-icon"
          onClick={onClickLeftHandler}
        />
        <div className="title">{trendTitle[getNumber]} Top 10</div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="trend-icon"
          onClick={onClickRightHandler}
        />
      </TitleDiv>
      <Group>
        {trendContent[getNumber].map((value: any, i: any) => (
          <div
            className="gu-div"
            key={`gu-${i}`}
            onMouseOver={() => onHoverHandler(i)}
            onMouseOut={() => onNotHoverHandler()}
          >
            <div className="rank">{i + 1}</div>
            <div className={trend === i ? `content trend` : `content`}>
              {value}
            </div>
          </div>
        ))}
      </Group>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3vh;
  border: 1px solid #6193f280;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px #6193f280, 0 0 5px 5px #56b6f780;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;
  margin-bottom: 1rem;

  & .title {
    font-size: 1.3rem;
    margin-left: 2vw;
    margin-right: 2vw;
  }

  & .trend-icon {
    cursor: pointer;
    font-size: 1.3rem;
    color: darkgray;
    & :hover {
      color: black;
    }
  }
`;

const Group = styled.div`
  letter-spacing: 2px;
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 140px 140px;
  grid-template-rows: repeat(5, minmax(40px, auto));
  grid-auto-flow: column dense;
  column-gap: 20px;
  align-items: center;
  padding-left: 20px;

  & :hover {
    cursor: pointer;
  }

  & .trend {
    border-radius: 10px;

    // font gradient
    background: ${({ theme }) => `${theme.gradColor}`};
    color: transparent;
    -webkit-background-clip: text;
    font-weight: bold;

    transform: translateX(calc(-100% + 110px));
    overflow-wrap: hidden;
    transition: 2s;
  }

  & .gu-div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;

    & .content:hover {
      transform: translateX(calc(-100% + 105px));
      overflow-wrap: hidden;
      transition: 2s;
    }
  }

  & .rank {
    font-weight: 700;
    color: ${({ theme }) => `${theme.darkColor}`};
    margin-right: 0.3vw;
    background: #fff;
    z-index: 100;
    padding-left: 10px;
    padding-right: 2px;

    & :hover {
    }
  }
`;

export default StatusTrend;
