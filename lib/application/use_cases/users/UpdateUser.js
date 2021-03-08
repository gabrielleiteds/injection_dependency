module.exports = async (fields, { userRepository }) => {
  const user = await userRepository.update(fields);

  return user;
};
