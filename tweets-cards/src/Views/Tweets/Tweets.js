import { useEffect, useState, useRef, useMemo } from "react";
import apiHandler from "../../services/apiHandler";
import Card from "../../components/Card/Card";
import { Link, useLocation } from "react-router-dom";
import css from './Tweets.module.css'
import Filter from "../../components/Filter";

const LOCALSTORAGE_KEY = 'followings';
const perPage = 3;

const Tweets = () => {
    const [usersArr, setUsersArr] = useState([]);
    let [page, setPage] = useState(null);
    const [followings, setFollowings] = useState([]);
    const [filterValue, setFilterValue] = useState('all');
    const filterResult = useMemo(() => {
        if (filterValue === 'all') {
            return [...usersArr];
        };
        const res = [];
        usersArr.forEach((item) => {
            const statement = filterValue === 'following' ? followings.includes(item.id) : !followings.includes(item.id)
            if (statement) {
                res.push(item);
            }
        });
        return [...res];
    }, [filterValue, followings, usersArr]);
    const pageOutput = useMemo(() => filterResult?.slice(0, (page + 1) * perPage) || [], [filterResult, page]);
    const [changedUser, setChangedUser] = useState({});
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');

    useEffect(() => {
        if (page === null) {
            setPage(page => page = 0);
            apiHandler()
                .then(res => {
                    const followingsStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '[]');
                    setFollowings(followings => followings = [...followingsStorage]);
                    const newUsersArr = res.map(({ id, name, tweets, followers, avatar }) => {
                        return { id, name, tweets, followers, avatar }
                    });
                    setUsersArr(usersArr => usersArr = [...newUsersArr]);
                })
                .catch(error => new Error(`Something goes wrong: ${error}`))
        }
    }, [page, usersArr]);

    useEffect(() => {
        if (Object.keys(changedUser).length) {
            setUsersArr(usersArr => {
                const res = [...usersArr];
                const ind = res.findIndex((item) => item.id === changedUser.id)
                if (ind !== -1) {
                    res[ind] = { ...changedUser }
                }
                return usersArr = [ ...res ]
            })
            setChangedUser(changedUser => changedUser = {})
        }
    }, [changedUser, usersArr])

    useEffect(() => {
        setPage(page => page = 0)
    }, [filterValue])

    const handleLoadMore = (e) => {
        e.preventDefault();
        setPage(page => page += 1)
    };

    function updateStatusData({ user, status }) {
        const res = [...followings];
        if (status) {
            res.push(user.id)
        } else {
            const ind = res.indexOf(user.id)
            res.splice(ind, 1)
        }
        setChangedUser(changedUser => changedUser = { ...user });
        setFollowings(followings => followings = [...res]);
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(res));
    };

    function handleChange(value) {
        console.log(value);
        setFilterValue(filterValue => filterValue = value);    
    };

    return (
        <div className={css.Tweets_container}>
            <div className={css.Tweets_textBox}>
                <Link to={backLink.current} className={css.Tweets_backBtn}>{String.fromCharCode(9664)}Back to home</Link>
                <h2 className={css.Tweets_title}>Tweets cards:</h2> 
                <Filter handleFilter={(value) => handleChange(value)} />
            </div>
            <ul className={css.Tweets_listGrid}>
                {pageOutput && pageOutput.map(({id, name, tweets, followers, avatar}) => (
                    <li key={id} >
                        <Card
                            userId={id}
                            isFollowed={followings.includes(id)}
                            userName={name}
                            userTweets={tweets}
                            userFollowers={followers}
                            userAvatar={avatar}
                            updateStatusFunc={({ user, status }) => updateStatusData({ user, status })}
                        />
                    </li>))}
            </ul>
            {(pageOutput.length-(perPage*page)>=3)&&<button className={css.Tweets_loadmore} onClick={handleLoadMore}>Load more</button>}
        </div>
    )
};

export default Tweets;