import { useState } from 'react';

function DiaryForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') return;
    onAdd(text);
    setText('');
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="今日の出来事は？"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border border-gray-300 rounded px-3 py-2"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        追加
      </button>
    </div>
  );
}

export default DiaryForm;

