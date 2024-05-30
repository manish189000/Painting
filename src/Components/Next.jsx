// // import React from "react";

// // const Next = () => {
// //   return (
// //     <div>
// //       <div className="min-h-screen dark:bg-gray-100 dark:text-gray-800">
// //         <div className="p-6 space-y-8">
// //           <main>
// //             <div className="container mx-auto space-y-16">
// //               <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
// //                 <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-50">
// //                   <span className="block mb-2 dark:text-violet-600">
// //                     Mamba design system
// //                   </span>
// //                   <h1 className="text-5xl font-extrabold dark:text-gray-900">
// //                     Build it with Mamba
// //                   </h1>
// //                   <p className="my-8">
// //                     <span className="font-medium dark:text-gray-900">
// //                       Modular and versatile.
// //                     </span>
// //                     The ultimate design toolkit for savvy technology startups.
// //                   </p>
// //                   <form
// //                     noValidate=""
// //                     action=""
// //                     className="self-stretch space-y-3"
// //                   >
// //                     <div>
// //                       <label htmlFor="name" className="text-sm sr-only">
// //                         Your name
// //                       </label>
// //                       <input
// //                         id="name"
// //                         type="text"
// //                         placeholder="Your name"
// //                         className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300"
// //                       />
// //                     </div>
// //                     <div>
// //                       <label htmlFor="lastname" className="text-sm sr-only">
// //                         Email address
// //                       </label>
// //                       <input
// //                         id="lastname"
// //                         type="text"
// //                         placeholder="Email address"
// //                         className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300"
// //                       />
// //                     </div>
// //                     <button className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
// //                       Join the waitlist
// //                     </button>
// //                   </form>
// //                 </div>
// //                 <img
// //                   src="https://source.unsplash.com/random/480x360"
// //                   alt=""
// //                   className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
// //                 />
// //               </section>
// //               <section>
// //                 <span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-600">
// //                   How it works
// //                 </span>
// //                 <h2 className="text-5xl font-bold lg:text-center dark:text-gray-900">
// //                   Building with Mamba is simple
// //                 </h2>
// //                 <div className="grid gap-6 my-16 lg:grid-cols-3">
// //                   <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
// //                     <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
// //                       1
// //                     </div>
// //                     <p className="text-2xl font-semibold">
// //                       <b>Nulla.</b>Nostrum, corrupti blanditiis. Illum,
// //                       architecto?
// //                     </p>
// //                   </div>
// //                   <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
// //                     <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
// //                       2
// //                     </div>
// //                     <p className="text-2xl font-semibold">
// //                       <b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor
// //                       veniam alias debitis?
// //                     </p>
// //                   </div>
// //                   <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
// //                     <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
// //                       3
// //                     </div>
// //                     <p className="text-2xl font-semibold">
// //                       <b>Maxime.</b>Expedita temporibus culpa reprehenderit
// //                       doloribus consectetur odio!
// //                     </p>
// //                   </div>
// //                 </div>
// //               </section>
// //               <section className="grid gap-6 lg:grid-cols-2">
// //                 <img
// //                   src="https://source.unsplash.com/random/360x480"
// //                   alt=""
// //                   className="object-cover w-full rounded-md max-h-96 dark:bg-gray-500"
// //                 />
// //                 <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50">
// //                   <img
// //                     src="https://source.unsplash.com/random/100x100"
// //                     alt=""
// //                     className="object-cover w-20 h-20 rounded-full dark:bg-gray-500"
// //                   />
// //                   <blockquote className="max-w-lg text-lg italic font-medium text-center">
// //                     "Et, dignissimos obcaecati. Recusandae praesentium doloribus
// //                     vitae? Rem unde atque mollitia!"
// //                   </blockquote>
// //                   <div className="text-center dark:text-gray-600">
// //                     <p>Leroy Jenkins</p>
// //                     <p>CEO of Company Co.</p>
// //                   </div>
// //                   <div className="flex space-x-2">
// //                     <button
// //                       type="button"
// //                       aria-label="Page 1"
// //                       className="w-2 h-2 rounded-full dark:bg-gray-900"
// //                     ></button>
// //                     <button
// //                       type="button"
// //                       aria-label="Page 2"
// //                       className="w-2 h-2 rounded-full dark:bg-gray-400"
// //                     ></button>
// //                     <button
// //                       type="button"
// //                       aria-label="Page 3"
// //                       className="w-2 h-2 rounded-full dark:bg-gray-400"
// //                     ></button>
// //                     <button
// //                       type="button"
// //                       aria-label="Page 4"
// //                       className="w-2 h-2 rounded-full dark:bg-gray-400"
// //                     ></button>
// //                   </div>
// //                 </div>
// //                 <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 dark:bg-gray-50">
// //                   <h2 className="text-5xl font-bold dark:text-gray-900">
// //                     Create with us
// //                   </h2>
// //                   <p className="dark:text-gray-600">
// //                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
// //                     Nesciunt facilis quod accusantium beatae cum nam adipisci
// //                     reiciendis omnis possimus error quo animi voluptas magni, at
// //                     incidunt. Nulla ex at ullam corporis quidem adipisci vitae,
// //                     perferendis dolorem libero minus atque tenetur enim pariatur
// //                     cupiditate commodi in beatae, ipsa eligendi? Quis, saepe.
// //                   </p>
// //                 </div>
// //               </section>
// //               <section>
// //                 <div className="grid gap-6 lg:grid-cols-3">
// //                   <div className="overflow-hidden rounded lg:flex lg:col-span-3">
// //                     <img
// //                       src="https://source.unsplash.com/random/485x365"
// //                       alt=""
// //                       className="object-cover w-full h-auto max-h-96 dark:bg-gray-500"
// //                     />
// //                     <div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-50">
// //                       <span className="self-start px-3 py-1 text-sm rounded-full dark:bg-violet-600 dark:text-gray-50">
// //                         Business
// //                       </span>
// //                       <h2 className="text-3xl font-bold md:flex-1">
// //                         Curating a workplace that inspires team movement
// //                       </h2>
// //                       <div>
// //                         <p className="dark:text-gray-600">November 30, 2020</p>
// //                         <p className="dark:text-gray-600">By Leroy Jenkins</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
// //                     <h3 className="inline font-medium dark:text-gray-900">
// //                       Panel-based blocks.
// //                     </h3>
// //                     <p className="inline">
// //                       Flexible panels that are perfect for building functional
// //                       layouts.
// //                     </p>
// //                   </div>
// //                   <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
// //                     <h3 className="inline font-medium dark:text-gray-900">
// //                       Responsive design.
// //                     </h3>
// //                     <p className="inline">
// //                       Panels look great no matter the device.
// //                     </p>
// //                   </div>
// //                   <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
// //                     <h3 className="inline font-medium dark:text-gray-900">
// //                       Premium support.
// //                     </h3>
// //                     <p className="inline">
// //                       Join over 50 000 satisfied customers who use our
// //                       templates.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </section>
// //               <section>
// //                 <div className="container p-6 py-20 mx-auto rounded lg:px-8 dark:bg-gray-50">
// //                   <h2 className="text-5xl font-bold text-center">
// //                     Our team is here to help you.
// //                   </h2>
// //                   <div className="flex justify-center p-4">
// //                     <a rel="noopener noreferrer" href="#">
// //                       Meet our crew &gt;
// //                     </a>
// //                   </div>
// //                   <img
// //                     src="https://source.unsplash.com/random/360x240"
// //                     alt=""
// //                     className="object-cover w-full h-auto mt-8 rounded max-h-96 dark:bg-gray-500"
// //                   />
// //                 </div>
// //               </section>
// //             </div>
// //           </main>
// //           <footer>
// //             <div className="container flex justify-between p-6 mx-auto lg:p-8 dark:bg-gray-50">
// //               <a rel="noopener noreferrer" href="#" className="font-bold">
// //                 Mamba
// //               </a>
// //               <div className="flex space-x-2">
// //                 <a
// //                   aria-label="Email"
// //                   rel="noopener noreferrer"
// //                   href="#"
// //                   className="flex items-center justify-center dark:text-gray-600"
// //                 >
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     viewBox="0 0 20 20"
// //                     fill="currentColor"
// //                     className="w-5 h-5"
// //                   >
// //                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
// //                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
// //                   </svg>
// //                 </a>
// //                 <a
// //                   aria-label="Twitter"
// //                   rel="noopener noreferrer"
// //                   href="#"
// //                   className="flex items-center justify-center dark:text-gray-600"
// //                 >
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     viewBox="0 0 50 50"
// //                     fill="currentColor"
// //                     className="w-5 h-5"
// //                   >
// //                     <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
// //                   </svg>
// //                 </a>
// //                 <a
// //                   aria-label="Github"
// //                   rel="noopener noreferrer"
// //                   href="#"
// //                   className="flex items-center justify-center dark:text-gray-600"
// //                 >
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     fill="currentColor"
// //                     viewBox="0 0 24 24"
// //                     className="w-6 h-6"
// //                   >
// //                     <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
// //                   </svg>
// //                 </a>
// //               </div>
// //             </div>
// //           </footer>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Next;

// import React from "react";

// const Next = () => {
//   return (
//     <div>
//       <div className="min-h-screen bg-[#dbdcba] dark:bg-gray-100 dark:text-gray-800">
//         <div className="p-6 space-y-8">
//           <main>
//             <div className="container mx-auto space-y-16">
//               {/* Hero Section */}
//               <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
//                 <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-50">
//                   <span className="block mb-2 dark:text-violet-600">
//                     Artistic Vision
//                   </span>
//                   <h1 className="text-5xl font-extrabold dark:text-gray-900">
//                     The Art of [Artist Name]
//                   </h1>
//                   <p className="my-8">
//                     <span className="font-medium dark:text-gray-900">
//                       Capturing the essence of beauty and emotion.
//                     </span>
//                   </p>
//                   <form
//                     noValidate=""
//                     action=""
//                     className="self-stretch space-y-3"
//                   >
//                     <div>
//                       <label htmlFor="name" className="text-sm sr-only">
//                         Your name
//                       </label>
//                       <input
//                         id="name"
//                         type="text"
//                         placeholder="Your name"
//                         className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="text-sm sr-only">
//                         Email address
//                       </label>
//                       <input
//                         id="email"
//                         type="text"
//                         placeholder="Email address"
//                         className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300"
//                       />
//                     </div>
//                     <button className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
//                       Join the mailing list
//                     </button>
//                   </form>
//                 </div>
//                 <img
//                   src="https://source.unsplash.com/random/480x360"
//                   alt="Artist's work"
//                   className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
//                 />
//               </section>

//               {/* About the Artist */}
//               <section>
//                 <span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-600">
//                   About the Artist
//                 </span>
//                 <h2 className="text-5xl font-bold lg:text-center dark:text-gray-900">
//                   Meet [Artist Name]
//                 </h2>
//                 <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-x-8">
//                   <img
//                     src="https://source.unsplash.com/random/360x480"
//                     alt="Artist portrait"
//                     className="object-cover w-80 h-80 rounded-full dark:bg-gray-500"
//                   />
//                   <p className="max-w-2xl text-lg dark:text-gray-600">
//                     [Artist Name] is a contemporary painter known for their
//                     evocative landscapes and vibrant portraits. With a career
//                     spanning over two decades, their work has been exhibited in
//                     galleries worldwide. [Artist Name]'s unique style blends
//                     realism with abstract elements, creating pieces that are
//                     both thought-provoking and visually stunning.
//                   </p>
//                 </div>
//               </section>

//               {/* Gallery Section */}
//               <section>
//                 <span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-600">
//                   Gallery
//                 </span>
//                 <h2 className="text-5xl font-bold lg:text-center dark:text-gray-900">
//                   Recent Works
//                 </h2>
//                 <div className="grid gap-6 my-16 lg:grid-cols-3">
//                   <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
//                     <img
//                       src="https://source.unsplash.com/random/360x240"
//                       alt="Art piece"
//                       className="object-cover w-full h-56 rounded-md dark:bg-gray-500"
//                     />
//                     <p className="text-2xl font-semibold">"Serenity in Blue"</p>
//                     <p className="dark:text-gray-600">Oil on Canvas, 2023</p>
//                   </div>
//                   <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
//                     <img
//                       src="https://source.unsplash.com/random/360x240"
//                       alt="Art piece"
//                       className="object-cover w-full h-56 rounded-md dark:bg-gray-500"
//                     />
//                     <p className="text-2xl font-semibold">"Whispering Trees"</p>
//                     <p className="dark:text-gray-600">
//                       Acrylic on Canvas, 2022
//                     </p>
//                   </div>
//                   <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
//                     <img
//                       src="https://source.unsplash.com/random/360x240"
//                       alt="Art piece"
//                       className="object-cover w-full h-56 rounded-md dark:bg-gray-500"
//                     />
//                     <p className="text-2xl font-semibold">"Urban Dreams"</p>
//                     <p className="dark:text-gray-600">Mixed Media, 2021</p>
//                   </div>
//                 </div>
//               </section>

//               {/* Testimonials */}
//               <section className="grid gap-6 lg:grid-cols-2">
//                 <img
//                   src="https://source.unsplash.com/random/360x480"
//                   alt="Testimonial background"
//                   className="object-cover w-full rounded-md max-h-96 dark:bg-gray-500"
//                 />
//                 <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50">
//                   <img
//                     src="https://source.unsplash.com/random/100x100"
//                     alt="Client"
//                     className="object-cover w-20 h-20 rounded-full dark:bg-gray-500"
//                   />
//                   <blockquote className="max-w-lg text-lg italic font-medium text-center">
//                     "The beauty and emotion captured in [Artist Name]'s work is
//                     truly breathtaking. Every piece tells a story that resonates
//                     deeply."
//                   </blockquote>
//                   <div className="text-center dark:text-gray-600">
//                     <p>Jane Doe</p>
//                     <p>Art Collector</p>
//                   </div>
//                 </div>
//               </section>

//               {/* Contact Section */}
//               <section className="container p-6 py-20 mx-auto rounded lg:px-8 dark:bg-gray-50">
//                 <h2 className="text-5xl font-bold text-center">Get in Touch</h2>
//                 <div className="flex justify-center p-4">
//                   <a rel="noopener noreferrer" href="#">
//                     Contact the Artist &gt;
//                   </a>
//                 </div>
//                 <img
//                   src="https://source.unsplash.com/random/360x240"
//                   alt="Contact background"
//                   className="object-cover w-full h-auto mt-8 rounded max-h-96 dark:bg-gray-500"
//                 />
//               </section>
//             </div>
//           </main>

//           {/* Footer */}
//           <footer>
//             <div className="container flex justify-between p-6 mx-auto lg:p-8 dark:bg-gray-50">
//               <a rel="noopener noreferrer" href="#" className="font-bold">
//                 [Artist Name]
//               </a>
//               <div className="flex space-x-2">
//                 <a
//                   aria-label="Email"
//                   rel="noopener noreferrer"
//                   href="#"
//                   className="flex items-center justify-center dark:text-gray-600"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
//                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   aria-label="Twitter"
//                   rel="noopener noreferrer"
//                   href="#"
//                   className="flex items-center justify-center dark:text-gray-600"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 50 50"
//                     fill="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path d="M 50.0625 10.4375 C 48.15625 11.1875 46.125 11.6875 43.9375 11.9375 C 46.1875 10.5625 47.90625 8.4375 48.6875 5.875 C 46.65625 7.125 44.40625 8.0625 41.9375 8.625 C 39.875 6.5625 37.0625 5.3125 33.9375 5.3125 C 28.375 5.3125 23.9375 9.75 23.9375 15.3125 C 23.9375 16.0625 24.0625 16.8125 24.25 17.5 C 16.1875 17.125 8.8125 13.1875 3.875 7.0625 C 3.0625 8.4375 2.5625 10.0625 2.5625 11.8125 C 2.5625 15.125 4.25 18.0625 6.875 19.5625 C 5.1875 19.5625 3.625 19.0625 2.3125 18.25 C 2.3125 18.25 2.3125 18.25 2.3125 18.3125 C 2.3125 23.0625 5.625 27 10.1875 27.9375 C 9.4375 28.125 8.625 28.25 7.8125 28.25 C 7.25 28.25 6.6875 28.1875 6.125 28.0625 C 7.25 31.9375 10.8125 34.8125 14.9375 34.875 C 11.625 37.5625 7.4375 39.125 2.8125 39.125 C 2.0625 39.125 1.3125 39.0625 0.5625 38.9375 C 4.75 41.75 10.0625 43.3125 15.8125 43.3125 C 33.875 43.3125 43.9375 28.4375 43.9375 16.3125 C 43.9375 15.875 43.9375 15.4375 43.9375 15.0625 C 46 13.625 48 11.6875 50.0625 10.4375 Z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   aria-label="GitHub"
//                   rel="noopener noreferrer"
//                   href="#"
//                   className="flex items-center justify-center dark:text-gray-600"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path d="M10.9,2.1C5.2,2.6,0.6,7.4,0.6,13.1c0,5.1,3.3,9.4,7.9,10.9c0.6,0.1,0.8-0.3,0.8-0.6c0-0.3,0-1,0-2c-3.2,0.7-4-0.8-4.2-1.5 c-0.2-0.4-1-1.5-1.7-1.8c-0.6-0.3-1.4-1.1,0-1.1c1.3,0,2.2,1.3,2.5,1.8c1.5,2.5,3.8,1.8,4.8,1.3c0.1-1.1,0.6-1.8,1-2.2 c-2.8-0.3-5.8-1.4-5.8-6.1c0-1.5,0.6-2.8,1.5-3.8C7.8,9.1,7.3,7.7,8.1,5.8c1.1-0.3,3.6,1.4,3.8,1.5c1-0.3,2.1-0.5,3.2-0.5 s2.2,0.2,3.2,0.5c0.3-0.2,2.8-1.8,3.8-1.5c0.8,1.9,0.3,3.3,0.1,3.7c0.9,1,1.5,2.3,1.5,3.8c0,4.7-3,5.8-5.8,6.1 c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.4c0,0.3,0.2,0.7,0.8,0.6c4.6-1.5,7.9-5.8,7.9-10.9C23.4,7.4,18.1,2.4,12.3,2.1"></path>
//                   </svg>
//                 </a>
//                 <a
//                   aria-label="Dribbble"
//                   rel="noopener noreferrer"
//                   href="#"
//                   className="flex items-center justify-center dark:text-gray-600"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 32 32"
//                     fill="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path d="M16,2C8.28,2,2,8.28,2,16s6.28,14,14,14s14-6.28,14-14S23.72,2,16,2z M27.8,15.1c-2.47-0.47-4.82-0.52-6.97-0.21 c-0.1-0.23-0.19-0.45-0.3-0.68c-0.39-0.84-0.82-1.63-1.25-2.38c4.29-1.75,6.51-0.15,6.79,0.04C26.67,12.54,27.39,13.78,27.8,15.1z M20.09,11.49c-1.86,0.9-3.91,1.55-6.07,1.92c-1.04-1.91-2.07-3.63-3.07-5.22c0.24-0.06,0.48-0.12,0.74-0.17 C14.51,7.7,17.28,8.19,20.09,11.49z M12.66,6.5c0.97,1.49,1.94,3.2,2.89,5.08c-2.5,0.37-5.09,0.36-7.78-0.02 C8.75,8.89,10.54,7.26,12.66,6.5z M6.69,8.79c2.72,0.5,5.29,0.53,7.8,0.08c0.4,0.71,0.79,1.42,1.17,2.14c-2.02,0.35-4.02,0.54-6,0.57 c-0.42-1.09-0.81-2.17-1.17-3.25C7.33,8.3,7.01,8.57,6.69,8.79z M5.27,11.79c0.36,1.04,0.76,2.09,1.18,3.15 c-0.93,0.28-1.8,0.61-2.61,1.01C4.2,14.68,4.61,13.19,5.27,11.79z M4.94,19.62c0.76-0.38,1.56-0.71,2.38-0.99 c1.46,3.26,3.24,6.19,5.3,8.76C8.97,26.43,6.19,23.48,4.94,19.62z M8.94,19.5c0.62-0.16,1.24-0.3,1.87-0.42 c1.52,2.42,3.14,4.63,4.87,6.62c-0.44,0.15-0.87,0.28-1.31,0.39C12.99,23.74,10.98,21.67,8.94,19.5z M15.82,26.73 c-1.6-1.92-3.06-4.06-4.42-6.38c0.32-0.07,0.63-0.14,0.95-0.19c1.26,1.47,2.59,2.81,3.97,4c-0.06,0.85-0.09,1.71-0.08,2.57 C16.05,26.87,15.94,26.8,15.82,26.73z M17.44,26.55c0.01-0.79,0.04-1.58,0.12-2.37c1.85,1.18,3.79,2.06,5.8,2.72 c-0.49,0.17-0.98,0.31-1.48,0.43C20.75,27.19,19.05,26.97,17.44,26.55z M25.41,25.24c-1.91-0.64-3.73-1.46-5.46-2.46 c0.13-1.32,0.06-2.7-0.21-4.12c1.93-0.5,4.04-0.53,6.33-0.1C25.65,21.21,25.63,23.35,25.41,25.24z M24.97,23.65 c-1.58-0.3-3.01-0.26-4.31,0.1c-0.18-0.9-0.4-1.78-0.67-2.63c1.95-0.29,3.96-0.26,6.02,0.16C25.78,21.95,25.47,22.81,24.97,23.65z M22.57,22.19c-0.44-0.13-0.88-0.24-1.33-0.34c-0.2-0.75-0.43-1.48-0.68-2.21c1.76-0.23,3.53-0.19,5.28,0.12 c0.02,0.01,0.03,0.02,0.05,0.02C24.87,20.59,23.75,21.39,22.57,22.19z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   aria-label="YouTube"
//                   rel="noopener noreferrer"
//                   href="#"
//                   className="flex items-center justify-center dark:text-gray-600"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 32 32"
//                     fill="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path d="M27.7,10.4c-0.3-1.1-1.2-1.9-2.3-2.1c-2.1-0.4-4.3-0.6-6.5-0.6s-4.4,0.2-6.5,0.6c-1.1,0.2-2,1-2.3,2.1 c-0.5,2-0.7,4.1-0.7,6.1s0.2,4.1,0.7,6.1c0.3,1.1,1.2,1.9,2.3,2.1c2.1,0.4,4.3,0.6,6.5,0.6s4.4-0.2,6.5-0.6 c1.1-0.2,2-1,2.3-2.1c0.5-2,0.7-4.1,0.7-6.1S28.1,12.4,27.7,10.4z M13.3,18.9V12.2l6.7,3.4L13.3,18.9z"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             <div className="py-6 text-sm text-center dark:text-gray-400">
//               © 1968 Company Co. All rights reserved.
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Next;
