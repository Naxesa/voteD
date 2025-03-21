import Thumbnail1 from './assets/flag1.jpg';
import Thumbnail2 from './assets/flag2.jpg';
import Candidate1 from './assets/candidate1.jpg';
import Candidate2 from './assets/candidate2.jpg';
import Candidate3 from './assets/candidate3.jpg';
import Candidate4 from './assets/candidate4.jpg';
import Candidate5 from './assets/candidate5.jpg';
import Candidate6 from './assets/candidate6.jpg';
import Candidate7 from './assets/candidate7.jpg';

export const elections = [
    {
        id: 'el',
        title: "KCA Presidential Elections 2025",
        description: "The KCA Presidential Elections 2025 mark a crucial moment in shaping the future leadership of our institution. This election will determine the next president, who will be responsible for representing the interests of students, driving positive change, and ensuring a progressive and inclusive campus environment. Be part of the decision-making process and cast your vote for the candidate who aligns with your vision for KCA!",
        thumbnail: Thumbnail1,
        candidates: [1, 2, 3, 4], // ✅ Fixed Candidate IDs
        voters: []
    },
    {
        id: 'el2',
        title: "KCA Senate Elections 2025",
        description: "The KCA Senate Elections 2025 aim to elect representatives who will advocate for student needs, influence key policies, and ensure that the voices of the student body are heard. This election is vital for fostering a transparent and accountable governance structure within KCA. Get involved and vote for candidates who will best represent your interests!",
        thumbnail: Thumbnail2,
        candidates: [5, 6], // ✅ Fixed Candidate IDs
        voters: []
    }
];

export const candidates = [
    {
        id: 1,
        fullname: "Bill Nas",
        image: Candidate1, // ✅ Fixed image reference
        motto: "Peoples Power",
        voteCount: 200,
        election: 'el',
    },
    {
        id: 2,
        fullname: "Jane Doe",
        image: Candidate2,
        motto: "For a Better Tomorrow",
        voteCount: 350,
        election: 'el',
    },
    {
        id: 3,
        fullname: "John Smith",
        image: Candidate3,
        motto: "Unity and Progress",
        voteCount: 180,
        election: 'el',
    },
    {
        id: 4,
        fullname: "Alice Johnson",
        image: Candidate4,
        motto: "Hope and Change",
        voteCount: 400,
        election: 'el',
    },
    {
        id: 5,
        fullname: "Michael Brown",
        image: Candidate5,
        motto: "Strength in Leadership",
        voteCount: 250,
        election: 'el2',
    },
    {
        id: 6,
        fullname: "Emily Davis",
        image: Candidate6,
        motto: "Together We Can",
        voteCount: 300,
        election: 'el2',
    },
    {
        id: 7,
        fullname: "Robert Wilson",
        image: Candidate7,
        motto: "Progress for All",
        voteCount: 220,
        election: 'el',
    },
];

export const voters = [
    {
        id: "v1",
        fullname: "Ernest Bill",
        email: "ernestbill000@gmail.com",
        password: "1245A",
        isAdmin: true,
        votedElections: ["el2"]
    },
    {
        id: "v2",
        fullname: "Alice Johnson",
        email: "alicej@example.com",
        password: "A1B2C3",
        isAdmin: false,
        votedElections: ["el"]
    },
    {
        id: "v3",
        fullname: "John Doe",
        email: "johndoe@example.com",
        password: "Doe1234",
        isAdmin: false,
        votedElections: []
    },
    {
        id: "v4",
        fullname: "Sophia Martinez",
        email: "sophia.m@example.com",
        password: "SophiaPass",
        isAdmin: false,
        votedElections: ["el3"]
    },
    {
        id: "v5",
        fullname: "Michael Brown",
        email: "michael.b@example.com",
        password: "MikeyB2024",
        isAdmin: false,
        votedElections: ["el", "el2"]
    },
    {
        id: "v6",
        fullname: "Emily Davis",
        email: "emily.d@example.com",
        password: "EmilySecure",
        isAdmin: false,
        votedElections: []
    },
    {
        id: "v7",
        fullname: "Robert Wilson",
        email: "robertw@example.com",
        password: "RWilson99",
        isAdmin: false,
        votedElections: ["el3"]
    },
    {
        id: "v8",
        fullname: "Linda Carter",
        email: "linda.c@example.com",
        password: "LCarter007",
        isAdmin: true,
        votedElections: ["el", "el3"]
    }
];
