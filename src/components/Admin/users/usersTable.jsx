import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const UserTable = () => {
  // Dummy data for demonstration
  const users = [
    {
      id: 1,
      name: "Alex Timotius",
      company: "PT OYO Bekasi",
      city: "Bekasi",
      progress: 79,
      created: "Oct 25, 2020",
      avatar:
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?t=st=1718474215~exp=1718477815~hmac=9194b3567a01836e69d481bad7857a5b53b84b1527a583d9cb8abf2ec3799854&w=826",
    },
    {
      id: 2,
      name: "Dwi Rendra",
      company: "Konsultasi Romo Maruya",
      city: "Menteng",
      progress: 67,
      created: "Jan 8, 2020",
      avatar:
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?t=st=1718474215~exp=1718477815~hmac=9194b3567a01836e69d481bad7857a5b53b84b1527a583d9cb8abf2ec3799854&w=826",
    },
    {
      id: 3,
      name: "Imam Subang",
      company: "Karaoke Full Senyum",
      city: "Subang",
      progress: 16,
      created: "Dec 18, 2020",

      avatar:
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?t=st=1718474215~exp=1718477815~hmac=9194b3567a01836e69d481bad7857a5b53b84b1527a583d9cb8abf2ec3799854&w=826",
    },
    {
      id: 4,
      name: "Mr. Broderick Kub",
      company: "Kshlerin, Bauch and Ernser",
      city: "New Kirstenport",
      progress: 71,
      created: "Sep 13, 2020",
      avatar:
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?t=st=1718474215~exp=1718477815~hmac=9194b3567a01836e69d481bad7857a5b53b84b1527a583d9cb8abf2ec3799854&w=826",
    },
    {
      id: 5,
      name: "Barry Weber",
      company: "Schulist, Mosciski and Heidenreich",
      city: "East Violettestad",
      progress: 80,
      created: "Jul 24, 2020",
      avatar:
        "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?t=st=1718474215~exp=1718477815~hmac=9194b3567a01836e69d481bad7857a5b53b84b1527a583d9cb8abf2ec3799854&w=826",
    },
  ];
  const getProgressBarColor = (progress) => {
    return progress <= 50 ? "is-danger" : "is-success";
  };
  return (
    <div className="card-content mt-5">
      <div className="b-table has-pagination">
        <div className="table-wrapper has-mobile-cards">
          <table className="table is-fullwidth is-striped is-hoverable is-sortable is-fullwidth">
            <thead>
              <tr>
                <th></th>
                <th>Nama</th>
                <th>Perusahaan</th>
                <th>Lokasi</th>
                <th>Durasi</th>
                <th>Tanggal Subscribe</th>
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
                  <td data-label="Company">{user.company}</td>
                  <td data-label="City">{user.city}</td>
                  <td data-label="Progress" className="is-progress-cell">
                    <progress
                      className={`progress is-small ${getProgressBarColor(
                        user.progress
                      )}`}
                      max="100"
                      value={user.progress}
                    >
                      {user.progress}
                    </progress>
                  </td>
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
                        <span className="icon">
                          <IoIosInformationCircleOutline />
                        </span>
                      </button>
                      <button
                        className="button is-small is-danger jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span className="icon">
                          <FaRegTrashAlt />
                        </span>
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

export default UserTable;
