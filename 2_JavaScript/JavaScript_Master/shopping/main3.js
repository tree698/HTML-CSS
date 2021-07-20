'use strick';

const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

function onAdd() {
    const text = input.value;
    if(text === '') {
        alert('Please, enter a item');
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block:'start'})
    input.value = '';
    input.focus();
}

// UUID
let id = 0;  
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
            <li class="item_row">
                <div class="item">
                    <span class="item_name">${text}</span>
                    <button class="item_delete">
                        <i class="far fa-trash-alt" data-id = ${id}></i>
                    </button>
                </div>
                <div class="item_divider"></div>
            </li>
    `;
    id++;
    return itemRow;
};

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
});

items.addEventListener('click', event => {
    const iid = event.target.dataset.id;
    // if (event.target.nodeName === 'I') {
    //   const toBeDeleted = document.querySelector(`.item_row[data-id="${iid}"]`);
    //   toBeDeleted.remove();
    // }

    if(id) {
        const toBeDeleted = document.querySelector(`.item_row[data-id="${iid}"]`);
        toBeDeleted.remove();
    }
  });