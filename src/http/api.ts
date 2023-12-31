import api from ".";

export const getSuperAdmin = async () => {
  const admin: { data: { has_user: boolean } } = await api.GET(
    "/get-superuser"
  );
  return admin.data.has_user;
};
