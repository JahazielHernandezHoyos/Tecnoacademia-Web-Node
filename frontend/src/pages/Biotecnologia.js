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
    </> );
}
 
export default Design;