// components/Animation.tsx
"use client";
import { useInView } from "react-intersection-observer";
import "animate.css";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  triggerOnce?: boolean;
  animation?: string;
  delay?: string; //?をつけると、そのプロパティがあってもなくてもエラーにならない
}

const Animation: React.FC<AnimationProps> = ({
  children,
  className = "",
  rootMargin = "-100px", //ref要素（以下JSX内）が画面上に現れてから100px過ぎた時、inViewがtrueになる
  triggerOnce = true, //trueにすると、一度inViewがtrueになったら、それ以降はfalseにならない
  animation = "animate__fadeInUp",
  delay = "0s",
}) => {
  const { ref, inView } = useInView({
    rootMargin,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${
        inView ? `animate__animated ${animation}` : "opacity-0"
      }`}
      style={{ animationDelay: delay }} // delayをインラインスタイルで適用
    >
      {children}
    </div>
  );
};

export default Animation;
