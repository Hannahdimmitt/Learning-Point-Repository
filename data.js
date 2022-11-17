var defaultThreads = [
    {
        id: 1,
        title: "Skills Development",
        author: "User",
        date: Date.now(),
        content: "Skills Dev content",
        comments: [
            {
                author: "Monika",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Dr.Strange",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Get Hired!",
        author: "User",
        date: Date.now(),
        content: "Get hired content",
        comments: [
            {
                author: "Student",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Recruiter",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 3,
        title: "Share with your peers!",
        author: "User",
        date: Date.now(),
        content: "Share with peers content",
        comments: [
            {
                author: "You",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Peer",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('Networking_DiscussionThreads')) {
    threads = JSON.parse(localStorage.getItem('Networking_DiscussionThreads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('Networking_DiscussionThreads', JSON.stringify(defaultThreads));
}