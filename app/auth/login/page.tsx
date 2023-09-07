import { LoginForm } from "./form";
import { getServerSession } from "next-auth/next";
import { options } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
export default async function LoginPage() {
  const session = await getServerSession(options);

  if (!session) {
    return (
      <div className="flex mt-1 min-h-screen">
        <div
          className="flex  w-1/2 items-center justify-center bg-cover bg-no-repeat lg:flex"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
          }}
        >
          <div className="space-y-6 px-20 text-center text-white">
            <h1 className="text-4xl font-bold">Buy & Sell</h1>
            <p>AI generated images instantly</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[10vh]items-center justify-center bg-white p-8 lg:w-1/2">
          <div className="font-semibold">
            Sign in to your Google account to Buy and Sell AI generated images
            instantly
          </div>
          <LoginForm />
        </div>
      </div>
    );
  }

  redirect("/");
}
