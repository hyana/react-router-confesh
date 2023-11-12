import { NavLink, useLoaderData } from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader({ request }) {
  const contacts = await getContacts();
  return { contacts };
}

export default function Index() {
  const { contacts } = useLoaderData();
  return (
    <p id="zero-state">
      <nav>
        {contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <NavLink
                  to={`contacts/${contact.id}`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  {contact.title ? <>{contact.title}</> : <i>Missing Title</i>}{" "}
                  {contact.favorite && <span>★</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
      </nav>
    </p>
  );
}
