import { useEffect, useState } from "react";

const backendUrl = import.meta.env.BACKEND_URL || "http://localhost:5050";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        const response = await fetch(`${backendUrl}/api/users`, {
          signal: controller.signal
        });

        const data = response.ok ? await response.json() : [];
        setUsers(Array.isArray(data) ? data : []);
      } catch {
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
      </div>

      {loading ? (
        <p>Loading live data...</p>
      ) : users.length > 0 ? (
        <div className="user-grid">
          {users.map((user) => (
            <article className="user-card" key={user.id || user._id || user.email}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </article>
          ))}
        </div>
      ) : (
        <p>No data found from the backend yet.</p>
      )}
    </section>
  );
}