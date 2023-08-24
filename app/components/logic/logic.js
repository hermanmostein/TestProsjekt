import { useState, useEffect } from 'react';

const useMegaMenuLogic = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setShowMegaMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMegaMenu = () => {
    setShowMegaMenu(!showMegaMenu);
  };

  const handleCloseMegaMenu = () => {
    setShowMegaMenu(false);
  };

  return { showMegaMenu, handleToggleMegaMenu, handleCloseMegaMenu };
};

export default useMegaMenuLogic;
