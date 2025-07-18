import { useLayoutEffect, useState } from 'react';
import { useWContext } from '../context'


const useWindowHeight = () => {
  const [size, setSize] = useState(200);

  useLayoutEffect(() => {
    const h = document.body.clientHeight;

    setSize(h);

    const onResize = () => {
      setSize(h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return size;
};

export const Loader = () => {
  const [size, setSize] = useState(200);
  const h = useWindowHeight();

  const { answer, messageSent } = useWContext();

  useLayoutEffect(() => {
    setSize((h * 0.8) / 5);
  }, [h]);

  const cls = answer !== "NotOK" ? "bg-[#ff8da1]" : "bg-black";

  const getText = () => {
    // if (messageSent || answer === "OK") {
    //   return happy;
    // }

    // if (!answer) {
    //   return hello;
    // }

    // return aggg;
    return "CONGRATS!!!"
  }

  return (
    <div className={cls + " h-screen w-screen absolute inset-0 overflow-hidden"}>
      {[0, 1, 2, 3, 4].map((index) => (
        <FloatingText key={index} size={size}>
          {getText()} {getText()} {getText()}
        </FloatingText>
      ))}
    </div>
  );
};

const hello = 'HELLO '.repeat(50);
const aggg = 'AGGG '.repeat(50);
const happy = ":> :> :>".repeat(50);

const FloatingText = ({ children, size = 200 }) => {
  return (
    <p
      className="floating-text text-center leading-tight text-transparent font-bold uppercase whitespace-nowrap"
      style={{ WebkitTextStroke: '1px #fff', fontSize: `${size}px` }}
    >
      {children}
    </p>
  );
};
