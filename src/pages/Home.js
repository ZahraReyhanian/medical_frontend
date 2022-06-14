import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import HeroSection from "../components/sections/HeroSection";
import MedicalSection from "../components/sections/MedicalSection";

function Home() {
  // const [home, setHome] = useState([]);

  // useEffect(() => {
  //   getAxiosInstanceApi()
  //     .get("?api_token=" + localStorage.getItem("x-auth-token"))
  //     .then((response) => {
  //       const data = response.data;
  //       localStorage.setItem(
  //         "image",
  //         "http://localhost:8000/" + data.data.user.student[0].image
  //       );
  //       setHome(data.data);

  //     })
  //     .catch((error) => {
  //       // toast.error("Wait! Something happend :(");
  //       console.log(error);
  //       if (error.status == 401) {
  //         localStorage.clear();
  //         window.location.reload();
  //       }
  //       else {
  //         setExercises(exerciseData);
  //         setAbout(aboutData);
  //         setEquipments(equipmentData);
  //       }
  //     });
  // }, []);

  // if (!home.gym) return "loading data ...";
  // else console.log(home);
  return (
    <Layout>
      <HeroSection />
      <MedicalSection />
    </Layout>
  );
}

export default Home;
