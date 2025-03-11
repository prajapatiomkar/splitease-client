import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateGroupMutation, useGetUserProfileQuery } from "@/services/api";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export function CreateGroupDialog() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createGroup] = useCreateGroupMutation();
  const { data: user } = useGetUserProfileQuery({});

  // Add a state to control the dialog visibility
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) return; // Prevent submission if name is empty
    console.log(user);
    await createGroup({
      name,
      description,
      createdBy: user.user._id,
      members: [],
    });
    setName(""); // Reset input fields
    setDescription("");
    setOpen(false); // Close the dialog after group creation
    toast.success("Group Created Successfully!");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          Create Group <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Group</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
