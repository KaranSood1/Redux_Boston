/**
 * Created by Karan on 6/21/2017.
 */

 export const selectUser= (user) => {
     console.log("Clicked on user:", user.first);
     return{
         type: "User Selected",
         payload : user
     }
};