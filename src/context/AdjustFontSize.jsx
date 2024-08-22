import { useEffect } from 'react';
 
const adjustFontSize = (element) => {
  const elements = element.querySelectorAll('*');
 
  elements.forEach((el) => {
    const style = window.getComputedStyle(el);
    const fontSize = parseFloat(style.fontSize);
    el.style.fontSize = `${fontSize * 0.97}px`;
  });
};
 
const AdjustFontSize = () => {
  useEffect(() => {
    adjustFontSize(document.body);
  }, []);
 
  return null;
};
 
export default AdjustFontSize;