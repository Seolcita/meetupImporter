/** @format */
'use client';
import exportFromJSON from 'export-from-json';

export default function JsonToCsvConverter() {
  const data = [
    { name: 'Seol', email: 'seol@example.com' },
    { name: 'Luis', email: 'luis@example.com' },
    { name: 'Mariana', email: 'mariana@example.com' },
    { name: 'Sofia', email: 'sofia@example.com' },
  ];

  const handleLocalData = () => {
    const fileName = 'userInfoLocal';
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };

  const handleAPIData = () => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(response => {
        const fileName = 'userInfoAPI';
        const exportType = exportFromJSON.types.csv;
        exportFromJSON({ data: response.todos, fileName, exportType });
      });
  };

  return (
    <div>
      <button onClick={handleLocalData}> Export local data</button>
      <button onClick={handleAPIData}> Export API data</button>
    </div>
  );
}
