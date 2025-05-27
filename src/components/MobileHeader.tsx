
const MobileHeader = () => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm px-4 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">WidgetMobile</h1>
        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
          <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;