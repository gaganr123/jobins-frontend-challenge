import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, StarIcon ,ShoppingCartIcon,PlusCircleIcon,GiftIcon,Bars3CenterLeftIcon} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav,setShowNav }, ref) => {
  const router = useRouter();
const menus=[
  {
   id:1,
  name:'Dashboard',
  icon:HomeIcon,
  link:"/"
},
{
  id:2,
  name:'Order Manage',
  icon:ShoppingCartIcon,
  link:"/order-management"
},
{
  id:3,
  name:'Brand',
  icon:StarIcon,
  link:"/brand"
},

  {
    id:4,
    name:'Add product',
    icon:PlusCircleIcon,
    link:"/add-product"
  },
  {
    id:5,
    name:'Product List',
    icon:GiftIcon,
    link:"/product-list"
  },

]


  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-between mt-6 mb-14">
     
          <Link href='/'>
          <div className="flex">
        <picture>
          <img
            className="w-10 h-auto ml-2"
            src="/jobin.jpg"
            alt="company logo"
          />
        </picture>
        <h1 className="font-black mt-2 ml-2">JoBins</h1>
        </div>
        </Link>
      
        <div className="mr-2">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
        </div>
      </div>
      
  {menus.map((menu)=>{
       return(
    
    <div className="flex flex-col" key={menu.id}>
        <Link href={menu.link}>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
             ${router.pathname === menu.link ? "bg-gray-100":""}`}
          >
            <div className="mr-2">
              <menu.icon className="h-5 w-5" />
          
            </div>
            <div>
              <p>{menu.name}</p>
            </div>
          </div>
        </Link>
        </div>
    
  )
})}
     
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
