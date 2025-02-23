import { confetti } from '@tsparticles/confetti';
import { useWContext } from '../context';
import { useRef } from 'react';

const sheFeels = (feeling) => {
  return fetch('https://67bb2527fbe0387ca13936df.mockapi.io/feels', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    // Send your data in the request body as JSON
    body: JSON.stringify({
      date: Date.now(),
      answer: feeling,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    // handle error
  });
};

const sheNotes = (note) => {
  return fetch('https://67bb2527fbe0387ca13936df.mockapi.io/notes', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    // Send your data in the request body as JSON
    body: JSON.stringify({
      date: Date.now(),
      content: note,
    }),
  });
};

export const HowDoYouFeel = () => {
  const { setAnswer, answer, setMessageSent, messageSent } = useWContext();
  const inputRef = useRef(null);

  console.log('AA', answer);

  const question = 'Ngày hôm nay em thế nào?';

  const onAnswer = (ans) => {
    sheFeels(ans);
    setAnswer(ans);
  };

  const onSendMessage = () => {
    const message = inputRef.current.value;

    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { y: 0 },
      colors: ['#ff78ae'],
      shape: ['hearts'],
      scalar: 2,
    });

    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { y: 0 },
      shape: ['hearts'],
      colors: ['#ff78ae'],
      scalar: 2,
      startVelocity: 100,
    });

    inputRef.current.value = '';
    sheNotes(message);
    setMessageSent(true);
  };

  if (answer && messageSent) {
    return <Bye />;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <p className="text-white text-5xl font-bold mb-3 text-center">
        {question}
      </p>

      <div className="flex gap-3 max-w-xs">
        <ImgButton
          isActive={answer === 'OK'}
          src="/OK.jpg"
          onClick={() => onAnswer?.('OK')}
        />
        <ImgButton
          isActive={answer === 'NotOK'}
          isBad
          src="/NotOK.jpg"
          onClick={() => onAnswer?.('NotOK')}
        />
      </div>

      <div
        className={
          'px-4 flex flex-col w-full gap-2 ' +
          (answer ? 'opacity-100' : 'opacity-0')
        }
      >
        <label
          htmlFor="aaa"
          className="text-white text-2xl font-bold justify-center"
        >
          {answer === 'OK' ? 'Có gì mà vui vậy ạ?' : 'Ai làm công chúa buồn?'}
        </label>
        <textarea
          ref={inputRef}
          placeholder="Viết vào đây, viết gì cũng được..."
          rows={5}
          name="aaa"
          type="text"
          className="w-full bg-transparent border-2 border-white rounded-lg p-2 text-white"
        />
        <button
          onClick={onSendMessage}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Gửi
        </button>
      </div>
    </div>
  );
};

const ImgButton = ({ src, onClick, isBad = false, isActive = false }) => {
  const handleClick = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: isBad ? ['image'] : ['hearts'],
      colors: ['#ff78ae'],
      origin: { x, y },
      shapeOptions: {
        image: {
          src: isBad ? '/NotOK.jpg' : '/OK.jpg',
        },
      },
    };

    confetti({
      ...defaults,
      count: 50,
      scalar: 2,
    });

    confetti({
      ...defaults,
      count: 25,
      scalar: 3,
    });

    confetti({
      ...defaults,
      count: 10,
      scalar: 4,
    });
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer aspect-square text-white bg-slate-600 rounded-lg overflow-hidden border-8 border-lime-300 hover:scale-105 transition-all duration-300 ${
        isActive ? 'border-lime-300 scale-105' : 'border-white'
      }`}
    >
      <img src={src} alt="happy" className="w-full h-full object-cover" />
    </div>
  );
};

export const Bye = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <p className="text-white text-5xl font-bold mb-3 text-center">BYE</p>

      <p className="text-white text-5xl font-bold mb-3 text-center">
        I LOVE YOU ALWAYS
      </p>
    </div>
  );
};
