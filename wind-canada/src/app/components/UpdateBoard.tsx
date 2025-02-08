export function UpdateBoard() {
  return (
    <div className="space-y-4 mb-8">
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-200 px-2 py-1 text-sm">
              Feature Added
            </span>
            <h2 className="font-medium">Added Login Options</h2>
          </div>
          <span className="text-gray-500">February 8, 2025</span>
        </div>
        <p className="text-gray-600">
          Went through setting up Neon with Postgres and linked it to this
          website to enable users to login via email. Will also use it for
          storing calculations and more. Now supporting Github, Google and Email
          login.
        </p>
      </div>

      <div className="border rounded-lg p-6 bg-white">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-green-200 px-2 py-1 text-sm">To Do</span>
            <h2 className="font-medium">Initial System Design</h2>
          </div>
          <span className="text-gray-500">Ongoing</span>
        </div>
        <p className="text-gray-600">
          Compile notes, flowchart and certain parameters like wind speed into a
          document to be able to create a system design for API calls. Or ways
          to store data from book to be used.
        </p>
      </div>
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-green-200 px-2 py-1 text-sm">To Do</span>
            <h2 className="font-medium">
              External Pressure Coefficients for Low Buildings
            </h2>
          </div>
          <span className="text-gray-500">Ongoing</span>
        </div>
        <p className="text-gray-600">
          Program the first example of low building 4.1.7.6 - include a 3D model
          output using Three.js
        </p>
      </div>
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="bg-green-200 px-2 py-1 text-sm">To Do</span>
            <h2 className="font-medium">Log Graphs to Functions</h2>
          </div>
          <span className="text-gray-500">Ongoing</span>
        </div>
        <p className="text-gray-600">
          Transform all log graphs in book, around 10+ into log functions, to be
          used in calculations.
        </p>
      </div>
      <p className="p-2 text-gray-600">More to be included.</p>
    </div>
  );
}
