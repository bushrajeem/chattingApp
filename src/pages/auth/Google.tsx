import { Button } from "@/components/ui/button";
import { auth, db } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Google() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<{
    name: string;
    email: string;
    profilePicture: string;
    uid: string;
  }>({
    name: "",
    email: "",
    profilePicture: "",
    uid: "",
  });
  const AuthProvider = new GoogleAuthProvider();

  useEffect(() => {
    if (userInfo.uid) {
      (async () => {
        try {
          const queryUser = query(
            collection(db, "GoogleAuth"),
            where("uid", "==", userInfo.uid)
          );
          const querySnapshot = await getDocs(queryUser);
          if (querySnapshot.empty) {
            await addDoc(collection(db, "GoogleAuth"), userInfo);
            toast.success(
              `Welcome ${userInfo.name}! Your account has been created 🎉`
            );
            localStorage.setItem("GoogleAuth", JSON.stringify(userInfo));
          } else {
            toast.success(`Welcome back, ${userInfo.name} 👋`);
            localStorage.setItem("GoogleAuth", JSON.stringify(userInfo));
          }
          navigate("/dashboard");
        } catch (error) {
          console.error(error);
          toast.error("An error occurred while fetching user info.");
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [userInfo, navigate]);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const res = await signInWithPopup(auth, AuthProvider);
      setUserInfo({
        name: res.user.displayName || "",
        email: res.user.email || "",
        profilePicture: res.user.photoURL || "",
        uid: res.user.uid || "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please try again.");
    }
  };
  return (
    <div>
      <Button
        onClick={handleLogin}
        variant="outline"
        type="button"
        className="w-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            fill="currentColor"
          />
        </svg>
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ display: "inline-block", marginLeft: 8 }}
          >
            <Loader />
          </motion.div>
        ) : (
          ""
        )}
        <span className="sr-only">Login with Google</span>
      </Button>
    </div>
  );
}

export default Google;
