import { Play, RotateCcw, Volume2, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function VideoConference({recording}) {
    return (
        <Card className="w-full max-w-5xl mx-auto overflow-hidden bg-[#6366F1] shadow-none border-none p-0 rounded-3xl">
            <div className=" text-white p-4 text-center text-lg font-semibold">
               {recording.title}
            </div>
            <div className="rounded-2xl">
                <div className="relative aspect-video">
                    <img
                        src="/zoom.png"
                        alt="Video conference participants"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                        <div className="mt-2 h-1 bg-gray-600 rounded-full">
                            <div className="h-full bg-purple-600 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                                    <Play className="h-6 w-6" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                                    <RotateCcw className="h-6 w-6" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                                    <RotateCcw className="h-6 w-6 transform rotate-180" />
                                </Button>
                            </div>
                            <div className="text-sm">35:28 / 1:20:21</div>
                            <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                                    <Volume2 className="h-6 w-6" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                                    <Maximize className="h-6 w-6" />
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Card>
    )
}