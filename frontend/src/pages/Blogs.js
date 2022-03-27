import Nav from "../components/Nav";

const Blogs = () => {
  return (
    <>
      <Nav />
      <div className="titulosGsap">
        <div className="banner" style={{ height: "calc(40vh - 50px)" }}>
          <div className="banner-content">
            <h1 className="text-light">Blogs</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
