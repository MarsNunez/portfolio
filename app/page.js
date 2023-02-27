import Link from "next/link";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <main>
      <video className="background-video brightness-50" autoPlay loop muted>
        <source src="/videos/nature.mp4" type="video/mp4" />
      </video>
      {/* SECTION 01 */}
      <section className="menu-height flex items-center">
        <div className="h-fit mt-36 mx-auto px-10">
          <h1 className="title font-extralight leading-tight text-center text-4xl md:text-6xl">
            Mars Nunez
          </h1>
          <h2 className="title text-center text-xl md:text-2xl md:mt-2">
            - Software Developer -
          </h2>
          <div className="flex flex-col mt-16 md:flex-row">
            <button className="uppercase text-xs tracking-widest font-medium border border-green-500 w-fit mx-auto px-12 py-6 hover:bg-green-500 ease-out duration-300">
              Hire an Expert
            </button>
            <button className="flex items-center uppercase text-xs tracking-widest font-medium w-fit mx-auto px-12 py-6 hover:text-gray-400 ease-out duration-300 group">
              <i className="lni lni-vercel rotate-90 w-8 h-8  mr-2 hidden md:inline-block border rounded-full p-2 bg-white text-black group-hover:bg-gray-400 duration-300 group-hover:border-gray-500"></i>
              Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 02 */}
      <section className="mt-24 max-w-7xl mx-auto" id="about">
        <div className="px-8 py-14 grid grid-cols-2 gap-10 lg:gap-20 lg:px-28">
          <div className="image-container">
            <img src="/img/me.png" alt="personal image" className="" />
          </div>
          <div className="my-auto">
            <h2 className="title text-3xl font-normal">
              My passion and focus is Software development
            </h2>
            <p className="mt-6 font-light leading-7 mb-3">
              Let's be honest and cut through the marketing bullshit, you need a
              website that looks amazing and actually works. The bottom line,
              that's what I do. If you want to learn more about working with me,
              look through my website.
            </p>
            <div className="border cursor-pointer text-center  border-green-500 py-6 px-10 uppercase text-xs tracking-widest font-medium hover:bg-green-500 ease-out duration-300 lg:mt-10 w-fit">
              Learn More <i className="lni lni-arrow-right ml-1 font-bold"></i>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 */}
      <section className="px-9 pt-10" id="services">
        <h2 className="title text-center text-3xl mb-16 md:text-4xl lg:text-5xl">
          Everything Squarespace.
        </h2>
        <div className="max-w-7xl mx-auto">
          <Cards />
        </div>
      </section>

      {/* SECTION 04 */}
      <section className="px-9 pt-1" id="portfolio">
        <div className="max-w-4xl mx-auto md:my-28">
          <p className="uppercase text-sm tracking-widest text-green-500 font-medium">
            Latest Squarespace Projects
          </p>
          <h2 className="title text-3xl mt-6 mb-16 md:text-4xl">
            Take a look at some of my latest Squarespace projects that I've been
            busy working on.
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="ease-out duration-300 cursor-pointer hover:brightness-65">
              <img
                src="/img/greenWork.jpg"
                alt="Project Image"
                className="object-cover"
              />
              <p className="title text-2xl mt-5 sm:text-base md:mt-3 md:text-3xl">
                Coding Latam Co.
              </p>
            </div>
            <div className="ease-out duration-300 cursor-pointer hover:brightness-65">
              <img
                src="/img/greenWork.jpg"
                alt="Project Image"
                className="object-cover"
              />
              <p className="title text-2xl mt-5 sm:text-base md:mt-3 md:text-3xl">
                Hexxa Studios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 */}
      <section className="px-8 pt-5 pb-10 md:pb-20" id="feed">
        <div className="md:my-28">
          <p className="uppercase text-center text-sm tracking-widest text-green-500 font-medium">
            My instagram feed
          </p>
          <h2 className="title text-3xl mt-6 mb-12 text-center md:text-6xl">
            My life as a Squarespace developer
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            <img
              src="/img/01.jpg"
              alt="img01"
              className="object-cover h-52 cursor-pointer"
            />
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
      </section>

      {/* SECTION 06 */}
      <section className="text-center py-12 line" id="contact">
        <div className="underline decoration-1 underline-offset-4 font-light text-green-500">
          <a href="#" className="hover:text-white ease-out duration-300">
            hello@marsnunez.com
          </a>
          <br />
          <a href="#" className="hover:text-white ease-out duration-300">
            (717) 531-4982
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
