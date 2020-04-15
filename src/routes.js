import Login from './components/Login.vue'
import Sign from './components/Sign.vue'
import Addbook from './components/Addbook.vue'
import Car from './components/Car.vue'
import Main from './components/Left.vue'
import Main_s from './components/Left_s.vue'
import Fenlei from './components/Fenlei.vue'
import Addfenlei from './components/Addfenlei.vue'
import Book from './components/Book.vue'
import Order from './components/Order.vue'
export default[
    {path:"/login",component:Login},
    {path:"/sign",component:Sign},
    {path:"/addbook",component:Addbook},
    {path:"/car/:id",component:Car},
    {path:"/main/:id",component:Main},
    {path:"/main_s",component:Main_s},
    {path:"/",component:Main},
    {path:"/fenlei",component:Fenlei},
    {path:"/addfenlei",component:Addfenlei},
    {path:"/book/:id",component:Book},
    {path:"/order",component:Order}
]