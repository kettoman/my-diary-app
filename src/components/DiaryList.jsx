function DiaryList({ diaries, onDelete }) {
    return (
      <ul className="space-y-3">
        {diaries.map((diary) => (
          <li
            key={diary.id}
            className="bg-white p-4 rounded shadow flex justify-between items-start"
          >
            <span className="text-gray-800">{diary.text}</span>
            <button
              onClick={() => onDelete(diary.id)}
              className="text-red-500 hover:underline text-sm"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default DiaryList;
  
  