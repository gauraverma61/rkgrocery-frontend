import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" border border-gray-200 rounded overflow-hidden">
        <div className=" uppercase text-lg font-bold text-gray-500 py-3 px-5 border-b border-gray-200 ">
          Shop by Category
        </div>
        <div className="grid grid-cols-3 bg-gray-200 gap-[1.5px] ">
          {Array(12)
            .fill(undefined)
            .map((category, index) => {
              return (
                <div
                  key={index}
                  className=" bg-white h-[120px] overflow-hidden p-1.5"
                >
                  <div className=" relative h-[60%] overflow-hidden rounded-sm">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt=""
                      className="h-[60%]"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className=" text-center text-xs font-semibold text-gray-600 mt-2">
                    {" "}
                    Fruits and Vegetables
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className=" border border-gray-200 rounded overflow-hidden mt-6">
        <div className=" uppercase text-lg font-bold text-gray-500 py-3 px-5 border-b border-gray-200 ">
          Beverages
        </div>
        <div className="grid grid-cols-3 bg-gray-200 gap-[1px] ">
          {Array(12)
            .fill(undefined)
            .map((beverage, index) => {
              return (
                <div
                  key={index}
                  className=" bg-white h-[120px] overflow-hidden p-1.5"
                >
                  <div className=" relative h-[60%] overflow-hidden rounded-sm">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1589423045402-6074a1bdf723?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt=""
                      className="h-[60%]"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className=" text-center text-xs font-semibold text-gray-600 mt-2">
                    Cold Drinks
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
