import React, { useState} from 'react';
import './Teacher.css';
import { mockDataContacts } from '../data/mockData';

const data = mockDataContacts;

function Teach() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 10;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Giáo viên</th>
            <th>Email</th>
            <th>Khoa</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.faculty}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Teach;