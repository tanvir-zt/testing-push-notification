import { useEffect } from "react";
import "./App.css";
import addNotification, { Notifications } from "react-push-notification";

function App() {
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  const handleNotify = () => {
    addNotification({
      title: "Great Lab Billing",
      message: "You have a new notification",
      theme: "darkblue",
      duration: 5000,
      icon: "https://cdn-icons-png.flaticon.com/512/1822/1822899.png",
      native: false,
      onClick: () => console.log("Notification Clicked!"),
    });
  };

  const handleNotify2 = () => {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          new Notification("Great Lab Billing", {
            body: "You have a new notification",
            icon: "https://cdn-icons-png.flaticon.com/512/1822/1822899.png",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "40vw",
      }}
    >
      <button onClick={handleNotify}>Click</button>
      <button onClick={handleNotify2}>Default</button>
      <Notifications />
    </div>
  );
}

export default App;
