import { createContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const AppContext = createContext({
  data: {},
  currentBoardName: "",
});

const App = () => {
  const [data, setData] = useState(null);
  const [currentBoardName, setCurrentBoardName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const storedData = localStorage.getItem("appData");

      if (storedData) {
        setData(JSON.parse(storedData));
      } else {
        try {
          const response = await fetch("/data.json");
          const fetchedData = await response.json();

          localStorage.setItem("data", JSON.stringify(fetchedData));
          setData(fetchedData);
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setCurrentBoardName(data.boards[0].name);
    }
  }, [data]);

  return (
    <AppContext.Provider value={{ data, currentBoardName }}>
      <span>Hello World!</span>
    </AppContext.Provider>
  );
};

export default App;
