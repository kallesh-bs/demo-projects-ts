// import React from 'react'

import { Link } from "react-router-dom";

interface TopNavProps {
  appname: string;
}

interface NovItems{
  navItem:string,
  goTo:string
}

const navItemsObj = [
  {
    navItem:"Home",
    goTo:"/"
  },
  {
    navItem:"Bank Details",
    goTo:"/bank-details"
  },
  {
    navItem:"Github Account Finder",
    goTo:"/github-account-finder"
  },
  {
    navItem:"Movie Finder",
    goTo:"/movie-finder"
  },
  {
    navItem:"Todo App",
    goTo:"/todo-app"
  },
  {
    navItem:"Weather Details",
    goTo:"/weather-details"
  },
]


const TopNav = ({appname}:TopNavProps) => {
    const navItems:NovItems[] = navItemsObj;
    return (
      <div className="flex space-x-8 p-2 m-2 bg-gray-400 rounded-md justify-between" style={{background:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"}}>
        <h1 className="p-2 rounded-md  font-semibold text--200 w-[15%] text-center">{appname}</h1>
        <div className="HomeLink flex gap-3">{navItems.map(x=><div className="p-2 rounded-md bg-orange-200" ><Link to={x.goTo}>{x.navItem}</Link></div>)}</div>
      </div>
    );
  };

export default TopNav