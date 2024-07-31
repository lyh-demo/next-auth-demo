import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">NextAuth.js Demo</h1>
      <div className="flex flex-col bg-gray-100 rounded-md">
        <div className="p-4 font-bold bg-gray-200 rounded-t-md">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
