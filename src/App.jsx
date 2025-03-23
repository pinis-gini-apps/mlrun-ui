import React from "react";

const App = () => {
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
            <h2 style={{ textAlign: "center" }}>This is MRUN-UI</h2>
            <button onClick={storeAndSendData} style={{ marginTop: 20, padding: "10px 20px" }}>
                Store and Send Data to IGZ4
            </button>
        </div>
    );
};

export default App;
