export default function NotFound() {
  return (
    <div
      className="task-container"
      style={{ marginTop: '50px', textAlign: 'center' }}
    >
      <h1 style={{ fontSize: '3rem', color: '#dc3545', marginBottom: '16px' }}>
        404
      </h1>
      <h3 style={{ marginBottom: '8px' }}>Page Not Found!</h3>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
