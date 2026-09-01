import { useEffect, useState } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5050";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        console.log("Fetching users from:", `${backendUrl}/api/users`);
        
        const response = await fetch(`${backendUrl}/api/users`, {
          signal: controller.signal,
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        console.log("Response status:", response.status);
        console.log("Response ok:", response.ok);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Users data received:", data);
        
        setUsers(Array.isArray(data) ? data : (data?.users ? data.users : []));
      } catch (error) {
        console.error("Error loading users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();

    return () => controller.abort();
  }, []);

  return (
    <section className="page-block">
      <div className="page-intro">
        <p className="eyebrow">Users</p>
        <h2>Users list</h2>
        <p>
          This page checks the live backend connection and shows data returned from the API.
        </p>
        <p style={{ fontSize: "0.9em", color: "#666" }}>
          Backend URL: {backendUrl}
        </p>
      </div>

      {loading ? (
        <p>Loading live data...</p>
      ) : users.length > 0 ? (
        <div className="user-grid">
          {users.map((user) => (
            <article className="user-card" key={user.id || user._id || user.email}>
              <h3>{user.name || "No name"}</h3>
              <p>{user.email || "No email"}</p>
            </article>
          ))}
        </div>
      ) : (
        <div>
          <p>No data found from the backend yet.</p>
          <p style={{ fontSize: "0.9em", color: "#999" }}>
            Check browser console (F12) for debugging information.
          </p>
        </div>
      )}
    </section>
  );
}
