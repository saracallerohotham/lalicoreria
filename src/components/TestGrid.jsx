export function TestGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-blue-500 h-24">Item 1</div>
      <div className="bg-red-500 h-24">Item 2</div>
      <div className="bg-green-500 h-24">Item 3</div>
      <div className="bg-yellow-500 h-24">Item 4</div>
    </div>
  );
}
