import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.jpg";
import friend4 from "../assets/friend4.jpg";
import friend5 from "../assets/friend5.jpg";
import friend6 from "../assets/friend6.jpg";
import friend7 from "../assets/friend7.jpg";
import friend8 from "../assets/friend8.jpg";
import friend9 from "../assets/friend9.jpg";
import Friend from "./Friend.jsx";

const fotoFriend= [
    {num:1, img:friend1},
    {num:2, img:friend2},
    {num:3, img:friend3},
    {num:4, img:friend4},
    {num:5, img:friend5},
    {num:6, img:friend6},
    {num:7, img:friend7, pos:7},
    {num:8, img:friend8},
    {num:9, img:friend9, pos:9}
];

const FotoFriend = () => {
    return (
      <div>
          {fotoFriend.map((friend,num) => (
              <Friend key={num} friend={friend.img} pos={num + 1}/>
          ))
          }
      </div>
    )
};

export default FotoFriend;