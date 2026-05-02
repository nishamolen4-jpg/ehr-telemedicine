import { useState } from "react";
import axios from "axios";

export default function Appointments() {
  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: ""
  });

  const [appointments, setAppointments] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const bookAppointment = async () => {
    await axios.post("http://localhost:5000/api/appointments", form);
    setAppointments([...appointments, form]);
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <input name="patientName" placeholder="Patient Name" onChange={handleChange} />
      <input name="doctorName" placeholder="Doctor Name" onChange={handleChange} />
      <input type="date" name="date" onChange={handleChange} />
      <input type="time" name="time" onChange={handleChange} />

      <button onClick={bookAppointment}>Book</button>

      <h3>Appointments</h3>
      <ul>
        {appointments.map((a, i) => (
          <li key={i}>
            {a.patientName} with {a.doctorName} at {a.time}
          </li>
        ))}
      </ul>
    </div>
  );
}