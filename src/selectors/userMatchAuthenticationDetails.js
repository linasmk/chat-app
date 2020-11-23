/* =================================================
=========== USER MATCH AUTHENTICATION DETAILS =======
======================================================
== This selector checks whether authentication.reducer ==
== details matches with user details before populating ==
== the profile page =======================================
================================================= */
export default ({ loggenInEmail, loggedInPassword }, users) => {
  return users.filter(
    (user) => user.email === loggenInEmail && user.password === loggedInPassword
  );
};
