import { useState } from "react";
import { Phone, Waves, Lock, ShieldCheck, X } from "lucide-react"; // Importa o ícone de fechar

const events = [
  {
    year: "1970s",
    title: "Início do Phreaking",
    description:
      "Phreakers usavam tons de frequência para enganar os sistemas telefônicos.",
    icon: <Phone className="text-blue-500" size={32} />,
  },
  {
    year: "1980s",
    title: "Dispositivos de Tons",
    description: "Uso de blue boxes para realizar chamadas gratuitas.",
    icon: <Waves className="text-green-500" size={32} />,
  },
  {
    year: "2000s",
    title: "Segurança Reforçada",
    description:
      "As operadoras implementam novas tecnologias para impedir ataques.",
    icon: <Lock className="text-red-500" size={32} />,
  },
  {
    year: "Hoje",
    title: "Hacking de Telecomunicações",
    description:
      "O phreaking evoluiu para ataques mais sofisticados em redes móveis e VoIP.",
    icon: <ShieldCheck className="text-yellow-500" size={32} />,
  },
];

export default function PhreakingTimeline({ onClose }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="absolute top-0 w-full h-screen flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="p-6 text-black max-w-3xl mx-auto bg-white shadow-lg rounded-xl relative">
        {/* Botão de Fechar */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          Evolução do Phreaking
        </h2>
        <div className="flex flex-col gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className={`p-4 flex items-center gap-4 border rounded-lg cursor-pointer transition ${
                selected === index ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              onClick={() => setSelected(index)}
            >
              {event.icon}
              <div>
                <h3 className="font-semibold">
                  {event.year} - {event.title}
                </h3>
                {selected === index && (
                  <p className="text-sm text-gray-600">{event.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
