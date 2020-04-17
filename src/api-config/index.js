// --- API CONFIG ---
export const API_URL = process.env.REACT_APP_SEMATO_API_URL;
export const API_PATH = process.env.REACT_APP_SEMATO_API_PATH;
export const getAPIAddress = () => `${API_URL}/${API_PATH}`;