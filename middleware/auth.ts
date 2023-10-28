export default defineNuxtRouteMiddleware(async () => {
  const { auth } = await checkAuth();
  console.log({ auth });
  if (!auth) {
    return navigateTo("/login");
  }
});

async function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.resolve(false);
  const isAuth = JSON.parse(token);
  console.log({ isAuth, token });
  return Promise.resolve(isAuth);
}
