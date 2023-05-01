const fs = require('fs');

function appendProduct(filePath, fileContent) {
    fs.appendFileSync(filePath, fileContent + '\r\n');
};

function findProductById(id, filePath) {
    let data = fs.readFileSync(filePath, 'utf8');

    data = data.split('\r\n');
    
    for (let i = 0; i < data.length; i++) {
        if (id == data[i].split(',')[0]) {
            return data[i];
        }
    }
};

function deleteProductById(filePath, id) {
    let data = fs.readFileSync(filePath, 'utf8');

    data = data.split('\r\n');

    for (let i = 0; i < data.length; i++) {
        if (id == data[i].split(',')[0]) {
            data.splice(i, 1);
        }
    }

    fs.writeFileSync(filePath, data.join('\r\n'));
};

function updateProductById(filePath, id, newContent) {
    let data = fs.readFileSync(filePath, 'utf8');

    data = data.split('\r\n');

    for (let i = 0; i < data.length; i++) {
        if (id == data[i].split(',')[0]) {
            data[i] = newContent;
        }
    }

    fs.writeFileSync(filePath, data.join('\r\n'));
}


// Add product
appendProduct('file.csv', '6, iphone, 3000, red');

// Find product by id
const element = findProductById(6, 'file.csv');
console.log (element)

// Delete product by id
deleteProductById('file.csv', 6);

// Update product by id
updateProductById('file.csv', 7, '2, Books, 7000, yellow');


