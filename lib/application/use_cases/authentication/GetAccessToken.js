module.exports = async (email, password, { userRepository, accessTokenManager }) => {
  const user = await userRepository.getByEmail(email);

  if (!user) {
    throw new Error('Bad credentials');
  }
  if (!(await user.comparePassword(password))) { return new Error({ error: 'Invalid password' }); }
  const token = await accessTokenManager.generate({ id: user.id });

  return token;
};
