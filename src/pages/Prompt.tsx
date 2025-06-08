import React, { useState } from 'react';

type PromptProps = {
  onSendPrompt: (prompt: string) => void;
  loading?: boolean;
};

const Prompt: React.FC<PromptProps> = ({ onSendPrompt, loading = false }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSendPrompt(input.trim());
    setInput('');
  };

  return (
    <div className="flex flex-col border-2 border-gray-300 rounded-lg p-4 max-w-lg mt-10">
      <h1 className="text-3xl font-bold">¿Qué quieres crear?</h1>
      <p className="mt-4 text-lg">
        Escribe aquí tu idea y la haré realidad en minutos. Mientras más detallada sea tu idea, mejor podré entenderla y crearla para ti.
      </p>
      <div className="mt-8">
        <textarea
          className="textarea textarea-bordered w-full max-w-lg h-48"
          placeholder="Escribe tu prompt aquí..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
      </div>
      <div className="mt-4">
        <button
          className="btn btn-primary w-full"
          onClick={handleSubmit}
          disabled={loading || !input.trim()}
        >
          {loading ? 'Generando...' : 'Enviar'}
        </button>
      </div>
    </div>
  );
};

export default Prompt;
