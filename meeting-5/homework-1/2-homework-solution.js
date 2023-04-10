console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function displayError(errorMessage) {
    console.error(new Error(errorMessage));
  }

function loginUser(email,password,callback,error){
 if(Object.keys(usersDB).includes(email)){   
    setTimeout(()=>{
console.log("Now we have the data of user:", email);
callback({userEmail: email})
    }, 3000)}
    else {
        setTimeout(() => {
          error("User not found!");
        }, 3000);
}
}

function getUserVideos(email,callback,error){
    if(usersDB[email].length){
    setTimeout(()=>{
callback(usersDB[email])
    }, 2000)}else{
        setTimeout(() => {
            error("Videos not found!");
          }, 2000);
    }
}

function videoDetails(video,callback,error){
    if(video.title){
setTimeout(()=>{
callback(video.title)
}, 2000)
}else{
    setTimeout(() => {
        error("Video Title not found!");
      }, 2000);
}
}

const getPassedUsersFirstVideoTitle = (user) => 
loginUser(user,1234,
    (user)=>{
    console.log("user:", user);
getUserVideos(user.userEmail,
    (videos)=>{
  console.log('videos:', videos); 
videoDetails(videos[0],
    (title)=>{
    console.log("title:", title);
  },
(error)=>displayError(error))     
},
(error) => displayError(error))
},
(error) => displayError(error))


//test1
getPassedUsersFirstVideoTitle("user4@hw.js");  
//test2
getPassedUsersFirstVideoTitle("user3@hw.js");
//test3
getPassedUsersFirstVideoTitle("user2@hw.js");
//test4
getPassedUsersFirstVideoTitle("user1@hw.js");