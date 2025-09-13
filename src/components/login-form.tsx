import { cn } from "@/lib/utils";
import Login from "@/pages/auth/Login";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  // useEffect(() => {
  //   setErrorMessage("");
  //   if (password.length > 1 && email.length > 1) {
  //     setIsDisabled(false);
  //     setErrorMessage("");

  //   } else {
  //     setIsDisabled(true);
  //     setErrorMessage("email should be more than 1");
  //   }
  // }, [password.length > 1, email.length > 1]);

  // const handleLogin = async () => {
  //   setIsLoading(true);

  //   await signInWithEmailAndPassword(auth, email, password)
  //     .then((data) => {
  //       console.log(data);

  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       if (error.message.includes("auth/invalid-credential")) {
  //         console.log(error.message);
  //         toast.error("credential is invalid");
  //       }
  //       setIsLoading(false);
  //     });
  // };
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <Login />
    </form>
  );
}
