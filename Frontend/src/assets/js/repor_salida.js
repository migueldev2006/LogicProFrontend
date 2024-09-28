function downloadPDF() {

    const { jsPDF } = window.jspdf;
    var doc = new jsPDF();

  
    doc.text("Reporte de la Tabla", 14, 16); //Pone titulo


    doc.autoTable({
        html: '#example', 
        startY: 22, 
        theme: 'striped',
        headStyles: { fillColor: [52, 73, 94] }, 
        margin: { top: 20 },
        styles: { cellPadding: 3, fontSize: 10 },
    });


    doc.save('Reporte_salida.pdf');
}


function downloadExcel(){
    
    let table = document.getElementById("example");

    let wb = XLSX.utils.table_to_book(table,{hoja:"hoja1"});

    XLSX.writeFile(wb,"Reporte_salida.xlsx");
}



// const botonPdf = document.getElementById('descargaPdf');
// const botonExcel = document.getElementById('descargaExcel');

function mostrarAlerta() {
  Swal.fire({
    title: "¡Descarga Exitosa!",
    // text: `El reporte de entrada de materiales en ${tipoArchivo} se realizo correctamente`,
    icon: "success"
  });
}

// botonPdf.addEventListener('click', function() {
//   mostrarAlerta('pdf');
// });

// botonExcel.addEventListener('click', function() {
//   mostrarAlerta('excel');
// });