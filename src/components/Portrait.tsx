function Portrait() {
  return (
    <div
      className="avatar tooltip text-2xl tooltip-left tooltip-primary "
      data-tip="👋"
    >
      <div className="tooltip-content duration-500 ">
        <div className="text-2xl rounded-full">😊</div>
      </div>
      <div className=" z-9 w-50 md:w-75 hover:w-85 mb-7 md:mb-10 rounded-full ring-primary ring-4 shadow-lg hover:shadow-accent hover:shadow-2xl hover:rotate-6 transition-all duration-500">
        <img src="/profile.jpeg" />
      </div>
    </div>
  );
}

export default Portrait;
