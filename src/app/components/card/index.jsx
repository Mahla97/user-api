import Link from "next/link";

const Card = ({ user }) => {

  return (
    <>
      <tr>

        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>
          <Link href={`/users/${user.id}`} legacyBehavior>
            <a className="btn btn-primary btn-sm">More Details</a>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Card;

