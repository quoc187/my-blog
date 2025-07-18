import Head from 'next/head';
import { HowDoYouFeel } from './HowDoYouFeel';
import { Loader } from './Loader';
import { MusicToggle } from './MusicToggle';
import { WContext } from './context'
import { useState } from 'react'
import { useClientInfo } from '../collect-info'

export default function WhyNotMe() {
  const [answer, setAnswer] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  
  useClientInfo()

  return (
    <>
      <Head>
        <title>To my Princess</title>
      </Head>
      <WContext.Provider value={{ answer, setAnswer, messageSent, setMessageSent }}>
        <Loader />

        <div className="relative h-screen w-screen flex items-center justify-center">
          <MusicToggle />
          {/* <HowDoYouFeel /> */}
          <YouMadeId />
        </div>

      </WContext.Provider>
    </>
  );
}

const YouMadeId  =() => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-5xl font-bold mb-3 text-center">
        Congratulations! I heard you made it!
      </h1>
      <h2 className="text-white text-2xl font-bold mb-0 text-center">
        I&apos;ll keep the memory as a secret gift.
      </h2>
      <h2 className="text-white text-2xl font-bold mb-3 text-center">
        And just maybe, enough time will pass, we&apos;ll look back and laugh.
      </h2>

      <h2 className="text-white text-2xl font-bold mb-3 mt-2 text-center">
        Just don&apos;t forget it. Princess!
      </h2>
    </div>
  )
}