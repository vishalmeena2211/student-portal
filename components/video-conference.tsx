import { FullscreenIcon, MuteIcon, Next15sIcon, PlayIcon2, Previous15sIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { VideoConferenceProps } from "@/lib/types";

/* eslint-disable @next/next/no-img-element */
export default function VideoConference({ recording }: VideoConferenceProps) {
    const videoLength = "1:20:21";
    const videoProgress = "35:28";

    return (
        <Card className="w-full max-w-5xl mx-auto overflow-hidden bg-[#6366F1] shadow-none border-none p-0 rounded-3xl">
            <div className="text-white p-4 text-center text-lg font-semibold">
                {recording ? recording.title : "No Recording Available"}
            </div>
            <div className="border border-[#E66DFF] rounded-3xl">
                <div className="relative aspect-video">
                    <img
                        src="/zoom.png"
                        alt="Video conference participants"
                        className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 text-white p-2">
                        <div className="relative w-full">
                            <div className="absolute bottom-full right-0 mb-4 text-base font-light leading-none text-white">
                                {videoProgress} / {videoLength}
                            </div>
                            <div className="absolute inset-0 h-0.5 rounded-[14px] bg-[#d9d9d9] opacity-40" />
                            <div className="absolute inset-0 h-0.5 w-[30%] rounded-[14px] bg-[#e66dff]" />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                                    {PlayIcon2}
                                </Button>
                                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                                    {Previous15sIcon}
                                </Button>
                                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                                    {Next15sIcon}
                                </Button>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                                    {MuteIcon}
                                </Button>
                                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                                    {FullscreenIcon}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
