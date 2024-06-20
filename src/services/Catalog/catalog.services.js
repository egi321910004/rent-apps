import { axiosWrapper } from "../../helper/axiosWrapper";

export const getAllCatalogues = async (page, limit, isAsc, keyword) => {
  try {
    const response = await axiosWrapper.post(
      `/api/Catalogue/getall_catalogue`,
      {
        page,
        limit,
        isAsc,
        keyword,
      }
    );

    if (response.status === 200) {
      return response.data; // Assuming the response contains an array of catalogues
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const PostCatalogue = async (catalog_name, catalog_color, interest) => {
  try {
    const response = await axiosWrapper.post(
      `/api/Catalogue/create_catalogue`,
      {
        catalog_name,
        catalog_color,
        interest,
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to create catalogue");
    }
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const DeleteCatalog = async (id) => {
  try {
    const response = await axiosWrapper.delete(
      `/api/Catalogue/delete_catalogue?request=${id}`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to delete catalogue");
    }
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
