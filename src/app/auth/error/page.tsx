"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="rounded-lg bg-red-50 p-8">
        <h1 className="mb-4 text-2xl font-bold text-red-800">Authentication Error</h1>
        <p className="text-red-600">Error Type: {error}</p>
        <p className="mt-4 text-gray-600">
          Please try again or contact support if the problem persists.
        </p>
      </div>
    </div>
  );
}

export default function AuthError() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="rounded-lg bg-red-50 p-8">
          <h1 className="mb-4 text-2xl font-bold text-red-800">Loading...</h1>
        </div>
      </div>
    }>
      <ErrorContent />
    </Suspense>
  );
}
