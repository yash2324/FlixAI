import React from "react";
import useMoreInfo from "../Hooks/useMoreInfo";

const MoreInfo = ({ id }) => {
  const key = useMoreInfo(id);
  console.log(key);
  return <div>MoreInfo</div>;
};

export default MoreInfo;
