"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/protected');
            const json = await res.json();
            setData(json);
        };
        fetchData();
    }, []);
    return (
        <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Route Handler Usage</h1>
        <p>
          This page fetches data from an API{" "}
          <Link href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers">
            Route Handler
          </Link>
          . The API is protected using the universal{" "}
          <Link href="https://nextjs.authjs.dev#auth">
            <code>auth()</code>
          </Link>{" "}
          method.
        </p>
        <div className="flex flex-col bg-gray-100 rounded-md">
          <div className="p-4 font-bold bg-gray-200 rounded-t-md">
            Data from API Route
          </div>
          <pre className="py-6 px-4 whitespace-pre-wrap break-all">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    );
}