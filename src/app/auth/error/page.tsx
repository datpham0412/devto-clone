"use client";

import Link from "next/link";

export default function AuthError() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Authentication Error
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            There was a problem with the authentication process. This could be
            due to:
          </p>
          <ul className="mt-4 list-disc pl-5 text-left text-sm text-gray-600">
            <li>An expired or invalid authentication link</li>
            <li>A previously used authentication link</li>
            <li>A network or server error</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href="/auth/signin"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Return to Sign In
          </Link>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          If you continue to experience issues, please try signing in again or
          contact support.
        </p>
      </div>
    </div>
  );
}
