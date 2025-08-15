import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth, provider } from "@/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

function Phone() {
    const [PhoneLogin, setPhoneLogin] = useState(false);
    const [phone, setPhone] = useState("");

  const captchaAuth = async () => {
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  };

  return (
    <div>
     <Button onClick={()=> setPhoneLogin(true)} variant="outline" className="w-full mb-4">
        Login with Phone
      </Button> 
      {PhoneLogin && (
        <div className="flex flex-col gap-4 border border-gray-200 p-4 rounded-lg bg-gray-50">
            <Input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
            <Button onClick={captchaAuth}>Send OTP</Button>
        </div>
      )}
    </div>
  );
}

export default Phone;
