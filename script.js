const videoData = [
    {
        id: 1,
        title: "How to Build a Website with HTML and CSS in 2023",
        channel: "Tech Tutorials",
        views: "1.2M views",
        timestamp: "2 weeks ago",
        duration: "15:42",
        thumbnail: "images/thumbnails/computer_science.jpg", 
        channelAvatar: "images/avatars/tech.jpg",
        category: "Computer Science",
    },
    {
        id: 2,
        title: "Learn JavaScript in 1 Hour - Full Beginner's Tutorial",
        channel: "Coding Mastery",
        views: "3.4M views",
        timestamp: "1 month ago",
        duration: "1:02:15",
        thumbnail: "images/thumbnails/computer_science.jpg", 
        channelAvatar: "images/avatars/tech.jpg",
        category: "Computer Science",
    },
    {
        id: 3,
        title: "Top 10 Gaming Moments of 2023",
        channel: "Game Central",
        views: "5.7M views",
        timestamp: "3 days ago",
        duration: "18:24",
        thumbnail: "images/thumbnails/gaming.jpg", 
        channelAvatar: "images/avatars/gaming.jpg", 
        category: "Gaming",
    },
    {
        id: 4,
        title: "Summer Mix 2023 - Best Pop Hits Playlist",
        channel: "Music Wave",
        views: "8.9M views",
        timestamp: "1 week ago",
        duration: "1:45:32",
        thumbnail: "images/thumbnails/music.jpg", 
        channelAvatar: "images/avatars/music.jpg", 
        category: "Music",
    },
    {
        id: 5,
        title: "Easy 15-Minute Pasta Recipe for Beginners",
        channel: "Cooking Delight",
        views: "2.3M views",
        timestamp: "5 days ago",
        duration: "12:48",
        thumbnail: "images/thumbnails/cooking.jpg", 
        channelAvatar: "images/avatars/cooking.jpg", 
        category: "Cooking",
    },
    {
        id: 6,
        title: "React JS Crash Course for Beginners",
        channel: "Web Dev Simplified",
        views: "1.8M views",
        timestamp: "2 months ago",
        duration: "42:17",
        thumbnail: "images/thumbnails/computer_science.jpg", 
        channelAvatar: "images/avatars/tech.jpg", 
        category: "Computer Science",
    },
    {
        id: 7,
        title: "LIVE: International Tech Conference 2023",
        channel: "Tech Today",
        views: "456K watching",
        timestamp: "Streaming now",
        duration: "LIVE",
        thumbnail: "images/thumbnails/live.jpg", 
        channelAvatar: "images/avatars/tech.jpg", 
        category: "Live",
    },
    {
        id: 8,
        title: "The History of Video Games - Documentary",
        channel: "Documentary Hub",
        views: "4.2M views",
        timestamp: "3 months ago",
        duration: "1:28:54",
        thumbnail: "images/thumbnails/gaming.jpg", 
        channelAvatar: "images/avatars/gaming.jpg", 
        category: "Gaming",
    },
    {
        id: 9,
        title: "Piano Tutorial: Learn to Play 'Moonlight Sonata'",
        channel: "Classical Music Tutorials",
        views: "1.5M views",
        timestamp: "4 weeks ago",
        duration: "28:36",
        thumbnail: "images/thumbnails/music.jpg", 
        channelAvatar: "images/avatars/music.jpg", 
        category: "Music",
    },
    {
        id: 10,
        title: "10 Travel Destinations You Must Visit in 2023",
        channel: "Travel Explore",
        views: "3.7M views",
        timestamp: "2 weeks ago",
        duration: "22:15",
        thumbnail: "images/thumbnails/travel.jpg", 
        channelAvatar: "images/avatars/travel.jpg", 
        category: "Travel",
    },
    {
        id: 11,
        title: "Python for Data Science - Complete Course",
        channel: "Data Science Pro",
        views: "2.1M views",
        timestamp: "1 month ago",
        duration: "3:15:42",
        thumbnail: "images/thumbnails/computer_science.jpg", 
        channelAvatar: "images/avatars/tech.jpg", 
        category: "Computer Science",
    },
    {
        id: 12,
        title: "The Weekly Gaming Podcast - Episode 45",
        channel: "Game Talk",
        views: "890K views",
        timestamp: "3 days ago",
        duration: "58:23",
        thumbnail: "images/thumbnails/podcasts.jpg", 
        channelAvatar: "images/avatars/gaming.jpg", 
        category: "Podcasts",
    },
    {
        id: 13,
        title: "Top 50 Pop Songs of 2023 (So Far)",
        channel: "Music Charts",
        views: "6.3M views",
        timestamp: "1 week ago",
        duration: "2:34:18",
        thumbnail: "images/thumbnails/music.jpg", 
        channelAvatar: "images/avatars/music.jpg", 
        category: "Music",
    },
    {
        id: 14,
        title: "Homemade Pizza Recipe - Better Than Takeout",
        channel: "Cooking Mastery",
        views: "1.9M views",
        timestamp: "2 weeks ago",
        duration: "16:42",
        thumbnail: "images/thumbnails/cooking.jpg", 
        channelAvatar: "images/avatars/cooking.jpg", 
        category: "Cooking",
    },
    {
        id: 15,
        title: "LIVE: E-Sports Championship Finals 2023",
        channel: "E-Sports Central",
        views: "1.2M watching",
        timestamp: "Streaming now",
        duration: "LIVE",
        thumbnail: "images/thumbnails/live.jpg", 
        channelAvatar: "images/avatars/gaming.jpg", 
        category: "Live",
    },
    {
        id: 16,
        title: "UI/UX Design Trends for 2023",
        channel: "Design Masters",
        views: "1.1M views",
        timestamp: "3 weeks ago",
        duration: "24:18",
        thumbnail: "images/thumbnails/computer_science.jpg", 
        channelAvatar: "images/avatars/tech.jpg", 
        category: "Computer Science",
    },
    {
        id: 17,
        title: "The Science Behind Good Sleep - Explained",
        channel: "Science Simplified",
        views: "2.8M views",
        timestamp: "1 month ago",
        duration: "19:27",
        thumbnail: "images/thumbnails/science.jpg",
        channelAvatar: "images/avatars/science.jpg", 
        category: "Science",
    },
    {
        id: 18,
        title: "Guitar Lesson: Learn to Play 'Stairway to Heaven'",
        channel: "Guitar Legends",
        views: "4.5M views",
        timestamp: "2 months ago",
        duration: "35:12",
        thumbnail: "images/thumbnails/music.jpg", 
        channelAvatar: "images/avatars/music.jpg", 
        category: "Music",
    },
    {
        id: 19,
        title: "The Future of Artificial Intelligence - Documentary",
        channel: "Future Tech",
        views: "3.2M views",
        timestamp: "3 weeks ago",
        duration: "1:12:45",
        thumbnail: "images/thumbnails/computer_science.jpg", 
        channelAvatar: "images/avatars/tech.jpg", 
        category: "Computer Science",
    },
    {
        id: 20,
        title: "Healthy Breakfast Ideas for Busy Mornings",
        channel: "Healthy Eats",
        views: "1.7M views",
        timestamp: "4 days ago",
        duration: "14:32",
        thumbnail: "images/thumbnails/cooking.jpg", 
        channelAvatar: "images/avatars/cooking.jpg", 
        category: "Cooking",
    },
    {
        id: 21,
        title: "The Tech Podcast - Episode 127: Future of Web Development",
        channel: "Tech Talk",
        views: "950K views",
        timestamp: "5 days ago",
        duration: "1:05:18",
        thumbnail: "images/thumbnails/podcasts.jpg", 
        channelAvatar: "images/avatars/tech.jpg",
        category: "Podcasts",
    },
    {
        id: 22,
        title: "Minecraft: Building a Modern Mansion Tutorial",
        channel: "Minecraft Masters",
        views: "2.6M views",
        timestamp: "1 week ago",
        duration: "45:23",
        thumbnail: "images/thumbnails/gaming.jpg", 
        channelAvatar: "images/avatars/gaming.jpg",
        category: "Gaming",
    },
    {
        id: 23,
        title: "LIVE: Music Festival Highlights 2023",
        channel: "Festival Channel",
        views: "780K watching",
        timestamp: "Streaming now",
        duration: "LIVE",
        thumbnail: "images/thumbnails/live.jpg", 
        channelAvatar: "images/avatars/music.jpg", 
        category: "Live",
    },
    {
        id: 24,
        title: "Advanced CSS Techniques Every Developer Should Know",
        channel: "CSS Wizards",
        views: "1.3M views",
        timestamp: "2 weeks ago",
        duration: "28:47",
        thumbnail: "images/thumbnails/computer_science.jpg",
        channelAvatar: "images/avatars/tech.jpg", 
        category: "Computer Science",
    },
    {
        id: 25,
        title: "The Ultimate Home Workout - No Equipment Needed",
        channel: "Fitness First",
        views: "5.1M views",
        timestamp: "3 weeks ago",
        duration: "32:15",
        thumbnail: "images/thumbnails/fitness.jpg", 
        channelAvatar: "images/avatars/fitness.jpg", 
        category: "Fitness",
    },
    {
        id: 26,
        title: "History of Rock Music - From the 50s to Today",
        channel: "Music History",
        views: "2.4M views",
        timestamp: "1 month ago",
        duration: "1:48:32",
        thumbnail: "images/thumbnails/music.jpg", 
        channelAvatar: "images/avatars/music.jpg", 
        category: "Music",
    },
    {
        id: 27,
        title: "5-Minute Dessert Recipes Anyone Can Make",
        channel: "Sweet Treats",
        views: "3.8M views",
        timestamp: "6 days ago",
        duration: "12:54",
        thumbnail: "images/thumbnails/cooking.jpg", 
        channelAvatar: "images/avatars/cooking.jpg", 
        category: "Cooking",
    },
    {
        id: 28,
        title: "The Psychology of Productivity - How to Get More Done",
        channel: "Mind Matters",
        views: "1.6M views",
        timestamp: "2 weeks ago",
        duration: "22:38",
        thumbnail: "images/thumbnails/education.jpg", 
        channelAvatar: "images/avatars/education.jpg", 
        category: "Education",
    },
    {
        id: 29,
        title: "Node.js Tutorial for Beginners - Build a Server in 10 Minutes",
        channel: "Backend Basics",
        views: "1.9M views",
        timestamp: "3 weeks ago",
        duration: "14:27",
        thumbnail: "images/thumbnails/computer_science.jpg", 
        channelAvatar: "images/avatars/tech.jpg", 
        category: "Computer Science",
    },
    {
        id: 30,
        title: "The Gaming News Roundup - Week 26, 2023",
        channel: "Game News Network",
        views: "720K views",
        timestamp: "2 days ago",
        duration: "18:15",
        thumbnail: "images/thumbnails/gaming.jpg", 
        channelAvatar: "images/avatars/gaming.jpg", 
        category: "Gaming",
    }
];

const videosContainer = document.querySelector('.videos-container');
const searchInput = document.querySelector('#search-input');

function render(videos) {
    videosContainer.innerHTML = ''; 
    for (let video of videos) {
        const videoCard = document.createElement('div');
        const thumbnailBlock = document.createElement('div');
        const thumbnail = document.createElement('img');
        const videoDuration = document.createElement('div');
        const videoInfo = document.createElement('div');
        const channelAvatarBlock = document.createElement('div');
        const channelAvatar = document.createElement('img');
        const videoDetailsBlock = document.createElement('div');
        const videoTitle = document.createElement('h3');
        const channelName = document.createElement('p');
        const videoMetadata = document.createElement('p');

        videoCard.classList.add('video-card');
        thumbnailBlock.classList.add('thumbnail');
        videoDuration.classList.add('video-duration');
        videoInfo.classList.add('video-info');
        channelAvatarBlock.classList.add('channel-avatar');
        videoDetailsBlock.classList.add('video-details');
        videoTitle.classList.add('video-title');
        channelName.classList.add('channel-name');
        videoMetadata.classList.add('video-metadata');

        thumbnail.setAttribute('src', video.thumbnail);
        channelAvatar.setAttribute('src', video.channelAvatar);

    
        thumbnail.onerror = () => {
            console.error(`Ошибка загрузки изображения: ${video.thumbnail}`);
            thumbnail.src = 'https://via.placeholder.com/320x180?text=Thumbnail+Not+Found';
        };
        channelAvatar.onerror = () => {
            console.error(`Ошибка загрузки аватара: ${video.channelAvatar}`);
            channelAvatar.src = 'https://via.placeholder.com/36x36?text=Avatar+Not+Found';
        };

        videoDuration.textContent = video.duration;
        videoTitle.textContent = video.title;
        channelName.textContent = video.channel;
        videoMetadata.textContent = `${video.views} • ${video.timestamp}`;

        thumbnailBlock.append(thumbnail, videoDuration);
        channelAvatarBlock.append(channelAvatar);
        videoDetailsBlock.append(videoTitle, channelName, videoMetadata);
        videoInfo.append(channelAvatarBlock, videoDetailsBlock);
        videoCard.append(thumbnailBlock, videoInfo);

        videosContainer.append(videoCard);
    }
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    const filteredVideos = query
        ? videoData.filter(video => video.title.toLowerCase().includes(query))
        : videoData;
    render(filteredVideos);
});

render(videoData);