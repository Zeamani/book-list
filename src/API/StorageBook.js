class StorageBook {
    static getStorage () {
        const bookList = localStorage.getItem('bookList');
        return JSON.parse(bookList);
    }

    static updateStorage(newBookList) {
        localStorage.setItem('bookList', JSON.stringify(newBookList)); 
    }
}

export default StorageBook;