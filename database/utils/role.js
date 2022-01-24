import AccessControll from "accesscontrol"

const ac = new AccessControll()

ac.grant('user')
    .createOwn('show')
    .deleteOwn('show')
    .updateOwn('show')
    .readAny('show')

ac.grant('admin')
    .extend('user')
    .deleteAny('show')
    .updateAny('show',['title'])