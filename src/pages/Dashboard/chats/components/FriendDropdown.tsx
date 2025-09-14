import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function FriendDropdown({selectedfriend, setSelectedfriend}) {
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
    <Select value={selectedfriend} onValueChange={setSelectedfriend}>
      <SelectTrigger asChild>
        <Button variant="outline">
          {selectedfriend
            ? friends.find(f => f.uid === selectedfriend)?.name
            : "Select a Friend"}
        </Button>
      </SelectTrigger>

      <SelectContent className="w-56 bg-white shadow-2xl p-5 rounded-2xl">
        <SelectGroup>
          <SelectLabel>Friends:</SelectLabel>
          {friends.map((friend) => (
            <SelectItem className=" cursor-pointer" key={friend.uid} value={friend.uid}>
              {friend.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
