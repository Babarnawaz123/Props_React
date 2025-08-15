import styles from "./UserProfile.module.css"; // Import CSS module as 'styles'
import profileImg from "./assets/profile.jpg";

function UserProfileComponent() {
  return (
    <div className={styles.userProfile}>
      <h2 className={styles.heading}>User Profile</h2>
      <div>
        <img
          src={profileImg}
          alt="User Profile"
          className={styles["profile-img"]}
        />
      </div>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <div>
        <h3 className={styles.bio}>Bio</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}
export default UserProfileComponent;
