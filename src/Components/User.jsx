const User = ({ user }) => {
  //console.log(user);
  const {
    name,
    company,
    username,
    phone,
    address,
    state,
    country,
    email,
    zip,
    id,
    photo,
  } = user;

  const userName = str => {
    const arr = str.split(' ');
    return `${arr[0]} ${arr[1]}`;
  };
  //console.log(userName(name));

  // All label-value pairs in an array
  const userInfos = [
    { label: 'Company', value: company },
    { label: 'Email', value: email },
    { label: 'Username', value: username },
    { label: 'Phone', value: phone },
    { label: 'Address', value: `${address}, ${state}, ${country}` },
    { label: 'Zip', value: zip },
  ];

  return (
    <div className="text-center">
      <h2 className="title">Profile : {id}</h2>
      <div className="user">
        <div className="flex justify-center gap-8 items-center">
          <div className="w-24 h-24 rounded-full border-2 border-red-200 overflow-hidden">
            <img src={photo} alt="" className="w-full h-full object-cover" />
          </div>

          <h2 className="title user-text">{userName(name)}</h2>
        </div>
        <>
          {userInfos.map((userInfo, index) => {
            return (
              <div key={index} className="user-info">
                <p className="details">{userInfo.label}</p>
                <p className="dot">:</p>
                <p className="user-text">{userInfo.value}</p>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default User;
