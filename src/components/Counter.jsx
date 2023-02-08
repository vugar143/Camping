import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div className="number">
      <CountUp  
                    start={0}
                    duration={15}
                    separator=" "
                    decimals={0}
                    end={number}
                    decimal="," className="counter" />
     <span>{title}</span>
    </div>
  );
}
