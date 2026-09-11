import type { Dispatch, SetStateAction } from "react";
import type { ITechType } from "../../type";
import { TiDelete } from "react-icons/ti";
import { toast } from "react-toastify";

// import React from 'react';
interface Prp {
  SelectStack: ITechType[];
  setSelectStack: Dispatch<SetStateAction<ITechType[]>>;
}

const SelectedTechCart = ({ SelectStack, setSelectStack }: Prp) => {
    const HandleRemoveStack = (st:ITechType) =>{
        const remaininStack = SelectStack.filter((stk) => stk.name != st.name)
        setSelectStack(remaininStack);
        toast.success(`Stack ${st.name} has been removed from List`)
    }
    const HandleRemoveAllBtn = ()=>{
        setSelectStack([]);
        toast.warn(`All the stack have been removed from the selected list`)

    }
  return (
    <>
      {SelectStack.length === 0 ? (
        <div>
          <p className="mx-auto pl-10">
            No Technology Selected
          </p>
          <div>
            <h1 className="plus-jakarta-sans w-3xs h-16 p-2.5 mt-4 mx-auto flex items-center justify-center box-border rounded-xl border border-slate-200 bg-slate-50 text-slate-500 shadow-sm">Your Stack is Empty</h1>
          </div>
        </div>
      ) : (
        <>
          <h1 className="inter flex text-xl font-extrabold items-center justify-center ">
            {SelectStack.length} Technology Selected
          </h1>
          {SelectStack.map((stack, ind: number) => (
            <div key={ind} className="flex justify-around items-center     border box-border rounded-xl  border-slate-200 bg-slate-50 text-gray-600 shadow-sm">
              <div className="flex justify-around items-center space-x-2">
                <div>
                  <img className="w-5 h-5" src={stack.icon} alt="" />
                </div>
                <div>
                  <p className="inter font-extrabold">{stack.name}</p>
                  <p className="text-regular">{stack.category}</p>
                </div>
              </div>

              {/* Delete Button */}
              <div>
                <button onClick={()=>HandleRemoveStack(stack)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 transition-all duration-200 hover:bg-red-500 hover:text-white">
                  <TiDelete size={22} />
                </button>
              </div>
            </div>
          ))}
          <>
            {SelectStack.length > 0 ? (
        <div className="flex justify-center items-center">
          <button onClick={HandleRemoveAllBtn} className="btn btn-active btn-secondary rounded w-60 h-2/3 p-2.5 mt-4 mx-auto ">Remove All</button>
        </div>
      ) : " "}
          </>
        </>
      )}
    </>
  );
};

export default SelectedTechCart;
