const videos = [
  {
    id: 1,
    username: "alex_dev",
    profile: "https://i.pravatar.cc/150?img=12",
    video:
      "https://videos.pexels.com/video-files/9620654/9620654-hd_1080_1920_30fps.mp4",
    bio: "The quiet beauty of nature is everywhere.",
    likes: 1250,
    comments: 85,
    isLiked: false,
    isFollow: true,
  },
  {
    id: 2,
    username: "sarah_fitness",
    profile: "https://i.pravatar.cc/150?img=47",
    video:
      "https://videos.pexels.com/video-files/30474731/13058571_1080_1920_60fps.mp4",
    bio: "A peaceful walk through the wild.",
    likes: 8900,
    comments: 420,
    isLiked: true,
    isFollow: false,
  },
  {
    id: 3,
    username: "travel_with_ryan",
    profile: "https://i.pravatar.cc/150?img=11",
    video:
      "https://videos.pexels.com/video-files/29285421/12630607_1440_2560_60fps.mp4",
    bio: "Every sunrise feels like a fresh beginning.",
    likes: 5400,
    comments: 230,
    isLiked: false,
    isFollow: true,
  },
  {
    id: 4,
    username: "emma_creates",
    profile: "https://i.pravatar.cc/150?img=44",
    video:
      "https://videos.pexels.com/video-files/39608553/16882330_1080_1920_30fps.mp4",
    bio: "Lost in the colors of the forest.",
    likes: 3200,
    comments: 145,
    isLiked: true,
    isFollow: false,
  },
  {
    id: 5,
    username: "tech_with_john",
    profile: "https://i.pravatar.cc/150?img=13",
    video:
      "https://videos.pexels.com/video-files/36974946/15664489_2160_3840_60fps.mp4",
    bio: "Nature always finds a way to surprise us.",
    likes: 7800,
    comments: 310,
    isLiked: true,
    isFollow: false,
  },
  {
    id: 6,
    username: "olivia_dance",
    profile: "https://i.pravatar.cc/150?img=49",
    video:
      "https://videos.pexels.com/video-files/28956194/12527773_2160_3840_30fps.mp4",
    bio: "Breathe in the calm, breathe out the noise.",
    likes: 15000,
    comments: 650,
    isLiked: false,
    isFollow: true,
  },
  {
    id: 7,
    username: "mike_adventure",
    profile: "https://i.pravatar.cc/150?img=14",
    video:
      "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
    bio: "Adventure awaits in every mountain and valley.",
    likes: 4600,
    comments: 190,
    isLiked: false,
    isFollow: false,
  },
  {
    id: 8,
    username: "lisa_foodie",
    profile: "https://i.pravatar.cc/150?img=45",
    video:
      "https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4",
    bio: "Slow mornings and beautiful natural views.",
    likes: 9800,
    comments: 520,
    isLiked: true,
    isFollow: false,
  },
  {
    id: 9,
    username: "david_gamer",
    profile: "https://i.pravatar.cc/150?img=15",
    video:
      "https://videos.pexels.com/video-files/4328514/4328514-uhd_2560_1440_30fps.mp4",
    bio: "Wild places make the best memories.",
    likes: 12000,
    comments: 780,
    isLiked: false,
    isFollow: false,
  },
  {
    id: 10,
    username: "sophia_lifestyle",
    profile: "https://i.pravatar.cc/150?img=48",
    video:
      "https://videos.pexels.com/video-files/10178127/10178127-uhd_2560_1440_30fps.mp4",
    bio: "Find your calm beneath an open sky.",
    likes: 6700,
    comments: 275,
    isLiked: false,
    isFollow: true,
  },
];

function createShorts() {
  let elem = "";
  videos.forEach(function (item) {
    elem += `  <div class="short-main">
       <video
    src="${item.video}"
    autoplay
    muted
    loop
    playsinline
></video>
        <div class="short-heading">
          <img
            src="${item.profile}"
            alt=""
          />
          <p>${item.username}</p>
          <button>${item.isFollow === true ? "Following" : "Follow"}</button>
        </div>
        <div class="bio">
          <p>${item.bio}</p>
        </div>
        <div class="icons">
          <div class="heart">
           ${item.isLiked === true ? ` <i class="ri-heart-3-line"></i>` : ` <i class="ri-heart-3-fill"></i>`}
            <p>${item.likes}</p>
          </div>
          <div class="comment">
            <i class="ri-message-2-line"></i>
            <p>${item.comments}</p>
          </div>
          <div class="share">
            <i class="ri-share-forward-line"></i>
          </div>
        </div>
      </div>`;
  });
  document.querySelector("main").innerHTML = elem;
}

createShorts();
