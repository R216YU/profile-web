const Profile = () => {
  return (
    <div className="flex">
      {/* 左側 */}
      <div className="flex-1">
        <div>image...</div>
        <div>
          <h2 className="font-bold">
            r216yu <span className="font-normal text-xs">Web Developer</span>
          </h2>
          <p>editing...</p>
        </div>
      </div>
      <div className="flex-1">note...</div>
    </div>
  );
};

export default Profile;
