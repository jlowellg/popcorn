import { Alert, AlertDescription } from "../ui/alert";
import { useContext, useEffect } from "react";
import DataContext from "../../context/DataContext";

export function AlertMessage() {
  const { alertMessage, setAlertMessage } = useContext(DataContext);

  useEffect(() => {
    const clearAlertMessage = () => {
      setTimeout(() => {
        setAlertMessage(null);
      }, 10000);
    };

    clearAlertMessage();
  }, [alertMessage]);

  return (
    <Alert className="w-full max-w-[1200px] mx-auto mt-3">
      <AlertDescription className="text-center">
        {alertMessage}
      </AlertDescription>
    </Alert>
  );
}
