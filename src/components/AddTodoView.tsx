import { ChangeEvent, useState } from "react";
import ErrorText from "../styled-components/ErrorTextStyle";
import CustomButtonStyle from "../styled-components/CustomButtonStyle";
import { ListRowStyle, ListColumnStyle } from "../styled-components/LIstStyle";
import LabelBoldStyle from "../styled-components/LabelBoldStyle";
import InputTextStyle from "../styled-components/InputTextStyle";

interface AddTodoViewProps {
    onAddItem: (item: any) => void;
};

const AddTodoView = ({ onAddItem }: AddTodoViewProps) => {
    const [title, setTitle] = useState<string>('');
    const [taskDetail, setTaskDetail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

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
                    <InputTextStyle type="text" name="title" id="title" value={title} placeholder="Enter title here" onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
                </ListColumnStyle>
                <ListColumnStyle>
                    <LabelBoldStyle htmlFor="details">Details:</LabelBoldStyle>
                    <InputTextStyle type="text" name="details" id="details" value={taskDetail} placeholder="Enter task details here" onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskDetail(e.target.value)} />
                </ListColumnStyle>
                <ListColumnStyle alignself="end">
                    <CustomButtonStyle primary={+true} type="button" onClick={onAdd}> Add Item </CustomButtonStyle>
                </ListColumnStyle>
            </ListRowStyle>
            {error && <ErrorText>{error}</ErrorText>}
        </form>
    </div>;
};
export default AddTodoView;

