const Lives = ({ count }) => (
  <div className="lives">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>❤️</span>
    ))}
  </div>
);

export default Lives