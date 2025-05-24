

import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Prompt from './pages/Prompt'
import PhoneMockup from './components/PhoneMockup';
import CanvasDropZone from './components/CanvasDropZone';



function App() {

  const [canvasWidgets, setCanvasWidgets] = useState([]);
  const [draggedWidget, setDraggedWidget] = useState(null);

  const handleDragStart = (widget: any) => {
    setDraggedWidget(widget);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedWidget) {
      setCanvasWidgets([...canvasWidgets, draggedWidget]);
      setDraggedWidget(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
   <>
      <Navbar />
      <div className="flex w-full h-screen flex-col">
        <div className="flex flex-row flex-grow">
          {/* Prompt ocupa 1/3 del ancho sin separación */}
          <div className="w-1/4">
            <div className="card bg-base-300 rounded-l-box h-full grid place-items-center">
              <Prompt />
            </div>
          </div>

          {/* Index ocupa 2/3 del ancho sin separación */}
          <div className="w-3/4">
            <div className="card bg-base-300 rounded-r-box h-full grid place-items-center">
            
              <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        

        <div className="lg:col-span-2 flex justify-center">
          <PhoneMockup>
            <CanvasDropZone 
              widgets={canvasWidgets}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            />
          </PhoneMockup>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
