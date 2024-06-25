import { useEffect } from "react";
import { Title } from "../../Interfaces";
import TopNav from "../TopNav";


export default function WeatherDetails({title}:Title) {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <TopNav appname="Weather Details App" />
  )
}
