import axios from "axios";

//actually host part need to move to .env file
const todoUrl = "http://localhost:7000/api/todoItems";

export const getItems = async () => {
    const response = await axios.get(todoUrl);
    return response.data
}

export const addItem = async (description) => {
    const response = await axios.post(todoUrl, { description })
    return response.data;
}

export const updateItem = async (item) => {
    const response = await axios.put(`${todoUrl}/${item.id}`, item)
    return response.data;
}