import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusSquare } from "lucide-react";
import { FriendDropdown } from "./FriendDropdown";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";

function ConvoDialog() {
  const [selectedfriend, setSelectedfriend] = useState("");
  const handleSubmit = (e) => {
    setSelectedfriend(e);
    console.log(e);
  };
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const querySnapshot = await getDocs(collection(db, "GoogleAuth"));
      const users = querySnapshot.docs.map((doc) => doc.data());
      setFriends(users);
    }
    fetchUsers();
  }, []);
  return (
    <Dialog>

        <DialogTrigger asChild>
          <Button variant="outline">
            <PlusSquare />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>Create Conversation</DialogHeader>

          <div className="grid gap-4">
            <Select value={selectedfriend} onValueChange={setSelectedfriend}>
              <SelectTrigger asChild>
                <Button variant="outline">
                  {selectedfriend
                    ? friends.find((f) => f.uid === selectedfriend)?.name
                    : "Select a Friend"}
                </Button>
              </SelectTrigger>

              <SelectContent className="w-56 bg-white shadow-2xl p-5 rounded-2xl">
                <SelectGroup>
                  <SelectLabel>Friends:</SelectLabel>
                  {friends.map((friend) => (
                    <SelectItem
                      className=" cursor-pointer"
                      key={friend.uid}
                      value={friend.uid}
                    >
                      {friend.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="outline" type="submit" onClick={handleSubmit}>
              Select
            </Button>
          </DialogFooter>
        </DialogContent>

    </Dialog>
  );
}

export default ConvoDialog;
