import AccessControll from "accesscontrol"

const allRights = {
    'create:any' : ["*"],
    'read:any' : ["*"],
    'update:any' : ["*"],
    'delete:any' : ["*"],
}

const grant = {
    admin : {
        shows : allRights
    },
    user :{
        shows :{
            'read:any' : ["*"]
        }
    }
}

const roles = new AccessControll(grant)

export default roles