import { axiosWrapper } from "../../helper/axiosWrapper";

export const getAllTemplates = async (page, limit, isAsc, keyword) => {
  try {
    const response = await axiosWrapper.post(`/api/Template/getall_templates`, {
      page,
      limit,
      isAsc,
      keyword,
      id_catalogue,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
