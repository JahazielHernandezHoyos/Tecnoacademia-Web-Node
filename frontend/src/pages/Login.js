import Nav from "../components/Nav";
const Login = () => {
    return ( 
        <>
            <Nav />
            <form className="mt-5 py-5 col-md-10 mx-auto col-lg-5">
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="correo@correo.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Recordar</label>
                </div>
                <button type="submit" className="btn btn-primary col-4">Iniciar Sesion</button>
            </form>
        </>
     );
}
 
export default Login;