import React, { Fragment, useState } from "react";

const Profile = ({
  profile,
  editProfile,
  sendAuthentication,
  setDisappearingMessage,
}) => {
  const profileID = profile.map((user) => user.id).toString();
  const [userName, setUserName] = useState(
    profile.map((user) => user.name).toString()
  );
  const [userEmail, setUserEmail] = useState(
    profile.map((user) => user.email).toString()
  );
  const [userPassword, setUserPassword] = useState(
    profile.map((user) => user.password).toString()
  );
  const [isDisappearing, setToDisappear] = useState(false);

  const [editMode, setEditMode] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleChackbox = () => {
    setToDisappear(!isDisappearing);

    setDisappearingMessage(!isDisappearing);
  };
  const openEditMode = () => {};

  const closeEditMode = () => {
    setEditMode(false);
    sendAuthentication(true, userEmail, userPassword);
    editProfile(profileID, userName, userEmail, userPassword);
  };
  const handleNameChange = (e) => {
    setUserName(e.target.textContent.trim());
  };
  const handleEmailChange = (e) => {
    setUserEmail(e.target.textContent.trim());
  };
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.textContent.trim());
  };
  return (
    <article className="profile">
      <h2 className="profile__heading">User Profile</h2>
      <section className="profile__info">
        {profile.map((user) => (
          <Fragment key={user.id}>
            <fieldset className="profile__fieldset">
              <legend className="profile__legend">Name</legend>
              <div className="profile__text-box">
                <p
                  contentEditable={editMode.name}
                  suppressContentEditableWarning
                  onBlur={handleNameChange}
                  className="profile__text">
                  {user.name}
                </p>
                {editMode.name ? (
                  <button
                    type="button"
                    onClick={closeEditMode}
                    className="profile__btn-edit">
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => openEditMode(setEditMode({ name: true }))}
                    className="profile__btn-edit">
                    Edit
                  </button>
                )}
              </div>
            </fieldset>
            <fieldset className="profile__fieldset">
              <legend className="profile__legend">Email</legend>
              <div className="profile__text-box">
                <p
                  contentEditable={editMode.email}
                  suppressContentEditableWarning
                  onBlur={handleEmailChange}
                  className="profile__text">
                  {user.email}
                </p>

                {editMode.email ? (
                  <button
                    type="button"
                    onClick={closeEditMode}
                    className="profile__btn-edit">
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => openEditMode(setEditMode({ email: true }))}
                    className="profile__btn-edit">
                    Edit
                  </button>
                )}
              </div>
            </fieldset>
            <fieldset className="profile__fieldset">
              <legend className="profile__legend">Password</legend>
              <div className="profile__text-box">
                <p
                  contentEditable={editMode.password}
                  suppressContentEditableWarning
                  onBlur={handlePasswordChange}
                  className="profile__text">
                  {user.password}
                </p>
                {editMode.password ? (
                  <button
                    type="button"
                    onClick={closeEditMode}
                    className="profile__btn-edit">
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      openEditMode(setEditMode({ password: true }))
                    }
                    className="profile__btn-edit">
                    Edit
                  </button>
                )}
              </div>
            </fieldset>
            <fieldset className="profile__fieldset">
              <legend className="profile__legend">Settings</legend>
              <div className="profile__text-box">
                <input
                  className="profile__checkbox"
                  type="checkbox"
                  checked={isDisappearing}
                  onChange={handleChackbox}
                />
                <p className="profile__text">
                  Set all messages to disappear after 10 seconds
                </p>
              </div>
            </fieldset>
          </Fragment>
        ))}
      </section>
    </article>
  );
};

export default Profile;
