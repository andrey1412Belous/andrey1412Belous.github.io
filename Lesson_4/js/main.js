//EX1

var bag = {
    addItem: function(prop, value) {
        prop && value ? this[prop] = value : console.log('Неправильные данные')
    },
    deleteItem: function(prop) {
        this[prop] ? delete this[prop] : console.log('Такого свойства не существует')
    }  
}

bag.addItem('keys', 10)
console.log(bag);

bag.deleteItem('keys')
console.log(bag)

//EX2

var LibraryBook = function ( title = "Без названия", year = "Без данных", author = "Бех данных" ) {
    var title = title
    var year = year
    var author = author
    var readerName = null
    var readerDate = null
    function giveTheBook ( client ) {
        readerName = client
        readerDate = new Date()
    }
    this.getBookInfo = function () {
        console.log(`${title}, ${author}, (${year}): ${readerDate ? 'нет в наличии' : 'есть в наличии'}`)
    }
    this.getTheBook = function ( client ) {
        if ( readerName ) {
            this.getBookInfo()
            return null
        } else {
            giveTheBook( client )
            return {title, year, author}
        }
    }
    this.returnBook = function () {
        readerDate = null
        readerName = null
    }
}

var books = []
books [0] = new LibraryBook ( "Война и мир", "1995", "Лев Толстой" )
books [1] = new LibraryBook ( "Отцы и дети", "1998", "Тургенев" )

books [0].getBookInfo()
books [0].getTheBook( "Вероника Иванова")
books [0].getBookInfo()
books [0].returnBook()
books [0].getBookInfo()

//EX3

var Sample = function () {
    Sample.prototype.addPropetry = function ( name = 'name', value = 'value' ) {
        this[name] = value
    }
    // this.addPropetry = function ( name = 'name', value = 'value' ) {
    //     this[name] = value
    // }
}

var obj = new Sample()
obj.addPropetry('name', 'Ivan')
console.log(obj)
Sample.addPropetry('sample', 'sample')