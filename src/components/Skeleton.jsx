const Skeleton = () => {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-4 bg-light-cyan rounded w-1/3 mx-auto" />
        <div className="h-6 bg-light-cyan rounded w-2/3 mx-auto" />
        <div className="h-6 bg-light-cyan rounded w-1/2 mx-auto" />
        <div className="h-0.5 bg-light-cyan rounded mx-auto my-6 w-3/4" />
      </div>
    );
  };
  
  export default Skeleton;
  