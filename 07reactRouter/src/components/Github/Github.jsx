import React, { useEffect, useState } from "react";
function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="p-4 m-4 text-3xl text-center text-white bg-gray-600">
      Github followers: {data.followers} <img src={data.avatar_url} alt="git picture" width={300}/></div>
      
  );
}

export default Github;
