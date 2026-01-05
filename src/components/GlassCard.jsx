// Reusable glassmorphism card component
// Will be styled in Phase 7

function GlassCard({ children, className = '' }) {
  return (
    <div className={`glass-card ${className}`}>
      {children}
    </div>
  );
}

export default GlassCard;
