import { EllipsisVerticalIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useDeleteGroupMutation } from "@/services/api";

type GroupCardProps = {
  data: {
    name: string;
    description: string;
    _id: string;
  };
};

export default function GroupCard({ data }: GroupCardProps) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [deleteGroup] = useDeleteGroupMutation();
  const handleDeleteClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = async () => {
    await deleteGroup({ _id: data._id });
    // console.log(data);
    setDialogOpen(false);
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="flex justify-between items-end">
          <div className="flex hover:underline cursor-pointer">
            {data.name.length > 100
              ? `${data.name.substring(0, 101)}...`
              : data.name}
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <EllipsisVerticalIcon size={15} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={handleDeleteClick}>Delete</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </CardTitle>
        <CardDescription className="">
          {data.description.length > 100
            ? `${data.description.substring(0, 81)}...`
            : data.description}
        </CardDescription>
      </CardHeader>

      {/* Alert Dialog */}
      <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              group and remove all associated data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDialogClose}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDialogClose}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
