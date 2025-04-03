import { useState } from "react";
import cyberCrimes from "./assets/cyberCrime.png";
import CardLineTemp from "./components/CardLineTemp";
import { arrayCardLineTemp } from "./arrayCardLineTemp";
import PhreakingTimeline from "./components/PhreakingTimeline";
import DataLeakForm from "./components/DataLeakForm";
import RansomwareSimulator from "./components/RansomwareSimulator";

function App() {
  const [showPhreakingTimeline, setShowPhreakingTimeline] = useState(false);
  const [showDataLeakForm, setShowDataLeakForm] = useState(false);
  const [showRansomwareSimulator, setShowRansomwareSimulator] = useState(false);
  const handleClick = (ano) => {
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

export default App;
