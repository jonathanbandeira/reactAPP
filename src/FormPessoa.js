import { useState } from "react";

const FormPessoa = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Você entrou com o objeto ${JSON.stringify(inputs)}.`);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome Completo:
        <input
          type="text"
          name="nome"
          value={inputs.nome || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Idade:
        <input
          type="text"
          name="idade"
          value={inputs.idade || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Endereço:
        <textarea
          name="endereco"
          value={inputs.endereco || ""}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Estado:
        <select
          name="estado"
          value={inputs.estado || ""}
          onChange={handleChange}
        >
            <option value="">Selecione...</option>
            <option value="ES">Espírito Santo</option>
            <option value="MG">Minas Gerais</option>
        </select>
      </label>
      <br />
      <button>Enviar</button>
    </form>
  );
};

export default FormPessoa;
