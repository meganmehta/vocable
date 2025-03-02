
import { getWord } from '../services/gs';

export default async function Home() {
  {/* const date = new Date();
  const today = date.toLocaleDateString()*/}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const word = await getWord() as { word: string; type: string; origin: string; definition: string };

  return (
    <div className="flex md:flex-row gap-32 flex-col w-full h-screen bg-[#EFF1E4] text-black p-8 items-center">
        <div className="md:w-1/4 space-y-4 ">
          <h1 className="text-4xl italic text-left">vocable</h1>
          <p className="text-black text-sm"> i have a list of cool words that i never use.
             the hope is to integrate them into my daily speech and get my vocab up.
              i made this to remind myself of them. it be the little things. </p>
        </div>
        <div className="md:w-3/4 md:space-y-2 gap-4 border border-dashed flex flex-col items-center p-8">
         {/* <p>on {today}, the word of the day is...</p>*/}
         <p> the word is....</p>
          <h1 className="uppercase font-bold text-3xl "> {word.word}</h1>
          <p className="italic">{word.type}, of {word.origin} origin </p>
          <span className="flex md:flex-row flex-col md:gap-2 items-center"> 
            <p className="italic underline"> what does it mean? </p>
            <p className="font-bold text-center"> {word.definition} </p>
            </span>
        </div>
    </div>
  );
}
