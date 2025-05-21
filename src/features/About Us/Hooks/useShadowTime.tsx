import { useEffect, useState } from "react";

const useShadowTime = () => {
  const [shadowTime, setShadowTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShadowTime(!shadowTime);
    }, 1000);
  }, [shadowTime]);
  return shadowTime;
};

export default useShadowTime;
