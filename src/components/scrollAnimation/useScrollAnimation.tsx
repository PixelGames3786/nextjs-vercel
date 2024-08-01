import { useEffect ,useState} from 'react';
import { useAnimation } from 'framer-motion';

const useScrollAnimation = (ref: React.RefObject<HTMLElement>, threshold: number = 0.2) => {
    
  const [hasAnimated, setHasAnimated] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;


      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // 要素がビューポート内に入っている比率を計算
      const visibility = (viewportHeight - elementTop) / viewportHeight;

      if (visibility>threshold) {
        controls.start({ opacity: 1 });
        setHasAnimated(true); // 一度表示されたら状態を更新
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期表示のため

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, controls, threshold]);

  return controls;
};

export default useScrollAnimation;
