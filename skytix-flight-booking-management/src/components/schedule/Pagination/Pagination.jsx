import "./Pagination.scss";

export default function Pagination() {
  return (
    <div className="pagination-wrapper">

      <button className="page-btn arrow">
        ‹
      </button>

      <button className="page-btn active">
        1
      </button>

      <button className="page-btn">
        2
      </button>

      <button className="page-btn">
        3
      </button>

      <button className="page-btn">
        4
      </button>

      <button className="page-btn">
        5
      </button>

      <button className="page-btn arrow">
        ›
      </button>

    </div>
  );
}