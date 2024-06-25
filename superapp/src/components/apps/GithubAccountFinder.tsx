import { useEffect } from "react";
import TopNav from "../TopNav";
import { Title } from "../../Interfaces";


export default function GithubAccountFinder({title}:Title) {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <TopNav appname="GitHub Account Finder" />
  )
}
