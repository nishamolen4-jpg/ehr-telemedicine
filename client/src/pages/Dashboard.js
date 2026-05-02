import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/patients">Patients</Link><br />
      <Link to="/appointments">Appointments</Link>
    </div>
  );
}