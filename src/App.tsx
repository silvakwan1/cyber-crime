import { useState } from "react";
import cyberCrimes from "./assets/cyberCrime.png";
import CardLineTemp from "./components/CardLineTemp";
import PhreakingTimeline from "./components/PhreakingTimeline";
import DataLeakForm from "./components/DataLeakForm";
import RansomwareSimulator from "./components/RansomwareSimulator";

function App() {
  const [showPhreakingTimeline, setShowPhreakingTimeline] = useState(false);
  const [showDataLeakForm, setShowDataLeakForm] = useState(false);
  const [showRansomwareSimulator, setShowRansomwareSimulator] = useState(false);
  const handleClick = (ano: string) => {
    switch (ano) {
      case "1970":
        setShowPhreakingTimeline(true);
        break;
      case "2010":
        setShowDataLeakForm(true);
        break;
      case "2000":
        setShowRansomwareSimulator(true);
        break;
    }
  };

  return (
    <div className="min-h-full w-full">
      {/* Se showPhreakingTimeline for true, mostra a timeline */}
      {showPhreakingTimeline && (
        <PhreakingTimeline onClose={() => setShowPhreakingTimeline(false)} />
      )}

      {showRansomwareSimulator && (
        <RansomwareSimulator
          onClose={() => setShowRansomwareSimulator(false)}
        />
      )}

      {showDataLeakForm && (
        <DataLeakForm onClose={() => setShowDataLeakForm(false)} />
      )}
      <div className="h-56 flex justify-center mt-5">
        <img src={cyberCrimes} className="h-full" alt="logo cyber crimes" />
      </div>

      <div>
        <h2 className="text-center font-bold text-3xl my-10">Linha do tempo</h2>
      </div>

      <div className="relative flex items-center justify-around after:h-2 after:bg-blue-800 after:w-full after:absolute after:top-24 after:-translate-y-1/2">
        {arrayCardLineTemp.map((item, index) => (
          <div key={index} onClick={() => handleClick(item.ano)}>
            <CardLineTemp
              srcImg={item.imageUrl}
              description={item.description}
              ano={item.ano}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const arrayCardLineTemp = [
  {
    description:
      "Surgem os primeiros golpes digitais, como o phreaking, que burlava sistemas telefônicos.",
    imageUrl: "src/assets/phone.svg",
    ano: "1970",
  },

  {
    description:
      "Primeiras invasões de sistemas e vírus como o worm de Robert Morris.",
    imageUrl: "src/assets/hacker-svgrepo.svg",
    ano: "1980",
  },

  {
    description: "Aparecem golpes de phishing e fraudes bancárias online.",
    // imageUrl: "src/assets/bank.svg",
    imageUrl: "src/assets/bank-svgrepo.svg",
    ano: "1990",
  },
  {
    description: "Crescem ataques de ransomware e roubo de dados bancários.",
    imageUrl: "src/assets/doc.svg",
    ano: "2000",
  },
  {
    description:
      "Explosão de fraudes digitais, com vazamentos de dados e ataques como WannaCry.",
    // imageUrl: "src/assets/browser-eye.svg",
    imageUrl: "src/assets/eye-exam.svg",
    ano: "2010",
  },
  {
    ano: "2020+",
    description:
      "Golpes sofisticados com IA, deepfakes e clonagem de WhatsApp se tornam comuns.",
    imageUrl: "src/assets/chatgpt_logo.svg",
  },
];

export default App;
