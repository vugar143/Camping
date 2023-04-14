import React,{useEffect,useState} from 'react'

function Muracietlerim() {
    const [data, setData] = useState([
        { id: 1, name: 'John', surname: 'Doe', phone: '555-1234' },
        { id: 2, name: 'Jane', surname: 'Doe', phone: '555-5678' },
        { id: 3, name: 'Bob', surname: 'Smith', phone: '555-9012' },
      ]);
  return (
    <table className='muracietlerim'>
      <thead>
        <tr>
            <th>Count</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Telephone Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.surname}</td>
            <td>{row.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
  

export default Muracietlerim