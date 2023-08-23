import axios from 'axios';

export const getComments = async (productId) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}comments/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch comments');
    }
  };

export const createComment = async (userId, username, productId, text, parentId = null) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}comments/add`, {
      body: text,
      parentId: parentId,
      userId: userId,
      username: username,
      productId: productId,
    });
    return response.data;
  } catch (error) {
    console.log("userID" +userId);
    console.log(parentId);
    throw new Error('Failed to create a comment');
  }
};

export const updateComment = async (id, text) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}comments/update/${id}`, {
      body: text
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update the comment');
  }
};

export const deleteComment = async (id) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}comments/delete/${id}`);
    // No need to return any data since the comment is deleted
  } catch (error) {
    throw new Error('Failed to delete the comment');
  }
};