// import React from "react";

// const About = () => {
//   return (
//     <div>
//       About
//       <section className="w-full flex  justify-center">
//         <div className="  p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-50">
//           <span className="block mb-2 dark:text-violet-600">About Us</span>
//           <h1 className="text-5xl font-extrabold dark:text-gray-900">
//             Build it with Mamba
//           </h1>
//           <p className="my-8">
//             <span className="font-medium dark:text-gray-900">
//               Modular and versatile.
//             </span>
//             The ultimate design toolkit for savvy technology startups.
//           </p>
//           <form
//             noValidate=""
//             action=""
//             className="self-stretch space-y-3"
//           ></form>
//         </div>
//         <img
//           src="https://source.unsplash.com/random/480x360"
//           alt=""
//           className="object-cover  h-full rounded-md xl:col-span-3 dark:bg-gray-500"
//         />
//       </section>
//     </div>
//   );
// };

// export default About;

// import React from "react";
// import Abouts from "../assets/About.jpg";

// const About = () => {
//   return (
//     <div className="  ">
//       <section className="w-full   flex  flex-col justify-center items-center lg:flex-row  lg:gap-2 lg:items-center">
//         <div className=" rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-50 lg:w-1/2 lg:order-2 lg:text-center">
//           <span className="block mb-2 dark:text-violet-600">About Us</span>
//           <h1 className="text-5xl font-extrabold dark:text-gray-900">
//             Meet the Artist: [Your Name]
//           </h1>
//           <p className="my-8">
//             <span className="font-medium dark:text-gray-900">
//               Embrace Creativity.
//             </span>
//             Embark on a journey through the mind and hands of the artist.
//           </p>
//           <div>
//             <h2 className="text-2xl font-semibold dark:text-gray-900">
//               [Your Name]'s Portfolio
//             </h2>
//             <p className="my-4 dark:text-gray-900">
//               Welcome to my creative world, where imagination knows no bounds
//               and art comes to life. As an artist, I specialize in sketching and
//               painting, translating thoughts and emotions into visual
//               masterpieces.
//             </p>
//             <p className="my-4 dark:text-gray-900">
//               With each stroke of the brush or pencil, I aim to evoke feelings,
//               provoke thoughts, and inspire minds. My portfolio is a reflection
//               of my passion for art and my commitment to capturing the beauty of
//               life on canvas.
//             </p>
//             <p className="my-4 dark:text-gray-900">
//               Join me on this artistic journey, where every creation tells a
//               story and every artwork invites you to explore the depths of your
//               imagination.
//             </p>
//           </div>
//         </div>
//         <img
//           src={Abouts}
//           alt=""
//           className="object-cover   rounded-md xl:col-span-3 dark:bg-gray-500 lg:w-1/2 lg:order-1"
//         />
//       </section>
//     </div>
//   );
// };

// export default About;

import React from "react";
import Abouts from "../assets/About.jpg";

const About = () => {
  return (
    // <div className="container mx-auto">
    //   <section className="w-full flex flex-col justify-center items-center lg:flex-row lg:gap-2 lg:items-center">
    //     <div className="rounded-md sm:p-8 lg:p-16 xl:col-span-2 dark:bg-gray-50 lg:w-1/2 lg:order-2 lg:text-center">
    //       <span className="block mb-2 dark:text-violet-600">About Us</span>
    //       <h1 className="text-5xl font-extrabold dark:text-gray-900">
    //         Meet the Artist: [Your Name]
    //       </h1>
    //       <p className="my-8">
    //         <span className="font-medium dark:text-gray-900">
    //           Embrace Creativity.
    //         </span>{" "}
    //         Embark on a journey through the mind and hands of the artist.
    //       </p>
    //       <div>
    //         <h2 className="text-2xl font-semibold dark:text-gray-900">
    //           [Your Name]'s Portfolio
    //         </h2>
    //         <p className="my-4 dark:text-gray-900">
    //           Welcome to my creative world, where imagination knows no bounds
    //           and art comes to life. As an artist, I specialize in sketching and
    //           painting, translating thoughts and emotions into visual
    //           masterpieces.
    //         </p>
    //         <p className="my-4 dark:text-gray-900">
    //           With each stroke of the brush or pencil, I aim to evoke feelings,
    //           provoke thoughts, and inspire minds. My portfolio is a reflection
    //           of my passion for art and my commitment to capturing the beauty of
    //           life on canvas.
    //         </p>
    //         <p className="my-4 dark:text-gray-900">
    //           Join me on this artistic journey, where every creation tells a
    //           story and every artwork invites you to explore the depths of your
    //           imagination.
    //         </p>
    //       </div>
    //     </div>
    //     <img
    //       src={Abouts}
    //       alt=""
    //       className="object-cover rounded-md xl:col-span-3 dark:bg-gray-500 lg:w-1/2 lg:order-1"
    //     />
    //   </section>
    // </div>

    <section className="mt-24 mx-auto   max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 gap-3 sm:text-center lg:text-left">
        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
          About Me
        </h1>
        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
          Alice Walker
          <span className="text-[#65a30d]"> Based in Newyork</span>
        </h1>
        <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          Welcome to my creative world, where imagination knows no bounds and
          art comes to life. As an artist, I specialize in sketching and
          painting, translating thoughts and emotions into visual masterpieces.
        </p>
        <div>
          <p className="text-gray-800 py-3">
            Subscribe to our newsletter and we'll save your time
          </p>
          <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
            />
            <button className="outline-none bg-[#65A30D] text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
        <img src={Abouts} className="w-full mx-auto sm:w-10/12  lg:w-full" />
      </div>
    </section>
  );
};

export default About;
