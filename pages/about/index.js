import Image from "next/image";
import Footer from "../../components/Footer";
import GithubIcon from "../../components/GithubIcon";
import DevToIcon from "../../components/DevToIcon";
import Header from "../../components/Header";
import Layout, { GradientBackground } from "../../components/Layout";
import SEO from "../../components/SEO";
import { getGlobalData } from "../../utils/global-data";


const AboutPage = (props) => {
  console.log(props);


  return (
    <Layout>
      <SEO title={'About me'} description='Test page' />
      <Header  name='About @quoc187'/>
      <main className="container mx-auto h-full">
        <article className="flex md:flex-row flex-col items-center">
          <span role="img" className="block w-1/4 rounded-full overflow-hidden">
            <Image
              alt="DSK"
              src="https://quoc-187.s3.ap-southeast-1.amazonaws.com/public/DSK.jpg"
              width={'100%'}
              height={'100%'}
              layout='responsive'
            />
          </span>
          <div className="flex flex-col items-center mt-2 md:items-start md:ml-12 md:mt-0">
            <h4 className="text-2xl font-bold mb-2">
              QUOC NGUYEN TRONG
            </h4>
            <p className="text-sm flex items-center w-fit">
              <GithubIcon className="mr-2" />
              <a href="https://github.com/nguyentrongquocuet" target="_blank" rel="noreferrer">
                nguyentrongquocuet
              </a>
            </p>
            <p className="text-sm flex items-center w-fit">
              <DevToIcon className="mr-2" />
              <a href="https://dev.to/nguyentrongquocuet" target="_blank" rel="noreferrer">
                nguyentrongquocuet
              </a>
            </p>
          </div>
        </article>
        <article className="text-center mt-4 w-3/4 mx-auto">
          <h2 className="text-2xl">
            I build things for the web
          </h2>
          <p className="text-lg text-left mt-2">
            I&apos;m a software engineer based in Hanoi, specalizing in building websites front-to-back, mainly focus on user-interface
          </p>
          <p className="text-lg text-left mt-1">
            Love coding, music, movies, games :D
          </p>
        </article>
      </main>
      <Footer copyrightText={getGlobalData().footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
};

export default AboutPage;
