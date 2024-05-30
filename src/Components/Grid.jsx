// // // import React, { useState } from "react";

// // // const Grid = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const images = [
// // //     "https://source.unsplash.com/random/240x360/?1",
// // //     "https://source.unsplash.com/random/240x360/?2",
// // //     "https://source.unsplash.com/random/240x360/?3",
// // //     "https://source.unsplash.com/random/240x360/?4",
// // //     "https://source.unsplash.com/random/240x360/?5",
// // //   ];

// // //   const slideBack = () => {
// // //     setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
// // //   };

// // //   const slideForward = () => {
// // //     setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
// // //   };

// // //   return (
// // //     <div className="relative flex items-center justify-center w-full dark:text-gray-900">
// // //       <button
// // //         aria-label="Slide back"
// // //         onClick={slideBack}
// // //         className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
// // //       >
// // //         <svg
// // //           width="8"
// // //           height="14"
// // //           fill="none"
// // //           viewBox="0 0 8 14"
// // //           xmlns="http://www.w3.org/2000/svg"
// // //           className="w-4 h-4"
// // //         >
// // //           <path
// // //             d="M7 1L1 7L7 13"
// // //             stroke="currentColor"
// // //             strokeWidth="2"
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //           ></path>
// // //         </svg>
// // //       </button>
// // //       <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
// // //         {images.map((imageUrl, index) => (
// // //           <div
// // //             key={index}
// // //             className={`relative flex flex-shrink-0 w-full sm:w-auto ${
// // //               index === currentIndex ? "" : "hidden"
// // //             }`}
// // //           >
// // //             <img
// // //               className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
// // //               src={imageUrl}
// // //               alt={`Image ${index + 1}`}
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <button
// // //         aria-label="Slide forward"
// // //         onClick={slideForward}
// // //         className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
// // //       >
// // //         <svg
// // //           width="8"
// // //           height="14"
// // //           viewBox="0 0 8 14"
// // //           fill="none"
// // //           xmlns="http://www.w3.org/2000/svg"
// // //           className="w-4 h-4"
// // //         >
// // //           <path
// // //             d="M1 1L7 7L1 13"
// // //             stroke="currentColor"
// // //             strokeWidth="2"
// // //             strokeLinecap="round"
// // //             strokeLinejoin="round"
// // //           ></path>
// // //         </svg>
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Grid;

// // import React, { useState } from "react";

// // const Grid = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const images = [
// //     "https://source.unsplash.com/random/240x360/?1",
// //     "https://source.unsplash.com/random/240x360/?2",
// //     "https://source.unsplash.com/random/240x360/?3",
// //     "https://source.unsplash.com/random/240x360/?4",
// //     "https://source.unsplash.com/random/240x360/?5",
// //   ];

// //   const slideBack = () => {
// //     setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
// //   };

// //   const slideForward = () => {
// //     setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
// //   };

// //   return (
// //     <div className="relative flex items-center justify-center w-full dark:text-gray-900">
// //       <button
// //         aria-label="Slide back"
// //         onClick={slideBack}
// //         className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
// //       >
// //         <svg
// //           width="8"
// //           height="14"
// //           fill="none"
// //           viewBox="0 0 8 14"
// //           xmlns="http://www.w3.org/2000/svg"
// //           className="w-4 h-4"
// //         >
// //           <path
// //             d="M7 1L1 7L7 13"
// //             stroke="currentColor"
// //             strokeWidth="2"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           ></path>
// //         </svg>
// //       </button>
// //       <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 mx-auto overflow-auto">
// //         {images.map((imageUrl, index) => (
// //           <div
// //             key={index}
// //             className={`relative flex flex-shrink-0 w-full sm:w-auto ${
// //               index === currentIndex ? "" : "hidden"
// //             }`}
// //           >
// //             <img
// //               className="object-cover object-center dark:bg-gray-500 h-96 aspect-square"
// //               src={imageUrl}
// //               alt={`Image ${index + 1}`}
// //             />
// //           </div>
// //         ))}
// //       </div>
// //       <button
// //         aria-label="Slide forward"
// //         onClick={slideForward}
// //         className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
// //       >
// //         <svg
// //           width="8"
// //           height="14"
// //           viewBox="0 0 8 14"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //           className="w-4 h-4"
// //         >
// //           <path
// //             d="M1 1L7 7L1 13"
// //             stroke="currentColor"
// //             strokeWidth="2"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           ></path>
// //         </svg>
// //       </button>
// //     </div>
// //   );
// // };

// // export default Grid;

// import React, { useState } from "react";

// const Grid = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "https://source.unsplash.com/random/240x360/?1",
//     "https://source.unsplash.com/random/240x360/?2",
//     "https://source.unsplash.com/random/240x360/?3",
//     "https://source.unsplash.com/random/240x360/?4",
//     "https://source.unsplash.com/random/240x360/?5",
//   ];

//   const slideBack = () => {
//     setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
//   };

//   const slideForward = () => {
//     setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
//   };

//   return (
//     <div className="relative flex items-center justify-center w-full dark:text-gray-900">
//       <button
//         aria-label="Slide back"
//         onClick={slideBack}
//         className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
//       >
//         <svg
//           width="8"
//           height="14"
//           fill="none"
//           viewBox="0 0 8 14"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4"
//         >
//           <path
//             d="M7 1L1 7L7 13"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></path>
//         </svg>
//       </button>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 mx-auto overflow-auto">
//         {images.map((imageUrl, index) => (
//           <div
//             key={index}
//             className={`relative flex flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 ${
//               index === currentIndex ? "" : "hidden"
//             }`}
//           >
//             <img
//               className="object-cover object-center dark:bg-gray-500 h-96 w-full"
//               src={imageUrl}
//               alt={`Image ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>
//       <button
//         aria-label="Slide forward"
//         onClick={slideForward}
//         className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
//       >
//         <svg
//           width="8"
//           height="14"
//           viewBox="0 0 8 14"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4"
//         >
//           <path
//             d="M1 1L7 7L1 13"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></path>
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default Grid;

// import React from "react";
// import Carousel from "react-grid-carousel";

// const Grid = () => {
//   return (
//     <Carousel cols={4} rows={1} gap={20} loop>
//       <Carousel.Item>
//         <img width="100%" src="https://picsum.photos/800/600?random=1" />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img width="100%" src="https://picsum.photos/800/600?random=1" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" src="https://picsum.photos/800/600?random=2" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" src="https://picsum.photos/800/600?random=3" />
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* anything you want to show in the grid */}
//       </Carousel.Item>
//       {/* ... */}
//     </Carousel>
//   );
// };

// export default Grid;

// import React from "react";
// import Carousel from "react-grid-carousel";

// import Grid1 from "../assets/Grid1.jpg";
// import Grid2 from "../assets/Grid2.jpg";
// import Grid3 from "../assets/grid4.jpg";
// import Grid4 from "../assets/Grid5.jpg";

// const Grid = () => {
//   return (
//     <Carousel cols={4} rows={1} gap={20} loop>
//       <Carousel.Item>
//         <img width="100%" src={Grid1} />
//       </Carousel.Item>

//       <Carousel.Item>
//         <img width="100%" src={Grid2} />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" src={Grid3} />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" src={Grid4} />
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* anything you want to show in the grid */}
//       </Carousel.Item>
//       {/* ... */}
//     </Carousel>
//   );
// };

// export default Grid;

import React from "react";
import Carousel from "react-grid-carousel";

import Grid1 from "../assets/Grid1.jpg";
import Grid2 from "../assets/Grid2.jpg";
import Grid3 from "../assets/grid4.jpg";
import Grid4 from "../assets/Grid5.jpg";

const Grid = () => {
  return (
    <div className="section-part  py-14 ">
      <p className="text-4xl py-8  font-semibold text-gray-800 flex  justify-center">
        Art Work
      </p>
      <Carousel cols={4} rows={1} gap={20} loop>
        <Carousel.Item>
          <div className="flex justify-center items-center h-72 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Grid1}
              alt="Grid1"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex justify-center items-center h-72 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Grid2}
              alt="Grid2"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex justify-center items-center h-72 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Grid3}
              alt="Grid3"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex justify-center items-center h-72 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={Grid4}
              alt="Grid4"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* anything you want to show in the grid */}
        </Carousel.Item>
        {/* ... */}
      </Carousel>
    </div>
  );
};

export default Grid;
