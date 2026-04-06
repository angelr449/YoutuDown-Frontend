import { describe, expect, test } from "vitest";
import { RenderVideo } from "./RenderVideo";
import { render, screen } from "@testing-library/react";


describe('RenderVideo', ()=>{
    test('should render component properly', ()=>{
       const videoId= '1234'
       render(<RenderVideo videoId={videoId}/>);

       const iframe = screen.getByTitle('YouTube video player');

    expect(iframe).toBeDefined();
    expect(iframe).toHaveAttribute(
        'src',
        `https://www.youtube.com/embed/${videoId}`
    )
    })
})