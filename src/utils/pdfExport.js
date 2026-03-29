import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = async (tableData) => {
 const element = document.getElementById('pdf-content');
 const canvas = await html2canvas(element);
 const imgData = canvas.toDataURL('image/png');
 const pdf = new jsPDF();
 const imgWidth = 210;
 const pageHeight = 295;
 const imgHeight = (canvas.height * imgWidth) / canvas.width;
 pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
 pdf.save('table.pdf');
};