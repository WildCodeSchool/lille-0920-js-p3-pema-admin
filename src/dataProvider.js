import { fetchUtils } from "react-admin";

const apiUrl = "http://localhost:3001";
const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {
    const url = `${apiUrl}/${resource}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: json.length,
    }));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: { ...params.data, id: { json }.id },
    })),

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: { json }.id },
    })),

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: { ...params.data }, id: { json }.id })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: { ...params.data }, id: { json }.id })),
};
