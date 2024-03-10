// "use client";
// import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
// import { cn } from "@/lib/utils";
// import { MobileSidebar } from "./mobile-sidebar";
// import { UserNav } from "./user-nav";
// import Link from "next/link";
// import Logo from "@/public/logo.jpg";
// import Image from "next/image";

// export default function Header() {
//   return (
//     <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
//       <nav className="h-14 flex items-center justify-between px-4">
//         <div className="hidden md:block">
//           <Link
//             href={"https://leadenhallanalytics.com/"}
//             target="_blank"
//             className="flex items-center"
//           >
//             <Image src={Logo} alt="" height={40} width={40} />
//             <span className="lex font-bold dark:text-white md:text-xl ml-2 rtl:ml-0 rtl:mr-2 self-center text-2xl text-gray-900 whitespace-nowrap">
//               Leadenhall X Newton
//             </span>
//           </Link>
//           <Link
//             href={"/chat"}
//             target="_blank"
//             className="flex items-center"
//           >
//             <span className="lex font-bold dark:text-white md:text-xl ml-2 rtl:ml-0 rtl:mr-2 self-center text-2xl text-gray-900 whitespace-nowrap">
//               Chat with Us
//             </span>
//           </Link>
//         </div>
//         <div className={cn("block sm:!hidden")}>{/* <MobileSidebar /> */}</div>

//         <div className="flex items-center gap-2">
//           {/* <UserNav /> */}
//           <ThemeToggle />
//         </div>
//       </nav>
//     </div>
//   );
// }
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import Link from "next/link";
import Logo from "@/public/logo.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden md:flex items-center justify-between w-full">
          <div>
            <Link
              href={"https://leadenhallanalytics.com/"}
              target="_blank"
              className="flex items-center"
            >
              <Image src={Logo} alt="" height={40} width={40} />
              <span className="flex font-bold dark:text-white md:text-xl ml-2 text-gray-900 whitespace-nowrap">
                Leadenhall
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <Link
              href={"/chat"}
              target="_blank"
              className="flex items-center"
            >
              <button className="text-gray-900 dark:text-white font-bold md:text-xl whitespace-nowrap focus:outline-none transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-md border border-gray-300">
                Chat with Us
              </button>
            </Link>
          </div>
        </div>
        <div className={cn("block sm:hidden")}>{/* <MobileSidebar /> */}</div>
        <div className="flex items-center gap-2">
          {/* <UserNav /> */}
        </div>
      </nav>
    </div>
  );
}
