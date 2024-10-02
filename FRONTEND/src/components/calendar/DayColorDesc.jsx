function DayColorDesc() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-3 flex-wrap border-y-2">
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-red-500 rounded-full w-3 h-3 "></div>
        <div className="text-red-500  text-nowrap w-full">urlop na żądanie</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-main-color rounded-full w-3 h-3 "></div>
        <div className="text-main-color  text-nowrap w-full">urlop na wypoczynkowy</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-orange-500 rounded-full w-3 h-3 "></div>
        <div className="text-orange-500  text-nowrap w-full">urlop okolicznościowy</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-green-500 rounded-full w-3 h-3 "></div>
        <div className="text-green-500 text-nowrap w-full">opieka nad dzieckiem</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-pink-500 rounded-full w-3 h-3 "></div>
        <div className="text-pink-500 text-nowrap w-full">zwolnienie lekarskie</div>
      </div>
    </div>
  );
}

export default DayColorDesc;
