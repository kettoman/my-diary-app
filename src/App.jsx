import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import DiaryForm from './components/DiaryForm';
import DiaryList from './components/DiaryList';

function App() {
  const [diaries, setDiaries] = useState([]);

  const fetchDiaries = async () => {
    const querySnapshot = await getDocs(collection(db, 'diaries'));
    const diaryList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDiaries(diaryList.reverse());
  };

  useEffect(() => {
    fetchDiaries();
  }, []);

  const addDiary = async (text) => {
    await addDoc(collection(db, 'diaries'), {
      text,
      createdAt: new Date(),
    });
    fetchDiaries();
  };

  const deleteDiary = async (id) => {
    await deleteDoc(doc(db, 'diaries', id));
    fetchDiaries();
  };

  return (
    <div className="max-w-2xl mx-auto p-4 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">日記アプリ</h1>
      <DiaryForm onAdd={addDiary} />
      <DiaryList diaries={diaries} onDelete={deleteDiary} />
    </div>
  );
}

export default App;
