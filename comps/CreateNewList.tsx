import React, {useState} from 'react'
import { StyledButton } from '../styled/global-styles'
import { StyledCancelIcon } from '../styled/icons'
import { StyledInputText, StyledTextArea } from '../styled/register'
import Portal from './hoc/Portal'
import Modal from './Modal'

const CreateNewList = () => {
    const [state, setstate] = useState(false)
    return (
        <>
        {
            state && <Portal>
                <Modal>
                    <div style={{width: '90%', display: 'flex', fontFamily: 'Overlock', flexDirection: 'column'}}>
                    <h1>Create a new list</h1>
                    <p>Create a list around a genre, category or topic for inspiration</p>
                    <div>
                        <div><label>list name</label></div>
                        <StyledInputText placeholder="For example, “African themed”"/>
                    </div>

                    <div>
                        <div><label>Description (Optional)</label></div>
                        <StyledTextArea placeholder="For example, “African history and Record breakers”"></StyledTextArea>
                    </div>
                    </div>
<div style={{width: '90%', height: '50px', margin: '30px 0 30px 0', justifyContent: 'flex-end', display: 'flex', gap: '20px'}}>
<StyledButton border="#000" width="150px" background="transparent">cancel</StyledButton>
<StyledButton background="#1EAAB2" width="150px">create list</StyledButton>
</div>
                </Modal>
            </Portal>
        }
        <StyledButton onClick={()=> setstate(!state)} width="150px" background="#1EAAB2"> create list</StyledButton>
</>
    )
}

export default CreateNewList
