import Nav from "../components/Nav";
import construccion from "../assets/construccion.svg";

const Design = () => {
    return ( <>
        <Nav/>
        <div className="construccion">
            <div className="ventana">
                <h1 className="text-center container">Seguimos en construccion esperamos pronto este listo :)</h1>
                <center>
                <img src={construccion} width="500" height="500" alt="construccion" className="img-fluid "/>
                </center>
            </div>
        </div>
        <iframe style={{width:"100%", height: "1000px"}} src="https://tecnoacademiaoriente.netlify.app/dise%C3%B1o.html" title="diseño"></iframe>
    </> );
}
 
export default Design;