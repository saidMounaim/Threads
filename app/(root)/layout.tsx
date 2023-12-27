import SideBar from "../components/SideBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row overflow-hidden">
      <SideBar />
      <section className="flex flex-col flex-1 h-[100vh] overflow-y-scroll">
        {children}
      </section>
    </main>
  );
}
