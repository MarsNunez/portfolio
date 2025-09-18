import Link from "next/link";
import Cards from "./components/Cards";
import LatestProjects from "./components/LatestProjects";

export default function Home() {
  return (
    <main>
      <img
        src="/img/code02.jpg"
        alt="Background code pattern"
        className="background-video brightness-75 blur-sm object-cover"
      />
      {/* SECTION 01 */}
      <section className="menu-height flex items-center">
        <div className="h-fit mt-36 mx-auto px-10">
          <h1 className="title font-extralight leading-tight text-center text-4xl md:text-6xl">
            Marcelo Nunez
          </h1>
          <h2 className="title text-center text-xl md:text-2xl md:mt-2">
            - Full Stack Software Developer -
          </h2>
          <div className="flex flex-col mt-16 md:flex-row">
            <a
              href="#contact"
              className="uppercase text-xs tracking-widest font-medium border border-green-500 w-fit mx-auto px-12 py-6 hover:bg-green-500 ease-out duration-300 flex items-center"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 02 */}
      <section className="mt-24 max-w-7xl mx-auto" id="about">
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20 px-5 max-w-4xl mx-auto">
          <div className="image-container max-w-xs sm:max-w-none mx-auto sm:mx-0">
            <img src="/img/me.jpeg" className="w-full" alt="personal image" />
          </div>
          <div className="my-auto">
            <h2 className="title text-xl sm:text-3xl font-normal">
              My passion and focus is Software development
            </h2>
            <div className="flex flex-col">
              <p className="mt-6 font-light leading-7 mb-3">
                Let's be honest and cut through the marketing bullshit, you need
                a website that looks amazing and actually works. The bottom
                line, that's what I do. If you want to learn more about working
                with me, look through my website.
              </p>
              <a
                href="#portfolio"
                className="border cursor-pointer text-center  border-green-500 py-6 px-10 uppercase text-xs tracking-widest font-medium hover:bg-green-500 ease-out duration-300 w-fit"
              >
                Explore <i className="lni lni-arrow-right ml-1 font-bold"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 */}
      <section className="px-9 pt-10" id="services">
        <h2 className="title text-center text-3xl mb-16 md:text-4xl lg:text-5xl">
          Everything I Offer
        </h2>
        <div className="max-w-7xl mx-auto">
          <Cards />
        </div>
      </section>

      {/* SECTION 04 */}
      <section className="px-9 mt-16 md:mt-0 md:pt-1 mb-20" id="portfolio">
        <div className="max-w-4xl mx-auto md:my-28">
          <p className="uppercase text-sm tracking-widest text-green-500 font-medium">
            Some of my Latest Projects
          </p>
          <h2 className="title text-3xl mt-6 mb-16 md:text-4xl">
            Take a look at some of my latest projects that I've been busy
            working on.
          </h2>
        </div>
        <LatestProjects />
      </section>

      {/* SECTION 05 */}
      {/* <section className="px-8 pt-16 md:pt-2 pb-10 md:pb-20" id="feed">
        <div className="md:my-28">
          <p className="uppercase text-center text-sm tracking-widest text-green-500 font-medium">
            - Tech field -
          </p>
          <h2 className="title text-3xl mt-6 mb-12 text-center md:text-6xl">
            Some of my most used technologies
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            <div className="border border-red-500 text-white">
              <i class="fa-brands fa-react"></i>
            </div>
            <img
              src="/img/02.jpg"
              alt="img02"
              className="object-cover h-52 cursor-pointer"
            />
            <img
              src="/img/03.jpg"
              alt="img03"
              className="object-cover h-52 cursor-pointer"
            />
            <img
              src="/img/04.jpg"
              alt="img04"
              className="object-cover h-52 cursor-pointer"
            />
            <img
              src="/img/05.jpg"
              alt="img05"
              className="object-cover h-52 cursor-pointer"
            />
            <img
              src="/img/06.jpg"
              alt="img06"
              className="object-cover h-52 cursor-pointer"
            />
          </div>
        </div>
      </section> */}

      {/* SECTION 06 */}
      <section className="text-center py-12 line" id="contact">
        <div className="decoration-1 underline-offset-4 font-light text-green-500">
          <a href="#" className="hover:text-white ease-out duration-300">
            Back to top
            <i className="lni lni-arrow-up ml-1 font-bold"></i>
          </a>
        </div>
        <Link href={"/"} className="title flex items-center justify-center">
          <p className="hover-line-animation px-2 text-3xl py-12">MN</p>
        </Link>
        <div className="flex justify-center text-xl gap-8 text-green-500">
          <i className="lni lni-instagram-original cursor-pointer hover:text-white ease-out duration-300"></i>
          <i className="lni lni-github-original cursor-pointer hover:text-white ease-out duration-300"></i>
          <i className="lni lni-twitter-original cursor-pointer hover:text-white ease-out duration-300"></i>
          <i className="lni lni-linkedin-original cursor-pointer hover:text-white ease-out duration-300"></i>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12">
        <p className="font-light text-xs text-center px-9">
          © 2023 Mars Nunez. All rights reserved. Frontend Developer & Founder
          of{" "}
          <span className="text-green-500 underline decoration-1 underline-offset-4 hover:text-white ease-out duration-300 cursor-pointer">
            HEXXA STUDIOS
          </span>
        </p>
        <div className="flex justify-center gap-5 font-light text-green-500 text-xs mt-5">
          <a
            href="#"
            className="underline decoration-1 underline-offset-4 hover:text-white ease-out duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="underline decoration-1 underline-offset-4 hover:text-white ease-out duration-300"
          >
            Return Policy
          </a>
          <a
            href="#"
            className="underline decoration-1 underline-offset-4 hover:text-white ease-out duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </main>
  );
}
