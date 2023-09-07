import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      <aside className="w-52 min-h-screen">
        <Sidebar />
      </aside>

      <main className={`flex-1`}>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
