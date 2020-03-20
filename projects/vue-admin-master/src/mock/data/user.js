import Mock from 'mockjs';
//定义登录人员
const LoginUsers = [
    {
        id: 1,
        username: 'admin',
        password: '123456',
        avatar: 'http://pic.caigoubao.cc/596971/R.jpg',
        name: '管理员'
    }
];

//定义 nav1 中 Table 、列表的数据
const Users = [];
for (let i = 0; i < 86; i++) {
    Users.push(Mock.mock({
        id: Mock.Random.guid(),
        //  顺序获取给定数据中的数据
        xinzuo: Mock.Random.now('yyyy-MM-dd'),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
        sex: Mock.Random.integer(0, 1)
    }));
}

//定义管理员列表 字段及对应值
const AdminList = [];
for (let i = 0; i < 86; i++) {
    AdminList.push(Mock.mock({
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        sex: Mock.Random.integer(0, 1),
        'age|18-60': 1,
        jobNumber: Mock.Random.jobnumber(),
        department:Mock.Random.department(),
        phone: /^1[385][1-9]\d{8}/
    }));
}

//定义教职工列表 字段及对应值
const StaffList = [];
for (let i = 0; i < 86; i++) {
    StaffList.push(Mock.mock({
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        sex: Mock.Random.integer(0, 1),
        jobNumber: Mock.Random.jobnumber(),
        building:Mock.Random.building(),
        'doorNumber|1000-6000': 1,
        academy:Mock.Random.academy(),
        houseType:Mock.Random.housetype(),
        phone: /^1[385][1-9]\d{8}/,
        status:Mock.Random.status()
    }));
}

//定义学生列表 字段及对应值
const StudentList = [];
for (let i = 0; i < 86; i++) {
    StudentList.push(Mock.mock({
        id: Mock.Random.guid(),
        idCard:Mock.Random.id(),
        name: Mock.Random.cname(),
        sex: Mock.Random.integer(0, 1),
        grade:Mock.Random.grade(),
        major:Mock.Random.major(),
        jobNumber: Mock.Random.jobnumber(),
        building:Mock.Random.building(),
        'doorNumber|1000-6000': 1,
        academy:Mock.Random.academy(),
        phone: /^1[385][1-9]\d{8}/,
        status:Mock.Random.status()
    }));
}

//定义用户审核列表 字段及对应值
const UsersList = [];
for (let i = 0; i < 106; i++) {
    UsersList.push(Mock.mock({
        id: Mock.Random.guid(),
        userType:Mock.Random.userType(),
        name: Mock.Random.cname(),
        sex: Mock.Random.integer(0, 1),
        'age|18-60': 1,
        UID: Mock.Random.uuid(),
        email:Mock.Random.youXiang(),
        phone: /^1[385][1-9]\d{8}/,
        status:Mock.Random.status()
    }));
}

//定义报修信息管理  报修列表 字段及对应值
const RepairList = [];
for (let i = 0; i < 106; i++) {
    RepairList.push(Mock.mock({
        id: Mock.Random.guid(),
        userType:Mock.Random.userType(),
        name: Mock.Random.cname(),
        linkman: Mock.Random.cname(),
        UID: Mock.Random.uuid(),
        repairTime: Mock.Random.now('yyyy-MM-dd'),
        sex: Mock.Random.integer(0, 1),
        repairType: Mock.Random.repairType(),
        repairStatus: Mock.Random.repairStatus(),
        building:Mock.Random.building(),
        phone: /^1[385][1-9]\d{8}/,
    }));
}

export {LoginUsers, Users,AdminList,StaffList,StudentList,UsersList,RepairList};
