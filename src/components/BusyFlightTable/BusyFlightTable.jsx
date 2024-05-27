import { busyRoutesData } from "../blogs/BlogsJson";

export const FlightTable = () => {
  return (
    <div className="overflow-x-auto my-10">
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">S.No.</th>
            <th className="border border-gray-400 px-4 py-2">Route</th>
            <th className="border border-gray-400 px-4 py-2">Route Name</th>
            <th className="border border-gray-400 px-4 py-2">Seats</th>
          </tr>
        </thead>
        <tbody>
          {busyRoutesData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">{item.route}</td>
              <td className="border border-gray-400 px-4 py-2">
                {item.routeName}
              </td>
              <td className="border border-gray-400 px-4 py-2">{item.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightTable;
