import React, { useEffect, useState } from "react";

//Estados se usan para mostrar estados actualizados
const CounterWithState = () => {
  //La actualización de un state, desencadena un re-render
  const [count, setCount] = useState(0);
  //Si hacemos un log del state posterior al agregado, vemos que estamos viendo el state actual
  //y no el modificado

  //useEffect
  useEffect(() => {
    console.log(
      "esto se ejecutaa SOLO cuando se monta el componente(con array de dependencias vacio)"
    );
  }, []);

  useEffect(() => {
    console.log(
      "esto se ejecuta cuando se monta el componente y además, en cada cambio de estado"
    );
  }, [count]);

  const onAdd = () => {
    setCount((prevCount) => prevCount + 1);

    //Hacer un console.log(count) posterior al setCount
    console.log(count);
  };

  return (
    <div>
      <span>Counter with state</span>
      <button onClick={onAdd}>Add 1</button>
      <span>{count}</span>
    </div>
  );
};

export default CounterWithState;
