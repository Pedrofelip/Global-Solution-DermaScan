"use client";

import { useEffect, useState } from "react";
import styles from "./resultado.module.css";
import CardResultado from "@/app/components/cardResultado/cardResultado";

export default function Resultado() {
  const [nome, setNome] = useState("");
  const [historico, setHistorico] = useState("");
  const [resultado, setResultado] = useState("");
  const [cidade, setCidade] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/cadastro-usuario", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        setNome(data.nome_usuario);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/resultado", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        setHistorico(data.risco);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/prontuario", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        setResultado(data.condicoes_medicas);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http:localhost:3000/regiao", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        setCidade(data.estado);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className={styles.main_resultado}>
      <section className={styles.section_resultado}>
        <CardResultado
          nome={nome}
          resultado={resultado}
          historico={historico}
          estado={cidade}
        ></CardResultado>
      </section>
    </main>
  );
}
