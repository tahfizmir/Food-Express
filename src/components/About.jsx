import useAboutData from "../utils/useAboutData"
const About = () => {
  console.log("reached here");

  const userData = useAboutData();
  console.log("userdata", userData);

  if (!userData) return <div>Loading...</div>;

  const { login, avatar_url } = userData;

  return (
    <div>
      <img src={avatar_url} />
      <h1>{login}</h1>
    </div>
  );
};

export default About;
