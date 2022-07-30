import Produto from "./Produto";

const Carrinho = () => {
  const p1 = { nome: "Banana", preco: 3.99 };
  const p2 = { nome: "Maçã", preco: 5.99 };
  const p3 = { nome: "Uva", preco: 6.99 };
  const prods = [p1, p2, p3];
  //const prods = [];

  const fecharCompra = (qtdeProdutos, event) => {
    console.log(event);
    alert(`Você comprou ${qtdeProdutos} produtos!`);
  };

  return (
    <>
      <h1>Carrinho</h1>
      <hr />
      {prods.length > 0 && (
        <>
          {prods.map((p, i) => {
            return <Produto key={i} produto={p} />;
          })}
          <button onClick={(event) => fecharCompra(prods.length, event)}>
            Fechar Compra
          </button>
        </>
      )}
      {prods.length === 0 && <h4>Carrinho Vazio!</h4>}
    </>
  );
};

export default Carrinho;
