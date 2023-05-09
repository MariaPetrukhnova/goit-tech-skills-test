import css from './Card.module.css';
import logo from '../../images/Logox2.png';
import Btn from "../Btn";
import PropTypes from 'prop-types';


export default function Card({userId, userName, userTweets, userFollowers, userAvatar, updateStatusFunc, isFollowed}) {
  const handleClick = (e) => {
    fetch(`https://6456655a5f9a4f236142e706.mockapi.io/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        name: userName,
        tweets: userTweets,
        followers: userFollowers + (isFollowed ? -1 : 1),
        avatar: userAvatar,
        id: userId,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then(user => {
        updateStatusFunc({ user, status: !isFollowed });
      })
      .catch(error => console.log("ERROR" + error));
  };
  
  return (
    <section className={css.Card} id={userId}>
      <div className={css.CardContent}>
        <img className={css.CardLogo} src={logo} alt='logo' />
          <div className={css.CardAvatarContainer}>
          <img className={css.CardAvatar} src={userAvatar} alt='avatar' />
        </div>
          <div className={css.CardTextContainer}>
          <h2 className={css.CardTitle}>{userName}</h2>
          <p className={css.CardStatsText}><span>{userTweets.toLocaleString("en-US")}</span> tweets</p>
          <p className={css.CardStatsText}><span>{userFollowers.toLocaleString("en-US")}</span> followers</p>
        </div>
        <Btn btnLabel={isFollowed ? 'Following' : 'Follow'} Click={handleClick} btnType={isFollowed} />
      </div>
    </section>
  )
}
 
Card.propTypes = {
    userId: PropTypes.string,
    userName: PropTypes.string,
    userTweets: PropTypes.number,
    userFollowers: PropTypes.number,
    userAvatar: PropTypes.string,
    updateStatusFunc: PropTypes.func,
    isFollowed: PropTypes.bool,
}