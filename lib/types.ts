// Define the type for a recording
export interface Recording {
    title: string;
    subject: string;
    color: string;
    img: string;
}

export interface VideoConferenceProps {
    recording: Recording | null;
}