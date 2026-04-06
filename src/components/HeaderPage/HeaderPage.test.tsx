import {describe, expect, test,} from 'vitest'
import {render, screen} from '@testing-library/react';
import { HeaderPage } from './HeaderPage';


describe('HeaderPage',()=>{

    test('should render app title', ()=>{
        
       render(<HeaderPage/>);

       expect(screen.getByText('YouTuDown')).toBeDefined();
    })

    test('should not be a change in the component', ()=>{

        const  {container} = render(<HeaderPage/>);

        expect(container).toMatchSnapshot();

    })
})