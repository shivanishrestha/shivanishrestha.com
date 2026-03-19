export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900">
        Shivani Shrestha
      </h1>
      <div className="mt-6 flex items-center gap-2 text-gray-500">
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
          />
        </svg>
        <p className="text-lg">Under construction</p>
      </div>
    </main>
  );
}
