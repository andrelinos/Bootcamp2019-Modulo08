import React,  { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);

  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('')
  }

  /** Este hook executa uma única vez / carrega as techs */
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if ( storageTech ) {
      setTech(JSON.parse(storageTech));
    }

   /*  return () => {}; // adiciona ou remove função após o componente ser executado */
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);


  return (
    <>
    <ul>
      { tech.map(t => (
        <li key={t}>{t}</li>
      )) }

    </ul>
    <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)} />
    <button type="button" onClick={handleAdd}>
      Adicionar
      </button>
    </>
  );
}

export default App;
