import userImage from '../Assets/userImage.jpeg';
export const posts: any = [
    {
        id: 0,
        image: userImage,
        username: "John Doe",
        text: " There is no such thing as a perfect person, but someone’s heart can have a perfect intention ",
        likes: '50',
        comments: [
            {
                commentId: 0,
                username:"Bruce Wayne",
                commentText: "This Comment"
            },
            {
                commentId: 1,
                username:"Emiliya Clarke",
                commentText: "This Comment"
            },
        ],
    },
    {
        id: 1,
        image: userImage,
        username: "Bruce Wayne",
        text: " There is no such thing as a perfect person, but someone’s heart can have a perfect intention ",
        likes: '10k',
        comments: [
            {
                commentId: 0,
                username:"Emiliya Clarke",
                commentText: "This Comment"
            },
            {
                commentId: 1,
                username:"John doe",
                commentText: "This Comment"
            }
        ],
    },
   
];