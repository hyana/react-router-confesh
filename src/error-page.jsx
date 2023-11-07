import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError(); //this hook returns anything thrown during an action, loader, or rendering
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}