import React, { useState } from 'react';

const TableEditor = () => {
    const [data, setData] = useState([['', ''], ['', '']]);

    const handleChange = (rowIndex, colIndex, value) => {
        const newData = [...data];
        newData[rowIndex][colIndex] = value;
        setData(newData);
    };

    return (
        <table>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <td key={colIndex}>
                                <input 
                                    type="text" 
                                    value={cell} 
                                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)} 
                                />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableEditor;