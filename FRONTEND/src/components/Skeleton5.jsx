function Skeleton5() {
  return (
    <div className="flex  flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-4 w-full bg-main-color"></div>
          <div className="skeleton h-4 w-1/4 bg-main-color"></div>
          <div className="skeleton h-4 w-2/4 bg-main-color"></div>
          <div className="skeleton h-4 w-3/4 bg-main-color"></div>
          <div className="skeleton h-4 w-1/4 bg-main-color"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton5;
