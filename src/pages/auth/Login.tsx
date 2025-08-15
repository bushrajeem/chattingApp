import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, db } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Google from "./Google";
import Phone from "./Phone";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<{
    name: string,
    email: string,
    profilePicture: string,
    uid: string
  }>({
    name: " ",
    email: " ",
    profilePicture: "",
    uid: " "
  });
  const AuthProvider = new GoogleAuthProvider();
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

      try {
        const userData = await getDocs(collection(db, "userInfo"));

        if (userData.docs.length) {
          await userData.docs.forEach(async (doc) => {
            console.log(doc.data());
            
            if (doc.data()?.uid != userInfo.uid) {
              const info = await addDoc(collection(db, "userInfo"), userInfo);
              if (info) {
                toast.success("Welcome! Your account has been created 🎉");
                navigate("/dashboard");
              }
            } else {
              toast.success(`Welcome back, ${userInfo.name || "User"} 👋`);
              toast.success("Welcome! Your account has been created 🎉");
              navigate("/dashboard");
            }
          });
        } else {
          const info = await addDoc(collection(db, "userInfo"), userInfo);
          if (info) {
            toast.success("Welcome! Your account has been created 🎉");
            navigate("/dashboard");
          }
        }
      } catch (error) {
        console.log(error);
        toast.error("Login failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2">
      <Card className="max-w-sm max-w-auto h-screen col-span-1 flex justify-between content-center">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            onClick={handleLogin}
            type="button"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
          <Google />
          <Phone />
        </CardFooter>
      </Card>
      <img
        className="col-span-1 max-h-screen"
        src="https://img.freepik.com/premium-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid&w=740"
        alt=""
      />
    </div>
  );
}

export default Login;
