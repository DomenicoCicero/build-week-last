import { useEffect } from "react";

const MyCourses = () => {
  const getMyCourses = () => {
    fetch(`/api/my_courses`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel reperimento dei dati");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMyCourses();
  }, []);

  return <div>ciao</div>;
};

export default MyCourses;
