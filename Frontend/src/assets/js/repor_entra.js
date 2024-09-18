function filterTable(columnIndex) {
    var input, filter, table, tr, td, i, txtValue;

    input = document.querySelectorAll("thead input")[columnIndex];
    filter = input.value.toUpperCase();
    table = document.getElementById("example");
    tr = table.getElementsByTagName("tr"); //  filas


    for (i = 2; i < tr.length; i++) { 
        td = tr[i].getElementsByTagName("td")[columnIndex]; 
        if (td) {
            txtValue = td.textContent || td.innerText; // el texto dentro del td
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""; 
            } else {
                tr[i].style.display = "none"; 
            }
        }
    }
}


// descargar como pdf

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


    doc.save('reporte_entrada.pdf');
}

//Descargar como excel

function downloadExcel(){
    
    let table = document.getElementById("example");

    let wb = XLSX.utils.table_to_book(table,{hoja:"hoja1"});

    XLSX.writeFile(wb,"Reporte_entrada.xlsx");
}


const botonPdf = document.getElementById('descargaPdf');
const botonExcel = document.getElementById('descargaExcel');

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