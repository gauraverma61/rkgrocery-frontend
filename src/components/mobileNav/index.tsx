import { Home, LayoutGrid, Search, ShoppingCart } from "lucide-react";
import React from "react";

const options = [
  {
    title: "Home",
    icon: Home,
    link: "/home", // Example link
  },
  {
    title: "Categories",
    icon: LayoutGrid,
    link: "/categories", // Example link
  },
  {
    title: "Search",
    icon: Search,
    link: "/search", // Example link
  },
  {
    title: "Cart",
    icon: ShoppingCart,
    link: "/cart", // Example link
  },
];

const MobileNav = () => {
  return (
    <div className="h-[50px] flex items-center fixed bottom-0 z-50 w-screen border-t bg-[#1F1B24]">
      {options.map((option, index) => {
        const Icon = option.icon;
        return (
          <div key={index} className="w-1/4 flex flex-col items-center gap-1  text-white">
            <Icon size={16} />
            <div className="text-center text-xs">{option.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileNav;
