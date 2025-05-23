import useAboutData from "../utils/useAboutData"
const About = () => {
  const userData=useAboutData();
  console.log(userData);
  const {login,avatar_url}=userData;

  return (
    <div><img src={avatar_url}/>
    <h1>{login}</h1>
    </div>
  )
}

export default About