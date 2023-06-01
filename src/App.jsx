import { invitados } from "./invitados"
import jsPDF from "jspdf"

function App() {

  const body = document.body
  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", "a4");


    // Agregar el contenido HTML al PDF
    doc.html(body, {
      callback: function (pdf) {
        pdf.save("invitados.pdf");
      }
    });


  }
  return (
    <>
      <div id="lol" className="flex flex-wrap justify-center gap-6 w-[595px] p-4 text-white ">
        {invitados.map(invitado => (
          <div className="card w-[252px] h-[144px] relative" key={invitado.ID}>
            <img className="h-full w-full absolute" src="public/invv.jpg" alt="" />
        <div className="absolute z-10 flex justify-between items-end w-full h-1/3 bottom-1 p-2">

  <p className="text-white text-[10px]" >{invitado.Invitados}</p>
              <img className="w-12 h-12" src={invitado.Encoder} alt="" />
            </div>
          </div>
        ))}
      </div>
      <button className="border border-black" onClick={generatePDF} type="primary">Generar PDF</button>
    </>
  )
}

export default App
