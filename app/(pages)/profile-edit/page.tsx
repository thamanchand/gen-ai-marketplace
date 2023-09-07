import { FaUpload } from "react-icons/fa";

function SettingsComponent() {
  return (
    <div className="space-y-8 p-8">
      {/* Personal Information Section */}
      <div className="space-y-6">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-700">
          Personal Information
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <input
              type="text"
              placeholder="Name"
              className="rounded border p-2"
            />
            <input
              type="text"
              placeholder="Country"
              className="rounded border p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded border p-2"
            />
            <div className="group relative col-span-1 md:col-span-2 lg:col-span-4">
              <img
                src="https://picsum.photos/id/237/200/300"
                alt="Avatar"
                className="h-32 w-32 rounded-full object-cover"
              />
              <div className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100">
                <label className="cursor-pointer rounded-full bg-white p-1 hover:bg-gray-200">
                  <FaUpload size="16" className="text-blue-500" />
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <textarea
              placeholder="Bio"
              rows="3"
              className="col-span-4 rounded border p-2"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Password Section */}
      <div className="space-y-6">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-700">
          Change Password
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <input
              type="password"
              placeholder="Current Password"
              className="rounded border p-2"
            />
            <input
              type="password"
              placeholder="New Password"
              className="rounded border p-2"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="rounded border p-2"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default SettingsComponent;
