type noticeProps = {
    id: number;
    title: string;
    location: string;
    date: string;
    time: string;
    description: string;
    actionLabel: string;
}

const notices: noticeProps[] = [
    {
        id: 1,
        title: "Annual Sports Day",
        location: "School Ground",
        date: "June 20, 2025",
        time: "10:00 AM",
        description: "Students will participate in track and field events. Parents are welcome.",
        actionLabel: "View Full Schedule",
    },
    {
        id: 2,
        title: "Science Exhibition",
        location: "Main Auditorium",
        date: "June 25, 2025",
        time: "9:30 AM",
        description: "Students will present science projects. Judges will award the top 3 teams.",
        actionLabel: "See Projects",
    },
    {
        id: 3,
        title: "Parent-Teacher Meeting",
        location: "Classroom Block A",
        date: "June 22, 2025",
        time: "11:00 AM",
        description: "Discuss student progress and academic planning with class teachers.",
        actionLabel: "More Details",
    },
];


function EventCard() {
    return (
        <div >
            <h1 className='text-2xl font-semibold mt-4 text-gray-700'>Events and Notices</h1>
            {notices.map(notice => (
                <div className="bg-white border rounded-lg shadow p-4 my-2">
                    <h3 className="text-lg font-semibold text-blue-700">{notice.title}</h3>
                    <p className="text-sm text-gray-600">📍 {notice.location}</p>
                    <p className="text-sm text-gray-600">🗓️ {notice.date} - {notice.location}</p>
                    <p className="mt-2 text-gray-700 text-sm">{notice.description}</p>
                    <div className="mt-3 text-sm text-blue-600 hover:underline cursor-pointer">{notice.actionLabel}</div>
                </div>
            ))}
        </div>

    )
}

export default EventCard