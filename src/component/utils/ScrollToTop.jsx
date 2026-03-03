import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 每次路徑變化就滾到最上方
  }, [pathname]);

  return null;
};

export default ScrollToTop;