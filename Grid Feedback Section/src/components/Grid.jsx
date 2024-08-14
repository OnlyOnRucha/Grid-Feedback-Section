import React from "react";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"

const Grid = () => {
  return (
    <div className="min-h-screen bg-gray-300 p-6 ">
      <div className="min-h-[600px] grid grid-cols-4 grid-rows-2 gap-5 m-10">
        
        
        <div className="p-4 px-8 pt-5 bg-pink-600 col-span-2  rounded-xl flex gap-2"> <div>
          <div className="flex gap-2">
            <img src={img1} alt="" className="w-12 h-12 rounded-full"/>
            <div className=" mb-2 ml-2 flex flex-col">
              <h1>name</h1>
              <h1>education</h1> 
            </div>
          </div>
          <h1 className="text-2xl font-semibold mb-2 ">Title</h1> 
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex doloribus, excepturi temporibus porro ut provident harum reprehenderit recusandae debitis? Aliquam commodi nobis quasi minus voluptatem minima numquam, ducimus hic dolor!</p>
          </div>
          </div>
        
        
        <div className="p-4 px-8 pt-5 bg-pink-600 col-start-3  rounded-xl flex gap-2"> <div>
          <div className="flex gap-2 ">
            <img src={img2} alt="" className="w-12 h-12 rounded-full"/>
            <div className=" mb-2 ml-2 flex flex-col">
              <h1>name</h1>
              <h1>education</h1> 
            </div>
          </div>
          <h1 className="text-2xl font-semibold mb-2 ">Title</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi sit vel deleniti temporibus aliquid vitae quod ducimus labore illum eos qui, amet adipisci voluptate reprehenderit, officia nemo repudiandae magnam!</p>
          </div></div>
        
        
        <div className="p-4 px-8 pt-5 bg-pink-600 row-span-2 rounded-xl flex gap-2"> <div>
          <div className="flex gap-2 ">
            <img src={img3} alt="" className="w-12 h-12 rounded-full"/>
            <div className=" mb-2 ml-2 flex flex-col">
              <h1>name</h1>
              <h1>education</h1> 
            </div>
          </div>
          <h1 className="text-2xl font-semibold mb-2 ">Title</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi sit vel deleniti temporibus aliquid vitae quod ducimus labore illum eos qui, amet adipisci voluptate reprehenderit, officia nemo repudiandae magnam!</p>
          </div></div>
        
        
        <div className="p-4 px-8 pt-5 bg-pink-600 rounded-xl flex gap-2"> <div>
          <div className="flex gap-2 ">
            <img src={img4} alt="" className="w-12 h-12 rounded-full"/>
            <div className=" mb-2 ml-2 flex flex-col">
              <h1>name</h1>
              <h1>education</h1> 
            </div>
          </div>
          <h1 className="text-2xl font-semibold mb-2 ">Title</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi sit vel deleniti temporibus aliquid vitae quod ducimus labore illum eos qui, amet adipisci voluptate reprehenderit, officia nemo repudiandae magnam!</p>
          </div></div>
        
        
        <div className="p-4 px-8 pt-5 bg-pink-600 col-span-2 rounded-xl flex gap-2"> <div>
          <div className="flex gap-2 ">
            <img src={img5} alt="" className="w-12 h-12 rounded-full"/>
            <div className=" mb-2 ml-2 flex flex-col">
              <h1>name</h1>
              <h1>education</h1> 
            </div>
          </div>
          <h1 className="text-2xl font-semibold mb-2 ">Title</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi sit vel deleniti temporibus aliquid vitae quod ducimus labore illum eos qui, amet adipisci voluptate reprehenderit, officia nemo repudiandae magnam!</p>
          </div></div>
      </div>
    </div>
  );
};

export default Grid;
