export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="w-[95%] flex flex-col justify-center items-center bg-slate-900 md:w-[540px] rounded-md py-6">
        <h2 className="text-white font-bold text-3xl">Sign in</h2>
        <div className="flex flex-col mt-6">{children}</div>
      </div>
    </div>
  );
}
