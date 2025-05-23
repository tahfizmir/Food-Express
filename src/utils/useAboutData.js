import { useEffect, useState } from "react";

const useAboutData = () => {
  const [aboutData, setAboutData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/tahfizmir");
      const json = await data.json();
      console.log(json,"about json")
      setAboutData(json);
    };
    fetchData();
  }, []);
  return aboutData;
};
export default useAboutData;
