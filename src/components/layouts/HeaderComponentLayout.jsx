import React from "react";
import { useState, useEffect } from "react";
import { imageStatic } from "../../static/ImageStatic";

const HeaderComponentLayout = () => {
  const [time, setTime] = useState(new Date());
  // time handler
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <header
      id="header"
      className="flex flex-row justify-between p-4 bg-[#ffffff] rounded-xl"
    >
      <div className="title-container">
        <figure>
          <img src={imageStatic.logo} alt="syslab-logo" width={100} />
        </figure>
      </div>
      <div>
        <div>
          <p
            id="hari"
            style={{
              fontSize: "11px",
            }}
          >
            {time.toLocaleString("id-ID", { dateStyle: "full" })}
          </p>
        </div>
        <div className="text-right">
          <p id="jam">
            <b>
              {time.toLocaleTimeString("en-US", {
                formatMatcher: "best fit",
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </b>
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponentLayout;
