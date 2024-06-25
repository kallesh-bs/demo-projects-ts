import { useEffect } from "react";
import { Title } from "../../Interfaces";
import TopNav from "../TopNav";


export default function TodoApp({title}:Title) {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <TopNav appname="Todo App" />
  )
}
