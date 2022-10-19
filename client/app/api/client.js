import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://172.17.4.50:4090",
});

export default apiClient;
