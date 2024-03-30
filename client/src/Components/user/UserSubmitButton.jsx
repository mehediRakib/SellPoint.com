import React from 'react';
import userStore from "../../Store/userStore.js";


const UserSubmitButton = (props) => {
    const {isFormSubmit}=userStore();
   if(isFormSubmit===false){
       return <button className={props.className} onClick={props.onClick}>{props.text}</button>
   }
   else{
       return <button type="button" disabled={true} className={`flex items-center ${props.className}`}>
           <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24" fill="none">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 6.627 5.373 12 12 12v-4c-2.23 0-4.355-.635-6.158-1.736l-1.415 2.44zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-6-6.708V0C18.627 0 24 5.373 24 12h-4a7.962 7.962 0 01-4-5.291z"></path>
           </svg>
           Processing...
       </button>


   }

};

export default UserSubmitButton;