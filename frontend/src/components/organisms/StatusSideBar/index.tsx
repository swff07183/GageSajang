import React from 'react';
import BaseSideBar from '../../molecules/BaseSideBar';
import StatusTrend from '../../molecules/StatusTrend';
import StatusButtons from '../../molecules/StatusButtons';

interface StatusSideBarProps {
  sideBarStatus: any;
  setSideBarStatus: any;
  contentList: any;
  category: any;
  onClickLabelHandler: any;
  tab: any;
  trendData: any;
}

const StatusSideBar = ({
  sideBarStatus,
  setSideBarStatus,
  contentList,
  category,
  onClickLabelHandler,
  tab,
  trendData,
}: StatusSideBarProps) => {
  return (
    <BaseSideBar
      title="πͺ μκΆ νν©"
      isOpen={sideBarStatus}
      statusmark={true}
      setIsOpen={setSideBarStatus}
    >
      <div>μμΈμ νμ κ΅¬ κΈ°μ€</div>
      <StatusTrend trendData={trendData} />
      <StatusButtons
        content={contentList}
        category={category!}
        onClickLabelHandler={onClickLabelHandler}
        tab={tab}
      />
    </BaseSideBar>
  );
};

export default StatusSideBar;
