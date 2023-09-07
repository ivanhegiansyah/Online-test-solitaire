import { useState, useEffect } from 'react';
import { getUsers } from '../service/user';
import Layout from '../components/Layout';
import Table from '../components/Table';

export default function Index() {
  const [data, setData] = useState();

  useEffect(() => {
    getUsers()
      .then((res) => setData(res?.data))
      .catch((e) => console.log(e));
  }, []);

  const columns = ['ID', 'Email', 'Firstname', 'Lastname', 'Avatar'];

  const rows = (i, idx) => {
    return (
      <tr className="border-b-2 border-[#F1F5F9]" key={idx}>
        <td className="p-5">{i?.id}</td>
        <td className="p-5">{i?.email}</td>
        <td className="p-5">{i?.first_name}</td>
        <td className="p-5">{i?.last_name}</td>

        <td className="p-5">
          <img alt="" className="rounded-full w-20 mr-4" src={i?.avatar} />
        </td>
      </tr>
    );
  };

  return (
    <Layout>
      <div className="bg-white">
        <div className="flex justify-between items-center  px-5 py-10">
          <h6 className="font-semibold text-xl">List Users</h6>
        </div>
        <Table
          columns={columns}
          isProduct={true}
          items={data?.data}
          rows={rows}
        />
      </div>
    </Layout>
  );
}
