import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] mt-20 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8 text-gray-600">
        Oops! The page you are looking for does not exist.<br />
        It might have been moved or deleted.
      </p>
      <Link href="/">
        <span className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full border-2 border-white transition-all duration-200 font-bold text-base hover:bg-white hover:border-blue-600 hover:text-blue-600 cursor-pointer">
          Go to Homepage
        </span>
      </Link>
    </div>
  );
} 