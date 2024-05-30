import React from "react";

import { useEffect, useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Portfolio", path: "javascript:void(0)" },
    { title: "About Me", path: "javascript:void(0)" },
    { title: "Contact us", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setMenuOpen(false);
    };

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center text-2xl justify-between py-5 md:block">
      <a href="javascript:void(0)">
        {/* <img
          src="https://www.floatui.com/logo.svg"
          width={120}
          height={50}
          alt="Float UI logo"
        /> */}

        <h1 className=" text-2xl">Logo</h1>
      </a>
      <div className="md:hidden text-white">
        <button
          className="menu-btn text-black hover:text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <header
          className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
            scrolled
              ? "bg-white text-black shadow-lg"
              : "bg-transparent text-white"
          }`}
        >
          <div className={`md:hidden ${menuOpen ? "mx-2 " : "hidden"}`}>
            <Brand />
          </div>
          <nav
            className={` md:text-sm  ${
              menuOpen
                ? "absolute top-0 inset-x-0 bg-[#e5e4e2]  shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
                : ""
            }`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  menuOpen ? "block" : "hidden"
                } `}
              >
                <ul className="flex-1  gap-6 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  {navigation.map((item, idx) => (
                    <li key={idx} className=" hover:text-gray-900 text-xl">
                      <a href={item.path} className="block">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                  {/* <a
                    href="javascript:void(0)"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a> */}

                  <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm  font-medium bg-[#65a30d] hover:[#d9f99d] active:[#d9f99d] duration-150 rounded-lg sm:mt-0 sm:w-auto">
                    Get started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section></section>
      </div>
    </div>
  );
};

export default App;
