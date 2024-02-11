import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import axios from "axios";
import { useToast } from "../ui/use-toast";

export function Unsave(data) {
  const { reload, setReload, backendURL } = useContext(DataContext);

  const username = localStorage.getItem("username");
  const { toast } = useToast();

  const handleUnsave = async (itemId) => {
    setReload(!reload);
    try {
      const response = await axios.get(
        `${backendURL}/watchlist/unsave/${username}/${itemId}`
      );
      toast({
        title: `${data.title} removed.`,
      });
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">
          <BookmarkFilledIcon className="h-6 w-6" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to remove {data.title}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently remove{" "}
            {data.title} from your watchlist and delete its data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleUnsave(data.id)}>
            Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
