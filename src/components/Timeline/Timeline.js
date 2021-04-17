import React, { useState } from 'react'
import './style.css'

const Timeline = () => {
  const [img, setImg] = useState(null);

  const handleImgInput = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  }

  const posts = [
    {
      profileImg: "https://avatarfiles.alphacoders.com/445/44543.jpg",
      userName: "Tal Erdem",
      nickName: "talErdem",
      time: "10h",
      content: "Deneme Tweet 2",
      img: "https://www.denofgeek.com/wp-content/uploads/2020/09/South-Park-Season-24-Release-Date-Pandemic-Special.jpg?resize=768%2C432"
    },
    {
      profileImg: "https://avatarfiles.alphacoders.com/128/128984.png",
      userName: "Erdem Tal",
      nickName: "erdemtal",
      time: "1h",
      content: 'Lorem ipsum dolor sit amet, non varius ex porttitor. Ut vehicula egestas feugiat. Nullam eget dolor id diam auctor tincidunt. In sit amet mi cursus, mollis libero vel, volutpat tellus. Proin eu semper risus, ac iaculis risus.',
      img: "https://cdn.kayiprihtim.com/wp-content/uploads/2020/04/rick-and-morty-4-sezon-2-kisim-tarih-768x408.jpg"
    },
    {
      profileImg: "https://avatarfiles.alphacoders.com/445/44543.jpg",
      userName: "Tal Erdem",
      nickName: "talErdem",
      time: "10h",
      content: "Deneme Tweet 2",
      img: "https://www.denofgeek.com/wp-content/uploads/2020/09/South-Park-Season-24-Release-Date-Pandemic-Special.jpg?resize=768%2C432"
    },
  ]

    return (
        <div className="timeline">

            <div className="lastest-tweets">
                Latest Tweets
                <i class="bi bi-stars"></i>
            </div>

            <div className="createPost">

              <div className="photo-n-input">
                <i className="bi bi-person-circle"></i>
                <input className="post-input" placeholder="What's happening?" />
              </div>

              <div className="icons-tweet">
                <div className="icons">
                  <input id="img-input" type="file" hidden onChange={(e) => handleImgInput(e)} />
                  <label for="img-input" class="bi bi-image"></label>
                  <div className="gif">GIF</div>
                  <i class="bi bi-bar-chart-line"></i>
                  <i class="bi bi-emoji-smile"></i>
                </div>
                <button onClick={ () => console.log('calisti') } className="tweet">Tweet</button>
              </div>

            </div>

            <div className="posts">
                { posts.slice(0).reverse().map(post => (
                  <div className="post">
                    {post.profileImg ? <img className="profile-img" src={post.profileImg} /> : <i className="bi bi-person-circle"></i>}
                    <div className="cont-userInfo">
                        <div className="content-wrap">
                          <div className="userName">{ post.userName }</div>
                          <div className="nickname">@{ post.nickName }</div>
                          <div className="dot">·</div>
                          <div className="time">{ post.time }</div>
                        </div>
                        <div className="post-content">{ post.content }</div>
                    </div>
                      
                    { post.img ? (<img className="postImg" src={post.img} />) : null }
                  </div>
                )) }
            </div>
        </div>
    )
}

export default Timeline;
