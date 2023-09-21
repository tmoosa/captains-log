const React = require('react');

function Show({ log }) {
  return (
    <div>
      <h1>{log.title}</h1>
      <p>Entry: {log.entry}</p>
      <p>Ship is Broken: {log.shipIsBroken ? 'Yes' : 'No'}</p>
      <p>Created At: {log.createdAt}</p>
      <a href="/logs">Back to Logs</a>
      <a href={`/logs/${log._id}/edit`}>Edit Log</a>
    </div>
  );
}

module.exports = Show;
