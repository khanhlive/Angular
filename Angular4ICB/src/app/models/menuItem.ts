export class MenuItem {
    title?: string;
    icon: string;
    name: string;
    hasChild: boolean;
    childs?: MenuItem[];
    routerLink: string;
}
export const Menus: MenuItem[] = [
    { name: 'Thống kê', title: 'Thống kê', childs: [], icon: 'fa fa-dashboard', hasChild: false, routerLink: 'dashboard' },
    { name: 'Quản lý tài khoản', title: 'Quản lý tài khoản', childs: [], icon: 'fa fa-users', hasChild: false, routerLink: 'accounts' },
    {
        name: 'Quản lý khách hàng', title: 'Quản lý khách hàng', childs: [{
            name: 'Thêm', title: 'Thêm', childs: [], icon: 'fa fa-users', hasChild: false, routerLink: ''
        }, {
            name: 'Thêm 1', title: 'Thêm 1', childs: [], icon: 'fa fa-users', hasChild: false, routerLink: ''
        },
        {
            name: 'Thêm 2', title: 'Thêm 2', childs: [], icon: 'fa fa-users', hasChild: false, routerLink: ''
        }], icon: 'fa fa-edit', hasChild: false, routerLink: 'customers'
    }
]

