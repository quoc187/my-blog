import Head from 'next/head';
import { HowDoYouFeel } from './HowDoYouFeel';
import { Loader } from './Loader';
import { MusicToggle } from './MusicToggle';
import { WContext } from './context'
import { useState } from 'react'

export default function WhyNotMe() {
  const [answer, setAnswer] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  return (
    <>
      <Head>
        <title>To my Princess</title>
      </Head>
      <WContext.Provider value={{ answer, setAnswer, messageSent, setMessageSent }}>
        <Loader />

        <div className="relative h-screen w-screen flex items-center justify-center">
          <MusicToggle />
          <HowDoYouFeel />
        </div>

      </WContext.Provider>
    </>
  );
}
