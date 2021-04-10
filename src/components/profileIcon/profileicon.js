import React from "react";
import "./style.scss";
const ProfileIcon = (props) => {
  const { offline = false } = props;
  const [profileIcon, setProfileIcon] = React.useState("");
  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const profileIcon = await require("./../../images/profile.jpg");
    setProfileIcon(profileIcon.default);
  };

  return (
    <div className="profileicon">
      <img src={profileIcon} alt="profileIcon" />
      {offline ? null : <div className="online" />}
    </div>
  );
};

export default ProfileIcon;
