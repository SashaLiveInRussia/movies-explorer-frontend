export default function logoutStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    localStorage.removeItem('search');
    localStorage.removeItem('isShort');
};