export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="template">
      <h2>template</h2>
      {children}
    </div>
  );
}
