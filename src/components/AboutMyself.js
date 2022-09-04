//In this
//1) create function with function<function name>
// 2) inside that use return keyword  or in this reurn keyword you can use html tags and what content you want to print
import Name from "./Name.js";
import Bio from "./Bio.js";
import Profile_Picture from "./Profile_Picture";
import Contact_me from "./Contact_me";
function AboutMyself() {
  return (
    //in react when put content to on wbpage is always place in return
    <div>
      <Name />
      <Profile_Picture />
      <Bio />
      <Contact_me />
    </div>
  );
}
export default AboutMyself;
