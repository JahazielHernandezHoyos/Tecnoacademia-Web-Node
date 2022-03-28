import Nav from "../components/Nav";
import logo from "../assets/Logo.png";
const Login = () => {
    return ( 
        <>
            <Nav />
            <form className="mt-1 py-5 col-md-10 mx-auto col-lg-5">
            <div class="text-center">
                <img src={logo} height="250"/>
            </div>
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="correo@correo.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                </div>
                <div class="text-center mt-3">
                <button type="submit" className="btn btn-primary col-4">Iniciar Sesion</button>
                </div>
            </form>
        </>
     );
}
 
export default Login;