import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <div className="bg-[#1E293B] text-[#E2E8F0] w-52 px-6 py-3 fixed h-full">
      <div className="text-[#64748B] mt-12 mb-5 ml-2">PAGES</div>
      <ul>
        <li
          className={`${
            path === '/'
              ? 'flex items-center bg-[#0F172A] px-3 py-2 rounded'
              : 'flex items-center px-3 py-2 rounded'
          } cursor-pointer`}
          onClick={() => router.push('/')}
        >
          <p>List Users</p>
        </li>
        <li
          className={`${
            path === '/add-user'
              ? 'flex items-center bg-[#0F172A] px-3 py-2 rounded'
              : 'flex items-center px-3 py-2 rounded'
          } cursor-pointer`}
          onClick={() => router.push('/add-user')}
        >
          <p>Add User</p>
        </li>
      </ul>
    </div>
  );
}
