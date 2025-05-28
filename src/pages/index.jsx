import React from "react";
import Layout from "@theme/Layout";
import Typing from "../components/home/Typing";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout title={`Welcome`} description="">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <section>
          <div className="flex flex-row items-start space-x-2">
            <h1>
              Our <span className="text-[#d75a49]">Partners</span>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.5 47.5"
              className="w-10 h-10"
              id="heart">
              <defs>
                <clipPath id="a">
                  <path d="M0 38h38V0H0v38Z"></path>
                </clipPath>
              </defs>
              <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                <path
                  fill="#d75a49"
                  d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.633-8.018-4.129-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.772.098-1.52.266-2.241C2.752 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.469.268 2.241"></path>
              </g>
            </svg>
          </div>
        </section>
        <Partners />
      </main>
    </Layout>
  );
}

function Header() {
  return (
    <header className="lg:px-16 grid grid-cols-1 md:grid-cols-2 md:px-12 px-6 py-24">
      <div>
        <h1 className="text-4xl md:text-6xl leading-[1.2] mb-7">
          <span>Hi, I'm </span>
          <span className="text-[#d75a49]">Squizer</span>
          <span className="text-secondary">,</span>
          <br />
          <span>Enjoy FiveM with </span>
          <span className="text-[#d75a49]">SQZ Scripts</span>
          <span className="text-secondary">.</span>
        </h1>
        <div className="md:flex hidden">
          <Typing />
        </div>
      </div>
      <div>
        <img
          src="/img/gaming.svg"
          alt="gaming"
          className="object-contain rounded-3xl"
        />
      </div>
      <div className="flex md:hidden">
        <Typing />
      </div>
    </header>
  );
}

const PARTNERS_DATA = [
];

function Partners() {
  return (
    <div className="grid w-full mt-4 mb-24 px-5 md:w-10/12 grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
      {PARTNERS_DATA.map((partner) => (
        <Link
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
          href={partner.link}
          target="_blank"
          key={partner.title}>
          <div
            className="border cst-card-p border-gray-300 hover:border-[#d75a49] rounded-2xl py-6 px-8
            transform transition duration-300 flex flex-col items-center justify-center
            ">
            <img
              src={partner.img}
              alt={partner.title}
              className="w-2/3 h-32 object-contain"
            />
            <p className="text-xl font-semibold  text-white rounded-lg px-3 py-2">
              {partner.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
