import Header from "../layout/Header";
import image from "../../assets/download.jpg";
import communityImage1 from "../../assets/dummy.jpg";
import communityImage2 from "../../assets/dummy.jpg";
import communityImage3 from "../../assets/dummy.jpg";
import communityImage4 from "../../assets/dummy.jpg";
import Section from "../layout/Section";
import { MyContext } from "../store/store";
import { useState } from "react";
function UserDashBoard() {
  const [user, setUser] = useState([
    {
      name: "John",
      email: "john.doe@example.com",
      password: "password123",
      profile: "Web Developer",
      followers: 2000,
      following: 500,
      Rating: 350,
      About:
        "Passionate about web development and coding. I am proficient in programming languages like HTML, CSS, JavaScript, and various frameworks such as React. I create user-friendly interfaces, optimize website performance, and ensure cross-browser compatibility. ",
      Experiences: [
        {
          name: "ABC Company",
          position: "Frontend Developer",
          duration: "2 years",
          detail: "Worked on building user-friendly web applications.",
        },
        {
          name: "XYZ Agency",
          position: "UI/UX Designer",
          duration: "1 year",
          detail: "Designed creative and engaging user interfaces.",
        },
      ],
      Education: [
        {
          name: "University of ABC",
          degree: "Bachelor's in Computer Science",
          graduationYear: 2015,
        },
        {
          name: "Tech Institute",
          degree: "Master's in Web Development",
          graduationYear: 2017,
        },
      ],
      image: image,

      feeds: {
        communityFeeds: [
          {
            name: "Poland UI Designer",
            members: 374,
            image: communityImage1,
          },
          {
            name: "Web Developers",
            members: 500,
            image: communityImage2,
          },
          {
            name: "Digital Marketers",
            members: 300,
            image: communityImage3,
          },
          {
            name: "Indonesia UI/UX",
            members: 200,
            image: communityImage4,
          },
          {
            name: "Indonesia AI Enthusiasts",
            members: 200,
            image: communityImage4,
          },
          {
            name: "Indonesia AI Enthusiasts",
            members: 200,
            image: communityImage4,
          },
        ],
      },
    },
  ]);
  return (
    <>
      <MyContext.Provider value={{ user: user[0], setUser: setUser }}>
        <Header user={user[0]} />
        <Section user={user[0]} />
      </MyContext.Provider>
    </>
  );
}

export default UserDashBoard;
