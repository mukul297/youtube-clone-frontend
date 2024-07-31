import {VideoCard} from "@/components/VideoCard"

const VIDEOS = [{
    title : "How to learn coding in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn diving in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn driving in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn boating in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn coding in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn diving in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn driving in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn boating in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
}, 
{
    title : "How to learn coding in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn diving in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn driving in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn boating in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn coding in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn diving in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn driving in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
},
{
    title : "How to learn boating in 30 days | 30 days plan | Code with me",
    image : "thumbnail.jpg",
    thumbImage : "vsp7 football.jpg", 
    author : "Mukul Sharma",
    views : "2.1 Mn",
    timestamp : "2 days ago"
}
]
export function VideoGrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {VIDEOS.map(video => <div>
            <VideoCard
            title = {video.title}
            image = {video.image}
            thumbImage = {video.thumbImage}
            author = {video.author}
            views = {video.views}
            timestamp = {video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}