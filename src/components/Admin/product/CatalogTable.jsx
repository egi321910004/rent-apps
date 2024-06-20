import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
  DeleteCatalog,
  getAllCatalogues,
} from "../../../services/Catalog/catalog.services";

const KatalogTab = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCatalogues();
  }, []);

  const fetchCatalogues = async () => {
    try {
      const data = await getAllCatalogues(1, 10, true, "");
      setData(data.data);
    } catch (error) {
      console.error("Error fetching catalogues:", error);
    }
  };

  const getProgressBarColor = (progress) => {
    return progress <= 50 ? "is-danger" : "is-success";
  };

  const handleDelete = async (id) => {
    try {
      await DeleteCatalog(id);
      fetchCatalogues();
    } catch (error) {
      console.error("Error deleting catalogue:", error);
    }
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
                <th>Interest</th>
                <th>Tanggal Dibuat</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td data-label="Name">{user.catalog_name}</td>
                  <td data-label="Progress" className="is-progress-cell">
                    <progress
                      className={`progress is-small mt-2 ${getProgressBarColor(
                        user.progress
                      )}`}
                      max="100"
                      value={user.interest}
                    >
                      {user.interest}
                    </progress>
                  </td>
                  <td data-label="Created">
                    <small
                      className="has-text-grey is-abbr-like"
                      title={user.created_by}
                    >
                      {user.created_by}
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
                        onClick={() => handleDelete(user.id)}
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

export default KatalogTab;
