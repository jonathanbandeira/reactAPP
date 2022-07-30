const Produto = ({ produto }) => {
  return (
    <>
      <h3>{produto.nome}</h3>
      <h4>Preço: R$ {produto.preco}</h4>
      <hr />
    </>
  );
};

export default Produto;
