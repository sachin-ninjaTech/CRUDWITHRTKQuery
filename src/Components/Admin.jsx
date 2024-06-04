import React, { useState } from "react";
import { useEffect } from "react";
const Admin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.github.com/users");
      console.log(res);
      const data = await res.json();
      console.log("data", data);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  {
    loading && <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="text-center"
        style={{ fontWeight: "bold", fontSize: "32px" }}
      >
        Admin
      </div>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <div
              style={{
                width: "100%",
                paddingTop: "56.25%" /* 16:9 aspect ratio (9/16 = 0.5625) */,
                position: "relative",
              }}
            >
              <img
                src={item.avatar_url}
                alt="avatar"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <h2 className="text-center" style={{ textTransform: "capitalize" }}>
              {item.login}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export default Admin;
