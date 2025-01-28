import { useState } from "react";
import ErrorText from "../styled-components/ErrorTextStyle";
import CustomButton from "../styled-components/CustomButtonStyle";
import { ListRowStyle, ListColumnStyle } from "../styled-components/LIstStyle";
import InputText from "../styled-components/CustomInputText";
import LabelBoldStyle from "../styled-components/LabelBoldStyle";

const AddTodoView = ({ onAddItem }) => {
    const [title, setTitle] = useState('');
    const [taskDetail, setTaskDetail] = useState('');
    const [error, setError] = useState(null);

    const onAdd = () => {
        // validation checks 
        if (!title || !taskDetail) {
            setError('Both fields are required!');
            return;
        }
        onAddItem({ title: title, details: taskDetail });
        setTitle(''); setTaskDetail('');  // clear existing value
    };

    // clear Validation if error exist 
    if (error) {
        if (title && taskDetail) {
            setError(null);
        }
    }

    return <div className="add-todo">
        <form noValidate>
            <ListRowStyle>
                <ListColumnStyle>
                    <LabelBoldStyle htmlFor="title">Title:</LabelBoldStyle>
                    <InputText type="text" name="title" id="title" value={title} placeholder="Enter title here" onChange={(e) => setTitle(e.target.value)} />
                </ListColumnStyle>
                <ListColumnStyle>
                    <LabelBoldStyle htmlFor="details">Details:</LabelBoldStyle>
                    <InputText type="text" name="details" id="details" value={taskDetail} placeholder="Enter task details here" onChange={(e) => setTaskDetail(e.target.value)} />
                </ListColumnStyle>
                <ListColumnStyle alignself="end">
                    <CustomButton primary={+true} type="button" onClick={onAdd}> Add Item </CustomButton>
                </ListColumnStyle>
            </ListRowStyle>
            {error && <ErrorText>{error}</ErrorText>}
        </form>
    </div>;
};
export default AddTodoView;

