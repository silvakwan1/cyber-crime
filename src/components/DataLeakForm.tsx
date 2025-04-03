import { useState } from "react";
import { X } from "lucide-react";

interface DataLeakFormProps {
  onClose: () => void; // Função para fechar o modal
}

export default function DataLeakForm({ onClose }: DataLeakFormProps) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !cpf) {
      alert("Preencha todos os campos!");
      return;
    }
    alert("Vazamos seus dados com sucesso!");
    onClose(); // Fecha o modal após o envio
  };

  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="p-6 text-black max-w-md w-full mx-auto bg-white shadow-lg rounded-xl relative">
        {/* Botão de Fechar */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          Insira seus dados
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Nome Completo */}
          <div>
            <label className="block text-sm font-medium">Nome Completo:</label>
            <input
              type="text"
              className="w-full border p-2 rounded-lg mt-1"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* CPF */}
          <div>
            <label className="block text-sm font-medium">CPF:</label>
            <input
              type="text"
              className="w-full border p-2 rounded-lg mt-1"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          {/* Botão de Enviar */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
