const MiniProfile = () => {
  return (
    <div className="ml-10 mt-14 flex items-center justify-between">
      <img
        src="https://s3.narvii.com/image/ibu4hrlvibkm2aqx4ges36l3rjxpdque_hq.jpg"
        alt="user-img"
        className="h-16 w-16 rounded-full border p-[2px]"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">Marlon Morales</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sing Out</button>
    </div>
  )
}

export default MiniProfile
