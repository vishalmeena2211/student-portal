import { StaticImageData } from "next/image";

// Define the type for a recording
export interface Recording {
    title: string;
    subject: string;
    color: string;
    img: StaticImageData;
}

export interface VideoConferenceProps {
    recording: Recording | null;
}