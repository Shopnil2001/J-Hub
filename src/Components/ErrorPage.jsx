import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div id="error-page" className="text-center my-auto h-fit">
      <h1 className="text-4xl">Oops!</h1>
      <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
      <img className="mx-auto mt-10" src="https://i.ibb.co/12KPJnx/extra.png" alt="" />
      <Link to={'/'}><button className="btn-outline btn-error rounded-md">←Back to home←</button></Link>
    </div>
    );
};

export default ErrorPage;