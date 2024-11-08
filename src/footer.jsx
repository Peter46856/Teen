const Footer = () => {

    const today= new Date();

    return (
        <footer className="text-center m-3" style={{background: "rgb(143, 77, 77)"}}>
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h5>@Teen Dating site - {today.getFullYear()} </h5>

            </div>
            </div>
        </footer>
    );
}

export default Footer;
