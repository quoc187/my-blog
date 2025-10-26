import Head from 'next/head';
import { Loader } from './Loader';
import { MusicToggle } from './MusicToggle';
import { WContext } from './context';
import { useState } from 'react';
import { useClientInfo } from '../collect-info';

export default function WhyNotMe() {
  const [answer, setAnswer] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  useClientInfo();

  return (
    <>
      <Head>
        <title>~~</title>
      </Head>
      <WContext.Provider
        value={{ answer, setAnswer, messageSent, setMessageSent }}
      >
        <Loader />

        <div className="relative h-screen w-screen flex items-center justify-center">
          <MusicToggle />
          <YouMadeId />
        </div>
      </WContext.Provider>
    </>
  );
}

const YouMadeId = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl font-bold mb-3 text-center">
        It&#39;s bad when you risk something you can&#39;t afford to lose.
      </h1>
      <h1 className="text-white text-5xl font-bold mb-3 text-center">
        Perhaps, I can afford everything.
      </h1>
    </div>
  );
};
