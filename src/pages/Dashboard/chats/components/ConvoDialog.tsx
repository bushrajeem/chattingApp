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
import { useState } from "react";

function ConvoDialog() {
  const [selectedfriend, setSelectedfriend] = useState("");
  const handleSubmit = (e) => {
    setSelectedfriend(e);
    console.log(selectedfriend);
    
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
            <PlusSquare />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>Create Conversation</DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" placeholder="Search Name" />
            </div>
            <FriendDropdown selectedfriend={selectedfriend} setSelectedfriend={setSelectedfriend}/>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="outline" type="submit" onClick={handleSubmit}>Select</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default ConvoDialog;
