import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./userReducer";
function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <div>
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between gap-10">
        <h1 className="text-3xl py-6">React Crud App with Redux</h1>
        <Link to={"/create"} className="btn btn-primary">
          Create +
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table max-w-6xl w-full mx-auto">
          <thead>
            <tr className="text-black text-2xl text-center bold">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr className="hover" key={index}>
                  <th className="text-[17px] text-center border-y-2">
                    {user.id}
                  </th>
                  <td className="text-[17px] text-center border-y-2">
                    {user.name}
                  </td>
                  <td className="text-[17px] text-center border-y-2">
                    {user.email}
                  </td>
                  <td className="text-center border-y-2">
                    <Link
                      to={`/update/${user.id}`}
                      className="btn btn-primary mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="btn btn-error text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
