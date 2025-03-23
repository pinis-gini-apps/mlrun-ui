import React from "react";

const App = () => {
    const channel = new BroadcastChannel("app_sync_channel");
    const data = {
        message: "Hello from App1!",
        timestamp: new Date().toISOString(),
    };
    localStorage.setItem("app1Data", JSON.stringify(data));

    const storeAndSendData = () => {
        const storedData = localStorage.getItem("app1Data");
    };

    return (
        <div style={{ width: "600px", height: "600px", backgroundColor: "salmon", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <h2 style={{ textAlign: "center" }}>This is App1</h2>
            <p>Welcome to the App1 micro frontend!</p>
            <button onClick={storeAndSendData} style={{ marginTop: 20, padding: "10px 20px" }}>
                Store and Send Data to App2
            </button>
        </div>
    );
};

export default App;
