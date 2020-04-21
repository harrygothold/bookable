import React, { FC } from "react";
import { Link } from "react-router-dom";

const Admin: FC = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <Link to="/admin/rooms">View rooms</Link>
    </div>
  );
};

export default Admin;
