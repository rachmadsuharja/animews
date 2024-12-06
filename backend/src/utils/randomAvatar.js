const randomAvatar = (gender) => {
  let dirname = "";
  switch (gender) {
    case "male":
      dirname = "assets/profile_avatars/male/";
      break;
    case "female":
      dirname = "assets/profile_avatars/female/";
      break;
    default:
      return "assets/profile_avatars/default.jpg";
  }
  const path = dirname + (Math.floor(Math.random() * 6) + 1) + ".jpg";
  return path;
};

module.exports = randomAvatar;
