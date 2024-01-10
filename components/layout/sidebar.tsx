import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "@/components/ui/progress";

export default function Sidebar() {
  return (
    <nav
      className={cn(`relative hidden h-screen border-r pt-16 md:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardNav items={navItems} />
          </div>
          <div className="mt-10">
            <Card>
              <CardContent className=" flex flex-col px-2 m-2 ">
                <div className="items-center space-y-4 p-4">
                  <p>Blozum Credits</p>
                  <Progress value={33} />
                </div>
                <div className="items-center space-y-4 p-4">
                  <p>Builder characters</p>
                  <Progress value={100} />
                </div>
                <div className="items-center space-y-4 p-4">
                  <p>Search Chat Requests</p>
                  <Progress value={66} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </nav>
  );
}
