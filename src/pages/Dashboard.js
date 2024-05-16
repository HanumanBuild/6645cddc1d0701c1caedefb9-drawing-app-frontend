import React, { useRef, useState, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import api from '../utils/api';

function Dashboard() {
  const canvasRef = useRef(null);
  const [drawings, setDrawings] = useState([]);

  const saveDrawing = async () => {
    const drawingData = canvasRef.current.getSaveData();
    try {
      await api.post('/api/drawings', { data: drawingData }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Drawing saved successfully');
      fetchDrawings();
    } catch (error) {
      alert('Failed to save drawing');
    }
  };

  const fetchDrawings = async () => {
    try {
      const response = await api.get('/api/drawings', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setDrawings(response.data);
    } catch (error) {
      alert('Failed to fetch drawings');
    }
  };

  useEffect(() => {
    fetchDrawings();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl">Dashboard</h2>
      <CanvasDraw ref={canvasRef} />
      <button onClick={saveDrawing} className="mt-4 p-2 bg-blue-500 text-white">Save Drawing</button>
      <div className="mt-4">
        <h3 className="text-xl">Saved Drawings</h3>
        {drawings.map((drawing, index) => (
          <div key={index} className="mt-2">
            <CanvasDraw disabled hideGrid saveData={drawing.data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;