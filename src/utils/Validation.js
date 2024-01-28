export const checkData = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  if (!isEmailValid) {
    return "Please enter a valid email address!!!";
  }
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid) {
    return "Please enter a valid password!!!";
  }
  return null;
};
