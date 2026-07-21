import api from "./api";

export async function uploadDocument(file) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post(
    "/documents/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}

export async function getDocuments() {
  const response = await api.get("/documents");

  return response.data;
}

export async function deleteDocument(id) {
  const response = await api.delete(
    `/documents/${id}`
  );

  return response.data;
}

export async function renameDocument(
  id,
  filename
) {
  const response = await api.patch(
    `/documents/${id}`,
    {
      filename,
    }
  );

  return response.data;
}

export async function togglePin(id) {
  const response = await api.patch(
    `/documents/${id}/pin`
  );

  return response.data;
}