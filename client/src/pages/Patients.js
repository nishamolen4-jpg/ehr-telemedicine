import { useState } from "react";
import axios from "axios";

export default function Patients() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
  });

  const [patients, setPatients] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addPatient = async () => {
    await axios.post("http://localhost:5000/api/patients", form);
    setPatients([...patients, form]);
    setForm({ name: "", age: "", gender: "", phone: "" });
  };

  return (
    <div>
      <h2>Patient Registration</h2>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" />
      <input name="gender" value={form.gender} onChange={handleChange} placeholder="Gender" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />

      <button onClick={addPatient}>Register</button>

      <h3>Patient List</h3>
      <ul>
        {patients.map((p, i) => (
          <li key={i}>{p.name} - {p.age} - {p.gender}</li>
        ))}
      </ul>
    </div>
  );
}