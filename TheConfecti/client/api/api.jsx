import axiosClient from './axiosClient'; // Import the base axios instance


// Conference Organizer

export const registerCO = async (organizerData) => {
  
  try {
    const response = await axiosClient.post('/coregister', organizerData);
 
    return response.data; // Return the response data from the backend
  } catch (error) {
    console.error('Error registering Conference Organizer:', error);
    throw error; // Re-throw the error for handling in the register module
  }
};



export const LoginCO = async ({email,password}) => {
  try {
      const res = await axiosClient.post('/cologin', {email,password});
      return res
    } catch (err) {
      console.error('Error registering Conference Organizer:', err);
    throw err; // Re-throw the error for handling in the register module
    }
}

export const createCFP = async (organizerData) => {
  
  try {
    const response = await axiosClient.post('/createcfp', organizerData);
 
    return response.data; // Return the response data from the backend
  } catch (error) {
    console.error('Error registering Conference Organizer:', error);
    throw error; // Re-throw the error for handling in the register module
  }
};


// Editorial Coordinator  

export const LoginEC = async ({email,password}) => {
  try {
      const res = await axiosClient.post('/eclogin', {email,password});
      return res
    } catch (err) {
      console.error('Error registering Conference Organizer:', err);
    throw err; // Re-throw the error for handling in the register module
    }
}

export const createReviewer = async ({username,email,field}) => {
  try {
      const res = await axiosClient.post('/createreviewer', {username,email, field});
      return res
    } catch (err) {
      console.error('Error registering Conference Organizer:', err);
    throw err; // Re-throw the error for handling in the register module
    }
}

// Researcher

export const registerRE = async (organizerData) => {
  
  try {
    const response = await axiosClient.post('/resregister', organizerData);
 
    return response.data; // Return the response data from the backend
  } catch (error) {
    console.error('Error registering Conference Organizer:', error);
    throw error; // Re-throw the error for handling in the register module
  }
};



export const LoginRE = async ({email,password}) => {
  try {
      const res = await axiosClient.post('/reslogin', {email,password});
      return res
    } catch (err) {
      console.error('Error registering Conference Organizer:', err);
    throw err; // Re-throw the error for handling in the register module
    }
}


// Function to get reviewers by CFPid
export const getReviewersByCFPid = async (CFPid) => {
  try {
    const response = await axiosClient.get(`/reviewers/${CFPid}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviewers:', error);
    throw error;
  }
};

export const getCFP = async (id) => {
  try {
     const response = await axiosClient.get(`/cfp/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviewers:', error);
    throw error;
  }
}

export const deleteReviewer = async (id) => {
  try {
    const res = await axiosClient.delete(`/reviewer/${id}`);
    return res;
  } catch (error) {
    console.error('Error deleting reviewer:', error);
    throw error;
  }
};

export const LoginRV = async ({email,password}) => {
  try {
      const res = await axiosClient.post('/rlogin', {email,password});
      return res
    } catch (err) {
      console.error('Error registering Conference Organizer:', err);
    throw err; // Re-throw the error for handling in the register module
    }
}

// export const joinCFP = async (code, userid) => {
//   try {
//     const response = await axiosClient.post('/joincfp', { code,userid });
//     return response.data;
//   } catch (error) {
//     console.error('Error joining CFP:', error);
//     throw error;
//   }
// };

export const joinCFP = async (code, user_id) => {
  try {
    const response = await axiosClient.post('/joincfp', { code, user_id });
    return response.data;
  } catch (error) {
    console.error('Error joining CFP:', error);
    throw error;
  }
};


// Submission APIs

// 1. Create a new submission with ResearcherID, ReviewerID, and CFPid
export const createSubmission = async ({ CFPid, ResearcherID, ReviewerID }) => {
  try {
    const response = await axiosClient.post('/submission/create', { CFPid, ResearcherID, ReviewerID });
    return response.data;
  } catch (error) {
    console.error('Error creating submission:', error);
    throw error;
  }
};

// 2. Add description and document to a submission
export const addDescriptionAndDocument = async (id, { Description, Document }) => {
  try {
    const response = await axiosClient.put(`/submission/add-description/${id}`, { Description, Document });
    return response.data;
  } catch (error) {
    console.error('Error adding description and document:', error);
    throw error;
  }
};

// 3. Add a comment to a submission
export const addComment = async (id, { Comment }) => {
  try {
    const response = await axiosClient.put(`/submission/add-comment/${id}`, { Comment });
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};

// 4. Update the status of a submission
export const updateStatus = async (id, { Status }) => {
  try {
    const response = await axiosClient.put(`/submission/update-status/${id}`, { Status });
    return response.data;
  } catch (error) {
    console.error('Error updating status:', error);
    throw error;
  }
};

// 5. Get details of submissions by CFPid
export const getDetailsByCFPid = async (CFPid) => {
  try {
    const response = await axiosClient.get(`/submission/details/${CFPid}`);
    return response.data;
  } catch (error) {
    console.error('Error getting details by CFPid:', error);
    throw error;
  }
};