export const topAchievers = [
  {
    id: 1,
    name: "Ayesha Khan",
    class: "10-A",
    percentage: 96.5,
    profileImage: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rank: 1,
    subjectTopper: "Mathematics",
  },
  {
    id: 2,
    name: "Zaid Ali",
    class: "10-B",
    percentage: 95.2,
    profileImage: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rank: 2,
    subjectTopper: "Physics",
  },
  {
    id: 3,
    name: "Fatima Noor",
    class: "9-C",
    percentage: 94.8,
    profileImage: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rank: 3,
    subjectTopper: "Biology",
  },
  {
    id: 4,
    name: "Ahmed Raza",
    class: "10-A",
    percentage: 94.1,
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rank: 4,
    subjectTopper: "English",
  },
  {
    id: 5,
    name: "Mehak Tariq",
    class: "9-B",
    percentage: 93.5,
    profileImage: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rank: 5,
    subjectTopper: "Chemistry",
  },
];



const TopAchievers = () => {
  return (
    

<div className=' grid sm:grid-cols-3 grid-cols-2 md:grid-cols-5  items-center'>
    

    {topAchievers.map(student => (
  <div key={student.id} className="bg-white border rounded-lg shadow p-4 flex flex-col items-center gap-4 w-40 mb-2">
    <img
      src={student.profileImage}
      alt={student.name}
      className="w-16 h-16  object-cover "
    />
    <div className='flex flex-col'>
      <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
      <p className="text-sm text-gray-500">Class: {student.class}</p>
      <p className="text-sm text-gray-500">Score: {student.percentage}%</p>
      <span className="inline-block mt-1 px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
        Rank #{student.rank}
      </span>
    </div>
  </div>
))}

</div>

  )
}

export default TopAchievers