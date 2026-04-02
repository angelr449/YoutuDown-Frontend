import './RenderVideo.css'
type VideoIdProps = {
  videoId: string | null
}
export const RenderVideo = ({videoId}: VideoIdProps) => {

    console.log(videoId)
    return (
        <div id="box-video">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    )
}
