import api from ".";

export const getSuperAdmin = async () => {
  const admin = await api.GET("/get-admin");
  return admin;
};
