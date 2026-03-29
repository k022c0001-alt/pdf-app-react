import React, { useState } from 'react';

const PDFApp = () => {
    const [tableData, setTableData] = useState([]);

    // Function to add row data
    const addRow = (row) => {
        setTableData([...tableData, row]);
    };

    return (
        <div>
            <h1>PDF Application</h1>
            <button onClick={() => addRow({ id: tableData.length + 1, name: 'New Row' + (tableData.length + 1) })}>Add Row</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PDFApp;