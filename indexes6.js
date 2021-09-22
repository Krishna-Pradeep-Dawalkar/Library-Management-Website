console.log("es6 page");

class Book {
    constructor(name, author, type, price) {
        this.name = name;
        this.author = author;
        this.type = type;
        this.price = price;
    }
}

class Display {
    add(book) {
        console.log("adding to UI")
        let tablebody = document.getElementById("tablebody");
        let uistring = `<tr>
                         <td>${book.name}</td>
                         <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td>${book.price}</td>
      </tr>`;
        tablebody.innerHTML += uistring;
    }

    clear() {
        let libraryform = document.getElementById("libraryForm");
        libraryform.reset();

    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, message) {
        let msg = document.getElementById("message");
        if (type === "success") {
            msg.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
              <strong>Success!</strong> ${message}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;

            setTimeout(() => {
                msg.innerHTML = '';
            }, 3000);
        }
        else{
            msg.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                  <strong>Error!</strong> ${message}
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `;
    
                setTimeout(() => {
                    msg.innerHTML = '';
                }, 3000);
        }
    }
}

let libraryform = document.getElementById("libraryForm");
libraryform.addEventListener("submit", submitLibraryForm);

function submitLibraryForm(event) {
    console.log("You pressed submit button");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("Authorname").value;
    let price = document.getElementById("price").value;
    console.log("author is" + author);

    let type;

    let comics = document.getElementById("comics");
    let adventure = document.getElementById("adventure");
    let philosophy = document.getElementById(" philosophy");

    if (comics.checked) {
        type = comics.value;
    }
    else if (adventure.checked) {
        type = adventure.value;
    }
    else if (philosophy.checked) {
        type = comics.value;
    }


    let book = new Book(name, author, type, price);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', "Your book has been added successfully");
    }
    else {
        display.show('danger', "Sorry we cannot add this book");
    }

    event.preventDefault();

}