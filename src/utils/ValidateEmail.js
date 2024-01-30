export const checkEmail = (email) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!isEmailValid) {
    return "Please enter a valid email!!!";
  }

  return null;
};
