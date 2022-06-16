import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function search() {
    if (input === "") {
      alert("Digite um CEP!");
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("CEP inválido!");
      setInput("");
    }
  }
  return (
    <div className="cont">
      <h1 className="title">Search CEP</h1>

      <div className="general">
        <div className="contInput">
          <input
            id="cep"
            type="text"
            placeholder="00000-000"
            maxLength={9}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="buttonSearch" onClick={search}>
            <FiSearch size={25} color="white" />
          </button>
        </div>

        {Object.keys(cep).length > 0 && (
          <main className="main">
            <p>CEP: {cep.cep}</p>
            <p>{cep.logradouro}</p>
            <p>Bairro: {cep.bairro}</p>
            <p>
              {cep.localidade} - {cep.uf}
            </p>
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
