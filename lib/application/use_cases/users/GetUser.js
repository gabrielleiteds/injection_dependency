module.exports = async (email, { userRepository }) => {
  const user = await userRepository.getByEmail(email);

  return user;
};
