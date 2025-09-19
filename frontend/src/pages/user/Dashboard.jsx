export default function Dashboard() {
  return (
    <div className="container mt-4">
      <h2>User Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Total Content</h5>
            <p>15</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Followers</h5>
            <p>1200</p>
          </div>
        </div>
      </div>
    </div>
  );
}
