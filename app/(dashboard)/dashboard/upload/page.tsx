import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DocumentPreview } from "./components/document-preview";
import { UploadPlaceholder } from "./components/upload-placeholder";
import { listenNowAlbums, madeForYouAlbums } from "./data/albums";
import { playlists } from "./data/playlists";
import { AccountSwitcher } from "../inbox/components/account-switcher";

export default function UploadPage() {
  return (
    <div className="bg-background m-auto h-full px-4 py-6 lg:px-8 overflow-scroll flex flex-col">
      <Tabs defaultValue="upload" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger value="existing" className="relative">
              Existing
            </TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="live" disabled>
              Live
            </TabsTrigger>
          </TabsList>
          <AccountSwitcher />
        </div>
        <TabsContent
          value="existing"
          className="border-none p-0 outline-none overflow-scroll"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Existing Documents
              </h2>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {listenNowAlbums.map((album) => (
                  <DocumentPreview
                    key={album.name}
                    album={album}
                    className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent
          value="upload"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Upload new document
              </h2>
              <p className="text-sm text-muted-foreground">
                Blozum AI curated extraction and processing of PDFs!
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <UploadPlaceholder />
        </TabsContent>
      </Tabs>
    </div>
  );
}
