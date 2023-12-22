const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">
          Sync360 Todo Task Management Software
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to Sync360, your ultimate task management solution. Below are
          some key features:
        </p>

        <ul className="list-disc pl-6">
          <li className="mb-2">Effortless Todo List Management</li>
          <li className="mb-2">Sync Tasks Across Devices</li>
          <li className="mb-2">Intuitive User Interface</li>
          <li className="mb-2">Collaborate with Team Members</li>
          <li className="mb-2">Set Priority and Due Dates</li>
          <li className="mb-2">Customizable Categories and Labels</li>
          <li className="mb-2">User-Friendly Dashboard</li>
        </ul>

        <p className="text-gray-600 mt-6">
          Start managing your tasks efficiently with Sync360. Stay organized and
          boost productivity!
        </p>
      </div>
    </div>
  );
};
export default Features;
