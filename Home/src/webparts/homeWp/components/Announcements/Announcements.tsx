import * as React from 'react'
import { useState, useEffect } from 'react'
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import { RichText } from "@pnp/spfx-controls-react/lib/RichText";

const Announcements = ({context}) => {
    useEffect(() => {
        sp.setup({ spfxContext: context })
    }, [])
    const [userText, setUserText] = useState<string>('')
    
    const _handleTextChange = (text: string): string => {
        setUserText(text)
        return text
    }
    return(
        <div>
            <RichText isEditMode={true} value={ userText} onChange={(text) => _handleTextChange(text)}/>
        </div>
    )
}

export default Announcements