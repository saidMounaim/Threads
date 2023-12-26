import SideBar from "../components/SideBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row">
      <SideBar />
      <section className="flex flex-col">{children}</section>
    </main>
  );
}
