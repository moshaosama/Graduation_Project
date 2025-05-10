import { useEffect, useState } from "react";

const useOpenPage = () => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    setIsOpen(true);
  }, [isOpen])

  return { isOpen, setIsOpen };
};

export default useOpenPage;
