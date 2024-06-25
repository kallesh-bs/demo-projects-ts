import { useEffect } from "react";
import TopNav from "../TopNav";
import { Title } from "../../Interfaces";

// interface Title{
//   title:string
// }

export default function Index({title}:Title) {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <TopNav appname="Super App" />
  )
}
