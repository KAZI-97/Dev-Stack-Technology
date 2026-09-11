// import React from 'react';
import { use, useState} from "react";
import type { ITechType } from "../../type";
import TechnologyCart from "../TechnologyCart/TechnologyCart";
import SelectedTechCart from "../SelectedTech/SelectedTechCart";
// import plus-jakarta-sans from '../../index.css'
interface Props {
  TechPromise: Promise<ITechType[]>;
}

const Technologies = ({ TechPromise }: Props) => {
  const Tech = use(TechPromise);
  const [SelectStack,setSelectStack] = useState<ITechType[]>([])
  return (
    <>
      {
        <div>
            <div className="p-4 max-w-7xl mx-auto ml-8">
                <h1 className="inter font-extrabold text-4xl">Explore the <span className="gradient-text">Technologies </span></h1>
                <p className="plus-jakarta-sans mt-1 text-2xl">Pick one technology per category to build your ideal stack.</p>
            </div>
            {/* Item start remove from here */}
          <div className="flex gap-4 p-6 items-start">
            <div className="w-[75%] grid grid-cols-3 gap-5">
              {Tech.map((Tech_Cart) => (
                <TechnologyCart Tech_Cart={Tech_Cart} key={Tech_Cart.id} SelectStack={SelectStack} setSelectStack={setSelectStack} ></TechnologyCart>
              ))}
            </div>
            <div className="w-[25%] border-blue-200 rounded-2xl bg-white shadow-[0_8px_30px_rgba(37,99,235,0.08)]">
                <div>
                    <h1 className="plus-jakarta-sans flex justify-center text-2xl font-bold">Your Stack</h1>
                </div>
                <div className="p-2 grid grid-cols-1 gap-2">
                    <SelectedTechCart  SelectStack={SelectStack} setSelectStack={setSelectStack} ></SelectedTechCart>
                </div>
                
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Technologies;
