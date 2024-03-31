import Image from "next/image";
import { Button, Menu } from "@/components/atoms/buttons";
import { Title_1, Name, RegularText, KeyValueExpandedRow } from "@/components/atoms/text";

export default function Home() {
  return (

    <div className="flex gap-5 justify-between bg-gray-100 max-md:flex-wrap">
      {/* Left Column */}
      <div className="flex flex-col pb-20 bg-white">
        <div className="flex flex-col px-10 pt-12 pb-20 w-full max-md:px-5 max-sm:hidden">
          <div className="flex overflow-hidden relative flex-col items-end self-center px-16 pt-20 pb-5 max-w-full rounded-full aspect-square w-[300px]">
            <Image
              src={'/foto.jpg'}
              alt={"Foto perfil LauraT"}
              width={300}
              height={300}
            />
            <div className="relative shrink-0 mt-9 w-full h-4 bg-lime-500 rounded-full" />
          </div>
          <div className="self-center mt-9 text-lg font-medium leading-6 capitalize text-zinc-800">
            Juan David Arismendy
          </div>
          <div className="self-center mt-5 text-base leading-6 capitalize text-neutral-500">
            Font-end Developer
          </div>
          <div className="shrink-0 mt-16 h-px bg-gray-100 border-2 border-gray-100 border-solid max-md:mt-10" />
          <div className="flex flex-col py-1.5 pl-1.5 mt-6 text-base leading-6 capitalize whitespace-nowrap">
            <div className="flex gap-5 justify-between px-px text-zinc-800 flex-col">
              <KeyValueExpandedRow title="Age" value="35" ></KeyValueExpandedRow>
              <KeyValueExpandedRow title="Residence" value="BD" ></KeyValueExpandedRow>
              <KeyValueExpandedRow title="Freelance" value="Available" ></KeyValueExpandedRow>
              <KeyValueExpandedRow title="Address" value="Dhaka,Bangladesh" ></KeyValueExpandedRow>
            </div>

          </div>
          <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />


          <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />


          <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />


        </div>
      </div>
      {/* Middle Column */}
      <div className="flex flex-col px-14 max-md:max-w-full max-sm:hidden pt-2 bg-white">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
              <Name></Name>
              <RegularText></RegularText>
              <br />
              <Button text="HIRE ME ->" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <Image
              src={'/foto.jpg'}
              alt={"Foto perfil LauraT"}
              width={300}
              height={300}
            />
          </div>
        </div>

      </div>
      {/* Right Column */}
      <div className="flex flex-col px-6 pt-20 pb-20 bg-white max-md:hidden max-md:px-5">
        <div className="text-lg font-bold leading-6 capitalize text-zinc-800">
          Links
        </div>
        <div className="flex flex-col justify-center items-center mt-5">

        </div>
      </div>
    </div>
  );
}








// <div className='bg-white h-screen flex justify-center items-center'>
//   <Menu />
//   <Button text="HIRE ME ->" />

//   <Title_1 title="HIRE ME ->" />
//   <Name />
// </div>

// import * as React from "react";

// function MyComponent() {
//   return (
//     <div className="px-14 pt-2 bg-white max-w-[970px] max-md:px-5">
//       <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//         <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
//           <div className="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full">
//             <div className="text-5xl font-bold text-yellow-500 leading-[59px] max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
//               <span className="text-zinc-800">I’m Rayan Adlrdard</span>
//               <br />
//               <span className="text-yellow-500">Front-end</span>
//               <span className="text-zinc-800"> D</span>
//               <span className="text-zinc-800">eveloper </span>
//             </div>
//             <div className="mt-7 leading-6 capitalize text-neutral-500 max-md:max-w-full">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
//               volutpat feugiat placerat lobortis. Natoque rutrum semper sed
//               suspendisse nunc lectus.
//             </div>
//             <div className="flex flex-col justify-center mt-11 max-w-full font-medium text-center text-zinc-800 w-[154px] max-md:mt-10">
//               <div className="flex flex-col justify-center">
//                 <div className="flex flex-col justify-center px-8 py-4 w-full bg-yellow-500 rounded-md max-md:px-5">
//                   <div className="flex gap-2.5 px-px py-0.5">
//                     <div className="my-auto">HIRE ME</div>
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb733e9b7baeaf0be9cf39f35a8a0f0442b4213b42501bbc814c5bafc6137360?apiKey=16c5b9866e1241e69e5115f796372ea1&"
//                       className="shrink-0 w-4 aspect-square"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
//           <img
//             loading="lazy"
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39ed380cca87ce6a35aa55836d693b02f624bc0de762624f403ec494f8f7932b?apiKey=16c5b9866e1241e69e5115f796372ea1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39ed380cca87ce6a35aa55836d693b02f624bc0de762624f403ec494f8f7932b?apiKey=16c5b9866e1241e69e5115f796372ea1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39ed380cca87ce6a35aa55836d693b02f624bc0de762624f403ec494f8f7932b?apiKey=16c5b9866e1241e69e5115f796372ea1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39ed380cca87ce6a35aa55836d693b02f624bc0de762624f403ec494f8f7932b?apiKey=16c5b9866e1241e69e5115f796372ea1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39ed380cca87ce6a35aa55836d693b02f624bc0de762624f403ec494f8f7932b?apiKey=16c5b9866e1241e69e5115f796372ea1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39ed380cca87ce6a35aa55836d693b02f624bc0de762624f403ec494f8f7932b?apiKey=16c5b9866e1241e69e5115f796372ea1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39ed380cca87ce6a35aa55836d693b02f624bc0de762624f403ec494f8f7932b?apiKey=16c5b9866e1241e69e5115f796372ea1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39ed380cca87ce6a35aa55836d693b02f624bc0de762624f403ec494f8f7932b?apiKey=16c5b9866e1241e69e5115f796372ea1&"
//             className="grow w-full aspect-[0.71] max-md:mt-10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


