import axios from "axios";

const baseUrl = "https://api.stackexchange.com";
const apiVersion = "2.3";

const API = axios.create({
  baseURL: `${baseUrl}/${apiVersion}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

const APIRoutes = {
  tags: "/tags",
};

export { API, APIRoutes };
