User can search a book details using either keywords or isbn number.
It will show Title,Author,Description,ISBN and image of the book.(We can get whatever information from api if we needs like "no of pages","available pdf","for sale","Ratings" and so on.)
User can select which type of mode he wants to select,By default it will be on "search by keywords".
if user select "search by keywords" mode and still he enters "ISBN", it will fetch books exactly matched with that isbn number and also related books which has similar isbn.
if user select isbn mode and enters correct isbn number, it will get only the book which matches with that.