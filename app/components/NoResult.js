function NoResult({ setResetFilter }) {
  return (
    <div className="w-full min-h-[50vh] grid place-items-center gap-4">
      <div className="text-center space-y-6">
        <img
          src="/images/no-results.png"
          alt="no-results"
          className="w-[100px] mx-auto"
        />
        <div className="text-center space-y-2">
          <p className="text-lg font-medium text-gray-700">
            Sorry, We could not find any matching results.
          </p>
          <button
            onClick={() => setResetFilter(true)}
            className="px-3 py-1 flex items-center gap-1 mx-auto text-base bg-white rounded-md shadow-sm font-semibold text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoResult;
