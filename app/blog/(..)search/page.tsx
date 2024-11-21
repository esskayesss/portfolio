export default function SearchModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 w-1/2">
        <h1 className="text-2xl font-bold">Search</h1>
        <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded-lg mt-2" />
        <div className="flex justify-end mt-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
        </div>
      </div>
    </div>
  )
}