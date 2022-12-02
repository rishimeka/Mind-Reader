export let userData = {
    user1:{
        userid: 0,
        fullName: "Rishi Meka",
        email: "rishi@gmail.com",
        password: "validPassword@1",
        events: [

        ],
        goals: [
            "Pay all bills on time",
            "Complete home project",
            "Paint room",
            "Workout Everyday"
        ],
    },
    user2:{
        userid: 1,
        fullName: "Namrata Veeramalla",
        email: "namratav@gmail.com",
        password: "validPassword@2",
        events: [

        ],
        goals: [
            "Finish Project Presentation",
            "Work on OS Project Code",
        ],
    },
    user3:{
        userid: 2,
        fullName: "Robert Dohm",
        email: "robert@gmail.com",
        password: "validPassword@3",
        events: [

        ],
        goals: [
            "Pay all bills on time",
            "Complete home project",
            "Paint room",
            "Workout Everyday",
            "Read 100 Pages",
            "Finish Unix Assignment",
            "Prepare for Interview",
        ],
    },
    user4:{
        userid: 3,
        fullName: "Daniel Agu",
        email: "Daniel@gmail.com",
        password: "validPassword@4",
        events: [

        ],
        goals: [

        ],
    }
}
export function getNumUsers(){
    let numUsers = 0;
    for(let user in userData){
        numUsers++;
    }
    return numUsers;
}
export function checkUsername_password(userName, password){
    for(const user in userData){
        let currUser = userData[user];
        if(currUser.email == userName){
            if(currUser.password == password){
                return currUser.userid;
            }
        }
    }
    return -1;
}
export function addToUserData(user){
    userData[user.userid] = user;
}
export function getGoals(userId){
    for(const user in userData){
        let currUser = userData[user];
        if(currUser.userid == userId){
            return currUser.goals;
        }
    }
}
