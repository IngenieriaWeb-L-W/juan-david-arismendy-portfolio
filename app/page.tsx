import Image from "next/image";
import { Button, Menu, IconButton } from "@/components/atoms/buttons";
import { Title_1, Name, RegularText, KeyValueExpandedRow } from "@/components/atoms/text";
import { ProgressBar, TextWithIcon, ProfilePictureWithLabel, KnowledgeBox, EducationBox, PortfolioBox, Footer } from "@/components/molecules/widgets";

export default function Home() {
  return (

    <div className="flex gap-5 justify-between bg-gray-100 max-md:flex-wrap">
      {/* Left Column */}
      <div className="flex flex-col pb-20 bg-white">
        <div className="flex flex-col px-10 pt-12 pb-20 w-full max-md:px-5 max-sm:hidden">
          <ProfilePictureWithLabel />

          <div className="shrink-0 mt-16 h-px bg-gray-100 border-2 border-gray-100 border-solid max-md:mt-10" />
          <div className="flex flex-col py-1.5 pl-1.5 mt-6 text-base leading-6 capitalize whitespace-nowrap">
            <div className="flex gap-5 justify-between px-px text-zinc-800 flex-col">
              <KeyValueExpandedRow title="Age" value="35" ></KeyValueExpandedRow>
              <KeyValueExpandedRow title="Freelance" value="Available" ></KeyValueExpandedRow>
              <KeyValueExpandedRow title="City" value="Medellín, COL" ></KeyValueExpandedRow>
            </div>

          </div>
          <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />
          <div className="flex flex-col mt-6 text-lg font-bold leading-6 capitalize text-zinc-800" />

          <div className="w-full text-lg font-medium leading-6 capitalize text-zinc-800">
            Languages
          </div>
          <ProgressBar text="English" percentage={80} />
          <ProgressBar text="Spanish" percentage={100} />

          <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />

          <div className="w-full text-lg font-medium leading-6 capitalize text-zinc-800">
            <div className="flex flex-col mt-6 text-lg font-bold leading-6 capitalize text-zinc-800" />

            Programming Languages
          </div>
          <ProgressBar text="Flutter" percentage={100} />
          <ProgressBar text="HTML" percentage={80} />
          <ProgressBar text="CSS" percentage={100} />
          <ProgressBar text="Flutter" percentage={100} />
          <ProgressBar text="HTML" percentage={80} />
          <ProgressBar text="CSS" percentage={100} />

          <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />

          <div className="w-full text-lg font-medium leading-6 capitalize text-zinc-800">
            <div className="flex flex-col mt-6 text-lg font-bold leading-6 capitalize text-zinc-800" />
            Extra Skills
            <div className="flex gap-4 mt-6">

              <TextWithIcon />
            </div>
          </div>

          <div className="shrink-0 mt-6 h-px bg-gray-100 border-2 border-gray-100 border-solid" />

        </div>
      </div>
      {/* Middle Column */}
      <div className="flex flex-col px-14 max-md:max-w-full max-sm:hidden pt-2">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 h-auto bg-white p-20">
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
              alt={"Foto perfil "}
              width={300}
              height={300}
            />
          </div>

        </div>
        <div className="self-center mt-12 text-3xl font-bold leading-10 capitalize text-zinc-800 max-md:mt-10">
          my Knowledge
        </div>
        <div className="self-center mt-8 text-base leading-6 text-center capitalize text-neutral-500 max-md:max-w-full">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </div>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <KnowledgeBox />
            <KnowledgeBox />
            <KnowledgeBox />
          </div>

          <div className="flex gap-5 max-md:flex-col max-md:gap-0 mt-4">
            <KnowledgeBox />
            <KnowledgeBox />
            <KnowledgeBox />
          </div>
        </div>
        <div className="self-center mt-12 text-3xl font-bold leading-10 capitalize text-zinc-800 max-md:mt-10">
          Education
        </div>
        <div className="self-center mt-8 text-base leading-6 text-center capitalize text-neutral-500 max-md:max-w-full">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </div>
        <div className="flex flex-col px-9 py-12 bg-white max-w-full max-md:px-5">
          <EducationBox />
          <div className="shrink-0 mt-5 h-px bg-gray-100 border-2 border-gray-100 border-solid max-md:max-w-full" />
          <EducationBox />
          <div className="shrink-0 mt-9 h-px bg-gray-100 border-2 border-gray-100 border-solid max-md:max-w-full" />
          <EducationBox />
        </div>

        <div className="self-center mt-12 text-3xl font-bold leading-10 capitalize text-zinc-800 max-md:mt-10">
          Portfolio
        </div>
        <div className="self-center mt-8 text-base leading-6 text-center capitalize text-neutral-500 max-md:max-w-full">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </div>
        <div className="self-stretch max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <PortfolioBox />
            <PortfolioBox />
            <PortfolioBox />
            <PortfolioBox />
          </div>
        </div>

        <Footer />


      </div>
      {/* Right Column */}
      <div className="flex flex-col items-center px-6 pt-20 pb-20 bg-white ">
        <div className="text-lg font-bold leading-6 text-zinc-800">
          Links
        </div>
        <div className="flex flex-col items-center mt-5">

          <IconButton icon={"M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"}>
          </IconButton> {/* Linkedin */}
        </div>
        <div>
          <IconButton icon={"M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2"}>
          </IconButton> {/* Github */}
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


