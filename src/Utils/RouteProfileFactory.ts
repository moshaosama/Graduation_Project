const RouteProfileFactory = (Type: string) => {
  switch (Type) {
    case "Doctor":
      return "/profile-doctor";
    case "User":
      return "/profile/info";
    default:
      return "/profile/info";
  }
};

export default RouteProfileFactory;
