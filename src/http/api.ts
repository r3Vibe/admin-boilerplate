import api from ".";

export const getSuperAdmin = async () => {
  const admin: { has_user: boolean } = await api.GET("/get-superuser");
  return admin.has_user;
};
