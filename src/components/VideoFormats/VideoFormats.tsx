
import { useState } from 'react'
import type { VideoData, VideoFormat } from '../../data/infoVideo.data'
import './VideoFormats.css'
import { downloadVideo } from '../../../helpers/downloadVideo';
type InfoVideoProps = {
    videoURL: string,
    infoVideo: VideoData | null
}
export const VideoFormats = ({ videoURL, infoVideo }: InfoVideoProps) => {

    // console.log(`chequeo antes de hacer cartas, `, infoVideo?.formats)

    const [downloadId, setDownloadId] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    if (!infoVideo) return null;




    const handleCardOption = (format: VideoFormat) => {
        setDownloadId(format.id);

        

    }

    const handleDownloadOption = async () => {
        setIsLoading(true)
        const blob = await downloadVideo(videoURL, downloadId);

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "video.mp4";

        document.body.appendChild(a);
        a.click();

        a.remove();
        window.URL.revokeObjectURL(url);
        setIsLoading(false)




    }



    return (

        <div>
            <div className='video-grid'>

                {
                    infoVideo.formats.map((format) => (
                        <div className={`video-card ${downloadId === format.id ? "video-card-click" : ""}`} id={format.id}
                            key={format.id}
                            onClick={() => handleCardOption(format)}

                        >
                            <h3>
                                {`${format.quality} - ${format.filesize ? (format.filesize / (1024 * 1024)).toFixed(2) + " MB" : "Unknown size"
                                    } - ${format.ext}`}
                            </h3>
                            <h4>ID:{format.id}</h4>

                            <h4>Sonido: {format.hasAudio ? 'si' : 'no'}</h4>
                            <h4>Video: {format.hasVideo ? 'si' : 'no'}</h4>


                        </div>
                    ))
                }








            </div>
            <button id='btn-download'
                onClick={handleDownloadOption}>

                    {isLoading? `Descargando...`: `Descargar`}
                
            </button>

        </div>


    )
}
