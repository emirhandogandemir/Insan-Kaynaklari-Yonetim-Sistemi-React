import React,{useState} from 'react'
import { Icon, Button, Modal } from "semantic-ui-react";
import { toast } from 'react-toastify';
import EducationService from "../../services/educationService"
export default function EducationDelete({id}) {
   
    const [open, setOpen] = useState(false)
//console.log(id)
    const deleteEducation = () => {
        let educationService = new EducationService();
        console.log(id);
        educationService.delete(id).then(toast.success("Eğitim bilgisi silindi!"));
    }
   
    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button floated="right" negative><Icon name="trash alternate" />Sil</Button>}
            >
                <Modal.Header>Eğitim Bilgisi Sil</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <p>
                            Bu eğitim bilgisini silmek istiyormusunuz?
                        </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                        Vazgeç
                    </Button>
                    <Button
                        content="Evet"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        onClick={() => deleteEducation()}
                        positive
                    />
                </Modal.Actions>
            </Modal>
        </div>
    )
}
