import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const UserTableNews = () => {
  // Dummy data for demonstration
  const users = [
    {
      id: 1,
      name: "Wedding Template Summer",
      company: "Wedding",
      city: "Rendra",
      progress: 79,
      created: "Jun 15, 2020",
      category: "Wedding",
      avatar:
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?t=st=1718474215~exp=1718477815~hmac=9194b3567a01836e69d481bad7857a5b53b84b1527a583d9cb8abf2ec3799854&w=826",
    },
    {
      id: 2,
      name: "Otomotif For seller",
      company: "Otomotif",
      city: "Alexandro",
      progress: 67,
      created: "Jun 15, 2020",
      category: "Otomotif",
      avatar:
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?t=st=1718474215~exp=1718477815~hmac=9194b3567a01836e69d481bad7857a5b53b84b1527a583d9cb8abf2ec3799854&w=826",
    },
  ];
  const getProgressBarColor = (progress) => {
    return progress <= 50 ? "is-danger" : "is-success";
  };
  return (
    <div className="card-content mt-5 border">
      <div className="b-table has-pagination">
        <div className="table-wrapper has-mobile-cards">
          <table className="table is-fullwidth is-striped is-hoverable is-sortable is-fullwidth">
            <thead>
              <tr>
                <th></th>
                <th>Template</th>
                <th>Catalog</th>
                <th>Created By</th>
                <th>Rilis</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="is-image-cell">
                    <div className="image">
                      <img
                        src={user.avatar}
                        style={{ width: "40px", height: "40px" }}
                        className="is-rounded"
                        alt={`${user.name}'s avatar`}
                      />
                    </div>
                  </td>
                  <td data-label="Name">{user.name}</td>
                  <td data-label="Company">
                    {user.category === "Wedding" ? (
                      <span className="tag is-link is-danger m-1">
                        {user.category}{" "}
                      </span>
                    ) : (
                      <span className="tag is-link is-light m-1">
                        {user.category}{" "}
                      </span>
                    )}
                  </td>
                  <td data-label="City">{user.city}</td>

                  <td data-label="Created">
                    <small
                      className="has-text-grey is-abbr-like"
                      title={user.created}
                    >
                      {user.created}
                    </small>
                  </td>
                  <td className="is-actions-cell">
                    <div className="buttons is-right">
                      <button
                        className="button is-small is-primary"
                        type="button"
                      >
                        Check Template
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTableNews;
