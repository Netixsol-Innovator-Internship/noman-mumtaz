import { useState } from "react";
import api from "../services/api";

export default function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/tasks", { title, description });
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add Task
      </button>
    </form>
  );
}
