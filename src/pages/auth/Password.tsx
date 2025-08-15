import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

function Password({handleLogin, isLoading, isDisabled}: any) {
   

//   useEffect(() => {
//      createUserWithEmailAndPassword(AuthProvider, email, Password).then(
//       (userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//       }
//     );
//     const status = await validatePassword(getAuth(), passwordFromUser);
//     if (!status.isValid) {
//       const needsLowerCase = status.containsLowercaseLetter !== true;
//     }
//   },[])

  
  return (
    <div>
      <Button
        onClick={handleLogin}
        type="submit"
        className="w-full bg-black text-white hover:shadow-2xl"
        disabled={isDisabled}
      >
      {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ display: "inline-block", marginLeft: 8 }}
          >
            <Loader />
          </motion.div>
        ) : (
          "Login"
        )}
      </Button>
    </div>
  );
}

export default Password;
