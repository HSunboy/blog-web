
export default {
    setUser(user){
        window.sessionStorage.setItem("user",JSON.stringify(user));
    },
    getUser(){
        try{
            return JSON.parse(window.sessionStorage.getItem("user"));
        }catch(e){
            return null;
        } 
    },
    clearUser(){
        window.sessionStorage.clear("user");
    }
}