"use client"

import Link from "next/link";
import { Users, Menu, X, Sun, Moon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { updateStore } from "@/store/slice";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTheme } from "next-themes";

const authMenu = [
  {
    name: "My Learning",
    url: "/dashboard/my-learning",
    group: "login"
  },
  {
    name: "Project Details",
    url: "/dashboard/projects",
    group: "login"
  },
  {
    name: "Empolyee Details",
    url: "/dashboard/employee-details",
    group: "login"
  },
]

export default function Navbar() {
  const isLogin = useSelector(state => state.isLogin);
  const { theme, setTheme } = useTheme();

  const dispatch = useDispatch();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userAuth = () => {
    if (isLogin) {
      dispatch(updateStore({ isLogin: false }));
    } else {
      router.push("/login");
    }
  }
  return (
    <nav className="bg-background shadow-md border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer">
            <Link href={isLogin ? "/dashboard/employee-details" : "/"} className="flex">
              <Users className="h-8 w-8 text-primary " />
              <span className="ml-2 text-xl font-bold  ">StaffSync</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {!isLogin &&
                  <React.Fragment>
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Home
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#features" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Features
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="#courses" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Courses
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </React.Fragment>
                }
                {!isLogin && <Button onClick={userAuth}>Login</Button>}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {isLogin && <DropdownMenu>
            <DropdownMenuTrigger asChild >
              <Avatar className="cursor-pointer">
                <AvatarImage src="" alt="@staffSync" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Theme
                <DropdownMenuShortcut>
                  {theme === "dark" ? <Sun /> : <Moon />}
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {
                authMenu.map(menu =>
                  <Link href={menu.url} key={menu.name}>
                    <DropdownMenuItem>{menu.name}</DropdownMenuItem>
                  </Link>
                )
              }
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={userAuth} className="cursor-pointer">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>}

          {/* Mobile menu button */}
          {!isLogin && <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!isLogin && <React.Fragment>
              <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">
                Home
              </Link>
              <Link href="#features" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">
                Features
              </Link>
            </React.Fragment>
            }
            {/* {isLogin &&
              <React.Fragment>
                <Link href="employee-details" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">
                  Employee Details
                </Link>
                <Link href="my-learning" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">
                  My Learning
                </Link>
                <Link href="projects" className="block px-3 py-2 text-gray-600 hover:text-primary font-medium">
                  Project Details
                </Link>
              </React.Fragment>
            } */}
            {!isLogin && <Button className="mt-2 w-full" onClick={userAuth}>Login</Button>}
          </div>
        </div>
      )}
    </nav>
  )
}