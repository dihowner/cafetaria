import React from "react";

const StatisticCard = ({ statData, statIcon, statIconStyle, statName }) => {
  return (
    <div className="py-3 px-2 flex justify-center items-center flex-col gap-y-2 rounded-[10px] border">
      <div className="flex justify-center items-center gap-x-2">
        <span className={`${statIconStyle} p-2 text-base`}>{statIcon}</span>
        <h4 className="text-base text-[#5B5B5B99]">{statName}</h4>
      </div>
      <p className="text-lg font-bold text-center">{statData}</p>
    </div>
  );
};

export default StatisticCard;
