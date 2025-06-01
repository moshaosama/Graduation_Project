import { useEffect } from "react";

const useTransition = (
  ref: React.RefObject<HTMLElement>,
  initalStyle: Partial<CSSStyleDeclaration>,
  styles: Partial<CSSStyleDeclaration>
) => {
  useEffect(() => {
    if (ref.current) {
      applyStyles(ref.current, initalStyle);

      setTimeout(() => {
        if (ref.current) {
          applyStyles(ref.current, styles);
        }
      }, 50);
    }
  }, [ref]);
};

const applyStyles = (
  element: HTMLElement,
  styles: Partial<CSSStyleDeclaration>
) => {
  Object.entries(styles).forEach(([property, value]) => {
    element.style.setProperty(property, String(value));
  });
};

export default useTransition;
