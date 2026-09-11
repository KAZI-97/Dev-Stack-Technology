// import React from 'react';
import { use } from "react";
import type { ITechType } from "../../type";
import TechnologyCart from "../TechnologyCart/TechnologyCart";
import SelectedTechCart from "../SelectedTech/SelectedTechCart";
// import plus-jakarta-sans from '../../index.css'
interface Props {
  TechPromise: Promise<ITechType[]>;
}

const Technologies = ({ TechPromise }: Props) => {
  const Tech = use(TechPromise);
  return (
    <>
      {
        <div>
          <div className="flex gap-4 p-6 items-start">
            <div className="w-[75%] grid grid-cols-3 gap-5">
              {Tech.map((Tech_Cart) => (
                <TechnologyCart Tech_Cart={Tech_Cart} key={Tech_Cart.id}></TechnologyCart>
              ))}
            </div>
            <div className="w-[25%] border border-blue-400 rounded">
                <div>
                    <h1 className="plus-jakarta-sans flex justify-center text-3xl">Your Stack</h1>
                </div>
                <div>

                </div>
                <SelectedTechCart></SelectedTechCart>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Technologies;
