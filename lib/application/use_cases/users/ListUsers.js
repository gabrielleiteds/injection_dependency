module.exports = async ({ userRepository }) => {
  const users = await userRepository.find();

  return users;
};
