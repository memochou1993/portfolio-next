import React, {
  useEffect,
  useRef,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const OFFSET = 500;

export default function Elevator() {
  const mounted = useRef(false);
  const element = useRef(null);
  const visible = useRef(false);
  const handleClick = () => {
    // TODO
  };
  useEffect(() => {
    const target = element.current as HTMLElement | null;
    if (mounted.current) return;
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > OFFSET && !visible.current) {
        target?.classList.add('opacity-100');
        target?.classList.remove('opacity-0');
        visible.current = true;
      }
      if (window.pageYOffset <= OFFSET && visible.current) {
        target?.classList.add('opacity-0');
        target?.classList.remove('opacity-100');
        visible.current = false;
      }
    });
    mounted.current = true;
  }, []);
  return (
    <div className="absolute">
      <button type="button" onClick={handleClick} ref={element} className="fixed transition opacity-0 fade-in-out delay-250 bottom-12 right-12">
        <FontAwesomeIcon icon={faArrowUp} className="w-6 h-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
      </button>
    </div>
  );
}
