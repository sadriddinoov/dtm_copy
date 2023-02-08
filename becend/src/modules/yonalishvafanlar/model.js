import { fetch, fetchAll } from "../../utils/db.js";

const FANLAR = async ({ first_fan, second_fan, userId }) => {
    try {
        return await fetch(`
    update users
    set
        first_fan = $1,
        second_fan = $2
    where user_Id = $3
    returning *
        `, [first_fan, second_fan, userId])
    } catch (error) {
        console.log(error.message);
    }
}


export default {
    FANLAR
}