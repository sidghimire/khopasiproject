import React from "react";
import DashboardPage from "./screen";

// Define types for the data
interface Data {
  // Define the structure of `data` here
}

interface ListItem {
  avgTime: string;
  // Add other properties of list items here
}

interface HandlerResponse {
  data: Data;
  listOfData: ListItem[];
}

const page: React.FC = async () => {
  const { data, listOfData } = await handler();
  if (!listOfData) {
    console.error("No listOfData received");
    return null;
  }

  listOfData.forEach((item, index) => {
    listOfData[index].avgTime = new Date(item.avgTime).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  });

  return <DashboardPage data={data} listOfData={listOfData} />;
};

async function handler(): Promise<HandlerResponse> {
  try {
    const response = await fetch("https://agritop.vercel.app/getData");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Data = await response.json();
    
    const response2 = await fetch("https://agritop.vercel.app/getSectionedData");
    if (!response2.ok) {
      throw new Error("Network response was not ok");
    }
    const data2: ListItem[] = await response2.json();

    return { data, listOfData: data2 };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    // Return default empty values or handle the error as needed
    return { data: {} as Data, listOfData: [] };
  }
}

export default page;
