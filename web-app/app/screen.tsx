import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { MainNav } from "@/components/main-nav";
import { Overview } from "@/components/overview";
import { UserNav } from "@/components/user-nav";
import { Sidebar } from "@/components/sidebar";
import { WaterLevel } from "@/components/waterLevel";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};
const currentTime = new Date();

// Get time components
const hours = currentTime.getHours().toString().padStart(2, "0");
const minutes = currentTime.getMinutes().toString().padStart(2, "0");
const seconds = currentTime.getSeconds().toString().padStart(2, "0");

// Format as a short string (HH:MM:SS)
const shortTimeString = `${hours}:${minutes}:${seconds}`;

export default function DashboardPage({ data,listOfData }:any) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-60 hidden md:block">
            <Sidebar />
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <div className="flex items-center space-x-2">
                <CalendarDateRangePicker />
                <Button>Download Report</Button>
              </div>
            </div>
            <div className="flex space-x-4 mt-4 flex-col xl:flex-row ">
              <Card className="col-span-4 w-full xl:w-1/2">
                <CardHeader>
                  <CardTitle>
                    <div className="flex flex-col space-y-2">
                      <div className="">Past Records</div>
                      <div className=" text-[14px] text-gray-600 font-light ">
                        Last 5 Days
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-2 pb-10">
                  <Overview data={listOfData} />
                </CardContent>
              </Card>
              <Card className="col-span-4 w-full xl:w-1/2 mt-10">
                <CardHeader>
                  <CardTitle>
                    <div className=" flex flex-row">
                      <div className="">Water Level</div>
                      <div className="ml-auto text-[16px] italic text-gray-700 font-light">
                        Last Updated:{" "}
                        {new Date('2024-06-12T15:59:08.173Z').toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <WaterLevel randomPoint={data.waterLevel} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
