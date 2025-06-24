const useGetUser = () => {
  const User = JSON.parse(window.localStorage.getItem("User")!);
  const Token = window.localStorage.getItem("Token");

  return { User, Token };
};

export default useGetUser;
