import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
<<<<<<< HEAD
}
=======
}
>>>>>>> 54ef5e0f53c314a96c0f300fe92d037a1f47eb32
