import { fetch, fetchAll } from "../../utils/db.js";

const POST = async ({ fullName, emailOrPhone, username, viloyat, password, gender }) => {
    try {
        return await fetch(`INSERT INTO users(full_name, email_or_phone, username, viloyat, password,  gender) VALUES($1,$2,$3,$4,$5,$6) returning *`, [fullName, emailOrPhone, username, viloyat, password, gender])
    } catch (error) {
        console.log(error.message);
    }
}

const PUT = async ({ userId, bal }) => {
    try {
        return await fetch(`
        update users
          set
             bal = $1
          where user_id = $2
        returning *`, [bal, userId])
    } catch (error) {
        console.log(error.message);
    }
}

const GET = async () => {
    try {
        return await fetchAll(`
        select 
          user_id, username, univer_name, viloyat, bal
          from users as u 
        left join univer as un on un.univer_id = u.yonalish order by bal desc`)
    } catch (error) {
        console.log(error.message);
    }
}


export default {
    POST,
    PUT,
    GET
}