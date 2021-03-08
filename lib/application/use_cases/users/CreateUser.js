module.exports = async (name, email, password, photo, { userRepository }) => {
  const user = {
    name,
    email,
    password,
    photo,
  };

  return userRepository.create(user);
};
