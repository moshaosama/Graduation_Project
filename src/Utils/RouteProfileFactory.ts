const RouteProfileFactory = (Type: string, id: number) => {
  switch (Type) {
    case "Doctor":
      return `/doctors/${id}`;
    case "User":
      return "/profile/info";
    default:
      return "/profile/info";
  }
};

export default RouteProfileFactory;
