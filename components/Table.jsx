export default function Table({ items, columns, rows }) {
  return (
    <>
      <div className="w-full border-t border-[#F1F5F9]" />
      <div className="p-5">
        <table className="table-auto w-full text-left">
          <thead className="bg-[#F8FAFC] text-[#9CA3AF]">
            <tr>
              {columns.map((i, idx) => (
                <th className="px-5 py-8 font-normal" key={idx}>
                  {i}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{items?.map(rows)}</tbody>
        </table>
      </div>
    </>
  );
}
