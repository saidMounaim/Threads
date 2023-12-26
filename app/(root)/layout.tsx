import SideBar from "../components/SideBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row">
      <SideBar />
      <section className="flex flex-col flex-1">{children}</section>
    </main>
  );
}
