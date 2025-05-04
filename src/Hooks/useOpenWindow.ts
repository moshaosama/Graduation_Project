import { useEffect, useState } from "react";

const useOpenWindow = () => {
  const [Open, setOpen] = useState(false);

  useEffect(() => {
    const OpenWindow = async () => {
      try {
        setOpen(true);
      } catch (err) {
        throw new Error(err as string);
      }
    };
    OpenWindow();
  }, [Open]);

  return { Open };
};

export default useOpenWindow;
