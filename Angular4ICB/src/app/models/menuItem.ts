export class MenuItem {
    id?:number;
    title?: string;
    icon: string;
    name: string;
    hasChild: boolean;
    childs?: MenuItem[];
    routerLink: string;
}
export const Menus: MenuItem[] = [
    {id:0, name: 'Thống kê', title: 'Thống kê', childs: [], icon: 'fa fa-dashboard', hasChild: false, routerLink: 'dashboard' },
    {id:1, name: 'Quản lý tài khoản', title: 'Quản lý tài khoản', childs: [], icon: 'fa fa-users', hasChild: false, routerLink: 'accounts' },
    {
        id:2,name: 'Quản lý khách hàng', title: 'Quản lý khách hàng', childs: [{
            name: 'Thêm', title: 'Thêm', childs: [], icon: 'fa fa-users', hasChild: false, routerLink: ''
        }, {
            name: 'Thêm 1', title: 'Thêm 1', childs: [], icon: 'fa fa-users', hasChild: false, routerLink: ''
        },
        {
            name: 'Thêm 2', title: 'Thêm 2', childs: [], icon: 'fa fa-users', hasChild: false, routerLink: ''
        }], icon: 'fa fa-edit', hasChild: false, routerLink: 'customers'
    },
    {id:3, name: 'Quản lý tin tức', title: 'Quản lý tin tức', childs: [], icon: 'fa fa-newspaper-o', hasChild: false, routerLink: 'news' }
]

