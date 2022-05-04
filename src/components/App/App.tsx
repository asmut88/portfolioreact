import './App.css';
import { Galery } from '../Galery/Galery';

import { GetRequest } from '../../API/axiosGetRequest'
import { IPhotos } from '../../API/interface';
import { MouseEvent, MouseEventHandler, useEffect, useState } from 'react';

//**Прмер вызова из кнопки запроса */
const handleGet: React.MouseEventHandler<HTMLButtonElement> = () => {
  GetRequest<IPhotos>('https://jsonplaceholder.typicode.com/photos')
}

function App() {

  const [photos, setPhotos] = useState<IPhotos[]>([])

  useEffect(() => {
    setPhotos([])

    const res = GetRequest<IPhotos>('https://jsonplaceholder.typicode.com/photos')
    console.log(typeof res)
  }, [])

  return (
    <div className="App">
      <header className="App-header">


      </header>
    </div>
  );
}

export default App;
