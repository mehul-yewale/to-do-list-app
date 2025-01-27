import { useState } from "react";
import ErrorText from "../styled-components/ErrorTextStyle";
import CustomButton from "../styled-components/CustomButtonStyle";
import { ListRowStyle, ListColumnStyle } from "../styled-components/LIstStyle";
import InputText from "../styled-components/CustomInputText";

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
                    <label for="title">Title:</label>
                    <InputText type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </ListColumnStyle>
                <ListColumnStyle>
                    <label for="details">Details:</label>
                    <InputText type="text" name="details" id="details" value={taskDetail} onChange={(e) => setTaskDetail(e.target.value)} />
                </ListColumnStyle>
                <ListColumnStyle alignSelf="end">
                    <CustomButton primary type="button" onClick={onAdd}> Add Item </CustomButton>
                </ListColumnStyle>
            </ListRowStyle>
            {error && <ErrorText>{error}</ErrorText>}
        </form>
    </div>;
};
export default AddTodoView;

