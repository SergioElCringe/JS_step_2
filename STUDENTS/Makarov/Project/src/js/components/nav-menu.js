// const MENU_DATA = [
//     {
//         text: 'Home',
//         link: 'index.html',
//         items: [
//             {
//                 text: 'Categories',
//                 link: 'categories.html',
//             },
//             {
//                 text: 'Product',
//                 link: 'product.html',
//             },
//             {
//                 text: 'Cart',
//                 link: 'cart.html',
//             },
//             {
//                 text: 'Check out',
//                 link: 'checkout.html',
//             },
//             {
//                 text: 'Contact',
//                 link: 'contact.html',
//             },
//         ]
//     },
//     {
//         text: 'Categories',
//         link: 'categories.html',
//         items: [
//             {
//                 text: 'Category',
//                 link: 'categories.html',
//             },
//             {
//                 text: 'Category',
//                 link: 'categories.html',
//             },
//             {
//                 text: 'Category',
//                 link: 'categories.html',
//             },
//             {
//                 text: 'Category',
//                 link: 'categories.html',
//             },
//             {
//                 text: 'Category',
//                 link: 'categories.html',
//             },
//         ]
//     },
//     {
//         text: 'Accessories',
//         link: '#',
//     },
//     {
//         text: 'Offers',
//         link: '#',
//     },
//     {
//         text: 'Contact',
//         link: 'contact.html'
//     }
// ];
export default class NavMenu {
    constructor(url, fetchFunc) {
        this.url = url;
        this.container = null;
        this._init(fetchFunc);
    }

    _init(fetchFunc) {
        this.container = document.querySelector('#main_nav');
        fetchFunc(this._render.bind(this), this.url);
    }

    _createItem(item) {
        const { text, link, items } = item;
        const hasSubMenu = !!item.items?.length || false;
        if (!hasSubMenu) {
            return `<li><a href="${link}">${text}</a></li>`;
        } else {
            return `
                <li class='hassubs'>
                    <a href="${link}">${text}</a>
                    ${this._createSubMenu(items)}
                </li>
            `;
        }
    }

    _createSubMenu(items) {
        const subMenuContent = items.reduce((accum, current) => {
            accum += `<li><a href="${current.link}">${current.text}</a></li>`
            return accum;
        }, '');
        return `<ul>${subMenuContent}</ul>`;
    }

    _render(menuData) {
        const result = menuData.reduce((accum, current) => {
            accum += this._createItem(current);
            return accum;
        }, '');

        this.container.innerHTML = `<ul>${result}</ul>`

    }
}