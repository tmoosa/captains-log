const React = require('react');

function Index({ logs }) {
  return (
    <div>
      <h1>Captain's Logs</h1>
      <ul>
        {logs.map((log) => (
          <li key={log._id}>
            <a href={`/logs/${log._id}`}>{log.title}</a>
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
              <button>Delete</button>
            </form>
          </li>
        ))}
      </ul>
      <a href="/new">Create New Log</a>
    </div>
  );
}

module.exports = Index;
