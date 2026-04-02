export interface VideoData{
    infoId:   string;
    type:     string;
    title:    string;
    duration: number;
    formats:  VideoFormat[];
}





export interface VideoFormat {
    id:         string;
    quality:    string;
    resolution: string;
    hasAudio:   boolean;
    hasVideo:   boolean;
    ext:        EXT;
    filesize:   number | null;
    fps:        number | null;
    width:      number | null;
    height:     number | null;
}

export type EXT = "m4a" | "mhtml" | "mp4" | "webm";
