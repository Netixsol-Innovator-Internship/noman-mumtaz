import { useState } from "react";
import api from "../services/api";

export default function TaskList({ tasks, fetchTasks }) {
  const [editingTask, setEditingTask] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleEditClick = (task) => {
    setEditingTask(task._id);
    setTitle(task.title);
    setDescription(task.description || "");
  };

  const handleUpdate = async () => {
    await api.put(`/tasks/${editingTask}`, { title, description });
    setEditingTask(null);
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task._id} className="border p-2 rounded flex flex-col md:flex-row justify-between items-start md:items-center">
          {editingTask === task._id ? (
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <input
                className="border px-2 py-1 rounded flex-1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="border px-2 py-1 rounded flex-1"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setEditingTask(null)}
                className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center">
              <div>
                <h3 className="font-bold">{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button
                  onClick={() => handleEditClick(task)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
