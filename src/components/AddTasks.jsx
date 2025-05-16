import { useState } from "react";

export default function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState(""); // ("") string vazia
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //usa-se a chave quando tem mais de 1 "atributo"
          //validar os inputs
          if (!title.trim() || !description.trim()) {
            // trim tira os espaços em branco
            return alert("Preencha os campos");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="cursor-pointer bg-slate-500 px-4 py-2 rounded-md font-medium text-white"
      >
        Adicionar
      </button>
    </div>
  );
}
