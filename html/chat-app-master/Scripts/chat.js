var currentUserKey = ''; //Global variable.
var chatKey = '';

function startChat(friendKey, friendName, friendPhoto){
    var friendList = {friendId: friendKey, userId: currentUserKey};


    var db = firebase.database().ref('friend_list');
    var flag = false;
    db.on('value', function(friends){
        friends.forEach(function(data){
            var user = data.val();
            if((user.friendId === friendList.friendId && user.userId === friendList.userId) || (user.friendId === friendList.userId && user.userId === friendList.friendId)){
                flag = true;
                chatKey = data.key;
            }
        });
        if(flag === false){
            chatKey =   firebase.database().ref('friend_list').push(friendList, function(error){
                if(error) alert(error);
                else{
                    document.getElementById('chatPannel').removeAttribute('style');
                    document.getElementById('divStart').setAttribute('style','display:none');
                    hideChatList();
                    // to get focus on input field when clicking on friends icon.
                    document.getElementById('txtMessage').focus();
                }
            }).getKey();
        }
        else{
            document.getElementById('chatPannel').removeAttribute('style');
            document.getElementById('divStart').setAttribute('style','display:none');
            hideChatList();
            // to get focus on input field when clicking on friends icon.
            document.getElementById('txtMessage').focus();
        }
        //------------- displaying friend's name and image.------------
        document.getElementById('divChatName').innerHTML = friendName;
        document.getElementById('imgChat').src = friendPhoto;
        document.getElementById('divChatSeen').innerHTML = new Date().toLocaleString();

        document.getElementById('messages').innerHTML = '';

        onKeyDown();
        document.getElementById('txtMessage').focus();
        document.getElementById('txtMessage').value = '';
    //--------- Display chat messages

        loadChatMessages(chatKey,friendPhoto);

    });
}
function loadChatMessages(chatKey, friendPhoto){
    var db = firebase.database().ref('chatMessages').child(chatKey);
    db.on('value', function(chats){
        var messageDisplay = '';
        chats.forEach(function(data){
        var chat = data.val();
        var dateTime = chat.dateTime.split(',') ;
        if(chat.userId !== currentUserKey){
        messageDisplay += ` <div class="row">
                            <div class="col-2 col-sm-1 col-md-1">
                                <img class="chat-pic rounded-circle" src="${friendPhoto}" alt="image">
                            </div>
                            <div class="col-6 col-sm-6 col-md-6">
                                <p class="receive"> ${chat.msg}
                                <span class="time" title="${dateTime[0]}">${dateTime[1]}</span>
                            </p>
                            </div>
                        </div>`;
        }
        else{
            messageDisplay += `<div class="row justify-content-end">                  
            <div class="col-6 col-sm-6 col-md-6">
                <p class="sent float-right"> ${chat.msg}
                <span class="time float-right" title="${dateTime[0]}">${dateTime[1]}  </span>
            </p>
            </div>
            <div class="col-2 col-sm-1 col-md-1">
                <img class="chat-pic rounded-circle" src="${firebase.auth().currentUser.photoURL}" alt="image">
            </div>
        </div>`;
        }
        });
        document.getElementById('messages').innerHTML = messageDisplay;
        document.getElementById('messages').scrollTo(0, document.getElementById('messages').clientHeight);
    });
}

function showChatList(){
    document.getElementById('side-1').classList.remove('d-none', 'd-md-block');
    document.getElementById('side-2').classList.add('d-none');
}

function hideChatList(){
    document.getElementById('side-1').classList.add('d-none', 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}
// sending message
function onKeyDown(){
    document.addEventListener('keydown', function(event){
        if(event.key === "Enter"){
            sendMessage(); 
            //console.log('enter');  
        }
    });
}

function sendMessage(){
    // var date = new Date();
    // var hour = date.getHours();
    // var minutes = date.getMinutes();
    // var time = hour + ':' + minutes;
    //${document.getElementsByClassName('time').innerHTML = time}
    var chatMessage = {
        userId: currentUserKey,
        msg: document.getElementById('txtMessage').value,
        dateTime: new Date().toLocaleString()
    };
    //console.log(chatMessage);
    firebase.database().ref('chatMessages').child(chatKey).push(chatMessage, function(error){
        if(error) {alert(error);
        }
        else{
//             var message = `<div class="row justify-content-end">                  
//     <div class="col-6 col-sm-6 col-md-6">
//         <p class="sent float-right"> ${document.getElementById('txtMessage').value}
//         <span class="time"> ${document.getElementsByClassName('time').innerHTML = chatMessage.dateTime} </span>
//     </p>
//     </div>
//     <div class="col-2 col-sm-1 col-md-1">
//         <img class="chat-pic rounded-circle" src="${firebase.auth().currentUser.photoURL}" alt="image">
//     </div>
// </div>`;

//     document.getElementById('messages').innerHTML += message;
     document.getElementById('txtMessage').value = '';
     document.getElementById('txtMessage').focus();
//     document.getElementById('messages').scrollTo(0, document.getElementById('messages').clientHeight);
        }
    });  
    
}
///////////////////////////////////////////////////////////

function loadChatList(){
    var db = firebase.database().ref('friend_list');
    db.on('value', function(lists){
        document.getElementById('lstChat').innerHTML=`<li class="list-group-item" style="background-color: #f8f8f8;">
        <input type="text" placeholder="search or new chat" class="form-control form-rounded">
    </li>`;
        lists.forEach(function(data){
            var lst = data.val();
            var friendKey = '';
            if(lst.friendId === currentUserKey){
                friendKey = lst.userId;
            }
            else if(lst.userId === currentUserKey){
                friendKey = lst.friendId;
            }
           // if(friendKey !== '' && friendKey !== 1){
                firebase.database().ref('users').child(friendKey).on('value', function(data){
                    var user = data.val();
                    document.getElementById('lstChat').innerHTML += `<li class="list-group-item list-group-item-action" onclick="startChat('${data.key}','${user.name}','${user.photoURL}')">
                    <div class="row">
                        <div class="col-md-2">
                            <img src="${user.photoURL}" alt="image" class="friend-pic rounded-circle">
                        </div>
                        <div class="col-md-10" style="cursor: pointer;">
                            <div class="${user.name}">Any name</div>
                            <div class="under-name">This is some message text...</div>
                        </div>
                    </div>
                </li>`;
                });    
           // }
            
        });
    });
}

function populateFriendList(){
    document.getElementById('lstFriend').innerHTML =`<div class="text-center">
                                                     <span class="spinner-border text-primary mt-5" style="width:7rem; height:7rem">
                                                    </div>`;                                          
    var db = firebase.database().ref('users');
    var lst = '';
    db.on('value', function(users){
        if(users.hasChildren()){
            lst = `<li class="list-group-item" style="background-color: #f8f8f8;">
            <input type="text" placeholder="search or new chat" class="form-control form-rounded">
        </li>`;
        }
        users.forEach(function(data){
            var user = data.val();
            if(user.email !== firebase.auth().currentUser.email){
                lst += `<li class="list-group-item list-group-item-action" data-dismiss = "modal" onclick="startChat('${data.key}','${user.name}','${user.photoURL}')">
             <div class="row">
                 <div class="col-md-2">
                     <img src="${user.photoURL}" alt="image" class="friend-pic rounded-circle">
                 </div>
                 <div class="col-md-10" style="cursor: pointer;">
                     <div class="name">${user.name}</div>
                     
                 </div>
             </div>
         </li>`;
            }
             
        });
        document.getElementById('lstFriend').innerHTML = lst;
    });                                                 
}


////---------------including firebase------------////
function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    //var provider2 = new firebase.auth.OAuthProvider('yahoo.com');
    //firebase.auth().signInWithPopup(provider2);
}

function signOut(){
    firebase.auth().signOut();
}

function authStateListner(){
    firebase.auth().onAuthStateChanged(onStatChanged);
}
    
function onStatChanged(user) {
        if(user){
            //alert(firebase.auth().currentUser.email + '\n'+ firebase.auth().currentUser.displayName);
    // -------------Storing user details to firebase----------
            var userProfile = {email:" ", name:" ", photoURL:" "};
    
            userProfile.email = firebase.auth().currentUser.email;
            userProfile.name = firebase.auth().currentUser.displayName;
            userProfile.photoURL = firebase.auth().currentUser.photoURL;
            //console.log(firebase.auth().currentUser.displayName);
            var db = firebase.database().ref('users');
            var flag = false;
            db.on('value', function(users){
                users.forEach(function(data){
                    var user = data.val();
                    if(user.email === userProfile.email){
                        currentUserKey = data.key;
                        flag = true;
                    }
                });
                if(flag === false){
                    firebase.database().ref('users/').push().set(userProfile, callback)
                }
                else{
                    document.getElementById('imgProfile').src = firebase.auth().currentUser.photoURL;
        document.getElementById('imgProfile').title = firebase.auth().currentUser.displayName;
 
        document.getElementById('lnkSignIn').style = 'display:none';
        document.getElementById('lnkSignOut').style = 'display:block';
                }
                document.getElementById('lnkNewChat').classList.remove('disabled');

                loadChatList();
            });

            
        }
        else{
            document.getElementById('imgProfile').src = 'images/pp.png';
            document.getElementById('imgProfile').title = '';
    
            document.getElementById('lnkSignIn').style = 'display:block';
            document.getElementById('lnkSignOut').style = 'display:none';

            document.getElementById('lnkNewChat').classList.add('disabled');
        } 
    
}

function callback(error){
    if (error){
        alert(error);
    }
    else{
        document.getElementById('imgProfile').src = firebase.auth().currentUser.photoURL;
        document.getElementById('imgProfile').title = firebase.auth().currentUser.displayName;
 
        document.getElementById('lnkSignIn').style = 'display:none';
        document.getElementById('lnkSignOut').style = 'display:block';
    }
}

//---- call auth state changed function ------
authStateListner();












