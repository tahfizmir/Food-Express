import { useEffect, useState } from "react";

const useAboutData = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    console.log("useeffect triggeredd")
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/tahfizmir");
        console.log("res", res);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        console.log("fetched data:", json);
        setAboutData(json);
      } catch (err) {
        console.error("Error fetching aboutData:", err);
      }
    };

    fetchData();
  },[]);
  console.log("aboutData ",aboutData);
  return aboutData;
};

export default useAboutData;
