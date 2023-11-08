import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const url = "https://jsonplaceholder.typicode.com/users/1";
/** 
  // Örnek Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/

/** 
Yukarıdaki url verildiğinde bu uygulamanın verileri getirmesini ve tarayıcıda görüntülemesini sağlayın (Küçük İpucu: `React.useEffect ve fetch api' kullanın)
**/
function App() {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Aşağıdaki koda dokunmanıza gerek yok
  return (
    <div className="App">
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>{" "}
        {userData.name || "(Burada adı doldurmanız gerekiyor)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Burada website doldurmanız gerekiyor)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Burada email doldurmanız gerekiyor)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Burada telefon doldurmanız gerekiyor)"}
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
