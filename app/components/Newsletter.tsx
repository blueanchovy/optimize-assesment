export default function Newsletter() {
  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Subscribe to our newsletter for the latest articles and updates
      </p>
      <form className="max-w-md mx-auto flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
