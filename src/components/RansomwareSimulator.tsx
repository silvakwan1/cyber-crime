import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface RansomwareSimulatorProps {
  onClose: () => void; // Função para fechar o modal
}

export default function RansomwareSimulator({
  onClose,
}: RansomwareSimulatorProps) {
  const originalText =
    "O ransomware é um tipo de malware que criptografa arquivos e exige um pagamento para restaurar o acesso a eles. Muitas vítimas acabam pagando, mas nem sempre os dados são recuperados.";

  const [text, setText] = useState(originalText);
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [canClose, setCanClose] = useState(false); // Bloqueia fechamento antes de 10s

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(encryptText(originalText));
      setIsEncrypted(true);
      setCanClose(true); // Libera o fechamento após criptografar
      alert(
        "🚨 Criptografamos seus dados! 🚨\n\nTransfira R$1000 para essa chave Pix: 000000000000000."
      );
    }, 5000);

    return () => clearTimeout(timer); // Limpa o temporizador caso o componente seja desmontado
  }, []);

  // Função para criptografar o texto (substitui por caracteres aleatórios)
  const encryptText = (text: string) => {
    return text
      .split("")
      .map((char) =>
        char === " " ? " " : String.fromCharCode(33 + Math.random() * 94)
      )
      .join("");
  };

  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50 backdrop-blur-md">
      <div className="max-w-2xl text-black mx-auto p-6 bg-white shadow-lg rounded-xl text-center relative">
        {/* Botão de Fechar (Só aparece depois de 10s) */}
        {canClose && (
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        )}

        <h2 className="text-2xl font-bold mb-4">🛑 Ataque de Ransomware 🛑</h2>
        <p className="text-lg bg-gray-100 p-4 rounded-lg min-h-[100px]">
          {text}
        </p>

        {isEncrypted && (
          <button
            onClick={() => {
              setText(originalText);
              setIsEncrypted(false);
            }}
            className="mt-4 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
          >
            Restaurar Backup
          </button>
        )}
      </div>
    </div>
  );
}
